import{r as f,R as j}from"./vendor-fc0724b7.js";/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P.apply(this,arguments)}var v;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(v||(v={}));const E="popstate";function H(e){e===void 0&&(e={});function t(n,a){let{pathname:h,search:i,hash:l}=n.location;return R("",{pathname:h,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:B(a)}return _(t,r,null,e)}function A(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function V(){return Math.random().toString(36).substr(2,8)}function U(e,t){return{usr:e.state,key:e.key,idx:t}}function R(e,t,r,n){return r===void 0&&(r=null),P({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?M(t):t,{state:r,key:t&&t.key||n||V()})}function B(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function M(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function _(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:h=!1}=n,i=a.history,l=v.Pop,s=null,c=p();c==null&&(c=0,i.replaceState(P({},i.state,{idx:c}),""));function p(){return(i.state||{idx:null}).idx}function g(){l=v.Pop;let o=p(),u=o==null?null:o-c;c=o,s&&s({action:l,location:d.location,delta:u})}function x(o,u){l=v.Push;let m=R(d.location,o,u);r&&r(m,o),c=p()+1;let C=U(m,c),S=d.createHref(m);try{i.pushState(C,"",S)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;a.location.assign(S)}h&&s&&s({action:l,location:d.location,delta:1})}function y(o,u){l=v.Replace;let m=R(d.location,o,u);r&&r(m,o),c=p();let C=U(m,c),S=d.createHref(m);i.replaceState(C,"",S),h&&s&&s({action:l,location:d.location,delta:0})}function w(o){let u=a.location.origin!=="null"?a.location.origin:a.location.href,m=typeof o=="string"?o:B(o);return A(u,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,u)}let d={get action(){return l},get location(){return e(a,i)},listen(o){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(E,g),s=o,()=>{a.removeEventListener(E,g),s=null}},createHref(o){return t(a,o)},createURL:w,encodeLocation(o){let u=w(o);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:x,replace:y,go(o){return i.go(o)}};return d}var I;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(I||(I={}));function k(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const F=["post","put","patch","delete"];new Set(F);const W=["get",...F];new Set(W);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const q=f.createContext(null),N=f.createContext(null);function K(){return f.useContext(N)!=null}function z(e){let{basename:t="/",children:r=null,location:n,navigationType:a=v.Pop,navigator:h,static:i=!1}=e;K()&&A(!1);let l=t.replace(/^\/*/,"/"),s=f.useMemo(()=>({basename:l,navigator:h,static:i}),[l,h,i]);typeof n=="string"&&(n=M(n));let{pathname:c="/",search:p="",hash:g="",state:x=null,key:y="default"}=n,w=f.useMemo(()=>{let d=k(c,l);return d==null?null:{location:{pathname:d,search:p,hash:g,state:x,key:y},navigationType:a}},[l,c,p,g,x,y,a]);return w==null?null:f.createElement(q.Provider,{value:s},f.createElement(N.Provider,{children:r,value:w}))}new Promise(()=>{});/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const G="startTransition",L=j[G];function Q(e){let{basename:t,children:r,future:n,window:a}=e,h=f.useRef();h.current==null&&(h.current=H({window:a,v5Compat:!0}));let i=h.current,[l,s]=f.useState({action:i.action,location:i.location}),{v7_startTransition:c}=n||{},p=f.useCallback(g=>{c&&L?L(()=>s(g)):s(g)},[s,c]);return f.useLayoutEffect(()=>i.listen(p),[i,p]),f.createElement(z,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:i})}var T;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(T||(T={}));var O;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(O||(O={}));export{Q as B};
