(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[497],{45238:function(e,r){var t,n;void 0!==(n="function"==typeof(t=e=>{"use strict";var r,t,n,l,a=(e,r="<b>",t="</b>")=>{for(var n="function"==typeof r?r:void 0,l=e.target,a=l.length,i=e.indexes,o="",u=0,s=0,c=!1,f=[],d=0;d<a;++d){var v=l[d];if(i[s]===d){if(++s,c||(c=!0,n?(f.push(o),o=""):o+=r),s===i.length){n?(o+=v,f.push(n(o,u++)),o="",f.push(l.substr(d+1))):o+=v+t+l.substr(d+1);break}}else c&&(c=!1,n?(f.push(n(o,u++)),o=""):o+=t);o+=v}return n?f:o},i=e=>{"number"==typeof e?e=""+e:"string"!=typeof e&&(e="");var r=m(e);return s(e,{_targetLower:r._lower,_targetLowerCodes:r.lowerCodes,_bitflags:r.bitflags})};class o{get indexes(){return this._indexes.slice(0,this._indexes.len).sort((e,r)=>e-r)}set indexes(e){return this._indexes=e}highlight(e,r){return a(this,e,r)}get score(){return c(this._score)}set score(e){this._score=f(e)}}class u extends Array{get score(){return c(this._score)}set score(e){this._score=f(e)}}var s=(e,r)=>{let t=new o;return t.target=e,t.obj=r.obj??Z,t._score=r._score??$,t._indexes=r._indexes??[],t._targetLower=r._targetLower??"",t._targetLowerCodes=r._targetLowerCodes??Z,t._nextBeginningIndexes=r._nextBeginningIndexes??Z,t._bitflags=r._bitflags??0,t},c=e=>e===$?0:e>1?e:Math.E**-(((-e+1)**.04307-1)*2),f=e=>0===e?$:e>1?e:1-Math.pow(-(Math.log(e)/2)+1,1/.04307),d=e=>{"number"==typeof e?e=""+e:"string"!=typeof e&&(e="");var r=m(e=e.trim()),t=[];if(r.containsSpace){var n=e.split(/\s+/);n=[...new Set(n)];for(var l=0;l<n.length;l++)if(""!==n[l]){var a=m(n[l]);t.push({lowerCodes:a.lowerCodes,_lower:n[l].toLowerCase(),containsSpace:!1})}}return{lowerCodes:r.lowerCodes,_lower:r._lower,containsSpace:r.containsSpace,bitflags:r.bitflags,spaceSearches:t}},v=e=>{if(e.length>999)return i(e);var r=k.get(e);return void 0!==r||(r=i(e),k.set(e,r)),r},h=e=>{if(e.length>999)return d(e);var r=y.get(e);return void 0!==r||(r=d(e),y.set(e,r)),r},p=(e,r)=>{var t=[];t.total=e.length;var n=r?.limit||V;if(r?.key)for(var l=0;l<e.length;l++){var a=e[l],i=M(a,r.key);if(i!=Z){L(i)||(i=v(i));var o=s(i.target,{_score:i._score,obj:a});if(t.push(o),t.length>=n)break}}else if(r?.keys)for(var l=0;l<e.length;l++){for(var a=e[l],c=new u(r.keys.length),f=r.keys.length-1;f>=0;--f){var i=M(a,r.keys[f]);if(!i){c[f]=P;continue}L(i)||(i=v(i)),i._score=$,i._indexes.len=0,c[f]=i}if(c.obj=a,c._score=$,t.push(c),t.length>=n)break}else for(var l=0;l<e.length;l++){var i=e[l];if(i!=Z&&(L(i)||(i=v(i)),i._score=$,i._indexes.len=0,t.push(i),t.length>=n))break}return t},g=(e,r,t=!1,n=!1)=>{if(!1===t&&e.containsSpace)return b(e,r,n);for(var l=e._lower,a=e.lowerCodes,i=a[0],u=r._targetLowerCodes,s=a.length,c=u.length,f=0,d=0,v=0;;){var h=i===u[d];if(h){if(x[v++]=d,++f===s)break;i=a[f]}if(++d>=c)return Z}var f=0,p=!1,g=0,m=r._nextBeginningIndexes;m===Z&&(m=r._nextBeginningIndexes=w(r.target));var _=0;if((d=0===x[0]?0:m[x[0]-1])!==c)for(;;)if(d>=c){if(f<=0||++_>200)break;--f,d=m[E[--g]]}else{var h=a[f]===u[d];if(h){if(E[g++]=d,++f===s){p=!0;break}++d}else d=m[d]}var k=s<=1?-1:r._targetLower.indexOf(l,x[0]),y=!!~k,S=!!y&&(0===k||r._nextBeginningIndexes[k-1]===k);if(y&&!S){for(var C=0;C<m.length;C=m[C])if(!(C<=k)){for(var I=0;I<s&&a[I]===r._targetLowerCodes[C+I];I++);if(I===s){k=C,S=!0;break}}}var A=e=>{for(var r=0,t=0,n=1;n<s;++n)e[n]-e[n-1]!=1&&(r-=e[n],++t);if(r-=(12+(e[s-1]-e[0]-(s-1)))*t,0!==e[0]&&(r-=e[0]*e[0]*.2),p){for(var l=1,n=m[0];n<c;n=m[n])++l;l>24&&(r*=(l-24)*10)}else r*=1e3;return r-=(c-s)/2,y&&(r/=1+s*s*1),S&&(r/=1+s*s*1),r-=(c-s)/2};if(p){if(S){for(var C=0;C<s;++C)x[C]=k+C;var R=x,M=A(x)}else var R=E,M=A(E)}else{if(y)for(var C=0;C<s;++C)x[C]=k+C;var R=x,M=A(R)}r._score=M;for(var C=0;C<s;++C)r._indexes[C]=R[C];r._indexes.len=s;let L=new o;return L.target=r.target,L._score=r._score,L._indexes=r._indexes,L},b=(e,r,t)=>{for(var n=new Set,l=0,a=Z,i=0,o=e.spaceSearches,u=o.length,s=0,c=()=>{for(let e=s-1;e>=0;e--)r._nextBeginningIndexes[S[2*e+0]]=S[2*e+1]},f=!1,d=0;d<u;++d){if(I[d]=$,a=g(o[d],r),t){if(a===Z)continue;f=!0}else if(a===Z)return c(),Z;if(d!==u-1){var v=a._indexes,h=!0;for(let e=0;e<v.len-1;e++)if(v[e+1]-v[e]!=1){h=!1;break}if(h){var p=v[v.len-1]+1,b=r._nextBeginningIndexes[p-1];for(let e=p-1;e>=0&&b===r._nextBeginningIndexes[e];e--)r._nextBeginningIndexes[e]=p,S[2*s+0]=e,S[2*s+1]=b,s++}}l+=a._score/u,I[d]=a._score/u,a._indexes[0]<i&&(l-=(i-a._indexes[0])*2),i=a._indexes[0];for(var m=0;m<a._indexes.len;++m)n.add(a._indexes[m])}if(t&&!f)return Z;c();var _=g(e,r,!0);if(_!==Z&&_._score>l){if(t)for(var d=0;d<u;++d)I[d]=_._score/u;return _}t&&(a=r),a._score=l;var d=0;for(let e of n)a._indexes[d++]=e;return a._indexes.len=d,a},m=e=>{for(var r=e.length,t=e.toLowerCase(),n=[],l=0,a=!1,i=0;i<r;++i){var o=n[i]=t.charCodeAt(i);if(32===o){a=!0;continue}l|=1<<(o>=97&&o<=122?o-97:o>=48&&o<=57?26:o<=127?30:31)}return{lowerCodes:n,bitflags:l,containsSpace:a,_lower:t}},_=e=>{for(var r=e.length,t=[],n=0,l=!1,a=!1,i=0;i<r;++i){var o=e.charCodeAt(i),u=o>=65&&o<=90,s=u||o>=97&&o<=122||o>=48&&o<=57,c=u&&!l||!a||!s;l=u,a=s,c&&(t[n++]=i)}return t},w=e=>{for(var r=e.length,t=_(e),n=[],l=t[0],a=0,i=0;i<r;++i)l>i?n[i]=l:(l=t[++a],n[i]=void 0===l?r:l);return n},k=new Map,y=new Map,x=[],E=[],S=[],C=[],I=[],A=[],R=[],M=(e,r)=>{var t=e[r];if(void 0!==t)return t;if("function"==typeof r)return r(e);var n=r;Array.isArray(r)||(n=r.split("."));for(var l=n.length,a=-1;e&&++a<l;)e=e[n[a]];return e},L=e=>"object"==typeof e&&"number"==typeof e._bitflags,V=1/0,$=-1/0,j=[];j.total=0;var Z=null,P=i(""),O=(r=[],t=0,n={},l=e=>{for(var n=0,l=r[n],a=1;a<t;){var i=a+1;n=a,i<t&&r[i]._score<r[a]._score&&(n=i),r[n-1>>1]=r[n],a=1+(n<<1)}for(var o=n-1>>1;n>0&&l._score<r[o]._score;o=(n=o)-1>>1)r[n]=r[o];r[n]=l},n.add=e=>{var n=t;r[t++]=e;for(var l=n-1>>1;n>0&&e._score<r[l]._score;l=(n=l)-1>>1)r[n]=r[l];r[n]=e},n.poll=e=>{if(0!==t){var n=r[0];return r[0]=r[--t],l(),n}},n.peek=e=>{if(0!==t)return r[0]},n.replaceTop=e=>{r[0]=e,l()},n);return{single:(e,r)=>{if(!e||!r)return Z;var t=h(e);L(r)||(r=v(r));var n=t.bitflags;return(n&r._bitflags)!==n?Z:g(t,r)},go:(e,r,t)=>{if(!e)return t?.all?p(r,t):j;var n=h(e),l=n.bitflags,a=n.containsSpace,i=f(t?.threshold||0),o=t?.limit||V,s=0,c=0,d=r.length;function b(e){s<o?(O.add(e),++s):(++c,e._score>O.peek()._score&&O.replaceTop(e))}if(t?.key)for(var m=t.key,_=0;_<d;++_){var w=r[_],k=M(w,m);if(k&&(L(k)||(k=v(k)),(l&k._bitflags)===l)){var y=g(n,k);y!==Z&&(y._score<i||(y.obj=w,b(y)))}}else if(t?.keys){var x=t.keys,E=x.length;e:for(var _=0;_<d;++_){for(var w=r[_],S=0,D=0;D<E;++D){var m=x[D],k=M(w,m);if(!k){A[D]=P;continue}L(k)||(k=v(k)),A[D]=k,S|=k._bitflags}if((l&S)===l){if(a)for(let e=0;e<n.spaceSearches.length;e++)C[e]=$;for(var D=0;D<E;++D){if((k=A[D])===P||(R[D]=g(n,k,!1,a),R[D]===Z)){R[D]=P;continue}if(a)for(let e=0;e<n.spaceSearches.length;e++){if(I[e]>-1e3&&C[e]>$){var W=(C[e]+I[e])/4;W>C[e]&&(C[e]=W)}I[e]>C[e]&&(C[e]=I[e])}}if(a){for(let e=0;e<n.spaceSearches.length;e++)if(C[e]===$)continue e}else{var q=!1;for(let e=0;e<E;e++)if(R[e]._score!==$){q=!0;break}if(!q)continue}var B=new u(E);for(let e=0;e<E;e++)B[e]=R[e];if(a){var F=0;for(let e=0;e<n.spaceSearches.length;e++)F+=C[e]}else{var F=$;for(let e=0;e<E;e++){var y=B[e];if(y._score>-1e3&&F>$){var W=(F+y._score)/4;W>F&&(F=W)}y._score>F&&(F=y._score)}}if(B.obj=w,B._score=F,t?.scoreFn){if(!(F=t.scoreFn(B)))continue;F=f(F),B._score=F}F<i||b(B)}}}else for(var _=0;_<d;++_){var k=r[_];if(k&&(L(k)||(k=v(k)),(l&k._bitflags)===l)){var y=g(n,k);y!==Z&&(y._score<i||b(y))}}if(0===s)return j;for(var K=Array(s),_=s-1;_>=0;--_)K[_]=O.poll();return K.total=s+c,K},prepare:i,cleanup:()=>{k.clear(),y.clear()}}})?t.apply(r,[]):t)&&(e.exports=n)},70652:function(e,r,t){e.exports=t(54007)},96887:function(e,r,t){"use strict";t.d(r,{bU:function(){return y},fC:function(){return k}});var n=t(65122),l=t(3546),a=t(65727),i=t(79869),o=t(47091),u=t(27250),s=t(81544),c=t(96593),f=t(72205);let d="Switch",[v,h]=(0,o.b)(d),[p,g]=v(d),b=(0,l.forwardRef)((e,r)=>{let{__scopeSwitch:t,name:o,checked:s,defaultChecked:c,required:d,disabled:v,value:h="on",onCheckedChange:g,...b}=e,[m,k]=(0,l.useState)(null),y=(0,i.e)(r,e=>k(e)),x=(0,l.useRef)(!1),E=!m||!!m.closest("form"),[S=!1,C]=(0,u.T)({prop:s,defaultProp:c,onChange:g});return(0,l.createElement)(p,{scope:t,checked:S,disabled:v},(0,l.createElement)(f.WV.button,(0,n.Z)({type:"button",role:"switch","aria-checked":S,"aria-required":d,"data-state":w(S),"data-disabled":v?"":void 0,disabled:v,value:h},b,{ref:y,onClick:(0,a.M)(e.onClick,e=>{C(e=>!e),E&&(x.current=e.isPropagationStopped(),x.current||e.stopPropagation())})})),E&&(0,l.createElement)(_,{control:m,bubbles:!x.current,name:o,value:h,checked:S,required:d,disabled:v,style:{transform:"translateX(-100%)"}}))}),m=(0,l.forwardRef)((e,r)=>{let{__scopeSwitch:t,...a}=e,i=g("SwitchThumb",t);return(0,l.createElement)(f.WV.span,(0,n.Z)({"data-state":w(i.checked),"data-disabled":i.disabled?"":void 0},a,{ref:r}))}),_=e=>{let{control:r,checked:t,bubbles:a=!0,...i}=e,o=(0,l.useRef)(null),u=(0,s.D)(t),f=(0,c.t)(r);return(0,l.useEffect)(()=>{let e=o.current,r=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(r,"checked"),l=n.set;if(u!==t&&l){let r=new Event("click",{bubbles:a});l.call(e,t),e.dispatchEvent(r)}},[u,t,a]),(0,l.createElement)("input",(0,n.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:t},i,{tabIndex:-1,ref:o,style:{...e.style,...f,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function w(e){return e?"checked":"unchecked"}let k=b,y=m},53241:function(e,r,t){"use strict";t.d(r,{mY:function(){return M}});var n=/[\\\/_+.#"@\[\(\{&]/,l=/[\\\/_+.#"@\[\(\{&]/g,a=/[\s-]/,i=/[\s-]/g;function o(e){return e.toLowerCase().replace(i," ")}var u=t(4318),s=t(3546),c=t(72205),f='[cmdk-group=""]',d='[cmdk-group-items=""]',v='[cmdk-item=""]',h=`${v}:not([aria-disabled="true"])`,p="cmdk-item-select",g="data-value",b=(e,r,t)=>{var u;return u=e,function e(r,t,o,u,s,c,f){if(c===t.length)return s===r.length?1:.99;var d=`${s},${c}`;if(void 0!==f[d])return f[d];for(var v,h,p,g,b=u.charAt(c),m=o.indexOf(b,s),_=0;m>=0;)(v=e(r,t,o,u,m+1,c+1,f))>_&&(m===s?v*=1:n.test(r.charAt(m-1))?(v*=.8,(p=r.slice(s,m-1).match(l))&&s>0&&(v*=Math.pow(.999,p.length))):a.test(r.charAt(m-1))?(v*=.9,(g=r.slice(s,m-1).match(i))&&s>0&&(v*=Math.pow(.999,g.length))):(v*=.17,s>0&&(v*=Math.pow(.999,m-s))),r.charAt(m)!==t.charAt(c)&&(v*=.9999)),(v<.1&&o.charAt(m-1)===u.charAt(c+1)||u.charAt(c+1)===u.charAt(c)&&o.charAt(m-1)!==u.charAt(c))&&.1*(h=e(r,t,o,u,m+1,c+2,f))>v&&(v=.1*h),v>_&&(_=v),m=o.indexOf(b,m+1);return f[d]=_,_}(u=t&&t.length>0?`${u+" "+t.join(" ")}`:u,r,o(u),o(r),0,0,{})},m=s.createContext(void 0),_=()=>s.useContext(m),w=s.createContext(void 0),k=()=>s.useContext(w),y=s.createContext(void 0),x=s.forwardRef((e,r)=>{let t=$(()=>{var r,t;return{search:"",value:null!=(t=null!=(r=e.value)?r:e.defaultValue)?t:"",filtered:{count:0,items:new Map,groups:new Set}}}),n=$(()=>new Set),l=$(()=>new Map),a=$(()=>new Map),i=$(()=>new Set),o=L(e),{label:u,children:_,value:k,onValueChange:y,filter:x,shouldFilter:E,loop:S,disablePointerSelection:C=!1,vimBindings:I=!0,...A}=e,R=s.useId(),M=s.useId(),j=s.useId(),Z=s.useRef(null),P=O();V(()=>{if(void 0!==k){let e=k.trim();t.current.value=e,q.emit()}},[k]),V(()=>{P(6,U)},[]);let q=s.useMemo(()=>({subscribe:e=>(i.current.add(e),()=>i.current.delete(e)),snapshot:()=>t.current,setState:(e,r,n)=>{var l,a,i;if(!Object.is(t.current[e],r)){if(t.current[e]=r,"search"===e)T(),K(),P(1,N);else if("value"===e&&(n||P(5,U),(null==(l=o.current)?void 0:l.value)!==void 0)){let e=null!=r?r:"";null==(i=(a=o.current).onValueChange)||i.call(a,e);return}q.emit()}},emit:()=>{i.current.forEach(e=>e())}}),[]),B=s.useMemo(()=>({value:(e,r,n)=>{var l;r!==(null==(l=a.current.get(e))?void 0:l.value)&&(a.current.set(e,{value:r,keywords:n}),t.current.filtered.items.set(e,F(r,n)),P(2,()=>{K(),q.emit()}))},item:(e,r)=>(n.current.add(e),r&&(l.current.has(r)?l.current.get(r).add(e):l.current.set(r,new Set([e]))),P(3,()=>{T(),K(),t.current.value||N(),q.emit()}),()=>{a.current.delete(e),n.current.delete(e),t.current.filtered.items.delete(e);let r=z();P(4,()=>{T(),(null==r?void 0:r.getAttribute("id"))===e&&N(),q.emit()})}),group:e=>(l.current.has(e)||l.current.set(e,new Set),()=>{a.current.delete(e),l.current.delete(e)}),filter:()=>o.current.shouldFilter,label:u||e["aria-label"],disablePointerSelection:C,listId:R,inputId:j,labelId:M,listInnerRef:Z}),[]);function F(e,r){var n,l;let a=null!=(l=null==(n=o.current)?void 0:n.filter)?l:b;return e?a(e,t.current.search,r):0}function K(){if(!t.current.search||!1===o.current.shouldFilter)return;let e=t.current.filtered.items,r=[];t.current.filtered.groups.forEach(t=>{let n=l.current.get(t),a=0;n.forEach(r=>{a=Math.max(e.get(r),a)}),r.push([t,a])});let n=Z.current;H().sort((r,t)=>{var n,l;let a=r.getAttribute("id"),i=t.getAttribute("id");return(null!=(n=e.get(i))?n:0)-(null!=(l=e.get(a))?l:0)}).forEach(e=>{let r=e.closest(d);r?r.appendChild(e.parentElement===r?e:e.closest(`${d} > *`)):n.appendChild(e.parentElement===n?e:e.closest(`${d} > *`))}),r.sort((e,r)=>r[1]-e[1]).forEach(e=>{let r=Z.current.querySelector(`${f}[${g}="${encodeURIComponent(e[0])}"]`);null==r||r.parentElement.appendChild(r)})}function N(){let e=H().find(e=>"true"!==e.getAttribute("aria-disabled")),r=null==e?void 0:e.getAttribute(g);q.setState("value",r||void 0)}function T(){var e,r,i,u;if(!t.current.search||!1===o.current.shouldFilter){t.current.filtered.count=n.current.size;return}t.current.filtered.groups=new Set;let s=0;for(let l of n.current){let n=F(null!=(r=null==(e=a.current.get(l))?void 0:e.value)?r:"",null!=(u=null==(i=a.current.get(l))?void 0:i.keywords)?u:[]);t.current.filtered.items.set(l,n),n>0&&s++}for(let[e,r]of l.current)for(let n of r)if(t.current.filtered.items.get(n)>0){t.current.filtered.groups.add(e);break}t.current.filtered.count=s}function U(){var e,r,t;let n=z();n&&((null==(e=n.parentElement)?void 0:e.firstChild)===n&&(null==(t=null==(r=n.closest(f))?void 0:r.querySelector('[cmdk-group-heading=""]'))||t.scrollIntoView({block:"nearest"})),n.scrollIntoView({block:"nearest"}))}function z(){var e;return null==(e=Z.current)?void 0:e.querySelector(`${v}[aria-selected="true"]`)}function H(){var e;return Array.from(null==(e=Z.current)?void 0:e.querySelectorAll(h))}function Y(e){let r=H()[e];r&&q.setState("value",r.getAttribute(g))}function G(e){var r;let t=z(),n=H(),l=n.findIndex(e=>e===t),a=n[l+e];null!=(r=o.current)&&r.loop&&(a=l+e<0?n[n.length-1]:l+e===n.length?n[0]:n[l+e]),a&&q.setState("value",a.getAttribute(g))}function X(e){let r=z(),t=null==r?void 0:r.closest(f),n;for(;t&&!n;)n=null==(t=e>0?function(e,r){let t=e.nextElementSibling;for(;t;){if(t.matches(r))return t;t=t.nextElementSibling}}(t,f):function(e,r){let t=e.previousElementSibling;for(;t;){if(t.matches(r))return t;t=t.previousElementSibling}}(t,f))?void 0:t.querySelector(h);n?q.setState("value",n.getAttribute(g)):G(e)}let J=()=>Y(H().length-1),Q=e=>{e.preventDefault(),e.metaKey?J():e.altKey?X(1):G(1)},ee=e=>{e.preventDefault(),e.metaKey?Y(0):e.altKey?X(-1):G(-1)};return s.createElement(c.WV.div,{ref:r,tabIndex:-1,...A,"cmdk-root":"",onKeyDown:e=>{var r;if(null==(r=A.onKeyDown)||r.call(A,e),!e.defaultPrevented)switch(e.key){case"n":case"j":I&&e.ctrlKey&&Q(e);break;case"ArrowDown":Q(e);break;case"p":case"k":I&&e.ctrlKey&&ee(e);break;case"ArrowUp":ee(e);break;case"Home":e.preventDefault(),Y(0);break;case"End":e.preventDefault(),J();break;case"Enter":if(!e.nativeEvent.isComposing&&229!==e.keyCode){e.preventDefault();let r=z();if(r){let e=new Event(p);r.dispatchEvent(e)}}}}},s.createElement("label",{"cmdk-label":"",htmlFor:B.inputId,id:B.labelId,style:W},u),D(e,e=>s.createElement(w.Provider,{value:q},s.createElement(m.Provider,{value:B},e))))}),E=s.forwardRef((e,r)=>{var t,n;let l=s.useId(),a=s.useRef(null),i=s.useContext(y),o=_(),u=L(e),f=null!=(n=null==(t=u.current)?void 0:t.forceMount)?n:null==i?void 0:i.forceMount;V(()=>{if(!f)return o.item(l,null==i?void 0:i.id)},[f]);let d=P(l,a,[e.value,e.children,a],e.keywords),v=k(),h=Z(e=>e.value&&e.value===d.current),g=Z(e=>!!f||!1===o.filter()||!e.search||e.filtered.items.get(l)>0);function b(){var e,r;m(),null==(r=(e=u.current).onSelect)||r.call(e,d.current)}function m(){v.setState("value",d.current,!0)}if(s.useEffect(()=>{let r=a.current;if(!(!r||e.disabled))return r.addEventListener(p,b),()=>r.removeEventListener(p,b)},[g,e.onSelect,e.disabled]),!g)return null;let{disabled:w,value:x,onSelect:E,forceMount:S,keywords:C,...I}=e;return s.createElement(c.WV.div,{ref:j([a,r]),...I,id:l,"cmdk-item":"",role:"option","aria-disabled":!!w,"aria-selected":!!h,"data-disabled":!!w,"data-selected":!!h,onPointerMove:w||o.disablePointerSelection?void 0:m,onClick:w?void 0:b},e.children)}),S=s.forwardRef((e,r)=>{let{heading:t,children:n,forceMount:l,...a}=e,i=s.useId(),o=s.useRef(null),u=s.useRef(null),f=s.useId(),d=_(),v=Z(e=>!!l||!1===d.filter()||!e.search||e.filtered.groups.has(i));V(()=>d.group(i),[]),P(i,o,[e.value,e.heading,u]);let h=s.useMemo(()=>({id:i,forceMount:l}),[l]);return s.createElement(c.WV.div,{ref:j([o,r]),...a,"cmdk-group":"",role:"presentation",hidden:!v||void 0},t&&s.createElement("div",{ref:u,"cmdk-group-heading":"","aria-hidden":!0,id:f},t),D(e,e=>s.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":t?f:void 0},s.createElement(y.Provider,{value:h},e))))}),C=s.forwardRef((e,r)=>{let{alwaysRender:t,...n}=e,l=s.useRef(null),a=Z(e=>!e.search);return t||a?s.createElement(c.WV.div,{ref:j([l,r]),...n,"cmdk-separator":"",role:"separator"}):null}),I=s.forwardRef((e,r)=>{let{onValueChange:t,...n}=e,l=null!=e.value,a=k(),i=Z(e=>e.search),o=Z(e=>e.value),u=_(),f=s.useMemo(()=>{var e;let r=null==(e=u.listInnerRef.current)?void 0:e.querySelector(`${v}[${g}="${encodeURIComponent(o)}"]`);return null==r?void 0:r.getAttribute("id")},[]);return s.useEffect(()=>{null!=e.value&&a.setState("search",e.value)},[e.value]),s.createElement(c.WV.input,{ref:r,...n,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":u.listId,"aria-labelledby":u.labelId,"aria-activedescendant":f,id:u.inputId,type:"text",value:l?e.value:i,onChange:e=>{l||a.setState("search",e.target.value),null==t||t(e.target.value)}})}),A=s.forwardRef((e,r)=>{let{children:t,label:n="Suggestions",...l}=e,a=s.useRef(null),i=s.useRef(null),o=_();return s.useEffect(()=>{if(i.current&&a.current){let e=i.current,r=a.current,t,n=new ResizeObserver(()=>{t=requestAnimationFrame(()=>{let t=e.offsetHeight;r.style.setProperty("--cmdk-list-height",t.toFixed(1)+"px")})});return n.observe(e),()=>{cancelAnimationFrame(t),n.unobserve(e)}}},[]),s.createElement(c.WV.div,{ref:j([a,r]),...l,"cmdk-list":"",role:"listbox","aria-label":n,id:o.listId},D(e,e=>s.createElement("div",{ref:j([i,o.listInnerRef]),"cmdk-list-sizer":""},e)))}),R=s.forwardRef((e,r)=>{let{open:t,onOpenChange:n,overlayClassName:l,contentClassName:a,container:i,...o}=e;return s.createElement(u.fC,{open:t,onOpenChange:n},s.createElement(u.h_,{container:i},s.createElement(u.aV,{"cmdk-overlay":"",className:l}),s.createElement(u.VY,{"aria-label":e.label,"cmdk-dialog":"",className:a},s.createElement(x,{ref:r,...o}))))}),M=Object.assign(x,{List:A,Item:E,Input:I,Group:S,Separator:C,Dialog:R,Empty:s.forwardRef((e,r)=>Z(e=>0===e.filtered.count)?s.createElement(c.WV.div,{ref:r,...e,"cmdk-empty":"",role:"presentation"}):null),Loading:s.forwardRef((e,r)=>{let{progress:t,children:n,label:l="Loading...",...a}=e;return s.createElement(c.WV.div,{ref:r,...a,"cmdk-loading":"",role:"progressbar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":100,"aria-label":l},D(e,e=>s.createElement("div",{"aria-hidden":!0},e)))})});function L(e){let r=s.useRef(e);return V(()=>{r.current=e}),r}var V="undefined"==typeof window?s.useEffect:s.useLayoutEffect;function $(e){let r=s.useRef();return void 0===r.current&&(r.current=e()),r}function j(e){return r=>{e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}}function Z(e){let r=k(),t=()=>e(r.snapshot());return s.useSyncExternalStore(r.subscribe,t,t)}function P(e,r,t,n=[]){let l=s.useRef(),a=_();return V(()=>{var i;let o=(()=>{var e;for(let r of t){if("string"==typeof r)return r.trim();if("object"==typeof r&&"current"in r)return r.current?null==(e=r.current.textContent)?void 0:e.trim():l.current}})(),u=n.map(e=>e.trim());a.value(e,o,u),null==(i=r.current)||i.setAttribute(g,o),l.current=o}),l}var O=()=>{let[e,r]=s.useState(),t=$(()=>new Map);return V(()=>{t.current.forEach(e=>e()),t.current=new Map},[e]),(e,n)=>{t.current.set(e,n),r({})}};function D({asChild:e,children:r},t){let n;return e&&s.isValidElement(r)?s.cloneElement("function"==typeof(n=r.type)?n(r.props):"render"in n?n.render(r.props):r,{ref:r.ref},t(r.props.children)):t(r)}var W={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"}},18216:function(e,r,t){"use strict";var n=t(6670),l=/^\s+/;r.Z=function(e){return e?e.slice(0,(0,n.Z)(e)+1).replace(l,""):e}},6670:function(e,r){"use strict";var t=/\s/;r.Z=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},55357:function(e,r,t){"use strict";var n=t(17996),l=t(96786);r.Z=function(e){return"symbol"==typeof e||(0,l.Z)(e)&&"[object Symbol]"==(0,n.Z)(e)}},26165:function(e,r,t){"use strict";var n=t(18216),l=t(84639),a=t(55357),i=0/0,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;r.Z=function(e){if("number"==typeof e)return e;if((0,a.Z)(e))return i;if((0,l.Z)(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=(0,l.Z)(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=(0,n.Z)(e);var t=u.test(e);return t||s.test(e)?c(e.slice(2),t?2:8):o.test(e)?i:+e}}}]);