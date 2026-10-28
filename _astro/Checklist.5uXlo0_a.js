import{t as e}from"./react.CvnImTBr.js";import{t}from"./jsx-runtime.Cr1s1OSH.js";import{i as n,r}from"./storage.CY_Y1C3D.js";import{n as i}from"./ui.BjHdfgHz.js";var a=e(),o=t();function s({id:e,title:t,items:s,lang:c=`pt`}){let[l,u]=(0,a.useState)(()=>s.map(()=>!1));(0,a.useEffect)(()=>{let t=r(`check:${e}`,[]);t.length===s.length&&u(t)},[e]);function d(t){let r=l.map((e,n)=>n===t?!e:e);u(r),n(`check:${e}`,r)}let f=l.filter(Boolean).length;return(0,o.jsxs)(`div`,{className:`widget checklist`,children:[(0,o.jsx)(`span`,{className:`widget-label`,children:i(c,`check.label`)}),(0,o.jsx)(`h4`,{children:t??i(c,`check.title`)}),(0,o.jsx)(`ul`,{children:s.map((e,t)=>(0,o.jsx)(`li`,{children:(0,o.jsxs)(`label`,{className:l[t]?`done`:``,children:[(0,o.jsx)(`input`,{type:`checkbox`,checked:l[t],onChange:()=>d(t)}),(0,o.jsx)(`span`,{children:e})]})},t))}),(0,o.jsx)(`div`,{className:`checklist-bar`,"aria-hidden":`true`,children:(0,o.jsx)(`div`,{style:{width:`${f/s.length*100}%`}})}),(0,o.jsx)(`p`,{className:`checklist-count muted`,children:f===s.length?i(c,`check.allDone`):i(c,`check.count`,{done:f,total:s.length})}),(0,o.jsx)(`style`,{children:`
        .checklist ul { list-style: none; margin: 0; padding: 0; }
        .checklist li + li { margin-top: 6px; }
        .checklist label { display: flex; gap: 10px; align-items: flex-start; cursor: pointer; padding: 6px 4px; border-radius: 6px; }
        .checklist label:hover { background: var(--surface-2); }
        .checklist input { width: 18px; height: 18px; margin-top: 4px; accent-color: var(--accent); flex-shrink: 0; }
        .checklist label.done span { color: var(--muted); text-decoration: line-through; }
        .checklist-bar { height: 6px; margin-top: 12px; background: var(--surface-2); border-radius: 99px; overflow: hidden; }
        .checklist-bar div { height: 100%; background: var(--accent); transition: width 0.25s; }
        .checklist-count { margin: 8px 0 0; font-size: 14px; }
      `})]})}export{s as default};