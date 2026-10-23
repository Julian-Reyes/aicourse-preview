import{t as e}from"./react.CvnImTBr.js";import{t}from"./jsx-runtime.Cr1s1OSH.js";import{i as n,r}from"./storage.CY_Y1C3D.js";import{n as i}from"./ui.BlBA2ZrP.js";import{T as a,d as o,n as s,t as c}from"./dist.hyqXTLHw.js";var l=e(),u=t(),d=3e3,f=`
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
    self.check = function (name, fn) {
      try {
        var problem = fn();
        results.push({ name: name, ok: !problem, message: problem ? String(problem) : '' });
      } catch (err) {
        results.push({ name: name, ok: false, message: message(err) });
      }
    };
    try { run(d.tests, false); } catch (err) { results.push({ name: '?', ok: false, message: message(err) }); }
  }
  postMessage({ type: 'done', results: results });
};
`,p=``;function m(){return p||=URL.createObjectURL(new Blob([f],{type:`text/javascript`})),new Worker(p)}function h({id:e,title:t,starter:f,tests:p,solution:h,hint:g,height:_=220,lang:v=`pt`,children:y}){let[b,x]=(0,l.useState)(`idle`),[S,C]=(0,l.useState)(null),[w,T]=(0,l.useState)([]),[E,D]=(0,l.useState)(0),[O,k]=(0,l.useState)(!1),[A,j]=(0,l.useState)(!1),M=(0,l.useRef)(null),N=(0,l.useRef)(null),P=(0,l.useRef)(null),F=(0,l.useRef)(void 0);(0,l.useEffect)(()=>{if(j(r(`exercise:${e}`,!1)),M.current)return N.current=new a({doc:r(`exercise-code:${e}`,f),parent:M.current,extensions:[o,s(),c,a.lineWrapping,a.theme({"&":{height:`${_}px`},".cm-scroller":{overflow:`auto`}})]}),()=>{N.current?.destroy(),I()}},[e]);function I(){clearTimeout(F.current),P.current?.terminate(),P.current=null}function L(t){I();let r=N.current?.state.doc.toString()??``;n(`exercise-code:${e}`,r),T([]),C(null),x(`running`);let a=m();P.current=a,F.current=setTimeout(()=>{I(),T(e=>[...e,{level:`error`,text:i(v,`ex.timeout`,{s:d/1e3})}]),x(`timeout`),t&&D(e=>e+1)},d),a.onmessage=r=>{let a=r.data;if(a.type===`log`){let e=a.more?i(v,`ex.moreLines`):(a.line?i(v,`ex.line`,{n:a.line}):``)+String(a.text);T(t=>[...t,{level:String(a.level),text:e}]);return}if(I(),a.crashed){x(`crashed`),t&&D(e=>e+1);return}if(!t){x(`idle`);return}let o=a.results??[],s=o.length>0&&o.every(e=>e.ok);C(o),x(s?`passed`:`failed`),s?(n(`exercise:${e}`,!0),j(!0)):D(e=>e+1)},a.onerror=e=>{e.preventDefault(),I(),T(t=>[...t,{level:`error`,text:e.message}]),x(`crashed`)},a.postMessage({code:r,tests:t?p:``})}function R(){let e=N.current;e?.dispatch({changes:{from:0,to:e.state.doc.length,insert:f}})}let z=S?.filter(e=>e.ok).length??0;return(0,u.jsxs)(`div`,{className:`widget exercise`,children:[(0,u.jsx)(`span`,{className:`widget-label`,children:i(v,`ex.label`)}),t&&(0,u.jsx)(`h4`,{children:t}),y&&(0,u.jsx)(`div`,{className:`ex-instructions`,children:y}),(0,u.jsxs)(`div`,{className:`ex-editor`,children:[(0,u.jsxs)(`div`,{className:`ex-bar`,children:[(0,u.jsx)(`span`,{className:`ex-file`,children:`JavaScript`}),(0,u.jsx)(`button`,{className:`ex-reset`,onClick:R,title:i(v,`pg.resetTitle`),children:i(v,`pg.reset`)})]}),(0,u.jsx)(`div`,{ref:M}),(0,u.jsxs)(`div`,{className:`ex-actions`,children:[(0,u.jsx)(`button`,{className:`btn btn-primary btn-sm`,onClick:()=>L(!0),disabled:b===`running`,children:b===`running`?i(v,`ex.running`):i(v,`ex.runTests`)}),(0,u.jsx)(`button`,{className:`btn btn-sm ex-run`,onClick:()=>L(!1),disabled:b===`running`,children:i(v,`ex.runCode`)})]})]}),(0,u.jsxs)(`div`,{className:`ex-panels`,children:[(0,u.jsxs)(`div`,{className:`ex-panel`,"aria-live":`polite`,children:[(0,u.jsx)(`div`,{className:`ex-panel-label`,children:i(v,`ex.tests`)}),(0,u.jsx)(`div`,{className:`ex-results`,children:S?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`div`,{className:b===`passed`?`ex-summary ok`:`ex-summary bad`,children:b===`passed`?i(v,`ex.allPassed`):i(v,`ex.count`,{passed:z,total:S.length})}),(0,u.jsx)(`ul`,{children:S.map((e,t)=>(0,u.jsxs)(`li`,{className:e.ok?`ok`:`bad`,children:[(0,u.jsx)(`span`,{className:`ex-mark`,"aria-hidden":`true`,children:e.ok?`✓`:`✗`}),(0,u.jsxs)(`span`,{children:[e.name,!e.ok&&e.message&&(0,u.jsx)(`span`,{className:`ex-msg`,children:e.message})]})]},t))})]}):b===`crashed`?(0,u.jsx)(`div`,{className:`ex-summary bad`,children:i(v,`ex.codeError`)}):b===`timeout`?(0,u.jsx)(`div`,{className:`ex-summary bad`,children:i(v,`ex.timeout`,{s:d/1e3})}):(0,u.jsx)(`div`,{className:`ex-empty`,children:A?i(v,`ex.donePreviously`):i(v,`ex.notRun`)})})]}),(0,u.jsxs)(`div`,{className:`ex-panel`,children:[(0,u.jsx)(`div`,{className:`ex-panel-label`,children:i(v,`pg.console`)}),(0,u.jsx)(`div`,{className:`ex-console`,children:w.length===0?(0,u.jsx)(`div`,{className:`ex-console-empty`,children:i(v,`pg.consoleEmpty`)}):w.map((e,t)=>(0,u.jsx)(`div`,{className:`ex-console-line ${e.level}`,children:e.text},t))})]})]}),b!==`passed`&&E>=2&&g&&(0,u.jsxs)(`div`,{className:`feedback bad`,children:[(0,u.jsx)(`strong`,{children:i(v,`ex.hint`)}),g]}),b!==`passed`&&E>=3&&h&&!O&&(0,u.jsx)(`button`,{className:`btn btn-ghost btn-sm ex-reveal`,onClick:()=>k(!0),children:i(v,`ex.showSolution`)}),O&&h&&(0,u.jsxs)(`div`,{className:`feedback ok`,children:[(0,u.jsx)(`strong`,{children:i(v,`ex.solution`)}),(0,u.jsx)(`pre`,{className:`ex-solution`,children:h})]}),(0,u.jsx)(`style`,{children:`
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
        .exercise .ex-console-empty { padding: 1px 12px; color: #7f8794; font-family: var(--font-sans); }
        .exercise .ex-reveal { margin-top: 10px; }
        .exercise .ex-solution { margin: 6px 0 0; padding: 10px 12px; background: var(--code-bg); color: var(--code-text); border-radius: 6px; font-size: 14px; overflow-x: auto; }
      `})]})}export{h as default};