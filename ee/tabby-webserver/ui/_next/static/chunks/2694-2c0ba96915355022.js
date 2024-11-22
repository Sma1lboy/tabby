(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2694],{70652:function(e,n,t){e.exports=t(54007)},65727:function(e,n,t){"use strict";function r(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(null==e||e(r),!1===t||!r.defaultPrevented)return null==n?void 0:n(r)}}t.d(n,{M:function(){return r}})},47091:function(e,n,t){"use strict";t.d(n,{b:function(){return o},k:function(){return u}});var r=t(3546);function u(e,n){let t=(0,r.createContext)(n);function u(e){let{children:n,...u}=e,o=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(t.Provider,{value:o},n)}return u.displayName=e+"Provider",[u,function(u){let o=(0,r.useContext)(t);if(o)return o;if(void 0!==n)return n;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function o(e,n=[]){let t=[],u=()=>{let n=t.map(e=>(0,r.createContext)(e));return function(t){let u=(null==t?void 0:t[e])||n;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...t,[e]:u}}),[t,u])}};return u.scopeName=e,[function(n,u){let o=(0,r.createContext)(u),i=t.length;function c(n){let{scope:t,children:u,...c}=n,l=(null==t?void 0:t[e][i])||o,s=(0,r.useMemo)(()=>c,Object.values(c));return(0,r.createElement)(l.Provider,{value:s},u)}return t=[...t,u],c.displayName=n+"Provider",[c,function(t,c){let l=(null==c?void 0:c[e][i])||o,s=(0,r.useContext)(l);if(s)return s;if(void 0!==u)return u;throw Error(`\`${t}\` must be used within \`${n}\``)}]},function(...e){let n=e[0];if(1===e.length)return n;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=t.reduce((n,{useScope:t,scopeName:r})=>{let u=t(e),o=u[`__scope${r}`];return{...n,...o}},{});return(0,r.useMemo)(()=>({[`__scope${n.scopeName}`]:u}),[u])}};return t.scopeName=n.scopeName,t}(u,...n)]}},96497:function(e,n,t){"use strict";t.d(n,{z:function(){return c}});var r=t(3546),u=t(30171),o=t(79869),i=t(65292);let c=e=>{let{present:n,children:t}=e,c=function(e){var n;let[t,o]=(0,r.useState)(),c=(0,r.useRef)({}),s=(0,r.useRef)(e),a=(0,r.useRef)("none"),f=e?"mounted":"unmounted",[d,m]=(n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,t)=>{let r=n[e][t];return null!=r?r:e},f));return(0,r.useEffect)(()=>{let e=l(c.current);a.current="mounted"===d?e:"none"},[d]),(0,i.b)(()=>{let n=c.current,t=s.current,r=t!==e;if(r){let r=a.current,u=l(n);e?m("MOUNT"):"none"===u||(null==n?void 0:n.display)==="none"?m("UNMOUNT"):t&&r!==u?m("ANIMATION_OUT"):m("UNMOUNT"),s.current=e}},[e,m]),(0,i.b)(()=>{if(t){let e=e=>{let n=l(c.current),r=n.includes(e.animationName);e.target===t&&r&&(0,u.flushSync)(()=>m("ANIMATION_END"))},n=e=>{e.target===t&&(a.current=l(c.current))};return t.addEventListener("animationstart",n),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",n),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}m("ANIMATION_END")},[t,m]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:(0,r.useCallback)(e=>{e&&(c.current=getComputedStyle(e)),o(e)},[])}}(n),s="function"==typeof t?t({present:c.isPresent}):r.Children.only(t),a=(0,o.e)(c.ref,s.ref),f="function"==typeof t;return f||c.isPresent?(0,r.cloneElement)(s,{ref:a}):null};function l(e){return(null==e?void 0:e.animationName)||"none"}c.displayName="Presence"},17957:function(e,n,t){"use strict";t.d(n,{W:function(){return u}});var r=t(3546);function u(e){let n=(0,r.useRef)(e);return(0,r.useEffect)(()=>{n.current=e}),(0,r.useMemo)(()=>(...e)=>{var t;return null===(t=n.current)||void 0===t?void 0:t.call(n,...e)},[])}},27250:function(e,n,t){"use strict";t.d(n,{T:function(){return o}});var r=t(3546),u=t(17957);function o({prop:e,defaultProp:n,onChange:t=()=>{}}){let[o,i]=function({defaultProp:e,onChange:n}){let t=(0,r.useState)(e),[o]=t,i=(0,r.useRef)(o),c=(0,u.W)(n);return(0,r.useEffect)(()=>{i.current!==o&&(c(o),i.current=o)},[o,i,c]),t}({defaultProp:n,onChange:t}),c=void 0!==e,l=c?e:o,s=(0,u.W)(t),a=(0,r.useCallback)(n=>{if(c){let t="function"==typeof n?n(e):n;t!==e&&s(t)}else i(n)},[c,e,i,s]);return[l,a]}},11364:function(e,n,t){"use strict";t.d(n,{e:function(){return o}});var r=t(3546),u=t(17957);function o(e,n=null==globalThis?void 0:globalThis.document){let t=(0,u.W)(e);(0,r.useEffect)(()=>{let e=e=>{"Escape"===e.key&&t(e)};return n.addEventListener("keydown",e),()=>n.removeEventListener("keydown",e)},[t,n])}},65292:function(e,n,t){"use strict";t.d(n,{b:function(){return u}});var r=t(3546);let u=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},78613:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(96703),u=t(51722),o=t(26165),i=1/0,c=function(e){var n,t=(n=e)?(n=(0,o.Z)(n))===i||n===-i?(n<0?-1:1)*17976931348623157e292:n==n?n:0:0===n?n:0,r=t%1;return t==t?r?t-r:t:0},l=Math.max,s=function(e,n,t){var o=null==e?0:e.length;if(!o)return -1;var i=null==t?0:c(t);return i<0&&(i=l(o+i,0)),(0,r.Z)(e,(0,u.Z)(n,3),i)}},94909:function(e,n,t){"use strict";var r=t(63563),u=t(43108),o=t(97589),i=t(38813),c=t(20568),l=t(90328),s=t(36586),a=t(33321),f=Object.prototype.hasOwnProperty;n.Z=function(e){if(null==e)return!0;if((0,c.Z)(e)&&((0,i.Z)(e)||"string"==typeof e||"function"==typeof e.splice||(0,l.Z)(e)||(0,a.Z)(e)||(0,o.Z)(e)))return!e.length;var n=(0,u.Z)(e);if("[object Map]"==n||"[object Set]"==n)return!e.size;if((0,s.Z)(e))return!(0,r.Z)(e).length;for(var t in e)if(f.call(e,t))return!1;return!0}}}]);