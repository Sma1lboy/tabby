(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2685],{23057:function(e,t,n){"use strict";n.d(t,{Z:function(){return G}});var r=n(36164),o=n(3546),s=n(21808),l=n(9010),i=n(57288),a=n(29),d=n(6230);n(15812);var c=n(46836),u=n(75866),m=n(97216),h=n(48497),x=n(10155),p=n(31408),f=n(68035),v=n(16784),g=n(10345),j=n(83171);let b="mention",y=g.ZP.extend({addNodeView:()=>(0,f.fW)(j.t),renderText(e){let{node:t}=e;return"[[source:".concat(t.attrs.id,"]]")},addAttributes:()=>({id:{default:null,parseHTML:e=>e.getAttribute("data-id"),renderHTML:e=>e.id?{"data-id":e.id}:{}},label:{default:null,parseHTML:e=>e.getAttribute("data-label"),renderHTML:e=>e.label?{"data-label":e.label}:{}},kind:{default:null,parseHTML:e=>e.getAttribute("data-kind"),renderHTML:e=>e.kind?{"data-kind":e.kind}:{}}})});n(44750);var w=n(31022),k=n(45238),N=n(18500),C=n(81565);let I=(0,o.forwardRef)((e,t)=>{let{query:n,command:s,category:l}=e,{list:a,pending:d}=(0,o.useContext)(A),[c,u]=(0,o.useState)(0),m=(0,o.useMemo)(()=>{if(!(null==a?void 0:a.length))return[];let e=a.filter(e=>(0,i._q)(e.sourceKind)).map(e=>({type:"source",category:"doc",id:e.sourceId,label:e.sourceName,data:e})),t=a.filter(e=>(0,i.wO)(e.sourceKind)).map(e=>({type:"source",category:"code",id:e.sourceId,label:e.sourceName,data:e}));return"doc"===l?e:t},[l,a]),h=(0,o.useMemo)(()=>{if(!n)return m;let e=(0,k.go)(n,m,{key:e=>e.label});return e.map(e=>e.obj)},[n,m]),x=()=>{u((c+h.length-1)%h.length)},p=()=>{u((c+1)%h.length)},f=e=>{let t=h[e];t&&s({id:t.data.sourceId,label:t.label,kind:t.data.sourceKind})},v=()=>{f(c)};return(0,o.useEffect)(()=>u(0),[m]),(0,o.useImperativeHandle)(t,()=>({onKeyDown:e=>{let{event:t}=e;return"ArrowUp"===t.key?(x(),!0):"ArrowDown"===t.key?(p(),!0):"Enter"===t.key&&(v(),!0)}})),(0,r.jsx)("div",{className:"dropdown-menu max-h-[30vh] min-w-[20rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-2 text-popover-foreground shadow animate-in",children:d?(0,r.jsx)("div",{className:"px-2 py-1.5",children:(0,r.jsx)(C.IconSpinner,{})}):h.length?h.map((e,t)=>(0,r.jsx)(E,{onClick:()=>f(t),onMouseEnter:()=>u(t),title:e.label,data:e,isSelected:t===c},e.id)):(0,r.jsx)("div",{className:"px-2 py-1.5 text-sm text-muted-foreground",children:(null==m?void 0:m.length)?(0,r.jsx)("span",{children:"No matches results"}):(0,r.jsx)("span",{children:"No results"})})})});function S(e){let{kind:t}=e;switch(t){case N.ri.Doc:return(0,r.jsx)(C.IconEmojiBook,{});case N.ri.Web:return(0,r.jsx)(C.IconEmojiGlobe,{});case N.ri.Git:return(0,r.jsx)(C.IconCode,{});case N.ri.Github:return(0,r.jsx)(C.IconGitHub,{});case N.ri.Gitlab:return(0,r.jsx)(C.IconGitLab,{});default:return null}}function E(e){let{isSelected:t,data:n,...s}=e,l=(0,o.useRef)(null);return(0,o.useLayoutEffect)(()=>{if(t&&l.current){var e;null===(e=l.current)||void 0===e||e.scrollIntoView({block:"nearest",inline:"nearest"})}},[t]),(0,r.jsxs)("div",{className:(0,i.cn)("flex cursor-pointer gap-1 rounded-md px-2 py-1.5 text-sm",{"bg-accent text-accent-foreground":t}),...s,ref:l,children:[(0,r.jsx)("span",{className:"flex h-5 shrink-0 items-center",children:(0,r.jsx)(S,{kind:n.data.sourceKind})}),(0,r.jsx)("span",{className:"flex-1",children:n.label})]})}I.displayName="MetionList";let R=e=>{let t=e.getJSON(),n=[],r=0,o=e=>{var t,s;"text"===e.type?r+=(null==e?void 0:null===(t=e.text)||void 0===t?void 0:t.length)||0:"mention"===e.type&&(null==e?void 0:null===(s=e.attrs)||void 0===s?void 0:s.id)&&n.push({id:e.attrs.id,label:e.attrs.label,kind:e.attrs.kind}),e.content&&e.content.forEach(o)};return o(t),n};var M=e=>{let{disabled:t,category:n,placement:r,char:o="@",pluginKey:s}=e;return{render:()=>{let e,t;return{onStart:o=>{let s=R(o.editor);e=new f.M_(I,{props:{...o,mentions:s,category:n},editor:o.editor}),o.clientRect&&(t=(0,w.ZP)("body",{getReferenceClientRect:o.clientRect,appendTo:()=>document.body,content:e.element,showOnCreate:!0,interactive:!0,trigger:"manual",placement:r||"bottom-start",animation:"shift-away",maxWidth:"400px"}))},onUpdate(n){e.updateProps(n),n.clientRect&&t[0].setProps({getReferenceClientRect:n.clientRect})},onKeyDown(n){var r,o;return"Escape"===n.event.key?(t[0].hide(),!0):null!==(o=null===(r=e.ref)||void 0===r?void 0:r.onKeyDown(n))&&void 0!==o&&o},onExit(){t[0].destroy(),e.destroy()}}},char:o,pluginKey:s,command:e=>{var t,r,o;let{editor:s,range:l,props:a}=e;if("code"===n){!function(e,t,n){let r;let{doc:o}=e.state,s=e.state.selection.$from;o.descendants((e,t)=>!("mention"===e.type.name&&(0,i.wO)(e.attrs.kind))||(r=t,!1)),e.chain().deleteRange({from:t.from,to:t.to}).run();let l=void 0!==r,a=o.firstChild,d=l?[{type:b,attrs:n}]:[{type:b,attrs:n},{type:"text",text:" "}];if(a&&"paragraph"===a.type.name){let t=a.firstChild;if(t&&"mention"===t.type.name&&(0,i.wO)(t.attrs.kind)){let n=t.nodeSize;e.chain().deleteRange({from:1,to:1+n}).insertContentAt(1,d).focus().run()}else e.chain().insertContentAt(1,d).focus().run()}else e.chain().insertContentAt(0,d).focus().run();e.commands.focus(l?s.pos:s.pos+1)}(s,l,a);return}let d=s.view.state.selection.$to.nodeAfter,c=null==d?void 0:null===(t=d.text)||void 0===t?void 0:t.startsWith(" ");c&&(l.to+=1),s.chain().focus().insertContentAt(l,[{type:b,attrs:a},{type:"text",text:" "}]).run(),null===(o=s.view.dom.ownerDocument.defaultView)||void 0===o||null===(r=o.getSelection())||void 0===r||r.collapseToEnd()},allow:e=>{let{state:n,range:r}=e;if(t)return!1;let o=n.doc.resolve(r.from),s=n.schema.nodes[b],l=!!o.parent.type.contentMatch.matchType(s);return l}}};let T=new x.H$("mention-doc");new x.H$("mention-code");let Z=e=>p.hj.create({addKeyboardShortcuts(){return{Enter:t=>{let{editor:n}=t;return e(n),!0},"Shift-Enter":()=>this.editor.commands.first(e=>{let{commands:t}=e;return[()=>t.newlineInCode(),()=>t.createParagraphNear(),()=>t.liftEmptyBlock(),()=>t.splitBlock()]})}}}),A=o.createContext({}),P=(0,o.forwardRef)((e,t)=>{let{editable:n,content:l,contextInfo:a,fetchingContextInfo:d,submitting:x,onSubmit:p,placeholder:g,onBlur:j,onFocus:b,onUpdate:w,autoFocus:k,className:N,editorClassName:C,placement:I}=e,[S,E]=(0,o.useState)(!d),R=(0,v.d)(e=>{if(x)return;let t=e.getText({blockSeparator:s.rZ}).trim();t&&(null==p||p(e))});(0,o.useMemo)(()=>null!=a&&!!a.sources&&a.sources.some(e=>(0,i.wO)(e.sourceKind)),[null==a?void 0:a.sources]);let P=(0,o.useMemo)(()=>null!=a&&!!a.sources&&a.sources.some(e=>(0,i._q)(e.sourceKind)),[null==a?void 0:a.sources]),K=(0,f.jE)({editable:!!S&&n,immediatelyRender:!1,extensions:[c.Z,u.Z,h.Z,m.Z.configure({showOnlyWhenEditable:!1,placeholder:S?g||"Ask anything...":"Loading..."}),Z(e=>{R.current(e)}),y.configure({deleteTriggerWithBackspace:!0,HTMLAttributes:{class:"mention"},suggestion:M({category:"doc",char:"@",pluginKey:T,placement:"bottom"===I?"top-start":"bottom-start",disabled:!P})})],editorProps:{attributes:{class:(0,i.cn)("max-h-38 prose min-h-[3.5rem] max-w-none font-sans dark:prose-invert focus:outline-none prose-p:my-0",C)}},content:l,onBlur(e){null==j||j(e)},onFocus(e){null==b||b(e)},onUpdate(e){null==w||w(e)}},[S]);return((0,o.useImperativeHandle)(t,()=>({editor:K})),(0,o.useLayoutEffect)(()=>{K&&k&&K.commands.focus()},[K]),(0,o.useEffect)(()=>{d||S||E(!0)},[d]),K)?(0,r.jsx)(A.Provider,{value:{list:null==a?void 0:a.sources,pending:!!d},children:(0,r.jsx)("div",{className:(0,i.cn)("text-area-autosize max-h-36 overflow-y-auto pr-1",N),children:(0,r.jsx)(f.kg,{editor:K})})}):null});P.displayName="PromptEditor";var K=n(31458),O=n(11208),F=n(3448),z=n(62202);function H(e){let{models:t,value:n,onChange:o,isInitializing:s}=e,l=e=>{o(e)};return(0,r.jsx)(d.Z,{loading:s,fallback:(0,r.jsx)("div",{className:"w-full pl-2",children:(0,r.jsx)(F.O,{className:"h-3 w-[20%]"})}),children:!!(null==t?void 0:t.length)&&(0,r.jsxs)(z.h_,{children:[(0,r.jsx)(z.$F,{asChild:!0,children:(0,r.jsxs)(K.z,{variant:"ghost",className:"gap-2 px-1.5 py-1 text-foreground/70",children:[(0,r.jsx)(C.IconBox,{}),n]})}),(0,r.jsx)(z.AW,{side:"bottom",align:"start",className:"dropdown-menu max-h-[30vh] min-w-[20rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-2 text-popover-foreground shadow animate-in",children:(0,r.jsx)(z._x,{value:n,onValueChange:o,children:t.map(e=>{let t=e===n;return(0,r.jsxs)(z.qB,{onClick:t=>{l(e),t.stopPropagation()},value:e,className:"cursor-pointer py-2 pl-3",children:[(0,r.jsx)(C.IconCheck,{className:(0,i.cn)("mr-2 shrink-0",e===n?"opacity-100":"opacity-0")}),(0,r.jsx)("span",{className:(0,i.cn)({"font-medium":t}),children:e})]},e)})})})]})})}var L=n(36065),_=n(84942),B=n(37034);function D(e){let{repos:t,value:n,onChange:s,isInitializing:l}=e,[a,c]=(0,o.useState)(!1),u=(0,o.useRef)(null),m=e=>{s(e)},h=()=>{requestAnimationFrame(()=>{u.current&&(u.current.scrollTop=0)})},x=n?null==t?void 0:t.find(e=>e.sourceId===n):void 0,p=null==x?void 0:x.sourceName;return l||(null==t?void 0:t.length)?(0,r.jsx)(d.Z,{loading:l,fallback:(0,r.jsx)("div",{className:"w-full pl-2",children:(0,r.jsx)(F.O,{className:"h-3 w-[10rem]"})}),children:(0,r.jsxs)(_.J2,{open:a,onOpenChange:c,children:[(0,r.jsx)(_.xo,{className:"outline-none",asChild:!0,children:(0,r.jsxs)(K.z,{variant:"ghost",className:"gap-2 px-1.5 py-1 font-normal",title:p||"select codebase",children:[x?(0,r.jsx)(B.k,{kind:x.sourceKind,className:"h-3.5 w-3.5 shrink-0"}):(0,r.jsx)(C.IconFolderGit,{className:"shrink-0"}),(0,r.jsx)("div",{className:"flex flex-1 items-center gap-1.5 truncate break-all",children:(0,r.jsx)("span",{className:(0,i.cn)("truncate",{"text-muted-foreground":!p}),children:p||"Codebase"})})]})}),(0,r.jsx)(_.yk,{side:"bottom",align:"start",className:"max-h-[50vh] min-w-[20vw] max-w-[80vw] overflow-x-hidden rounded-md border bg-popover p-2 pb-0 text-popover-foreground shadow animate-in",children:(0,r.jsxs)(L.mY,{children:[(0,r.jsx)(L.sZ,{placeholder:"Search codebase...",onValueChange:()=>{h()}}),(0,r.jsxs)(L.e8,{className:"max-h-[30vh]",ref:u,children:[(0,r.jsx)(L.rb,{children:"No context found"}),(0,r.jsx)(L.fu,{children:null==t?void 0:t.map(e=>{let t=e.sourceId===n;return(0,r.jsxs)(L.di,{onSelect:()=>{m(e.sourceId),c(!1)},title:e.sourceName,children:[(0,r.jsx)(C.IconCheck,{className:(0,i.cn)("mr-1 shrink-0",e.sourceId===n?"opacity-100":"opacity-0")}),(0,r.jsxs)("div",{className:"flex flex-1 items-center gap-1 overflow-x-hidden",children:[(0,r.jsx)(B.k,{kind:e.sourceKind,className:"shrink-0"}),(0,r.jsx)("div",{className:(0,i.cn)("truncate",{"font-semibold":t}),children:e.sourceName})]})]},e.sourceId)})})]}),(0,r.jsx)(L.zz,{}),(0,r.jsx)(L.fu,{children:(0,r.jsx)(L.di,{disabled:!n,className:"flex justify-center",onSelect:()=>{s(void 0),c(!1)},children:"Clear"})})]})})]})}):null}function G(e){let{onSearch:t,modelName:n,onSelectModel:l,repoSourceId:c,onSelectRepo:u,className:m,placeholder:h,showBetaBadge:x,isLoading:p,autoFocus:f,loadingWithSpinning:v,cleanAfterSearch:g=!0,isFollowup:j,contextInfo:b,fetchingContextInfo:y,isInitializingResources:w,models:k}=e,[N,I]=(0,o.useState)(!1),[S,E]=(0,o.useState)(""),R=(0,o.useRef)(null),M=()=>{var e,t;null===(t=R.current)||void 0===t||null===(e=t.editor)||void 0===e||e.commands.focus()},T=e=>{l(e),setTimeout(()=>{M()})},Z=e=>{u(e),setTimeout(()=>{M()})},A=e=>{if(!e||p||w)return;let r=e.getText({blockSeparator:s.rZ}).trim();if(!r)return;let o=(0,i.b)(r,null==b?void 0:b.sources),l={...(0,i.G8)(o),modelName:n};if(t(r,l),g){var a,d;null===(d=R.current)||void 0===d||null===(a=d.editor)||void 0===a||a.chain().clearContent().focus().run(),E("")}},z=e=>{var t;let n=null===(t=R.current)||void 0===t?void 0:t.editor;n&&n.chain().focus().command(t=>{var n,r,o;let{tr:s,state:l}=t,{$from:i}=l.selection,a=0===i.parentOffset,d=null!==(o=null===(r=i.nodeBefore)||void 0===r?void 0:null===(n=r.text)||void 0===n?void 0:n.endsWith(" "))&&void 0!==o&&o;return a||d?s.insertText(e):s.insertText(" "+e),!0}).run()},{hasDocumentSource:L}=(0,o.useMemo)(()=>(0,i.xV)(null==b?void 0:b.sources),[null==b?void 0:b.sources]),_=(0,o.useMemo)(()=>null==b?void 0:b.sources.filter(e=>(0,i.wO)(e.sourceKind)),[null==b?void 0:b.sources]),B=!!(null==k?void 0:k.length),G=!!(null==_?void 0:_.length),q=B||G;return(0,r.jsxs)("div",{className:(0,i.cn)("relative w-full overflow-hidden rounded-xl border bg-background transition-all hover:border-ring dark:border-muted-foreground/60 dark:hover:border-muted-foreground",{"border-ring dark:border-muted-foreground":N},m),onClick:()=>{M()},children:[x&&(0,r.jsx)(W,{}),(0,r.jsxs)("div",{className:(0,i.cn)("flex items-end pr-4",{"min-h-[5.5rem]":!j,"min-h-[2.5rem]":j}),children:[(0,r.jsxs)("div",{className:"mr-1 flex-1 overflow-x-hidden pl-4",children:[(0,r.jsx)(P,{editable:!0,contextInfo:b,fetchingContextInfo:y,onSubmit:A,placeholder:h||"Ask anything...",autoFocus:f,onFocus:()=>I(!0),onBlur:()=>I(!1),onUpdate:e=>{let{editor:t}=e;return E(t.getText({blockSeparator:s.rZ}).trim())},ref:R,placement:j?"bottom":"top",className:(0,i.cn)("text-area-autosize resize-none rounded-lg !border-none bg-transparent !shadow-none !outline-none !ring-0 !ring-offset-0",{"py-3":!x,"py-4":x}),editorClassName:j&&q?"min-h-[1.75rem]":"min-h-[3.5em]"}),j&&q&&(0,r.jsxs)("div",{className:"-ml-2 mb-2 flex items-center gap-2",onClick:e=>e.stopPropagation(),children:[G&&(0,r.jsx)(D,{isInitializing:y,repos:_,value:c,onChange:Z}),G&&B&&(0,r.jsx)(O.Z,{orientation:"vertical",className:"h-5"}),B&&(0,r.jsx)(H,{isInitializing:w,models:k,value:n,onChange:T})]})]}),(0,r.jsx)("div",{className:(0,i.cn)("mb-3 flex items-center justify-between gap-2"),children:(0,r.jsxs)("div",{className:(0,i.cn)("flex items-center justify-center rounded-lg p-1 transition-all",{"bg-primary text-primary-foreground cursor-pointer":S.length>0,"!bg-muted !text-primary !cursor-default":p||0===S.length||w,"mr-1.5":!x}),onClick:()=>{var e;return A(null===(e=R.current)||void 0===e?void 0:e.editor)},children:[v&&p&&(0,r.jsx)(C.IconSpinner,{className:"h-4 w-4"}),(!v||!p)&&(0,r.jsx)(C.IconArrowRight,{className:"h-4 w-4"})]})})]}),!j&&(0,r.jsx)("div",{className:(0,i.cn)("flex items-center gap-2 border-t bg-[#F9F6EF] py-2 pl-2 pr-4 dark:border-muted-foreground/60 dark:bg-[#333333]"),onClick:e=>e.stopPropagation(),children:(0,r.jsxs)(d.Z,{loading:w||y,delay:0,fallback:(0,r.jsx)("div",{className:"flex h-8 w-[40%] items-center",children:(0,r.jsx)(F.O,{className:"h-4 w-full"})}),children:[(0,r.jsxs)(a.u,{children:[(0,r.jsx)(a.aJ,{asChild:!0,children:(0,r.jsxs)(K.z,{variant:"ghost",className:"gap-2 px-1.5 py-1 text-foreground/70",onClick:e=>z("@"),disabled:!L,children:[(0,r.jsx)(C.IconAtSign,{}),"Documents"]})}),(0,r.jsx)(a._v,{className:"max-w-md",children:"Select a document to bring into context"})]}),(0,r.jsx)(O.Z,{orientation:"vertical",className:"h-5"}),(0,r.jsx)(D,{repos:_,value:c,onChange:Z,isInitializing:y}),!!(null==k?void 0:k.length)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O.Z,{orientation:"vertical",className:"h-5"}),(0,r.jsx)(H,{models:k,value:n,onChange:T})]})]})})]})}function W(){let{theme:e}=(0,l.X)();return(0,r.jsxs)(a.u,{delayDuration:0,children:[(0,r.jsx)(a.aJ,{asChild:!0,children:(0,r.jsx)("span",{className:"absolute -right-8 top-1 mr-3 rotate-45 rounded-none border-none py-0.5 pl-6 pr-5 text-xs text-primary",style:{background:"dark"===e?"#333":"#e8e1d3"},children:"Beta"})}),(0,r.jsx)(a._v,{sideOffset:-8,className:"max-w-md",children:(0,r.jsx)("p",{children:"Please note that the answer engine is still in its early stages, and certain functionalities, such as finding the correct code context and the quality of summarizations, still have room for improvement. If you encounter an issue and believe it can be enhanced, consider sharing it in our Slack community!"})})]})}},31159:function(e,t,n){"use strict";n.d(t,{Vq:function(){return d}});var r=n(3546),o=n(21454),s=n(27257),l=n(3765),i=n(47241),a=n(17451);function d(){let{data:e,isLoading:t}=(0,o.ZP)("/v1beta/models",e=>(0,l.Z)(e,{errorHandler:()=>{throw Error("Fetch supported model failed.")}}),{shouldRetryOnError:!1}),n=(0,s.oR)(a.a,e=>e.selectedModel);return(0,r.useEffect)(()=>{if(!t){let t=function(e,t){if(!(null==t?void 0:t.length))return;let n=!!e&&t.includes(e);return n?e:t[0]}(n,null==e?void 0:e.chat);(0,i.Eg)(t)}},[t]),{isFetchingModels:t,selectedModel:n,models:null==e?void 0:e.chat}}},4951:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});var r=n(3546),o=n(40055),s=n(17451),l=n(70410);function i(){let[{data:e,fetching:t}]=(0,o.aM)({query:l.K5}),n=null==e?void 0:e.repositoryList,i=(0,s.a)(e=>e.selectedRepoSourceId),a=(0,r.useMemo)(()=>{if((null==n?void 0:n.length)&&i)return n.find(e=>e.sourceId===i)},[n,i]);return{repos:n,isFetchingRepositories:t,selectedRepository:a}}},37266:function(e,t,n){"use strict";n.d(t,{CR:function(){return s},F0:function(){return i},wh:function(){return a}});var r=n(27257);let o={homePage:void 0},s=(0,r.Ue)()(()=>({...o})),l=s.setState,i=e=>l(()=>({homePage:e})),a=()=>l(()=>({homePage:void 0}))},15812:function(){}}]);