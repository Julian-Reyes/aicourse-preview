import{t as e}from"./react.CvnImTBr.js";import{t}from"./jsx-runtime.Cr1s1OSH.js";import{n,t as r}from"./storage.CY_Y1C3D.js";import{n as i,t as a}from"./ui.BjHdfgHz.js";var o=e(),s=t();function c({groups:e,page:t,current:c,compact:l=!1,showModules:u=!0,tags:d={},collapsible:f=!1,openCode:p,lang:m=`pt`}){let h=e.flatMap(e=>e.lessons),[g,_]=(0,o.useState)({}),[v,y]=(0,o.useState)(()=>p?{[p]:!0}:{});(0,o.useEffect)(()=>{let e=()=>_(Object.fromEntries(h.map(e=>[e.slug,n(e.slug)])));return e(),window.addEventListener(r,e),()=>window.removeEventListener(r,e)},[e]);let b=f?e.find(e=>e.code===p)?.lessons??h:h,x=b.filter(e=>g[e.slug]).length,S=e=>e.lessons.filter(e=>g[e.slug]).length;return(0,s.jsxs)(`div`,{className:[`lessons`,l&&`compact`,f&&`collapsible`].filter(Boolean).join(` `),children:[(0,s.jsxs)(`div`,{className:`lessons-progress`,children:[(0,s.jsx)(`div`,{className:`lessons-bar`,"aria-hidden":`true`,children:(0,s.jsx)(`div`,{style:{width:`${x/b.length*100}%`}})}),(0,s.jsx)(`span`,{className:`muted`,children:i(m,`list.progress`,{done:x,total:b.length})})]}),e.map(e=>(0,s.jsxs)(`section`,{className:`lessons-group`,children:[u&&f&&(0,s.jsx)(`h3`,{className:`lessons-module`,children:(0,s.jsxs)(`button`,{type:`button`,className:`lessons-toggle`,"aria-expanded":!!v[e.code],onClick:()=>y(t=>({...t,[e.code]:!t[e.code]})),children:[(0,s.jsx)(`svg`,{className:`lessons-chevron`,viewBox:`0 0 16 16`,width:`14`,height:`14`,"aria-hidden":`true`,children:(0,s.jsx)(`path`,{d:`M6 3.5 10.5 8 6 12.5`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,s.jsxs)(`span`,{className:`lessons-toggle-text`,children:[(0,s.jsx)(`span`,{children:e.label}),` `,e.title,(0,s.jsxs)(`span`,{className:`lessons-count`,children:[S(e),`/`,e.lessons.length]})]})]})}),u&&!f&&(0,s.jsx)(`h3`,{className:`lessons-module`,children:e.href?(0,s.jsxs)(`a`,{href:e.href,children:[(0,s.jsx)(`span`,{children:e.label}),` `,e.title]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`span`,{children:e.label}),` `,e.title]})}),f&&v[e.code]&&e.href&&(0,s.jsxs)(`a`,{className:`lessons-overview`,href:e.href,children:[i(m,`list.overview`),` →`]}),(0,s.jsx)(`ol`,{hidden:f&&!v[e.code],children:e.lessons.map((n,r)=>{let o=u?`${e.code}.${e.firstLesson+r}`:String(e.firstLesson+r),f=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`span`,{className:g[n.slug]?`lesson-num done`:`lesson-num`,"aria-label":g[n.slug]?i(m,`list.doneAria`):void 0,children:g[n.slug]?`✓`:o}),(0,s.jsxs)(`span`,{className:`lesson-text`,children:[(0,s.jsx)(`span`,{className:`lesson-title`,children:n.available?n.title:i(m,`list.soon`)}),!l&&n.description&&(0,s.jsx)(`span`,{className:`lesson-desc muted`,children:n.description})]}),d[n.slug]&&(0,s.jsx)(`span`,{className:d[n.slug].free?`lesson-tag free`:`lesson-tag`,children:d[n.slug].label}),n.locked?(0,s.jsx)(`span`,{className:`lesson-lock`,"aria-label":i(m,`list.locked`),children:`🔒`}):n.available&&n.minutes>0&&(0,s.jsxs)(`span`,{className:`lesson-min muted`,children:[n.minutes,` min`]})]}),p=n.locked&&`${e.href??``}#signup`;return(0,s.jsx)(`li`,{children:n.available&&p?(0,s.jsx)(`a`,{href:p,className:`locked`,title:i(m,`list.locked`),children:f}):n.available?(0,s.jsx)(`a`,{href:a(m,t,n.slug),className:n.slug===c?`current`:``,"aria-current":n.slug===c?`page`:void 0,children:f}):(0,s.jsx)(`span`,{className:`lesson-soon`,children:f})},n.slug)})})]},e.code)),(0,s.jsx)(`style`,{children:`
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
        .lessons .lessons-toggle { display: flex; align-items: flex-start; gap: 6px; width: 100%; padding: 6px 0; font: inherit; font-weight: 700; color: inherit; text-align: left; background: none; border: 0; cursor: pointer; }
        .lessons .lessons-toggle:hover .lessons-toggle-text { color: var(--text); }
        .lessons .lessons-chevron { flex-shrink: 0; margin-top: 2px; color: var(--muted); transition: transform 0.15s; }
        .lessons.compact.collapsible .lessons-module { font-size: 14px; }
        .lessons.compact.collapsible .lessons-group + .lessons-group { margin-top: 6px; padding-top: 6px; border-top: 1px solid var(--border); }
        .lessons.collapsible ol { margin-bottom: 6px; }
        .lessons .lessons-toggle[aria-expanded='true'] .lessons-chevron { transform: rotate(90deg); }
        .lessons .lessons-toggle-text { flex: 1; min-width: 0; color: inherit; }
        .lessons .lessons-count { display: block; margin-top: 1px; font-weight: 500; color: var(--muted); }
        .lessons .lessons-module .lessons-count { color: var(--muted); }
        .lessons ol[hidden] { display: none; }
        .lessons .lessons-overview { display: inline-block; margin: 0 0 4px 20px; padding: 2px 0; font-size: 13px; font-weight: 600; color: var(--accent); background: none; border: 0; }
        .lessons .lessons-overview:hover { color: var(--accent-hover); text-decoration: underline; border: 0; }
        .lessons-progress { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; font-size: 14px; }
        .lessons-bar { flex: 1; height: 6px; background: var(--surface-2); border-radius: 99px; overflow: hidden; }
        .lessons-bar div { height: 100%; background: var(--accent); transition: width 0.25s; }
      `})]})}export{c as default};