(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2718],{70652:function(e,t,n){e.exports=n(54007)},11978:function(e,t,n){e.exports=n(77280)},6424:function(e,t,n){"use strict";n.d(t,{B:function(){return i}});var r=n(3546),o=n(47091),a=n(79869),u=n(74047);function i(e){let t=e+"CollectionProvider",[n,i]=(0,o.b)(t),[l,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e+"CollectionSlot",f=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,i=c(s,n),l=(0,a.e)(t,i.collectionRef);return r.createElement(u.g7,{ref:l},o)}),d=e+"CollectionItemSlot",p="data-radix-collection-item",v=r.forwardRef((e,t)=>{let{scope:n,children:o,...i}=e,l=r.useRef(null),s=(0,a.e)(t,l),f=c(d,n);return r.useEffect(()=>(f.itemMap.set(l,{ref:l,...i}),()=>void f.itemMap.delete(l))),r.createElement(u.g7,{[p]:"",ref:s},o)});return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),a=r.useRef(new Map).current;return r.createElement(l,{scope:t,itemMap:a,collectionRef:o},n)},Slot:f,ItemSlot:v},function(t){let n=c(e+"CollectionConsumer",t),o=r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return o},i]}},57541:function(e,t,n){"use strict";n.d(t,{gm:function(){return a}});var r=n(3546);let o=(0,r.createContext)(void 0);function a(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},29434:function(e,t,n){"use strict";n.d(t,{M:function(){return l}});var r,o=n(3546),a=n(65292);let u=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),i=0;function l(e){let[t,n]=o.useState(u());return(0,a.b)(()=>{e||n(e=>null!=e?e:String(i++))},[e]),e||(t?`radix-${t}`:"")}},89386:function(e,t,n){"use strict";n.d(t,{Pc:function(){return R},ck:function(){return A},fC:function(){return _}});var r=n(65122),o=n(3546),a=n(65727),u=n(6424),i=n(79869),l=n(47091),c=n(29434),s=n(72205),f=n(17957),d=n(27250),p=n(57541);let v="rovingFocusGroup.onEntryFocus",m={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[g,w,C]=(0,u.B)(b),[E,R]=(0,l.b)(b,[C]),[h,M]=E(b),I=(0,o.forwardRef)((e,t)=>(0,o.createElement)(g.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(g.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(T,(0,r.Z)({},e,{ref:t}))))),T=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:u,loop:l=!1,dir:c,currentTabStopId:b,defaultCurrentTabStopId:g,onCurrentTabStopIdChange:C,onEntryFocus:E,...R}=e,M=(0,o.useRef)(null),I=(0,i.e)(t,M),T=(0,p.gm)(c),[F=null,y]=(0,d.T)({prop:b,defaultProp:g,onChange:C}),[_,A]=(0,o.useState)(!1),D=(0,f.W)(E),x=w(n),k=(0,o.useRef)(!1),[P,V]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=M.current;if(e)return e.addEventListener(v,D),()=>e.removeEventListener(v,D)},[D]),(0,o.createElement)(h,{scope:n,orientation:u,dir:T,loop:l,currentTabStopId:F,onItemFocus:(0,o.useCallback)(e=>y(e),[y]),onItemShiftTab:(0,o.useCallback)(()=>A(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>V(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>V(e=>e-1),[])},(0,o.createElement)(s.WV.div,(0,r.Z)({tabIndex:_||0===P?-1:0,"data-orientation":u},R,{ref:I,style:{outline:"none",...e.style},onMouseDown:(0,a.M)(e.onMouseDown,()=>{k.current=!0}),onFocus:(0,a.M)(e.onFocus,e=>{let t=!k.current;if(e.target===e.currentTarget&&t&&!_){let t=new CustomEvent(v,m);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=x().filter(e=>e.focusable),t=e.find(e=>e.active),n=e.find(e=>e.id===F),r=[t,n,...e].filter(Boolean),o=r.map(e=>e.ref.current);S(o)}}k.current=!1}),onBlur:(0,a.M)(e.onBlur,()=>A(!1))})))}),F=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:u=!0,active:i=!1,tabStopId:l,...f}=e,d=(0,c.M)(),p=l||d,v=M("RovingFocusGroupItem",n),m=v.currentTabStopId===p,b=w(n),{onFocusableItemAdd:C,onFocusableItemRemove:E}=v;return(0,o.useEffect)(()=>{if(u)return C(),()=>E()},[u,C,E]),(0,o.createElement)(g.ItemSlot,{scope:n,id:p,focusable:u,active:i},(0,o.createElement)(s.WV.span,(0,r.Z)({tabIndex:m?0:-1,"data-orientation":v.orientation},f,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{u?v.onItemFocus(p):e.preventDefault()}),onFocus:(0,a.M)(e.onFocus,()=>v.onItemFocus(p)),onKeyDown:(0,a.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){v.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return y[o]}(e,v.orientation,v.dir);if(void 0!==t){e.preventDefault();let o=b().filter(e=>e.focusable),a=o.map(e=>e.ref.current);if("last"===t)a.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&a.reverse();let o=a.indexOf(e.currentTarget);a=v.loop?(n=a,r=o+1,n.map((e,t)=>n[(r+t)%n.length])):a.slice(o+1)}setTimeout(()=>S(a))}})})))}),y={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function S(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}let _=I,A=F},6044:function(e,t,n){"use strict";n.d(t,{VY:function(){return S},aV:function(){return F},fC:function(){return T},nU:function(){return h},xz:function(){return y}});var r=n(65122),o=n(3546),a=n(65727),u=n(47091),i=n(89386),l=n(96497),c=n(72205),s=n(57541),f=n(27250),d=n(29434);let p="Tabs",[v,m]=(0,u.b)(p,[i.Pc]),b=(0,i.Pc)(),[g,w]=v(p),C=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:a,onValueChange:u,defaultValue:i,orientation:l="horizontal",dir:p,activationMode:v="automatic",...m}=e,b=(0,s.gm)(p),[w,C]=(0,f.T)({prop:a,onChange:u,defaultProp:i});return(0,o.createElement)(g,{scope:n,baseId:(0,d.M)(),value:w,onValueChange:C,orientation:l,dir:b,activationMode:v},(0,o.createElement)(c.WV.div,(0,r.Z)({dir:b,"data-orientation":l},m,{ref:t})))}),E=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,loop:a=!0,...u}=e,l=w("TabsList",n),s=b(n);return(0,o.createElement)(i.fC,(0,r.Z)({asChild:!0},s,{orientation:l.orientation,dir:l.dir,loop:a}),(0,o.createElement)(c.WV.div,(0,r.Z)({role:"tablist","aria-orientation":l.orientation},u,{ref:t})))}),R=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:u,disabled:l=!1,...s}=e,f=w("TabsTrigger",n),d=b(n),p=M(f.baseId,u),v=I(f.baseId,u),m=u===f.value;return(0,o.createElement)(i.ck,(0,r.Z)({asChild:!0},d,{focusable:!l,active:m}),(0,o.createElement)(c.WV.button,(0,r.Z)({type:"button",role:"tab","aria-selected":m,"aria-controls":v,"data-state":m?"active":"inactive","data-disabled":l?"":void 0,disabled:l,id:p},s,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{l||0!==e.button||!1!==e.ctrlKey?e.preventDefault():f.onValueChange(u)}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&f.onValueChange(u)}),onFocus:(0,a.M)(e.onFocus,()=>{let e="manual"!==f.activationMode;m||l||!e||f.onValueChange(u)})})))}),h=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:a,forceMount:u,children:i,...s}=e,f=w("TabsContent",n),d=M(f.baseId,a),p=I(f.baseId,a),v=a===f.value,m=(0,o.useRef)(v);return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,o.createElement)(l.z,{present:u||v},({present:n})=>(0,o.createElement)(c.WV.div,(0,r.Z)({"data-state":v?"active":"inactive","data-orientation":f.orientation,role:"tabpanel","aria-labelledby":d,hidden:!n,id:p,tabIndex:0},s,{ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0}}),n&&i))});function M(e,t){return`${e}-trigger-${t}`}function I(e,t){return`${e}-content-${t}`}let T=C,F=E,y=R,S=h},27250:function(e,t,n){"use strict";n.d(t,{T:function(){return a}});var r=n(3546),o=n(17957);function a({prop:e,defaultProp:t,onChange:n=()=>{}}){let[a,u]=function({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[a]=n,u=(0,r.useRef)(a),i=(0,o.W)(t);return(0,r.useEffect)(()=>{u.current!==a&&(i(a),u.current=a)},[a,u,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,l=i?e:a,c=(0,o.W)(n),s=(0,r.useCallback)(t=>{if(i){let n="function"==typeof t?t(e):t;n!==e&&c(n)}else u(t)},[i,e,u,c]);return[l,s]}}}]);