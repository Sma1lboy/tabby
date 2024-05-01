(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2487],{31819:function(e,t,n){Promise.resolve().then(n.bind(n,16870))},16870:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(57437),s=n(61396),a=n.n(s),l=n(93023),i=n(2265),o=n(71424),u=n(99109),c=n(61985),d=n(60106),f=n(7820),m=n(57166),x=n(84168),h=n(91320),v=n(32553),g=n(70825);let p=(0,d.BX)("\n  mutation deleteGitRepository($id: ID!) {\n    deleteGitRepository(id: $id)\n  }\n"),j=c.L;function N(){var e,t;let n=(0,u.m8)(),[{data:s,fetching:a}]=(0,u.aM)({query:m.S1,variables:{first:j}}),[c,d]=i.useState(1),N=null==s?void 0:null===(e=s.gitRepositories)||void 0===e?void 0:e.edges,b=null==s?void 0:null===(t=s.gitRepositories)||void 0===t?void 0:t.pageInfo,y=Math.ceil(((null==N?void 0:N.length)||0)/j),w=i.useMemo(()=>{var e;return null==N?void 0:null===(e=N.slice)||void 0===e?void 0:e.call(N,(c-1)*j,c*j)},[c,N]),R=(null==b?void 0:b.hasNextPage)||c<y,C=c>1,k=!!(null==w?void 0:w.length)&&(R||C),O=e=>n.query(m.S1,e).toPromise(),P=(0,f.D)(p),S=e=>{P({id:e.id}).then(e=>{if(null==e?void 0:e.error){o.A.error(e.error.message);return}})};return i.useEffect(()=>{y<c&&c>1&&d(y)},[y,c]),(0,r.jsxs)(g.Z,{loading:a,children:[(0,r.jsxs)(v.iA,{className:"table-fixed border-b",children:[(0,r.jsx)(v.xD,{children:(0,r.jsxs)(v.SC,{children:[(0,r.jsx)(v.ss,{className:"w-[25%]",children:"Name"}),(0,r.jsx)(v.ss,{children:"Git URL"}),(0,r.jsx)(v.ss,{className:"w-[100px]"})]})}),(0,r.jsx)(v.RM,{children:(null==w?void 0:w.length)||1!==c?(0,r.jsx)(r.Fragment,{children:null==w?void 0:w.map(e=>(0,r.jsxs)(v.SC,{children:[(0,r.jsx)(v.pj,{className:"truncate",children:e.node.name}),(0,r.jsx)(v.pj,{className:"truncate",children:e.node.gitUrl}),(0,r.jsx)(v.pj,{className:"flex justify-end",children:(0,r.jsx)("div",{className:"flex gap-1",children:(0,r.jsx)(l.z,{size:"icon",variant:"hover-destructive",onClick:()=>S(e.node),children:(0,r.jsx)(x.IconTrash,{})})})})]},e.node.id))}):(0,r.jsx)(v.SC,{children:(0,r.jsx)(v.pj,{colSpan:3,className:"h-[100px] text-center",children:"No Data"})})})]}),k&&(0,r.jsx)(h.tl,{className:"my-4",children:(0,r.jsxs)(h.ng,{children:[(0,r.jsx)(h.nt,{children:(0,r.jsx)(h.dN,{disabled:!C,onClick:()=>{!(c<=1)&&(a||d(e=>e-1))}})}),(0,r.jsx)(h.nt,{children:(0,r.jsx)(h.$0,{disabled:!R,onClick:()=>{R&&(a||O({first:j,after:null==b?void 0:b.endCursor}).then(e=>{var t,n,r;(null==e?void 0:null===(r=e.data)||void 0===r?void 0:null===(n=r.gitRepositories)||void 0===n?void 0:null===(t=n.edges)||void 0===t?void 0:t.length)&&d(e=>e+1)}))}})})]})})]})}function b(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N,{}),(0,r.jsx)("div",{className:"mt-4 flex justify-end",children:(0,r.jsx)(a(),{href:"./git/new",className:(0,l.d)(),children:"Create"})})]})}},70825:function(e,t,n){"use strict";var r=n(57437),s=n(2265),a=n(36850),l=n(93111);t.Z=e=>{let{loading:t,fallback:n,delay:i,children:o}=e,[u,c]=s.useState(!t),[d]=(0,a.n)(u,null!=i?i:200);return(s.useEffect(()=>{t||u||c(!0)},[t]),d)?o:n||(0,r.jsx)(l.cg,{})}},93111:function(e,t,n){"use strict";n.d(t,{PF:function(){return o},cg:function(){return l},tB:function(){return i}});var r=n(57437),s=n(39311),a=n(25645);let l=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,s.cn)("space-y-3",t),...n,children:[(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"})]})},i=e=>{let{className:t,...n}=e;return(0,r.jsx)(a.O,{className:(0,s.cn)("h-4 w-full",t),...n})},o=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,s.cn)("flex flex-col gap-3",t),...n,children:[(0,r.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(a.O,{className:"h-4 w-full"})]})}},93023:function(e,t,n){"use strict";n.d(t,{d:function(){return o},z:function(){return u}});var r=n(57437),s=n(2265),a=n(67256),l=n(7404),i=n(39311);let o=(0,l.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),u=s.forwardRef((e,t)=>{let{className:n,variant:s,size:l,asChild:u=!1,...c}=e,d=u?a.g7:"button";return(0,r.jsx)(d,{className:(0,i.cn)(o({variant:s,size:l,className:n})),ref:t,...c})});u.displayName="Button"},91320:function(e,t,n){"use strict";n.d(t,{$0:function(){return m},dN:function(){return f},ng:function(){return u},nt:function(){return c},tl:function(){return o}});var r=n(57437),s=n(2265),a=n(39311),l=n(93023),i=n(84168);let o=e=>{let{className:t,...n}=e;return(0,r.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,a.cn)("mx-auto flex w-full justify-center",t),...n})};o.displayName="Pagination";let u=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("ul",{ref:t,className:(0,a.cn)("flex flex-row items-center gap-1",n),...s})});u.displayName="PaginationContent";let c=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("li",{ref:t,className:(0,a.cn)("",n),...s})});c.displayName="PaginationItem";let d=e=>{let{className:t,isActive:n,size:s="icon",...i}=e;return(0,r.jsx)("a",{"aria-current":n?"page":void 0,className:(0,a.cn)((0,l.d)({variant:n?"outline":"ghost",size:s}),t),...i})};d.displayName="PaginationLink";let f=e=>{let{className:t,disabled:n,...s}=e;return(0,r.jsxs)(d,{"aria-label":"Go to previous page",size:"default",className:(0,a.cn)("cursor-pointer gap-1 pl-2.5",n&&"cursor-not-allowed text-muted-foreground",t),...s,children:[(0,r.jsx)(i.IconChevronLeft,{className:"h-4 w-4"}),(0,r.jsx)("span",{children:"Previous"})]})};f.displayName="PaginationPrevious";let m=e=>{let{className:t,disabled:n,...s}=e;return(0,r.jsxs)(d,{"aria-label":"Go to next page",size:"default",className:(0,a.cn)("cursor-pointer gap-1 pr-2.5",n&&"cursor-not-allowed text-muted-foreground",t),...s,children:[(0,r.jsx)("span",{children:"Next"}),(0,r.jsx)(i.IconChevronRight,{className:"h-4 w-4"})]})};m.displayName="PaginationNext"},25645:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var r=n(57437),s=n(39311);function a(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",t),...n})}},32553:function(e,t,n){"use strict";n.d(t,{RM:function(){return o},SC:function(){return c},iA:function(){return l},pj:function(){return f},ss:function(){return d},xD:function(){return i}});var r=n(57437),s=n(2265),a=n(39311);let l=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("table",{ref:t,className:(0,a.cn)("w-full caption-bottom text-sm",n),...s})});l.displayName="Table";let i=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("thead",{ref:t,className:(0,a.cn)("[&_tr]:border-b",n),...s})});i.displayName="TableHeader";let o=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,a.cn)("[&_tr:last-child]:border-0",n),...s})});o.displayName="TableBody";let u=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,a.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",n),...s})});u.displayName="TableFooter";let c=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("tr",{ref:t,className:(0,a.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",n),...s})});c.displayName="TableRow";let d=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("th",{ref:t,className:(0,a.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",n),...s})});d.displayName="TableHead";let f=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("td",{ref:t,className:(0,a.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",n),...s})});f.displayName="TableCell";let m=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("caption",{ref:t,className:(0,a.cn)("mt-4 text-sm text-muted-foreground",n),...s})});m.displayName="TableCaption"},61985:function(e,t,n){"use strict";n.d(t,{L:function(){return s},o:function(){return r}});let r="name@yourcompany.com",s=20},36850:function(e,t,n){"use strict";n.d(t,{S:function(){return i},n:function(){return o}});var r=n(2265),s=n(50976),a=n(15357);let l=e=>{let t=(0,a.d)(e);r.useEffect(()=>()=>{t.current()},[])};function i(e,t,n){let i=(0,a.d)(e),o=r.useMemo(()=>(0,s.Z)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.current(...t)},t,n),[]);return l(()=>o.cancel()),{run:o,cancel:o.cancel,flush:o.flush}}function o(e,t,n){let[s,a]=r.useState(e),{run:l}=i(()=>{a(e)},t,n);return r.useEffect(()=>{l()},[e]),[s,a]}},15357:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var r=n(2265);function s(e){let t=r.useRef(e);return t.current=e,t}}},function(e){e.O(0,[768,9109,584,1396,1424,2102,7753,4168,2445,2971,7864,1744],function(){return e(e.s=31819)}),_N_E=e.O()}]);