import{t as e}from"./react.CvnImTBr.js";import{t}from"./jsx-runtime.Cr1s1OSH.js";import{i as n,r}from"./storage.CY_Y1C3D.js";import{n as i}from"./ui.BjHdfgHz.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./dist.Buht3Jsm.js";var d=e(),f=t(),p={js:o,html:s,css:l},m={js:`JavaScript`,html:`HTML`,css:`CSS`},h=3e3,g=`
var output = [], shown = 0, MAX_SHOWN = 200, MAX_KEPT = 2000, userUrl = '';
function fmt(v) {
  if (typeof v === 'string') return v;
  if (v === undefined || typeof v === 'function') return String(v);
  try { return JSON.stringify(v); } catch (e) { return String(v); }
}
// Console output goes to the page, capped so a loop that logs forever can't flood it.
['log', 'info', 'warn', 'error'].forEach(function (level) {
  console[level] = function () {
    var text = Array.prototype.map.call(arguments, fmt).join(' ');
    if (output.length < MAX_KEPT) output.push(text);
    if (shown < MAX_SHOWN) postMessage({ type: 'log', level: level, text: text });
    else if (shown === MAX_SHOWN) postMessage({ type: 'log', level: 'info', more: true });
    shown++;
  };
});
// Separate classic scripts share the global scope, so the tests can see the learner's let/const.
function run(code, isUser) {
  var url = URL.createObjectURL(new Blob([code], { type: 'text/javascript' }));
  if (isUser) userUrl = url;
  try { importScripts(url); } finally { if (!isUser) URL.revokeObjectURL(url); }
}
function lineOf(err) {
  var stack = String((err && err.stack) || '');
  var i = userUrl ? stack.indexOf(userUrl + ':') : -1;
  if (i < 0) return 0;
  return parseInt(stack.slice(i + userUrl.length + 1), 10) || 0;
}
// Syntax errors come wrapped as "Failed to execute 'importScripts' on ...: <message>".
function message(err) { return String((err && err.message) || err).replace(/^Failed to execute 'importScripts'[^:]*: /, ''); }
onmessage = function (e) {
  var d = e.data;
  try {
    if (d.setup) run(d.setup, false);
    run(d.code, true);
  } catch (err) {
    postMessage({ type: 'log', level: 'error', text: message(err), line: lineOf(err) });
    postMessage({ type: 'done', crashed: true });
    return;
  }
  var results = null;
  if (d.tests) {
    results = [];
    self.source = d.code;
    // Checks wait in a queue so an async check finishes before the next one starts.
    var queue = Promise.resolve();
    self.check = function (name, fn) {
      queue = queue.then(function () { return fn(); }).then(
        function (problem) { results.push({ name: name, ok: !problem, message: problem ? String(problem) : '' }); },
        function (err) { results.push({ name: name, ok: false, message: message(err) }); }
      );
    };
    try { run(d.tests, false); } catch (err) { results.push({ name: '?', ok: false, message: message(err) }); }
    queue.then(function () { postMessage({ type: 'done', results: results }); });
    return;
  }
  postMessage({ type: 'done', results: results });
};
`,_=``;function v(){return _||=URL.createObjectURL(new Blob([g],{type:`text/javascript`})),new Worker(_)}function y(e){return JSON.stringify(e).replace(/</g,`\\u003c`).replace(/\u2028/g,`\\u2028`).replace(/\u2029/g,`\\u2029`)}function b(e,t,n,r){return`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${`<script>(function () {
  var tests = ${y(r)};
  document.addEventListener('DOMContentLoaded', function () {
    var results = null;
    if (tests) {
      results = [];
      window.source = ${y(n)};
      // Same queue as in the worker: async checks finish before the next one starts.
      var queue = Promise.resolve();
      var fail = function (err) { return String((err && err.message) || err); };
      window.check = function (name, fn) {
        queue = queue.then(function () { return fn(); }).then(
          function (problem) { results.push({ name: name, ok: !problem, message: problem ? String(problem) : '' }); },
          function (err) { results.push({ name: name, ok: false, message: fail(err) }); }
        );
      };
      try { new Function(tests)(); } catch (err) { results.push({ name: '?', ok: false, message: fail(err) }); }
      queue.then(function () { parent.postMessage({ exercisePage: true, results: results }, '*'); });
      return;
    }
    parent.postMessage({ exercisePage: true, results: null }, '*');
  });
})();<\/script>`}<style>${t}</style></head><body>${e}</body></html>`}function x({id:e,title:t,starter:o,tests:s,solution:l,setup:g,mode:_=`js`,css:y=``,page:x=``,hint:S,height:C=220,lang:w=`pt`,children:T}){let E=_!==`js`,[D,O]=(0,d.useState)(`idle`),[k,A]=(0,d.useState)(null),[j,M]=(0,d.useState)([]),[N,P]=(0,d.useState)(0),[F,I]=(0,d.useState)(!1),[L,R]=(0,d.useState)(!1),z=(0,d.useRef)(null),B=(0,d.useRef)(null),V=(0,d.useRef)(null),H=(0,d.useRef)(null),U=(0,d.useRef)(null),W=(0,d.useRef)(void 0);(0,d.useEffect)(()=>{if(R(r(`exercise:${e}`,!1)),z.current)return B.current=new c({doc:r(`exercise-code:${e}`,o),parent:z.current,extensions:[a,p[_](),u,c.lineWrapping,c.theme({"&":{height:`${C}px`},".cm-scroller":{overflow:`auto`}})]}),E&&G(B.current.state.doc.toString(),``),()=>{B.current?.destroy(),K()}},[e]);function G(e,t){let n=_===`html`?e:x,r=_===`css`?e:y;H.current?.setAttribute(`srcdoc`,b(n,r,e,t))}function K(){clearTimeout(W.current),V.current?.terminate(),V.current=null,U.current&&window.removeEventListener(`message`,U.current),U.current=null}function q(t,r){if(K(),!t){O(`idle`);return}let i=r??[],a=i.length>0&&i.every(e=>e.ok);A(i),O(a?`passed`:`failed`),a?(n(`exercise:${e}`,!0),R(!0)):P(e=>e+1)}function J(e,t){let n=e=>{e.source===H.current?.contentWindow&&e.data?.exercisePage&&q(t,e.data.results)};U.current=n,window.addEventListener(`message`,n),G(e,t?s:``)}function Y(t){K();let r=B.current?.state.doc.toString()??``;if(n(`exercise-code:${e}`,r),M([]),A(null),O(`running`),W.current=setTimeout(()=>{K(),E||M(e=>[...e,{level:`error`,text:i(w,`ex.timeout`,{s:h/1e3})}]),O(`timeout`),t&&P(e=>e+1)},h),E){J(r,t);return}let a=v();V.current=a,a.onmessage=e=>{let n=e.data;if(n.type===`log`){let e=n.more?i(w,`ex.moreLines`):(n.line?i(w,`ex.line`,{n:n.line}):``)+String(n.text);M(t=>[...t,{level:String(n.level),text:e}])}else n.crashed?(K(),O(`crashed`),t&&P(e=>e+1)):q(t,n.results??null)},a.onerror=e=>{e.preventDefault(),K(),M(t=>[...t,{level:`error`,text:e.message}]),O(`crashed`)},a.postMessage({code:r,setup:g,tests:t?s:``})}function X(){let e=B.current;e?.dispatch({changes:{from:0,to:e.state.doc.length,insert:o}})}let Z=k?.filter(e=>e.ok).length??0;return(0,f.jsxs)(`div`,{className:`widget exercise`,children:[(0,f.jsx)(`span`,{className:`widget-label`,children:i(w,`ex.label`)}),t&&(0,f.jsx)(`h4`,{children:t}),T&&(0,f.jsx)(`div`,{className:`ex-instructions`,children:T}),(0,f.jsxs)(`div`,{className:`ex-editor`,children:[(0,f.jsxs)(`div`,{className:`ex-bar`,children:[(0,f.jsx)(`span`,{className:`ex-file`,children:m[_]}),(0,f.jsx)(`button`,{className:`ex-reset`,onClick:X,title:i(w,`pg.resetTitle`),children:i(w,`pg.reset`)})]}),(0,f.jsx)(`div`,{ref:z}),(0,f.jsxs)(`div`,{className:`ex-actions`,children:[(0,f.jsx)(`button`,{className:`btn btn-primary btn-sm`,onClick:()=>Y(!0),disabled:D===`running`,children:D===`running`?i(w,`ex.running`):i(w,`ex.runTests`)}),(0,f.jsx)(`button`,{className:`btn btn-sm ex-run`,onClick:()=>Y(!1),disabled:D===`running`,children:i(w,`ex.runCode`)})]})]}),(0,f.jsxs)(`div`,{className:`ex-panels`,children:[(0,f.jsxs)(`div`,{className:`ex-panel`,"aria-live":`polite`,children:[(0,f.jsx)(`div`,{className:`ex-panel-label`,children:i(w,`ex.tests`)}),(0,f.jsx)(`div`,{className:`ex-results`,children:k?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`div`,{className:D===`passed`?`ex-summary ok`:`ex-summary bad`,children:D===`passed`?i(w,`ex.allPassed`):i(w,`ex.count`,{passed:Z,total:k.length})}),(0,f.jsx)(`ul`,{children:k.map((e,t)=>(0,f.jsxs)(`li`,{className:e.ok?`ok`:`bad`,children:[(0,f.jsx)(`span`,{className:`ex-mark`,"aria-hidden":`true`,children:e.ok?`✓`:`✗`}),(0,f.jsxs)(`span`,{children:[e.name,!e.ok&&e.message&&(0,f.jsx)(`span`,{className:`ex-msg`,children:e.message})]})]},t))})]}):D===`crashed`?(0,f.jsx)(`div`,{className:`ex-summary bad`,children:i(w,`ex.codeError`)}):D===`timeout`?(0,f.jsx)(`div`,{className:`ex-summary bad`,children:i(w,`ex.timeout`,{s:h/1e3})}):(0,f.jsx)(`div`,{className:`ex-empty`,children:L?i(w,`ex.donePreviously`):i(w,`ex.notRun`)})})]}),E?(0,f.jsxs)(`div`,{className:`ex-panel`,children:[(0,f.jsx)(`div`,{className:`ex-panel-label`,children:i(w,`pg.result`)}),(0,f.jsx)(`iframe`,{ref:H,className:`ex-page`,sandbox:`allow-scripts`,title:i(w,`pg.result`)})]}):(0,f.jsxs)(`div`,{className:`ex-panel`,children:[(0,f.jsx)(`div`,{className:`ex-panel-label`,children:i(w,`pg.console`)}),(0,f.jsx)(`div`,{className:`ex-console`,children:j.length===0?(0,f.jsx)(`div`,{className:`ex-console-empty`,children:i(w,`pg.consoleEmpty`)}):j.map((e,t)=>(0,f.jsx)(`div`,{className:`ex-console-line ${e.level}`,children:e.text},t))})]})]}),D!==`passed`&&N>=2&&S&&(0,f.jsxs)(`div`,{className:`feedback bad`,children:[(0,f.jsx)(`strong`,{children:i(w,`ex.hint`)}),S]}),D!==`passed`&&N>=3&&l&&!F&&(0,f.jsx)(`button`,{className:`btn btn-ghost btn-sm ex-reveal`,onClick:()=>I(!0),children:i(w,`ex.showSolution`)}),F&&l&&(0,f.jsxs)(`div`,{className:`feedback ok`,children:[(0,f.jsx)(`strong`,{children:i(w,`ex.solution`)}),(0,f.jsx)(`pre`,{className:`ex-solution`,children:l})]}),(0,f.jsx)(`style`,{children:`
        .exercise .ex-instructions > :first-child { margin-top: 0; }
        .exercise .ex-instructions > :last-child { margin-bottom: 12px; }
        .exercise .ex-editor { border-radius: 8px; overflow: hidden; background: #282c34; }
        .exercise .ex-bar { display: flex; align-items: center; padding: 6px 6px 0; background: #21252b; }
        .exercise .ex-file { padding: 6px 12px; font: 600 13px var(--font-sans); color: #fff; background: #282c34; border-radius: 6px 6px 0 0; }
        .exercise .ex-reset { margin-left: auto; white-space: nowrap; padding: 4px 10px; font: 600 12px var(--font-sans); color: #c8ccd4; background: transparent; border: 1px solid #3e4451; border-radius: 6px; cursor: pointer; }
        .exercise .ex-reset:hover { border-color: #c8ccd4; }
        .exercise .cm-editor { font-size: 14px; }
        .exercise .ex-actions { display: flex; flex-wrap: wrap; gap: 8px; padding: 10px; background: #21252b; border-top: 1px solid #3e4451; }
        .exercise .ex-run { color: #e6e8eb; background: transparent; border-color: #4b5263; }
        .exercise .ex-run:hover { border-color: #c8ccd4; }
        .exercise .ex-panels { display: grid; grid-template-columns: 1fr; gap: 12px; margin-top: 12px; }
        @media (min-width: 860px) { .exercise .ex-panels { grid-template-columns: 1fr 1fr; } }
        .exercise .ex-panel { min-width: 0; display: flex; flex-direction: column; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
        .exercise .ex-panel-label { padding: 6px 12px; font-size: 12px; font-weight: 700; color: var(--muted); background: var(--surface-2); border-bottom: 1px solid var(--border); }
        .exercise .ex-results { flex: 1; padding: 10px 12px; font-size: 15px; }
        .exercise .ex-results ul { margin: 8px 0 0; padding: 0; list-style: none; display: grid; gap: 6px; }
        .exercise .ex-results li { display: flex; gap: 8px; align-items: baseline; }
        .exercise .ex-mark { flex-shrink: 0; width: 1.2em; font-weight: 700; }
        .exercise .ex-results li.ok .ex-mark { color: var(--ok); }
        .exercise .ex-results li.bad .ex-mark { color: var(--bad); }
        .exercise .ex-msg { display: block; font-size: 14px; color: var(--muted); }
        .exercise .ex-summary { font-weight: 600; }
        .exercise .ex-summary.ok { color: var(--ok); }
        .exercise .ex-summary.bad { color: var(--bad); }
        .exercise .ex-empty { color: var(--muted); }
        .exercise .ex-console { flex: 1; min-height: 120px; max-height: 260px; overflow-y: auto; padding: 6px 0; background: #1e2127; font: 13px/1.5 var(--font-mono); }
        .exercise .ex-console-line { padding: 1px 12px; color: #d7dae0; white-space: pre-wrap; overflow-wrap: anywhere; }
        .exercise .ex-console-line + .ex-console-line { border-top: 1px solid #2c313a; }
        .exercise .ex-console-line.warn { color: #e5c07b; }
        .exercise .ex-console-line.error { color: #ff8a80; }
        .exercise .ex-console-line.info { color: #9aa1ad; }
        .exercise .ex-page { flex: 1; width: 100%; min-height: 300px; border: 0; background: #fff; }
        .exercise .ex-console-empty { padding: 1px 12px; color: #7f8794; font-family: var(--font-sans); }
        .exercise .ex-reveal { margin-top: 10px; }
        .exercise .ex-solution { margin: 6px 0 0; padding: 10px 12px; background: var(--code-bg); color: var(--code-text); border-radius: 6px; font-size: 14px; overflow-x: auto; }
      `})]})}export{x as default};