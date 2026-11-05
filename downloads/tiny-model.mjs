// Educational character model: trainable embeddings, one attention head, linear output.
// No external packages. Run: node tiny-model.mjs [your-text.txt] [steps]
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export function makeTokenizer(text) {
  const vocabulary = [...new Set(Array.from(text.normalize('NFC')))];
  const ids = new Map(vocabulary.map((character, id) => [character, id]));
  return {
    vocabulary,
    encode(text) {
      return Array.from(text.normalize('NFC'), character => {
        if (!ids.has(character)) throw new Error('Unknown character: ' + character);
        return ids.get(character);
      });
    },
    decode(tokens) {
      return tokens.map(id => {
        if (!Number.isInteger(id) || id < 0 || id >= vocabulary.length) {
          throw new Error('Unknown token ID');
        }
        return vocabulary[id];
      }).join('');
    },
  };
}

export function softmax(scores) {
  const largest = Math.max(...scores);
  const weights = scores.map(score => Math.exp(score - largest));
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  return weights.map(weight => weight / total);
}

export function sample(probabilities, random = Math.random) {
  const draw = random();
  let total = 0;
  for (let i = 0; i < probabilities.length; i++) {
    total += probabilities[i];
    if (draw < total) return i;
  }
  return probabilities.length - 1; // Floating-point rounding at the end.
}

