import{p as C,a2 as O,o as i,x as le,$,aQ as ue,aV as _,s as E,A as q,W as D,bj as ie,v as R,a7 as re,bk as ce,bl as ve,B as de,a1 as ye,m as F,a as W,g as X,n as fe,u as G,c as k}from"./index-b3f161fd.js";const z=Symbol.for("vuetify:layout"),Q=Symbol.for("vuetify:layout-item"),Z=1e3,Se=C({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),we=C({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function me(){const e=O(z);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Ve(e){const a=O(z);if(!a)throw new Error("[Vuetify] Could not find injected layout");const n=e.id??`layout-item-${re()}`,u=_("useLayoutItem");D(Q,{id:n});const s=E(!1);ce(()=>s.value=!0),ve(()=>s.value=!1);const{layoutItemStyles:r,layoutItemScrimStyles:c}=a.register(u,{...e,active:i(()=>s.value?!1:e.active.value),id:n});return de(()=>a.unregister(n)),{layoutItemStyles:r,layoutRect:a.layoutRect,layoutItemScrimStyles:c}}const pe=(e,a,n,u)=>{let s={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...s}}];for(const c of e){const m=a.get(c),g=n.get(c),L=u.get(c);if(!m||!g||!L)continue;const b={...s,[m.value]:parseInt(s[m.value],10)+(L.value?parseInt(g.value,10):0)};r.push({id:c,layer:b}),s=b}return r};function $e(e){const a=O(z,null),n=i(()=>a?a.rootZIndex.value-100:Z),u=le([]),s=$(new Map),r=$(new Map),c=$(new Map),m=$(new Map),g=$(new Map),{resizeRef:L,contentRect:b}=ue(),Y=i(()=>{const o=new Map,d=e.overlaps??[];for(const t of d.filter(v=>v.includes(":"))){const[v,l]=t.split(":");if(!u.value.includes(v)||!u.value.includes(l))continue;const f=s.get(v),p=s.get(l),S=r.get(v),w=r.get(l);!f||!p||!S||!w||(o.set(l,{position:f.value,amount:parseInt(S.value,10)}),o.set(v,{position:p.value,amount:-parseInt(w.value,10)}))}return o}),h=i(()=>{const o=[...new Set([...c.values()].map(t=>t.value))].sort((t,v)=>t-v),d=[];for(const t of o){const v=u.value.filter(l=>{var f;return((f=c.get(l))==null?void 0:f.value)===t});d.push(...v)}return pe(d,s,r,m)}),T=i(()=>!Array.from(g.values()).some(o=>o.value)),I=i(()=>h.value[h.value.length-1].layer),J=i(()=>({"--v-layout-left":R(I.value.left),"--v-layout-right":R(I.value.right),"--v-layout-top":R(I.value.top),"--v-layout-bottom":R(I.value.bottom),...T.value?void 0:{transition:"none"}})),x=i(()=>h.value.slice(1).map((o,d)=>{let{id:t}=o;const{layer:v}=h.value[d],l=r.get(t),f=s.get(t);return{id:t,...v,size:Number(l.value),position:f.value}})),j=o=>x.value.find(d=>d.id===o),M=_("createLayout"),H=E(!1);q(()=>{H.value=!0}),D(z,{register:(o,d)=>{let{id:t,order:v,position:l,layoutSize:f,elementSize:p,active:S,disableTransitions:w,absolute:oe}=d;c.set(t,v),s.set(t,l),r.set(t,f),m.set(t,S),w&&g.set(t,w);const N=ie(Q,M==null?void 0:M.vnode).indexOf(o);N>-1?u.value.splice(N,0,t):u.value.push(t);const K=i(()=>x.value.findIndex(V=>V.id===t)),B=i(()=>n.value+h.value.length*2-K.value*2),ne=i(()=>{const V=l.value==="left"||l.value==="right",P=l.value==="right",se=l.value==="bottom",U={[l.value]:0,zIndex:B.value,transform:`translate${V?"X":"Y"}(${(S.value?0:-110)*(P||se?-1:1)}%)`,position:oe.value||n.value!==Z?"absolute":"fixed",...T.value?void 0:{transition:"none"}};if(!H.value)return U;const y=x.value[K.value];if(!y)throw new Error(`[Vuetify] Could not find layout item "${t}"`);const A=Y.value.get(t);return A&&(y[A.position]+=A.amount),{...U,height:V?`calc(100% - ${y.top}px - ${y.bottom}px)`:p.value?`${p.value}px`:void 0,left:P?void 0:`${y.left}px`,right:P?`${y.right}px`:void 0,top:l.value!=="bottom"?`${y.top}px`:void 0,bottom:l.value!=="top"?`${y.bottom}px`:void 0,width:V?p.value?`${p.value}px`:void 0:`calc(100% - ${y.left}px - ${y.right}px)`}}),ae=i(()=>({zIndex:B.value-1}));return{layoutItemStyles:ne,layoutItemScrimStyles:ae,zIndex:B}},unregister:o=>{c.delete(o),s.delete(o),r.delete(o),m.delete(o),g.delete(o),u.value=u.value.filter(d=>d!==o)},mainRect:I,mainStyles:J,getLayoutItem:j,items:x,layoutRect:b,rootZIndex:n});const ee=i(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),te=i(()=>({zIndex:a?n.value:void 0,position:a?"relative":void 0,overflow:a?"hidden":void 0}));return{layoutClasses:ee,layoutStyles:te,getLayoutItem:j,items:x,layoutRect:b,layoutRef:L}}function ge(){const e=E(!1);return q(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:i(()=>e.value?void 0:{transition:"none !important"}),isBooted:ye(e)}}const be=C({fluid:{type:Boolean,default:!1},...F(),...W()},"VContainer"),Le=X()({name:"VContainer",props:be(),setup(e,a){let{slots:n}=a;const{rtlClasses:u}=fe();return G(()=>k(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},u.value,e.class],style:e.style},n)),{}}});const he=C({scrollable:Boolean,...F(),...W({tag:"main"})},"VMain"),Re=X()({name:"VMain",props:he(),setup(e,a){let{slots:n}=a;const{mainStyles:u}=me(),{ssrBootStyles:s}=ge();return G(()=>k(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[u.value,s.value,e.style]},{default:()=>{var r,c;return[e.scrollable?k("div",{class:"v-main__scroller"},[(r=n.default)==null?void 0:r.call(n)]):(c=n.default)==null?void 0:c.call(n)]}})),{}}});export{Le as V,Ve as a,Re as b,Se as c,$e as d,we as m,ge as u};
