import{t as e}from"./react.CvnImTBr.js";import{t}from"./jsx-runtime.Cr1s1OSH.js";import{i as n,r}from"./storage.CY_Y1C3D.js";import{n as i}from"./ui.DRdKtl6r.js";var a=e(),o=t(),s={pt:{label:`Monte seu spec`,title:`Gerador de SPEC.md`,example:`Ver um exemplo pronto`,clear:`Limpar`,download:`Baixar`,techLabel:`Tecnologia`,techHint:`Na dúvida, fique com a primeira opção.`,fields:{name:[`Nome do projeto`,`Curto e claro.`],goal:[`Objetivo`,`Em uma ou duas frases: o que o app faz?`],user:[`Para quem`,`Quem vai usar, e onde (celular? computador?).`],must:[`Funcionalidades essenciais`,`Uma por linha. O mínimo para o app ser útil.`],nice:[`Extras`,`Uma por linha. Coisas legais, mas que podem esperar.`],out:[`Fora do escopo`,`Uma por linha. O que a IA NÃO deve fazer.`],done:[`Pronto quando`,`Uma por linha. Como você vai saber que funcionou?`]},tech:[`HTML, CSS e JavaScript puro (sem framework)`,`HTML + JavaScript com three.js (3D)`,`HTML + JavaScript com Leaflet (mapas)`,`React + Vite`,`Deixe o Claude sugerir e me explicar antes`],exampleSpec:{name:`Lista de compras`,goal:`Uma página simples para anotar o que preciso comprar no mercado e riscar o que já peguei.`,user:`Eu mesmo, usando no celular dentro do mercado.`,must:`Adicionar um item digitando e apertando Enter
Marcar um item como comprado (fica riscado)
Apagar um item
A lista continua lá quando eu fecho e abro a página`,nice:`Botão para limpar todos os itens comprados
Contador de itens que faltam`,out:`Login ou contas
Compartilhar a lista com outras pessoas
Banco de dados ou servidor`,tech:`HTML, CSS e JavaScript puro (sem framework)`,done:`Funciona bem numa tela de celular
Dá para usar só com o polegar
Nenhum erro no console do navegador`},md:{fill:`(preencher)`,projectName:`(nome do projeto)`,goal:`Objetivo`,user:`Para quem`,must:`Funcionalidades essenciais`,nice:`Extras (só depois do essencial funcionar)`,out:`Fora do escopo (não fazer)`,tech:`Tecnologia`,done:`Pronto quando`,how:`Como trabalhar`,rules:[`Implemente uma funcionalidade essencial de cada vez.`,`Depois de cada passo, pare e me explique o que mudou antes de continuar.`,`Use código simples e comentado; estou aprendendo.`]}},en:{label:`Build your spec`,title:`SPEC.md generator`,example:`Show a finished example`,clear:`Clear`,download:`Download`,techLabel:`Technology`,techHint:`If in doubt, stick with the first option.`,fields:{name:[`Project name`,`Short and clear.`],goal:[`Goal`,`In one or two sentences: what does the app do?`],user:[`Who it is for`,`Who will use it, and where (phone? computer?).`],must:[`Core features`,`One per line. The minimum for the app to be useful.`],nice:[`Extras`,`One per line. Nice to have, but they can wait.`],out:[`Out of scope`,`One per line. What the AI should NOT do.`],done:[`Done when`,`One per line. How will you know it works?`]},tech:[`Plain HTML, CSS, and JavaScript (no framework)`,`HTML + JavaScript with three.js (3D)`,`HTML + JavaScript with Leaflet (maps)`,`React + Vite`,`Let Claude suggest one and explain it to me first`],exampleSpec:{name:`Shopping list`,goal:`A simple page to write down what I need at the grocery store and cross off what I already have.`,user:`Me, on my phone, in the store.`,must:`Add an item by typing and pressing Enter
Mark an item as bought (it gets crossed out)
Delete an item
The list is still there when I close and reopen the page`,nice:`A button to clear all bought items
A count of items left`,out:`Login or accounts
Sharing the list with other people
A database or server`,tech:`Plain HTML, CSS, and JavaScript (no framework)`,done:`Works well on a phone screen
Can be used with just a thumb
No errors in the browser console`},md:{fill:`(fill in)`,projectName:`(project name)`,goal:`Goal`,user:`Who it is for`,must:`Core features`,nice:`Extras (only after the core features work)`,out:`Out of scope (do not build)`,tech:`Technology`,done:`Done when`,how:`How to work`,rules:[`Build one core feature at a time.`,`After each step, stop and explain what changed before moving on.`,`Keep the code simple and commented; I'm learning.`]}}},c=[`name`,`goal`,`user`,`must`,`nice`,`out`],l=[`goal`,`must`,`nice`,`out`,`done`];function u(e){return{name:``,goal:``,user:``,must:``,nice:``,out:``,done:``,tech:s[e].tech[0]}}function d(e,t){let n=s[t].md,r=e=>{let t=e.split(`
`).map(e=>e.trim()).filter(Boolean);return t.length?t.map(e=>`- ${e}`).join(`
`):`- ${n.fill}`};return`# SPEC: ${e.name||n.projectName}

## ${n.goal}
${e.goal||n.fill}

## ${n.user}
${e.user||n.fill}

## ${n.must}
${r(e.must)}

## ${n.nice}
${r(e.nice)}

## ${n.out}
${r(e.out)}

## ${n.tech}
${e.tech}

## ${n.done}
${r(e.done)}

## ${n.how}
${n.rules.map(e=>`- ${e}`).join(`
`)}
`}function f({id:e=`spec-builder`,lang:t=`pt`}){let f=s[t],[p,m]=(0,a.useState)(()=>u(t)),[h,g]=(0,a.useState)(!1);(0,a.useEffect)(()=>{m({...u(t),...r(e,{})})},[e]);function _(t){m(t),n(e,t)}let v=d(p,t);async function y(){try{await navigator.clipboard.writeText(v),g(!0),setTimeout(()=>g(!1),1500)}catch{}}function b(){let e=URL.createObjectURL(new Blob([v],{type:`text/markdown`})),t=document.createElement(`a`);t.href=e,t.download=`SPEC.md`,t.click(),URL.revokeObjectURL(e)}let x=e=>{let[t,n]=f.fields[e],r=t=>_({...p,[e]:t.target.value});return(0,o.jsxs)(`label`,{className:`sb-field`,children:[(0,o.jsx)(`span`,{className:`sb-label`,children:t}),(0,o.jsx)(`span`,{className:`sb-hint`,children:n}),l.includes(e)?(0,o.jsx)(`textarea`,{rows:4,value:p[e],onChange:r}):(0,o.jsx)(`input`,{type:`text`,value:p[e],onChange:r})]},e)},S=f.tech.includes(p.tech)?f.tech:[...f.tech,p.tech];return(0,o.jsxs)(`div`,{className:`widget sb`,children:[(0,o.jsx)(`span`,{className:`widget-label`,children:f.label}),(0,o.jsx)(`h4`,{children:f.title}),(0,o.jsxs)(`div`,{className:`sb-actions`,children:[(0,o.jsx)(`button`,{className:`btn btn-ghost btn-sm`,onClick:()=>_(f.exampleSpec),children:f.example}),(0,o.jsx)(`button`,{className:`btn btn-ghost btn-sm`,onClick:()=>_(u(t)),children:f.clear})]}),(0,o.jsxs)(`div`,{className:`sb-grid`,children:[(0,o.jsxs)(`div`,{className:`sb-form`,children:[c.map(x),(0,o.jsxs)(`label`,{className:`sb-field`,children:[(0,o.jsx)(`span`,{className:`sb-label`,children:f.techLabel}),(0,o.jsx)(`span`,{className:`sb-hint`,children:f.techHint}),(0,o.jsx)(`select`,{value:p.tech,onChange:e=>_({...p,tech:e.target.value}),children:S.map(e=>(0,o.jsx)(`option`,{children:e},e))})]}),x(`done`)]}),(0,o.jsxs)(`div`,{className:`sb-preview`,children:[(0,o.jsxs)(`div`,{className:`sb-preview-bar`,children:[(0,o.jsx)(`span`,{children:`SPEC.md`}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`button`,{className:`btn btn-ghost btn-sm`,onClick:y,children:i(t,h?`copied`:`copy`)}),(0,o.jsx)(`button`,{className:`btn btn-primary btn-sm`,onClick:b,children:f.download})]})]}),(0,o.jsx)(`pre`,{children:v})]})]}),(0,o.jsx)(`style`,{children:`
        .sb .sb-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
        .sb .sb-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 900px) { .sb .sb-grid { grid-template-columns: 1fr 1fr; } .sb .sb-preview { position: sticky; top: 76px; } }
        .sb .sb-form { display: grid; gap: 14px; min-width: 0; }
        .sb .sb-field { display: grid; gap: 3px; }
        .sb .sb-label { font-weight: 600; font-size: 15px; }
        .sb .sb-hint { font-size: 13px; color: var(--muted); }
        .sb input, .sb textarea, .sb select { width: 100%; padding: 9px 10px; font: inherit; font-size: 15px; color: var(--text); background: var(--bg); border: 1px solid var(--border); border-radius: 8px; }
        .sb textarea { resize: vertical; }
        .sb input:focus, .sb textarea:focus, .sb select:focus { outline: none; border-color: var(--accent); }
        .sb .sb-preview { min-width: 0; display: flex; flex-direction: column; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; align-self: start; }
        .sb .sb-preview-bar { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 8px 10px; background: var(--surface-2); border-bottom: 1px solid var(--border); font: 600 13px var(--font-mono); }
        .sb .sb-preview-bar div { display: flex; gap: 6px; }
        .sb .sb-preview pre { margin: 0; padding: 14px; max-height: 560px; overflow: auto; font-size: 13.5px; line-height: 1.55; white-space: pre-wrap; background: var(--code-bg); color: var(--code-text); }
      `})]})}export{f as default};