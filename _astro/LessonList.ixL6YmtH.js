import{t as e}from"./react.CvnImTBr.js";import{t}from"./jsx-runtime.Cr1s1OSH.js";import{n,t as r}from"./storage.CY_Y1C3D.js";import{n as i,t as a}from"./ui.Dre98woS.js";var o=e(),s=t();function c({groups:e,page:t,current:c,compact:l=!1,showModules:u=!0,tags:d={},lang:f=`pt`}){let p=e.flatMap(e=>e.lessons),[m,h]=(0,o.useState)({});(0,o.useEffect)(()=>{let e=()=>h(Object.fromEntries(p.map(e=>[e.slug,n(e.slug)])));return e(),window.addEventListener(r,e),()=>window.removeEventListener(r,e)},[e]);let g=p.filter(e=>m[e.slug]).length;return(0,s.jsxs)(`div`,{className:l?`lessons compact`:`lessons`,children:[(0,s.jsxs)(`div`,{className:`lessons-progress`,children:[(0,s.jsx)(`div`,{className:`lessons-bar`,"aria-hidden":`true`,children:(0,s.jsx)(`div`,{style:{width:`${g/p.length*100}%`}})}),(0,s.jsx)(`span`,{className:`muted`,children:i(f,`list.progress`,{done:g,total:p.length})})]}),e.map(e=>(0,s.jsxs)(`section`,{className:`lessons-group`,children:[u&&(0,s.jsx)(`h3`,{className:`lessons-module`,children:e.href?(0,s.jsxs)(`a`,{href:e.href,children:[(0,s.jsx)(`span`,{children:e.label}),` `,e.title]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`span`,{children:e.label}),` `,e.title]})}),(0,s.jsx)(`ol`,{children:e.lessons.map((n,r)=>{let o=u?`${e.code}.${r+1}`:String(r+1),p=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`span`,{className:m[n.slug]?`lesson-num done`:`lesson-num`,"aria-label":m[n.slug]?i(f,`list.doneAria`):void 0,children:m[n.slug]?`✓`:o}),(0,s.jsxs)(`span`,{className:`lesson-text`,children:[(0,s.jsx)(`span`,{className:`lesson-title`,children:n.available?n.title:i(f,`list.soon`)}),!l&&n.description&&(0,s.jsx)(`span`,{className:`lesson-desc muted`,children:n.description})]}),d[n.slug]&&(0,s.jsx)(`span`,{className:d[n.slug].free?`lesson-tag free`:`lesson-tag`,children:d[n.slug].label}),n.locked?(0,s.jsx)(`span`,{className:`lesson-lock`,"aria-label":i(f,`list.locked`),children:`🔒`}):n.available&&n.minutes>0&&(0,s.jsxs)(`span`,{className:`lesson-min muted`,children:[n.minutes,` min`]})]}),h=n.locked&&`${e.href??``}#signup`;return(0,s.jsx)(`li`,{children:n.available&&h?(0,s.jsx)(`a`,{href:h,className:`locked`,title:i(f,`list.locked`),children:p}):n.available?(0,s.jsx)(`a`,{href:a(f,t,n.slug),className:n.slug===c?`current`:``,"aria-current":n.slug===c?`page`:void 0,children:p}):(0,s.jsx)(`span`,{className:`lesson-soon`,children:p})},n.slug)})})]},e.code)),(0,s.jsx)(`style`,{children:`
        .lessons ol { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
        .lessons.compact ol { gap: 2px; }
        .lessons-group + .lessons-group { margin-top: 28px; }
        .lessons.compact .lessons-group + .lessons-group { margin-top: 16px; }
        .lessons-module { margin: 0 0 10px; font-size: 1.05rem; }
        .lessons-module span { color: var(--accent); }
        .lessons .lessons-module a { display: inline; padding: 0; background: none; border: 0; border-radius: 0; color: inherit; }
        .lessons .lessons-module a:hover { color: var(--accent-hover); text-decoration: underline; }
        .lessons.compact .lessons-module a { padding: 0; font-size: inherit; }
        .lessons.compact .lessons-module { margin: 0 0 4px; padding: 0 10px; font-size: 12.5px; color: var(--muted); }
        .lessons a, .lessons .lesson-soon { display: flex; align-items: center; gap: 14px; padding: 16px; color: var(--text); text-decoration: none; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); }
        .lessons a:hover { border-color: var(--accent); color: var(--text); }
        .lessons .lesson-soon { opacity: 0.55; border-style: dashed; }
        .lessons a.locked .lesson-title, .lessons a.locked .lesson-desc { opacity: 0.7; }
        .lesson-lock { font-size: 14px; }
        .lessons.compact a, .lessons.compact .lesson-soon { padding: 7px 10px; gap: 10px; background: transparent; border-color: transparent; font-size: 14px; }
        .lessons.compact a.current { background: var(--accent-soft); }
        .lesson-num { display: inline-grid; place-items: center; flex-shrink: 0; min-width: 32px; height: 32px; padding: 0 4px; border-radius: 99px; font-weight: 700; font-size: 13px; background: var(--surface-2); border: 1px solid var(--border); }
        .lessons.compact .lesson-num { min-width: 28px; height: 22px; font-size: 11px; }
        .lesson-num.done { background: var(--accent); border-color: var(--accent); color: var(--accent-contrast); }
        .lesson-text { display: grid; gap: 2px; flex: 1; min-width: 0; }
        .lesson-title { font-weight: 600; }
        .lesson-desc { font-size: 14.5px; }
        .lesson-min { font-size: 13px; white-space: nowrap; }
        .lessons.compact .lesson-min { display: none; }
        .lesson-tag { padding: 2px 9px; border-radius: 99px; font-size: 12px; font-weight: 600; white-space: nowrap; background: var(--surface-2); border: 1px solid var(--border); color: var(--muted); }
        .lesson-tag.free { background: var(--ok-soft); border-color: transparent; color: var(--ok); }
        .lessons-progress { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; font-size: 14px; }
        .lessons-bar { flex: 1; height: 6px; background: var(--surface-2); border-radius: 99px; overflow: hidden; }
        .lessons-bar div { height: 100%; background: var(--accent); transition: width 0.25s; }
      `})]})}export{c as default};