export function seededRandom(seed = 42) {
  return () => {
    seed = (Math.imul(1664525, seed) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

const zeros = n => Array(n).fill(0);
const matrix = (rows, cols, value) => Array.from({ length: rows }, () =>
  Array.from({ length: cols }, value));
const dot = (a, b) => a.reduce((sum, x, i) => sum + x * b[i], 0);

export function createModel(size, width = 16, context = 12, seed = 42) {
  const random = seededRandom(seed);
  const init = () => (random() - 0.5) * 0.4;
  return {
    size, width, context,
    E: matrix(size, width, init),    // One trainable vector per character.
    P: matrix(context, width, init), // One trainable vector per position.
    W: matrix(size, width, init),    // Turn the context vector into next-token scores.
    b: zeros(size),
  };
}

export function forward(model, tokens) {
  if (!tokens.length) throw new Error('Supply at least one context token');
  const ids = tokens.slice(-model.context);
  const x = ids.map((id, position) => model.E[id].map((v, j) => v + model.P[position][j]));
  const query = x[x.length - 1];
  const scale = Math.sqrt(model.width);
  // Only the existing prefix is supplied: the next character cannot leak in.
  const attention = softmax(x.map(key => dot(query, key) / scale));
  const h = query.map((v, j) => v + x.reduce((sum, row, i) => sum + attention[i] * row[j], 0));
  const logits = model.W.map((row, i) => dot(row, h) + model.b[i]);
  const probabilities = softmax(logits);
  return { ids, x, query, attention, h, logits, probabilities };
}

export function lossAndGradient(model, tokens, target) {
  const f = forward(model, tokens);
  const { width: d, size: v, context: c } = model;
  const gradient = { E: matrix(v, d, () => 0), P: matrix(c, d, () => 0),
    W: matrix(v, d, () => 0), b: zeros(v) };
  // Cross-entropy: a confident wrong prediction costs more.
  const largest = Math.max(...f.logits);
  const loss = largest + Math.log(f.logits.reduce((s, z) => s + Math.exp(z - largest), 0)) - f.logits[target];
  const dz = f.probabilities.slice();
  dz[target] -= 1;
  const dh = zeros(d);
  for (let i = 0; i < v; i++) {
    gradient.b[i] = dz[i];
    for (let j = 0; j < d; j++) {
      gradient.W[i][j] = dz[i] * f.h[j];
      dh[j] += model.W[i][j] * dz[i];
    }
  }
  const da = f.x.map(row => dot(dh, row));
  const average = dot(f.attention, da);
  const ds = da.map((value, i) => f.attention[i] * (value - average));
  const dx = f.x.map(() => zeros(d));
  const last = dx.length - 1;
  for (let j = 0; j < d; j++) dx[last][j] += dh[j]; // Residual path.
  for (let i = 0; i < dx.length; i++) {
    for (let j = 0; j < d; j++) {
      dx[i][j] += f.attention[i] * dh[j] + ds[i] * f.query[j] / Math.sqrt(d);
      dx[last][j] += ds[i] * f.x[i][j] / Math.sqrt(d);
    }
  }
  for (let i = 0; i < dx.length; i++) {
    for (let j = 0; j < d; j++) {
      gradient.E[f.ids[i]][j] += dx[i][j];
      gradient.P[i][j] += dx[i][j];
    }
  }
  return { loss, gradient };
}

export function trainStep(model, tokens, target, rate = 0.03) {
  const { loss, gradient } = lossAndGradient(model, tokens, target);
  for (const name of ['E', 'P', 'W']) {
    for (let i = 0; i < model[name].length; i++) {
      for (let j = 0; j < model.width; j++) {
        model[name][i][j] -= rate * Math.max(-1, Math.min(1, gradient[name][i][j]));
      }
    }
  }
  for (let i = 0; i < model.size; i++) model.b[i] -= rate * gradient.b[i];
  return loss;
}

export function examples(lines, tokenizer, context) {
  return lines.flatMap(line => {
    const ids = tokenizer.encode('\n' + line + '\n');
    return ids.slice(1).map((target, i) => ({ tokens: ids.slice(Math.max(0, i + 1 - context), i + 1), target }));
  });
}

export function meanLoss(model, data) {
  return data.reduce((sum, { tokens, target }) => {
    const { logits } = forward(model, tokens);
    const max = Math.max(...logits);
    return sum + max + Math.log(logits.reduce((s, z) => s + Math.exp(z - max), 0)) - logits[target];
  }, 0) / data.length;
}

export function generate(model, tokenizer, prompt = '\n', count = 160, temperature = 0.8, random = Math.random) {
  if (!Number.isFinite(temperature) || temperature <= 0) throw new Error('Temperature must be positive');
  const ids = tokenizer.encode(prompt);
  if (!ids.length) throw new Error('Supply a starting character');
  const newline = tokenizer.encode('\n')[0];
  for (let step = 0; step < count; step++) {
    // Training examples begin at a new line; generation uses the same boundary.
    const start = Math.max(0, ids.lastIndexOf(newline));
    const { logits } = forward(model, ids.slice(start));
    ids.push(sample(softmax(logits.map(z => z / temperature)), random));
  }
  return tokenizer.decode(ids);
}

// Original course corpus: simple patterns, no scraped text or private data.
export const corpus = ['ana', 'beto', 'lia', 'rui'].flatMap(name =>
  ['pede', 'leva'].flatMap(verb => ['cafe', 'cha', 'pao', 'bolo'].map(food => name + ' ' + verb + ' ' + food + '.'))).join('\n');

export function runTraining(text = corpus, steps = 20000, log = console.log) {
  const lines = text.normalize('NFC').split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  if (lines.length < 10) throw new Error('Use at least 10 non-empty lines');
  if (!Number.isInteger(steps) || steps < 1 || steps > 100000) throw new Error('Steps: 1 to 100000');
  const trainLines = lines.filter((_, i) => i % 5 !== 0);
  const testLines = lines.filter((_, i) => i % 5 === 0);
  const tokenizer = makeTokenizer('\n' + trainLines.join('\n'));
  if (tokenizer.vocabulary.length > 128) throw new Error('Use at most 128 distinct characters for this small demo');
  const model = createModel(tokenizer.vocabulary.length);
  const training = examples(trainLines, tokenizer, model.context);
  const validation = examples(testLines, tokenizer, model.context);
  const random = seededRandom(17);
  log('Before / Antes: ' + generate(model, tokenizer, '\n', 120, 0.8, seededRandom(7)));
  const report = step => log(JSON.stringify({ step, train: meanLoss(model, training), validation: meanLoss(model, validation) }));
  report(0);
  for (let step = 1; step <= steps; step++) {
    const example = training[Math.floor(random() * training.length)];
    trainStep(model, example.tokens, example.target);
    if (step % 5000 === 0 || step === steps) report(step);
  }
  log('After / Depois: ' + generate(model, tokenizer, '\n', 120, 0.8, seededRandom(7)));
  return { model, tokenizer, training, validation };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const text = process.argv[2] ? readFileSync(process.argv[2], 'utf8') : corpus;
    if (text.length > 50000) throw new Error('Keep the training text under 50000 characters');
    console.time('Training / Treino');
    runTraining(text, process.argv[3] ? Number(process.argv[3]) : 20000);
    console.timeEnd('Training / Treino');
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
