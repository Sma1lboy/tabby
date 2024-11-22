(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9436],{93423:function(e,t,r){Promise.resolve().then(r.bind(r,54616))},85156:function(e,t,r){"use strict";r.d(t,{Kb:function(){return G},fB:function(){return k}});var n=r(36164),a=r(3546),s=r(70652),i=r.n(s),l=r(11978),o=r(84381),c=r(94909),d=r(5493),u=r(2578),f=r(23782),m=r(18500),p=r(1544),x=r(73460),h=r(31458),b=r(98150),j=r(81565),g=r(82394),y=r(39231);let N=f.Ry({displayName:f.Z_().trim(),accessToken:f.Z_(),apiBase:f.Z_().url().optional().nullable()}),v=N.extend({apiBase:f.Z_().url()}),C=N.extend({accessToken:f.Z_().optional()}),w=v.extend({accessToken:f.Z_().optional()});function G(e){var t;let{isNew:r,form:s,onSubmit:i,onDelete:o,cancleable:d=!0,deletable:f}=e,N=(0,y.A)(),v=(0,l.useRouter)(),[C,w]=a.useState(!1),[G,k]=a.useState(!1),{isSubmitting:q,dirtyFields:I}=s.formState,_=!(0,c.Z)(I),H=async e=>{if(e.preventDefault(),o){k(!0);try{await o()}catch(e){u.A.error("Failed to delete GitHub repository provider")}finally{k(!1)}}},R=a.useMemo(()=>{switch(N){case m.q6.Github:return"e.g. GitHub";case m.q6.GithubSelfHosted:return"e.g. GitHub-Self-Hosted";case m.q6.Gitlab:return"e.g. GitLab";case m.q6.GitlabSelfHosted:return"e.g. GitLab-Self-Hosted";default:return""}},[N]),A=a.useMemo(()=>{if(!r)return Array(36).fill("*").join("");switch(N){case m.q6.Github:case m.q6.GithubSelfHosted:return"e.g. github_pat_1ABCD1234ABCD1234ABCD1234ABCD1234ABCD1234";case m.q6.Gitlab:case m.q6.GitlabSelfHosted:return"e.g. glpat_1ABCD1234ABCD1234ABCD1234ABCD1234";default:return""}},[N,r]),D=a.useMemo(()=>{switch(N){case m.q6.GithubSelfHosted:return"e.g. https://api.github.yourcompany.com";case m.q6.GitlabSelfHosted:return"e.g. https://gitlab.yourcompany.com";default:return""}},[N]),z=[m.q6.GithubSelfHosted,m.q6.GitlabSelfHosted].includes(N);return(0,n.jsx)(b.l0,{...s,children:(0,n.jsx)("div",{className:"grid gap-2",children:(0,n.jsxs)("form",{className:"grid gap-6",onSubmit:s.handleSubmit(i),children:[(0,n.jsx)(b.Wi,{control:s.control,name:"displayName",render:e=>{let{field:t}=e;return(0,n.jsxs)(b.xJ,{children:[(0,n.jsx)(b.lX,{required:!0,children:"Display name"}),(0,n.jsx)(b.pf,{children:"A display name to help identifying different providers."}),(0,n.jsx)(b.NI,{children:(0,n.jsx)(g.I,{placeholder:R,autoCapitalize:"none",autoCorrect:"off",autoComplete:"off",...t})}),(0,n.jsx)(b.zG,{})]})}}),z&&(0,n.jsx)(b.Wi,{control:s.control,name:"apiBase",render:e=>{let{field:r}=e;return(0,n.jsxs)(b.xJ,{children:[(0,n.jsx)(b.lX,{required:!0,children:"Instance URL"}),(0,n.jsx)(b.pf,{children:"The VCS instance URL. Make sure this instance and Tabby are network reachable from each other."}),(0,n.jsx)(b.NI,{children:(0,n.jsx)(g.I,{placeholder:D,autoCapitalize:"none",autoCorrect:"off",autoComplete:"off",value:null!==(t=r.value)&&void 0!==t?t:"",onChange:e=>r.onChange(e.target.value)})}),(0,n.jsx)(b.zG,{})]})}}),(0,n.jsx)(b.Wi,{control:s.control,name:"accessToken",render:e=>{let{field:t}=e;return(0,n.jsxs)(b.xJ,{children:[(0,n.jsx)(b.lX,{required:r,children:"Personal Access Token"}),(0,n.jsx)(b.pf,{children:(0,n.jsx)(S,{})}),(0,n.jsx)(b.NI,{children:(0,n.jsx)(g.I,{placeholder:A,className:(0,p.cn)({"placeholder:translate-y-[10%] !placeholder-foreground":!r}),autoCapitalize:"none",autoCorrect:"off",autoComplete:"off",...t})}),(0,n.jsx)(b.zG,{})]})}}),(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("div",{children:(0,n.jsx)(b.zG,{})}),(0,n.jsxs)("div",{className:"flex gap-2",children:[d&&(0,n.jsx)(h.z,{type:"button",variant:"ghost",disabled:q,onClick:()=>v.back(),children:"Cancel"}),f&&(0,n.jsxs)(x.aR,{open:C,onOpenChange:w,children:[(0,n.jsx)(x.vW,{asChild:!0,children:(0,n.jsx)(h.z,{type:"button",variant:"hover-destructive",children:"Delete"})}),(0,n.jsxs)(x._T,{children:[(0,n.jsxs)(x.fY,{children:[(0,n.jsx)(x.f$,{children:"Are you absolutely sure?"}),(0,n.jsx)(x.yT,{children:"This will delete the provider and remove any repositories that have already been added to the provider."})]}),(0,n.jsxs)(x.xo,{children:[(0,n.jsx)(x.le,{children:"Cancel"}),(0,n.jsxs)(x.OL,{className:(0,h.d)({variant:"destructive"}),onClick:H,disabled:G,children:[G&&(0,n.jsx)(j.IconSpinner,{className:"mr-2"}),"Yes, delete it"]})]})]})]}),(0,n.jsxs)(h.z,{type:"submit",disabled:q||!r&&!_,children:[q&&(0,n.jsx)(j.IconSpinner,{className:"mr-2"}),r?"Create":"Update"]})]})]})]})})})}function k(e,t,r){let n=[m.q6.GithubSelfHosted,m.q6.GitlabSelfHosted].includes(t),a=e?n?v:N:n?w:C;return(0,d.cI)({resolver:(0,o.F)(a),defaultValues:r})}function S(){let e=(0,y.A)();return e===m.q6.Github||e===m.q6.GithubSelfHosted?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:["Create a dedicated service user and generate a"," ",(0,n.jsx)(q,{href:"https://github.com/settings/personal-access-tokens/new",children:"fine-grained personal access"})," ","token with the member role for the organization or all projects to be managed."]}),(0,n.jsx)("div",{className:"my-2 ml-3",children:"• Contents (Read-only)"}),(0,n.jsx)("div",{className:"my-2 ml-3",children:"• Pull requests (Read-only)"}),(0,n.jsx)("div",{className:"my-2 ml-3",children:"• Issues (Read-only)"})]}):e===m.q6.Gitlab||e===m.q6.GitlabSelfHosted?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:["Create a dedicated service user and generate a"," ",(0,n.jsx)(q,{href:"https://gitlab.com/-/user_settings/personal_access_tokens",children:"personal access token"})," ","with the maintainer role and at least following permissions for the group or projects to be managed. You can generate a project access token for managing a single project, or generate a group access token to manage all projects within the group."]}),(0,n.jsx)("div",{className:"my-2 ml-3",children:"• api"})]}):null}function q(e){let{href:t,children:r}=e;return(0,n.jsxs)(i(),{className:"inline-flex cursor-pointer flex-row items-center underline",href:t,target:"_blank",children:[r,(0,n.jsx)(j.IconExternalLink,{className:"ml-1"})]})}},39231:function(e,t,r){"use strict";r.d(t,{A:function(){return i}});var n=r(11978),a=r(78613),s=r(11529);function i(){let e=(0,n.useParams)(),t=(0,a.Z)(s.K,t=>{var r;return t.name===(null===(r=e.kind)||void 0===r?void 0:r.toLowerCase())}),r=t>-1?s.K[t].enum:s.K[0].enum;return r}},54616:function(e,t,r){"use strict";r.r(t),r.d(t,{NewProvider:function(){return d}});var n=r(36164);r(3546);var a=r(11978),s=r(43240),i=r(11634),l=r(85156),o=r(39231);let c=(0,s.BX)("\n  mutation CreateIntegration($input: CreateIntegrationInput!) {\n    createIntegration(input: $input)\n  }\n"),d=()=>{let e=(0,o.A)(),t=(0,a.useRouter)(),r=(0,l.fB)(!0,e),s=(0,i.Db)(c,{onCompleted(e){(null==e?void 0:e.createIntegration)&&t.back()},form:r}),d=async t=>s({input:{...t,kind:e}});return(0,n.jsx)("div",{className:"ml-4",children:(0,n.jsx)(l.Kb,{isNew:!0,form:r,onSubmit:d})})}},11529:function(e,t,r){"use strict";r.d(t,{K:function(){return a}});var n=r(18500);let a=[{name:"github",enum:n.q6.Github,meta:{displayName:"GitHub"}},{name:"github-self-hosted",enum:n.q6.GithubSelfHosted,meta:{displayName:"GitHub Self-Hosted"}},{name:"gitlab",enum:n.q6.Gitlab,meta:{displayName:"GitLab"}},{name:"gitlab-self-hosted",enum:n.q6.GitlabSelfHosted,meta:{displayName:"GitLab Self-Hosted"}}]},73460:function(e,t,r){"use strict";r.d(t,{OL:function(){return b},_T:function(){return f},aR:function(){return o},f$:function(){return x},fY:function(){return m},le:function(){return j},vW:function(){return c},xo:function(){return p},yT:function(){return h}});var n=r(36164),a=r(3546),s=r(28961),i=r(1544),l=r(31458);let o=s.fC,c=s.xz,d=e=>{let{className:t,children:r,...a}=e;return(0,n.jsx)(s.h_,{className:(0,i.cn)(t),...a,children:(0,n.jsx)("div",{className:"fixed inset-0 z-50 flex items-end justify-center sm:items-center",children:r})})};d.displayName=s.h_.displayName;let u=a.forwardRef((e,t)=>{let{className:r,children:a,...l}=e;return(0,n.jsx)(s.aV,{className:(0,i.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in",r),...l,ref:t})});u.displayName=s.aV.displayName;let f=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsxs)(d,{children:[(0,n.jsx)(u,{}),(0,n.jsx)(s.VY,{ref:t,className:(0,i.cn)("fixed z-50 grid w-full max-w-lg scale-100 gap-4 border bg-background p-6 opacity-100 shadow-lg animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full",r),...a})]})});f.displayName=s.VY.displayName;let m=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...r})};m.displayName="AlertDialogHeader";let p=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r})};p.displayName="AlertDialogFooter";let x=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.Dx,{ref:t,className:(0,i.cn)("text-lg font-semibold",r),...a})});x.displayName=s.Dx.displayName;let h=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.dk,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",r),...a})});h.displayName=s.dk.displayName;let b=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.aU,{ref:t,className:(0,i.cn)((0,l.d)(),r),...a})});b.displayName=s.aU.displayName;let j=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.$j,{ref:t,className:(0,i.cn)((0,l.d)({variant:"outline"}),"mt-2 sm:mt-0",r),...a})});j.displayName=s.$j.displayName},98150:function(e,t,r){"use strict";r.d(t,{NI:function(){return h},Wi:function(){return u},l0:function(){return c},lX:function(){return x},pf:function(){return b},xJ:function(){return p},zG:function(){return j}});var n=r(36164),a=r(3546),s=r(74047),i=r(5493),l=r(1544),o=r(5266);let c=i.RV,d=a.createContext({}),u=e=>{let{...t}=e;return(0,n.jsx)(d.Provider,{value:{name:t.name},children:(0,n.jsx)(i.Qr,{...t})})},f=()=>{let e=a.useContext(d),t=a.useContext(m),{getFieldState:r,formState:n}=(0,i.Gc)(),s=e.name||"root",l=r(s,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:o}=t;return{id:o,name:s,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...l}},m=a.createContext({}),p=a.forwardRef((e,t)=>{let{className:r,...s}=e,i=a.useId();return(0,n.jsx)(m.Provider,{value:{id:i},children:(0,n.jsx)("div",{ref:t,className:(0,l.cn)("space-y-2",r),...s})})});p.displayName="FormItem";let x=a.forwardRef((e,t)=>{let{className:r,required:a,...s}=e,{error:i,formItemId:c}=f();return(0,n.jsx)(o._,{ref:t,className:(0,l.cn)(i&&"text-destructive",a&&'after:ml-0.5 after:text-destructive after:content-["*"]',r),htmlFor:c,...s})});x.displayName="FormLabel";let h=a.forwardRef((e,t)=>{let{...r}=e,{error:a,formItemId:i,formDescriptionId:l,formMessageId:o}=f();return(0,n.jsx)(s.g7,{ref:t,id:i,"aria-describedby":a?"".concat(l," ").concat(o):"".concat(l),"aria-invalid":!!a,...r})});h.displayName="FormControl";let b=a.forwardRef((e,t)=>{let{className:r,...a}=e,{formDescriptionId:s}=f();return(0,n.jsx)("div",{ref:t,id:s,className:(0,l.cn)("text-sm text-muted-foreground",r),...a})});b.displayName="FormDescription";let j=a.forwardRef((e,t)=>{let{className:r,children:a,...s}=e,{error:i,formMessageId:o}=f(),c=i?String(null==i?void 0:i.message):a;return c?(0,n.jsx)("p",{ref:t,id:o,className:(0,l.cn)("text-sm font-medium text-destructive",r),...s,children:c}):null});j.displayName="FormMessage"},82394:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var n=r(36164),a=r(3546),s=r(1544);let i=a.forwardRef((e,t)=>{let{className:r,type:a,...i}=e;return(0,n.jsx)("input",{type:a,className:(0,s.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},5266:function(e,t,r){"use strict";r.d(t,{_:function(){return c}});var n=r(36164),a=r(3546),s=r(90893),i=r(14375),l=r(1544);let o=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.f,{ref:t,className:(0,l.cn)(o(),r),...a})});c.displayName=s.f.displayName}},function(e){e.O(0,[8415,1386,55,617,4007,9643,2578,8511,240,2287,7070,8961,2694,1544,1565,3240,4656,3375,5289,1744],function(){return e(e.s=93423)}),_N_E=e.O()}]);