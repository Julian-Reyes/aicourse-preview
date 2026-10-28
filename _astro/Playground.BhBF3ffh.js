import{t as e}from"./react.CvnImTBr.js";import{t}from"./jsx-runtime.Cr1s1OSH.js";import{n}from"./ui.BjHdfgHz.js";import{a as r,i,n as a,o,r as s,t as c}from"./dist.Buht3Jsm.js";var l=e(),u=t(),d={html:a,css:s,js:i},f={html:`HTML`,css:`CSS`,js:`JavaScript`},p=`<script>(function () {
  function fmt(v) {
    if (typeof v === 'string') return v;
    if (v === undefined || typeof v === 'function') return String(v);
    try { return JSON.stringify(v); } catch (e) { return String(v); }
  }
  function send(level, args) {
    parent.postMessage({ playgroundConsole: true, level: level, text: Array.prototype.map.call(args, fmt).join(' ') }, '*');
  }
  ['log', 'info', 'warn', 'error'].forEach(function (level) {
    var original = console[level];
    console[level] = function () { send(level, arguments); original.apply(console, arguments); };
  });
  window.addEventListener('error', function (e) { send('error', [e.message]); });
  window.addEventListener('unhandledrejection', function (e) { send('error', [String(e.reason)]); });
})();<\/script>`;function m(e,t=``,n=!1,r=!1){let i=n?` type="module"`:``;return`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${r?p:``}${t}<style>${e.css}</style></head><body>${e.html}<script${i}>${e.js}<\/script></body></html>`}function h({title:e,html:t=``,css:i=``,js:a=``,height:s=320,head:p=``,module:h=!1,sameOrigin:g=!1,console:_=!1,lang:v=`pt`}){let y=(0,l.useRef)({html:t,css:i,js:a}),b=_&&!t.trim()&&!i.trim(),x=Object.keys(y.current).filter(e=>y.current[e].trim()!==``||e===`html`&&!b),[S,C]=(0,l.useState)(y.current),[w,T]=(0,l.useState)(x[0]),[E,D]=(0,l.useState)(()=>m(y.current,p,h,_)),[O,k]=(0,l.useState)([]),A=(0,l.useRef)(null),j=(0,l.useRef)({}),M=(0,l.useRef)({});(0,l.useEffect)(()=>{for(let e of x){let t=j.current[e];t&&(M.current[e]=new o({doc:y.current[e],parent:t,extensions:[r,d[e](),c,o.lineWrapping,o.theme({"&":{height:`${s}px`},".cm-scroller":{overflow:`auto`}}),o.updateListener.of(t=>{t.docChanged&&C(n=>({...n,[e]:t.state.doc.toString()}))})]}))}return()=>{for(let e of Object.values(M.current))e?.destroy();M.current={}}},[]),(0,l.useEffect)(()=>{let e=setTimeout(()=>D(m(S,p,h,_)),350);return()=>clearTimeout(e)},[S]),(0,l.useEffect)(()=>{if(!_)return;k([]);let e=e=>{e.source===A.current?.contentWindow&&e.data?.playgroundConsole&&k(t=>[...t,{level:String(e.data.level),text:String(e.data.text)}].slice(-200))};return window.addEventListener(`message`,e),A.current?.setAttribute(`srcdoc`,E),()=>window.removeEventListener(`message`,e)},[E]);function N(){for(let e of x){let t=M.current[e];t?.dispatch({changes:{from:0,to:t.state.doc.length,insert:y.current[e]}})}}return(0,u.jsxs)(`div`,{className:`widget playground`,children:[(0,u.jsxs)(`div`,{className:`pg-top`,children:[(0,u.jsx)(`span`,{className:`widget-label`,children:n(v,`pg.label`)}),e&&(0,u.jsx)(`h4`,{children:e})]}),(0,u.jsxs)(`div`,{className:`pg-grid`,children:[(0,u.jsxs)(`div`,{className:`pg-editor`,children:[(0,u.jsxs)(`div`,{className:`pg-tabs`,role:`tablist`,children:[x.map(e=>(0,u.jsx)(`button`,{role:`tab`,"aria-selected":w===e,className:w===e?`pg-tab active`:`pg-tab`,onClick:()=>T(e),children:f[e]},e)),(0,u.jsx)(`button`,{className:`pg-reset`,onClick:N,title:n(v,`pg.resetTitle`),children:n(v,`pg.reset`)})]}),x.map(e=>(0,u.jsx)(`div`,{ref:t=>j.current[e]=t,hidden:w!==e},e))]}),(0,u.jsxs)(`div`,{className:`pg-preview`,children:[!b&&(0,u.jsx)(`div`,{className:`pg-preview-label`,children:n(v,`pg.result`)}),(0,u.jsx)(`iframe`,{ref:A,title:e??n(v,`pg.result`),sandbox:g?`allow-scripts allow-same-origin`:`allow-scripts`,srcDoc:E,hidden:b,style:{height:_?Math.round(s*.55):s}}),_&&(0,u.jsxs)(`div`,{className:`pg-console`,"aria-live":`polite`,children:[(0,u.jsx)(`div`,{className:`pg-preview-label`,children:n(v,`pg.console`)}),(0,u.jsx)(`div`,{className:`pg-console-lines`,style:{height:b?s:Math.round(s*.45)},children:O.length===0?(0,u.jsx)(`div`,{className:`pg-console-empty`,children:n(v,`pg.consoleEmpty`)}):O.map((e,t)=>(0,u.jsx)(`div`,{className:`pg-console-line ${e.level}`,children:e.text},t))})]})]})]}),(0,u.jsx)(`style`,{children:`
        .playground .pg-grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
        @media (min-width: 860px) { .playground .pg-grid { grid-template-columns: 1fr 1fr; } }
        .playground .pg-editor { min-width: 0; border-radius: 8px; overflow: hidden; background: #282c34; }
        .playground .pg-tabs { display: flex; align-items: center; gap: 2px; padding: 6px 6px 0; background: #21252b; }
        .playground .pg-tab { padding: 6px 12px; font: 600 13px var(--font-sans); color: #9aa1ad; background: transparent; border: 0; border-radius: 6px 6px 0 0; cursor: pointer; }
        .playground .pg-tab.active { color: #fff; background: #282c34; }
        .playground .pg-reset { margin-left: auto; white-space: nowrap; padding: 4px 10px; font: 600 12px var(--font-sans); color: #c8ccd4; background: transparent; border: 1px solid #3e4451; border-radius: 6px; cursor: pointer; }
        .playground .pg-reset:hover { border-color: #c8ccd4; }
        .playground .pg-preview { min-width: 0; display: flex; flex-direction: column; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
        .playground .pg-preview-label { padding: 6px 12px; font-size: 12px; font-weight: 700; color: var(--muted); background: var(--surface-2); border-bottom: 1px solid var(--border); }
        .playground iframe { width: 100%; border: 0; background: #fff; }
        .playground .cm-editor { font-size: 14px; }
        .playground .pg-console { flex: 1; border-top: 1px solid var(--border); }
        .playground .pg-preview > .pg-console:first-of-type, .playground iframe[hidden] + .pg-console { border-top: 0; }
        .playground .pg-console-lines { overflow-y: auto; padding: 6px 0; background: #1e2127; font: 13px/1.5 var(--font-mono); }
        .playground .pg-console-line { padding: 1px 12px; color: #d7dae0; white-space: pre-wrap; overflow-wrap: anywhere; }
        .playground .pg-console-line + .pg-console-line { border-top: 1px solid #2c313a; }
        .playground .pg-console-line.warn { color: #e5c07b; }
        .playground .pg-console-line.error { color: #ff8a80; }
        .playground .pg-console-empty { padding: 1px 12px; color: #7f8794; font-family: var(--font-sans); }
      `})]})}export{h as default};