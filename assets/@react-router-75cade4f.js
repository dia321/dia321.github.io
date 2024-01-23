import{r as f,R as N}from"./vendor-3710dd0d.js";/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}var v;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(v||(v={}));const O="popstate";function V(e){e===void 0&&(e={});function t(n,i){let{pathname:h,search:o,hash:s}=n.location;return E("",{pathname:h,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:B(i)}return W(t,r,null,e)}function F(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function H(){return Math.random().toString(36).substr(2,8)}function U(e,t){return{usr:e.state,key:e.key,idx:t}}function E(e,t,r,n){return r===void 0&&(r=null),S({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?M(t):t,{state:r,key:t&&t.key||n||H()})}function B(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function M(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function W(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:h=!1}=n,o=i.history,s=v.Pop,l=null,c=p();c==null&&(c=0,o.replaceState(S({},o.state,{idx:c}),""));function p(){return(o.state||{idx:null}).idx}function m(){s=v.Pop;let a=p(),u=a==null?null:a-c;c=a,l&&l({action:s,location:d.location,delta:u})}function x(a,u){s=v.Push;let g=E(d.location,a,u);r&&r(g,a),c=p()+1;let b=U(g,c),P=d.createHref(g);try{o.pushState(b,"",P)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(P)}h&&l&&l({action:s,location:d.location,delta:1})}function y(a,u){s=v.Replace;let g=E(d.location,a,u);r&&r(g,a),c=p();let b=U(g,c),P=d.createHref(g);o.replaceState(b,"",P),h&&l&&l({action:s,location:d.location,delta:0})}function w(a){let u=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof a=="string"?a:B(a);return F(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let d={get action(){return s},get location(){return e(i,o)},listen(a){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(O,m),l=a,()=>{i.removeEventListener(O,m),l=null}},createHref(a){return t(i,a)},createURL:w,encodeLocation(a){let u=w(a);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:x,replace:y,go(a){return o.go(a)}};return d}var I;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(I||(I={}));function q(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const j=["post","put","patch","delete"];new Set(j);const K=["get",...j];new Set(K);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},R.apply(this,arguments)}const $=f.createContext(null),_=f.createContext(null);function z(){return f.useContext(_)!=null}function G(e){let{basename:t="/",children:r=null,location:n,navigationType:i=v.Pop,navigator:h,static:o=!1,future:s}=e;z()&&F(!1);let l=t.replace(/^\/*/,"/"),c=f.useMemo(()=>({basename:l,navigator:h,static:o,future:R({v7_relativeSplatPath:!1},s)}),[l,s,h,o]);typeof n=="string"&&(n=M(n));let{pathname:p="/",search:m="",hash:x="",state:y=null,key:w="default"}=n,d=f.useMemo(()=>{let a=q(p,l);return a==null?null:{location:{pathname:a,search:m,hash:x,state:y,key:w},navigationType:i}},[l,p,m,x,y,w,i]);return d==null?null:f.createElement($.Provider,{value:c},f.createElement(_.Provider,{children:r,value:d}))}new Promise(()=>{});/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const J="startTransition",L=N[J];function X(e){let{basename:t,children:r,future:n,window:i}=e,h=f.useRef();h.current==null&&(h.current=V({window:i,v5Compat:!0}));let o=h.current,[s,l]=f.useState({action:o.action,location:o.location}),{v7_startTransition:c}=n||{},p=f.useCallback(m=>{c&&L?L(()=>l(m)):l(m)},[l,c]);return f.useLayoutEffect(()=>o.listen(p),[o,p]),f.createElement(G,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:o,future:n})}var T;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(T||(T={}));var A;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(A||(A={}));export{X as B};
