"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[325],{20325:function(e,n,t){t.r(n),t.d(n,{OAuthCredentialList:function(){return w},oauthCredential:function(){return b}});var s=t(36164),a=t(3546),r=t(70652),l=t.n(r),i=t(11978),d=t(1853),c=t(826),o=t(40055),u=t(43240),f=t(18500),m=t(31458),x=t(79972),h=t(81565),p=t(3448),v=t(94770),j=t(6230);let N=[{name:"github",enum:f.O4.Github,meta:{domain:"github.com",displayName:"GitHub"}},{name:"google",enum:f.O4.Google,meta:{domain:"google.com",displayName:"Google"}},{name:"gitlab",enum:f.O4.Gitlab,meta:{domain:"gitlab.com",displayName:"GitLab"}}];var g=t(49694);let b=(0,u.BX)("\n  query OAuthCredential($provider: OAuthProvider!) {\n    oauthCredential(provider: $provider) {\n      provider\n      clientId\n      createdAt\n      updatedAt\n    }\n  }\n"),w=()=>{let[{data:e,fetching:n}]=(0,o.aM)({query:b,variables:{provider:f.O4.Github}}),[{data:t,fetching:r}]=(0,o.aM)({query:b,variables:{provider:f.O4.Google}}),[{data:c,fetching:u}]=(0,o.aM)({query:b,variables:{provider:f.O4.Gitlab}}),x=a.useMemo(()=>(0,d.Z)([null==e?void 0:e.oauthCredential,null==t?void 0:t.oauthCredential,null==c?void 0:c.oauthCredential]),[e,t,c]),h=(0,i.useRouter)(),N=(0,s.jsx)(v.M,{licenses:[f.oj.Enterprise],children:e=>{let{hasValidLicense:n}=e;return(0,s.jsx)(m.z,{disabled:!n,onClick:()=>h.push("/settings/sso/new"),children:"Create"})}});return(null==x?void 0:x.length)?(0,s.jsxs)("div",{children:[(0,s.jsx)(g.J,{}),(0,s.jsx)("div",{className:"flex flex-col gap-8",children:x.map(e=>(0,s.jsx)(y,{data:e},e.provider))}),x.length<3&&(0,s.jsx)("div",{className:"mt-4 flex justify-end",children:N})]}):(0,s.jsxs)("div",{children:[(0,s.jsx)(g.J,{}),(0,s.jsx)(j.Z,{loading:n||r||u,fallback:(0,s.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,s.jsx)(p.O,{className:"h-[180px] w-full rounded-xl"}),(0,s.jsx)(p.O,{className:"h-[180px] w-full rounded-xl"})]}),children:(0,s.jsxs)("div",{className:"flex flex-col items-center gap-4 rounded-lg border-4 border-dashed py-8",children:[(0,s.jsx)("div",{children:"No Data"}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(l(),{href:"/settings/sso/new",className:(0,m.d)({variant:"default"}),children:"Create"})})]})})]})},y=e=>{let{data:n}=e,t=a.useMemo(()=>{var e;return null===(e=(0,c.Z)(N,{enum:null==n?void 0:n.provider}))||void 0===e?void 0:e.meta},[n]);return n?(0,s.jsxs)(x.Zb,{children:[(0,s.jsx)(x.Ol,{className:"border-b p-4",children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)(x.ll,{className:"flex items-center gap-2 text-xl",children:[(0,s.jsx)(O,{provider:n.provider}),(null==t?void 0:t.displayName)||n.provider]}),(0,s.jsx)(l(),{href:"/settings/sso/detail/".concat(n.provider.toLowerCase()),className:(0,m.d)({variant:"secondary"}),children:"View"})]})}),(0,s.jsxs)(x.aY,{className:"p-0 text-sm",children:[(0,s.jsxs)("div",{className:"flex border-b px-8 py-4",children:[(0,s.jsx)("span",{className:"w-[100px]",children:"Type"}),(0,s.jsx)("span",{children:"OAuth 2.0"})]}),(0,s.jsxs)("div",{className:"flex px-8 py-4",children:[(0,s.jsx)("span",{className:"w-[100px] shrink-0",children:"Domain"}),(0,s.jsx)("span",{className:"truncate",children:null==t?void 0:t.domain})]})]})]}):null};function O(e){let{provider:n}=e;switch(n){case f.O4.Github:return(0,s.jsx)(h.IconGitHub,{className:"h-6 w-6"});case f.O4.Google:return(0,s.jsx)(h.IconGoogle,{className:"h-6 w-6"});case f.O4.Gitlab:return(0,s.jsx)(h.IconGitLab,{className:"h-6 w-6"});default:return null}}},49694:function(e,n,t){t.d(n,{J:function(){return r}});var s=t(36164),a=t(57288);t(81565);let r=e=>{let{className:n}=e;return(0,s.jsx)("div",{className:(0,a.cn)("min-h-8 mb-4 flex items-center gap-4",n),children:(0,s.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:["Single Sign-On (SSO) is an authentication method that enables users to authenticate with multiple applications and websites via a single set of credentials.",!1]})})}},94770:function(e,n,t){t.d(n,{M:function(){return f}});var s=t(36164),a=t(3546),r=t(70652),l=t.n(r),i=t(88542),d=t(29917),c=t(57288),o=t(31458),u=t(90615);let f=e=>{let{licenses:n,children:t}=e,[r,l]=a.useState(!1),i=(0,d.Gm)(),o=(0,d.Cz)({licenses:n}),{isLicenseOK:f,hasSufficientLicense:x}=o,h=x&&f,p=e=>{h||l(e)};return(0,s.jsxs)(u.zs,{open:r,onOpenChange:p,openDelay:100,children:[(0,s.jsx)(u.bZ,{side:"top",collisionPadding:16,className:"w-[400px]",children:(0,s.jsx)(m,{licenses:n,...o})}),(0,s.jsx)(u.Yi,{asChild:!0,onClick:e=>{h||(e.preventDefault(),p(!0))},children:(0,s.jsx)("div",{className:(0,c.cn)(h?"":"cursor-not-allowed"),children:t({hasValidLicense:h,license:i})})})]})};function m(e){let{hasSufficientLicense:n,isExpired:t,isSeatsExceeded:a,licenses:r}=e,d=(0,i.Z)(r[0]),c=d;return(2==r.length&&(c="".concat((0,i.Z)(r[0])," or ").concat((0,i.Z)(r[1]))),n&&t)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:"Your license has expired. Please update your license to use this feature."}),(0,s.jsx)("div",{className:"mt-4 text-center",children:(0,s.jsx)(l(),{className:(0,o.d)(),href:"/settings/subscription",children:"Update license"})})]}):n&&a?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:"Your seat count has exceeded the limit. Please upgrade your license to continue using this feature."}),(0,s.jsx)("div",{className:"mt-4 text-center",children:(0,s.jsx)(l(),{className:(0,o.d)(),href:"/settings/subscription",children:"Upgrade license"})})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{children:["This feature is only available on Tabby's"," ",(0,s.jsx)("span",{className:"font-semibold",children:c})," plan. Upgrade to use this feature."]}),(0,s.jsx)("div",{className:"mt-4 text-center",children:(0,s.jsxs)(l(),{className:(0,o.d)(),href:"/settings/subscription",children:["Upgrade to ",d]})})]})}f.displayName="LicenseGuard"},6230:function(e,n,t){var s=t(36164),a=t(3546),r=t(24449),l=t(90379);n.Z=e=>{let{loading:n,fallback:t,delay:i,children:d}=e,[c,o]=a.useState(!n),[u]=(0,r.n)(c,null!=i?i:200);return(a.useEffect(()=>{n||c||o(!0)},[n]),u)?d:t||(0,s.jsx)(l.cg,{})}},90379:function(e,n,t){t.d(n,{PF:function(){return d},cg:function(){return l},tB:function(){return i}});var s=t(36164),a=t(57288),r=t(3448);let l=e=>{let{className:n,...t}=e;return(0,s.jsxs)("div",{className:(0,a.cn)("space-y-3",n),...t,children:[(0,s.jsx)(r.O,{className:"h-4 w-full"}),(0,s.jsx)(r.O,{className:"h-4 w-full"}),(0,s.jsx)(r.O,{className:"h-4 w-full"}),(0,s.jsx)(r.O,{className:"h-4 w-full"})]})},i=e=>{let{className:n,...t}=e;return(0,s.jsx)(r.O,{className:(0,a.cn)("h-4 w-full",n),...t})},d=e=>{let{className:n,...t}=e;return(0,s.jsxs)("div",{className:(0,a.cn)("flex flex-col gap-3",n),...t,children:[(0,s.jsx)(r.O,{className:"h-4 w-[20%]"}),(0,s.jsx)(r.O,{className:"h-4 w-full"}),(0,s.jsx)(r.O,{className:"h-4 w-[20%]"}),(0,s.jsx)(r.O,{className:"h-4 w-full"})]})}},79972:function(e,n,t){t.d(n,{Ol:function(){return i},Zb:function(){return l},aY:function(){return o},eW:function(){return u},ll:function(){return d}});var s=t(36164),a=t(3546),r=t(57288);let l=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:n,className:(0,r.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})});l.displayName="Card";let i=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:n,className:(0,r.cn)("flex flex-col space-y-1.5 p-6",t),...a})});i.displayName="CardHeader";let d=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,s.jsx)("h3",{ref:n,className:(0,r.cn)("text-2xl font-semibold leading-none tracking-tight",t),...a})});d.displayName="CardTitle";let c=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,s.jsx)("p",{ref:n,className:(0,r.cn)("text-sm text-muted-foreground",t),...a})});c.displayName="CardDescription";let o=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:n,className:(0,r.cn)("p-6 pt-0",t),...a})});o.displayName="CardContent";let u=a.forwardRef((e,n)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:n,className:(0,r.cn)("flex items-center p-6 pt-0",t),...a})});u.displayName="CardFooter"},90615:function(e,n,t){t.d(n,{Yi:function(){return d},bZ:function(){return c},zs:function(){return i}});var s=t(36164),a=t(3546),r=t(38421),l=t(57288);let i=r.fC,d=r.xz;r.h_;let c=a.forwardRef((e,n)=>{let{className:t,align:a="center",sideOffset:i=4,...d}=e;return(0,s.jsx)(r.VY,{ref:n,align:a,sideOffset:i,className:(0,l.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...d})});c.displayName=r.VY.displayName},3448:function(e,n,t){t.d(n,{O:function(){return r}});var s=t(36164),a=t(57288);function r(e){let{className:n,...t}=e;return(0,s.jsx)("div",{className:(0,a.cn)("h-4 animate-pulse rounded-md bg-border",n),...t})}},24449:function(e,n,t){t.d(n,{S:function(){return i},n:function(){return d}});var s=t(3546),a=t(45391),r=t(16784);let l=e=>{let n=(0,r.d)(e);s.useEffect(()=>()=>{n.current()},[])};function i(e,n,t){let i=(0,r.d)(e),d=s.useMemo(()=>(0,a.Z)(function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return i.current(...n)},n,t),[]);return l(()=>{var e;null==t||null===(e=t.onUnmount)||void 0===e||e.call(t,d),d.cancel()}),{run:d,cancel:d.cancel,flush:d.flush}}function d(e,n,t){let[a,r]=s.useState(e),{run:l}=i(()=>{r(e)},n,t);return s.useEffect(()=>{l()},[e]),[a,r]}},16784:function(e,n,t){t.d(n,{d:function(){return a}});var s=t(3546);function a(e){let n=s.useRef(e);return n.current=e,n}},29917:function(e,n,t){t.d(n,{Cz:function(){return o},Gm:function(){return c},jp:function(){return d}});var s=t(11978),a=t(40055),r=t(43240),l=t(18500);let i=(0,r.BX)("\n  query GetLicenseInfo {\n    license {\n      type\n      status\n      seats\n      seatsUsed\n      issuedAt\n      expiresAt\n    }\n  }\n"),d=()=>(0,a.aM)({query:i}),c=()=>{let[{data:e}]=d();return null==e?void 0:e.license},o=e=>{var n;let[{data:t}]=d(),a=null==t?void 0:t.license,r=(0,s.useSearchParams)(),i=!!a&&(!(null==e?void 0:null===(n=e.licenses)||void 0===n?void 0:n.length)||e.licenses.includes(a.type)),c=(null==a?void 0:a.status)===l.Rj.Ok,o=(null==a?void 0:a.status)===l.Rj.Expired,u=(null==a?void 0:a.status)===(null===l.Rj||void 0===l.Rj?void 0:l.Rj.SeatsExceeded),f="expired"===r.get("licenseError"),m="seatsExceed"===r.get("licenseError");return{hasLicense:!!a,isLicenseOK:c&&!(f||m),isExpired:o||f,isSeatsExceeded:u||m,hasSufficientLicense:i}}}}]);