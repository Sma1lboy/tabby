(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5593],{28242:function(e,t,r){"use strict";r.d(t,{F:function(){return s},f:function(){return c}});var n=r(3546);let o=["light","dark"],a="(prefers-color-scheme: dark)",i="undefined"==typeof window,l=(0,n.createContext)(void 0),u={setTheme:e=>{},themes:[]},s=()=>{var e;return null!==(e=(0,n.useContext)(l))&&void 0!==e?e:u},c=e=>(0,n.useContext)(l)?n.createElement(n.Fragment,null,e.children):n.createElement(f,e),m=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:i=!0,storageKey:u="theme",themes:s=m,defaultTheme:c=r?"system":"light",attribute:f="data-theme",value:g,children:v,nonce:y})=>{let[_,x]=(0,n.useState)(()=>h(u,c)),[F,$]=(0,n.useState)(()=>h(u)),w=g?Object.values(g):s,N=(0,n.useCallback)(e=>{let n=e;if(!n)return;"system"===e&&r&&(n=p());let a=g?g[n]:n,l=t?b():null,u=document.documentElement;if("class"===f?(u.classList.remove(...w),a&&u.classList.add(a)):a?u.setAttribute(f,a):u.removeAttribute(f),i){let e=o.includes(c)?c:null,t=o.includes(n)?n:e;u.style.colorScheme=t}null==l||l()},[]),T=(0,n.useCallback)(e=>{x(e);try{localStorage.setItem(u,e)}catch(e){}},[e]),M=(0,n.useCallback)(t=>{let n=p(t);$(n),"system"===_&&r&&!e&&N("system")},[_,e]);(0,n.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(M),M(e),()=>e.removeListener(M)},[M]),(0,n.useEffect)(()=>{let e=e=>{e.key===u&&T(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),(0,n.useEffect)(()=>{N(null!=e?e:_)},[e,_]);let S=(0,n.useMemo)(()=>({theme:_,setTheme:T,forcedTheme:e,resolvedTheme:"system"===_?F:_,themes:r?[...s,"system"]:s,systemTheme:r?F:void 0}),[_,T,e,F,r,s]);return n.createElement(l.Provider,{value:S},n.createElement(d,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:i,storageKey:u,themes:s,defaultTheme:c,attribute:f,value:g,children:v,attrs:w,nonce:y}),v)},d=(0,n.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:i,enableColorScheme:l,defaultTheme:u,value:s,attrs:c,nonce:m})=>{let f="system"===u,d="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,h=l?o.includes(u)&&u?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",b=(e,t=!1,n=!0)=>{let a=s?s[e]:e,i=t?e+"|| ''":`'${a}'`,u="";return l&&n&&!t&&o.includes(e)&&(u+=`d.style.colorScheme = '${e}';`),"class"===r?u+=t||a?`c.add(${i})`:"null":a&&(u+=`d[s](n,${i})`),u},p=e?`!function(){${d}${b(e)}}()`:i?`!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${b("dark")}}else{${b("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${b(s?"x[e]":"e",!0)}}${f?"":"else{"+b(u,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${b(s?"x[e]":"e",!0)}}else{${b(u,!1,!1)};}${h}}catch(t){}}();`;return n.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:p}})},()=>!0),h=(e,t)=>{let r;if(!i){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},b=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},39018:function(e,t,r){var n,o;void 0!==(o="function"==typeof(n=function(){var e,t,r,n,o,a={},i={},l={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},u={currentLocale:l.currentLocale,zeroFormat:l.zeroFormat,nullFormat:l.nullFormat,defaultFormat:l.defaultFormat,scalePercentBy100:l.scalePercentBy100};function s(e,t){this._input=e,this._value=t}return(n=function(e){var t,r,i,l;if(n.isNumeral(e))t=e.value();else if(0===e||void 0===e)t=0;else if(null===e||o.isNaN(e))t=null;else if("string"==typeof e){if(u.zeroFormat&&e===u.zeroFormat)t=0;else if(u.nullFormat&&e===u.nullFormat||!e.replace(/[^0-9]+/g,"").length)t=null;else{for(r in a)if((l="function"==typeof a[r].regexps.unformat?a[r].regexps.unformat():a[r].regexps.unformat)&&e.match(l)){i=a[r].unformat;break}t=(i=i||n._.stringToNumber)(e)}}else t=Number(e)||null;return new s(e,t)}).version="2.0.6",n.isNumeral=function(e){return e instanceof s},n._=o={numberToFormat:function(e,t,r){var o,a,l,u,s,c,m,f=i[n.options.currentLocale],d=!1,h=!1,b=0,p="",g="",v=!1;if(a=Math.abs(e=e||0),n._.includes(t,"(")?(d=!0,t=t.replace(/[\(|\)]/g,"")):(n._.includes(t,"+")||n._.includes(t,"-"))&&(s=n._.includes(t,"+")?t.indexOf("+"):e<0?t.indexOf("-"):-1,t=t.replace(/[\+|\-]/g,"")),n._.includes(t,"a")&&(o=!!(o=t.match(/a(k|m|b|t)?/))&&o[1],n._.includes(t," a")&&(p=" "),t=t.replace(RegExp(p+"a[kmbt]?"),""),a>=1e12&&!o||"t"===o?(p+=f.abbreviations.trillion,e/=1e12):a<1e12&&a>=1e9&&!o||"b"===o?(p+=f.abbreviations.billion,e/=1e9):a<1e9&&a>=1e6&&!o||"m"===o?(p+=f.abbreviations.million,e/=1e6):(a<1e6&&a>=1e3&&!o||"k"===o)&&(p+=f.abbreviations.thousand,e/=1e3)),n._.includes(t,"[.]")&&(h=!0,t=t.replace("[.]",".")),l=e.toString().split(".")[0],u=t.split(".")[1],c=t.indexOf(","),b=(t.split(".")[0].split(",")[0].match(/0/g)||[]).length,u?(n._.includes(u,"[")?(u=(u=u.replace("]","")).split("["),g=n._.toFixed(e,u[0].length+u[1].length,r,u[1].length)):g=n._.toFixed(e,u.length,r),l=g.split(".")[0],g=n._.includes(g,".")?f.delimiters.decimal+g.split(".")[1]:"",h&&0===Number(g.slice(1))&&(g="")):l=n._.toFixed(e,0,r),p&&!o&&Number(l)>=1e3&&p!==f.abbreviations.trillion)switch(l=String(Number(l)/1e3),p){case f.abbreviations.thousand:p=f.abbreviations.million;break;case f.abbreviations.million:p=f.abbreviations.billion;break;case f.abbreviations.billion:p=f.abbreviations.trillion}if(n._.includes(l,"-")&&(l=l.slice(1),v=!0),l.length<b)for(var y=b-l.length;y>0;y--)l="0"+l;return c>-1&&(l=l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+f.delimiters.thousands)),0===t.indexOf(".")&&(l=""),m=l+g+(p||""),d?m=(d&&v?"(":"")+m+(d&&v?")":""):s>=0?m=0===s?(v?"-":"+")+m:m+(v?"-":"+"):v&&(m="-"+m),m},stringToNumber:function(e){var t,r,n,o=i[u.currentLocale],a=e,l={thousand:3,million:6,billion:9,trillion:12};if(u.zeroFormat&&e===u.zeroFormat)r=0;else if(u.nullFormat&&e===u.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in r=1,"."!==o.delimiters.decimal&&(e=e.replace(/\./g,"").replace(o.delimiters.decimal,".")),l)if(n=RegExp("[^a-zA-Z]"+o.abbreviations[t]+"(?:\\)|(\\"+o.currency.symbol+")?(?:\\))?)?$"),a.match(n)){r*=Math.pow(10,l[t]);break}r*=((e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1)*Number(e=e.replace(/[^0-9\.]+/g,""))}return r},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,t){return -1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(this===null)throw TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw TypeError(t+" is not a function");var r,n=Object(e),o=n.length>>>0,a=0;if(3==arguments.length)r=arguments[2];else{for(;a<o&&!(a in n);)a++;if(a>=o)throw TypeError("Reduce of empty array with no initial value");r=n[a++]}for(;a<o;a++)a in n&&(r=t(r,n[a],a,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){var e=Array.prototype.slice.call(arguments);return e.reduce(function(e,t){var r=o.multiplier(t);return e>r?e:r},1)},toFixed:function(e,t,r,n){var o,a,i,l,u=e.toString().split("."),s=t-(n||0);return i=Math.pow(10,o=2===u.length?Math.min(Math.max(u[1].length,s),t):s),l=(r(e+"e+"+o)/i).toFixed(o),n>t-o&&(a=RegExp("\\.?0{1,"+(n-(t-o))+"}$"),l=l.replace(a,"")),l}},n.options=u,n.formats=a,n.locales=i,n.locale=function(e){return e&&(u.currentLocale=e.toLowerCase()),u.currentLocale},n.localeData=function(e){if(!e)return i[u.currentLocale];if(!i[e=e.toLowerCase()])throw Error("Unknown locale : "+e);return i[e]},n.reset=function(){for(var e in l)u[e]=l[e]},n.zeroFormat=function(e){u.zeroFormat="string"==typeof e?e:null},n.nullFormat=function(e){u.nullFormat="string"==typeof e?e:null},n.defaultFormat=function(e){u.defaultFormat="string"==typeof e?e:"0.0"},n.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},n.validate=function(e,t){var r,o,a,i,l,u,s,c;if("string"!=typeof e&&(e+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",e)),(e=e.trim()).match(/^\d+$/))return!0;if(""===e)return!1;try{s=n.localeData(t)}catch(e){s=n.localeData(n.locale())}return a=s.currency.symbol,l=s.abbreviations,r=s.delimiters.decimal,o="."===s.delimiters.thousands?"\\.":s.delimiters.thousands,(null===(c=e.match(/^[^\d]+/))||(e=e.substr(1),c[0]===a))&&(null===(c=e.match(/[^\d]+$/))||(e=e.slice(0,-1),c[0]===l.thousand||c[0]===l.million||c[0]===l.billion||c[0]===l.trillion))&&(u=RegExp(o+"{2}"),!e.match(/[^\d.,]/g)&&!((i=e.split(r)).length>2)&&(i.length<2?!!i[0].match(/^\d+.*\d$/)&&!i[0].match(u):1===i[0].length?!!i[0].match(/^\d+$/)&&!i[0].match(u)&&!!i[1].match(/^\d+$/):!!i[0].match(/^\d+.*\d$/)&&!i[0].match(u)&&!!i[1].match(/^\d+$/)))},n.fn=s.prototype={clone:function(){return n(this)},format:function(e,t){var r,o,i,l=this._value,s=e||u.defaultFormat;if(t=t||Math.round,0===l&&null!==u.zeroFormat)o=u.zeroFormat;else if(null===l&&null!==u.nullFormat)o=u.nullFormat;else{for(r in a)if(s.match(a[r].regexps.format)){i=a[r].format;break}o=(i=i||n._.numberToFormat)(l,s,t)}return o},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var t=o.correctionFactor.call(null,this._value,e);return this._value=o.reduce([this._value,e],function(e,r,n,o){return e+Math.round(t*r)},0)/t,this},subtract:function(e){var t=o.correctionFactor.call(null,this._value,e);return this._value=o.reduce([e],function(e,r,n,o){return e-Math.round(t*r)},Math.round(this._value*t))/t,this},multiply:function(e){return this._value=o.reduce([this._value,e],function(e,t,r,n){var a=o.correctionFactor(e,t);return Math.round(e*a)*Math.round(t*a)/Math.round(a*a)},1),this},divide:function(e){return this._value=o.reduce([this._value,e],function(e,t,r,n){var a=o.correctionFactor(e,t);return Math.round(e*a)/Math.round(t*a)}),this},difference:function(e){return Math.abs(n(this._value).subtract(e).value())}},n.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),n.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(e,t,r){var o,a=n._.includes(t," BPS")?" ":"";return e*=1e4,t=t.replace(/\s?BPS/,""),o=n._.numberToFormat(e,t,r),n._.includes(o,")")?((o=o.split("")).splice(-1,0,a+"BPS"),o=o.join("")):o=o+a+"BPS",o},unformat:function(e){return+(1e-4*n._.stringToNumber(e)).toFixed(15)}}),t={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},r="("+(r=(e={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(t.suffixes.filter(function(t){return 0>e.suffixes.indexOf(t)})).join("|")).replace("B","B(?!PS)")+")",n.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(r)},format:function(r,o,a){var i,l,u,s=n._.includes(o,"ib")?t:e,c=n._.includes(o," b")||n._.includes(o," ib")?" ":"";for(i=0,o=o.replace(/\s?i?b/,"");i<=s.suffixes.length;i++)if(l=Math.pow(s.base,i),u=Math.pow(s.base,i+1),null===r||0===r||r>=l&&r<u){c+=s.suffixes[i],l>0&&(r/=l);break}return n._.numberToFormat(r,o,a)+c},unformat:function(r){var o,a,i=n._.stringToNumber(r);if(i){for(o=e.suffixes.length-1;o>=0;o--){if(n._.includes(r,e.suffixes[o])){a=Math.pow(e.base,o);break}if(n._.includes(r,t.suffixes[o])){a=Math.pow(t.base,o);break}}i*=a||1}return i}}),n.register("format","currency",{regexps:{format:/(\$)/},format:function(e,t,r){var o,a,i=n.locales[n.options.currentLocale],l={before:t.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:t.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(t=t.replace(/\s?\$\s?/,""),o=n._.numberToFormat(e,t,r),e>=0?(l.before=l.before.replace(/[\-\(]/,""),l.after=l.after.replace(/[\-\)]/,"")):!(e<0)||n._.includes(l.before,"-")||n._.includes(l.before,"(")||(l.before="-"+l.before),a=0;a<l.before.length;a++)switch(l.before[a]){case"$":o=n._.insert(o,i.currency.symbol,a);break;case" ":o=n._.insert(o," ",a+i.currency.symbol.length-1)}for(a=l.after.length-1;a>=0;a--)switch(l.after[a]){case"$":o=a===l.after.length-1?o+i.currency.symbol:n._.insert(o,i.currency.symbol,-(l.after.length-(1+a)));break;case" ":o=a===l.after.length-1?o+" ":n._.insert(o," ",-(l.after.length-(1+a)+i.currency.symbol.length-1))}return o}}),n.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(e,t,r){var o=("number"!=typeof e||n._.isNaN(e)?"0e+0":e.toExponential()).split("e");return t=t.replace(/e[\+|\-]{1}0/,""),n._.numberToFormat(Number(o[0]),t,r)+"e"+o[1]},unformat:function(e){var t=n._.includes(e,"e+")?e.split("e+"):e.split("e-"),r=Number(t[0]),o=Number(t[1]);return o=n._.includes(e,"e-")?o*=-1:o,n._.reduce([r,Math.pow(10,o)],function(e,t,r,o){var a=n._.correctionFactor(e,t);return e*a*(t*a)/(a*a)},1)}}),n.register("format","ordinal",{regexps:{format:/(o)/},format:function(e,t,r){var o=n.locales[n.options.currentLocale],a=n._.includes(t," o")?" ":"";return t=t.replace(/\s?o/,""),a+=o.ordinal(e),n._.numberToFormat(e,t,r)+a}}),n.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(e,t,r){var o,a=n._.includes(t," %")?" ":"";return n.options.scalePercentBy100&&(e*=100),t=t.replace(/\s?\%/,""),o=n._.numberToFormat(e,t,r),n._.includes(o,")")?((o=o.split("")).splice(-1,0,a+"%"),o=o.join("")):o=o+a+"%",o},unformat:function(e){var t=n._.stringToNumber(e);return n.options.scalePercentBy100?.01*t:t}}),n.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),o=Math.floor((e-3600*n)/60),a=Math.round(e-3600*n-60*o);return n+":"+(o<10?"0"+o:o)+":"+(a<10?"0"+a:a)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?r+=3600*Number(t[0])+60*Number(t[1])+Number(t[2]):2===t.length&&(r+=60*Number(t[0])+Number(t[1])),Number(r)}}),n})?n.call(t,r,t,e):n)&&(e.exports=o)}}]);