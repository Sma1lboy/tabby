(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9667],{96800:function(n,e,t){Promise.resolve().then(t.bind(t,19847))},19847:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return j}});var r=t(36164),s=t(3546),a=t(70652),i=t.n(a),o=t(11978),u=t(40055),d=t(21808),l=t(18500),c=t(70410),f=t(31458),g=t(79972),m=t(3448),h=t(76297),x=t(1544);let b=n=>{let{onLoad:e,isFetching:t,children:a,className:i,intersectionOptions:o}=n,{ref:u,inView:d}=(0,h.YD)(o);return s.useEffect(()=>{d&&!t&&(null==e||e())},[d]),(0,r.jsx)("div",{className:(0,x.cn)("w-full",i),ref:u,children:null!=a?a:(0,r.jsx)("div",{children:"loading..."})})},$=n=>(0,r.jsx)(b,{...n});var v=t(6230),p=t(39231);let y=d.L8;function j(){var n,e;let t=(0,p.A)(),a=(0,o.useParams)(),[d,m]=s.useState(void 0),[{data:h,fetching:x}]=(0,u.aM)({query:c.kb,variables:{kind:t,last:y,before:d}}),b=s.useMemo(()=>{var n,e;return null==h?void 0:null===(e=h.integrations)||void 0===e?void 0:null===(n=e.edges)||void 0===n?void 0:n.slice().reverse()},[null==h?void 0:null===(n=h.integrations)||void 0===n?void 0:n.edges]),j=null==h?void 0:null===(e=h.integrations)||void 0===e?void 0:e.pageInfo;return(0,r.jsx)(v.Z,{loading:x,fallback:(0,r.jsx)(w,{}),children:(null==b?void 0:b.length)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N,{}),(0,r.jsxs)("div",{className:"space-y-8",children:[null==b?void 0:b.map(n=>(0,r.jsxs)(g.Zb,{children:[(0,r.jsx)(g.Ol,{className:"border-b px-6 py-4",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(g.ll,{className:"text-xl",children:(0,r.jsx)("div",{className:"flex items-center gap-2",children:n.node.displayName})}),(0,r.jsx)(i(),{href:"".concat(a.kind,"/detail?id=").concat(n.node.id),className:(0,f.d)({variant:"secondary"}),children:"View"})]})}),(0,r.jsx)(g.aY,{className:"p-0 text-sm",children:(0,r.jsxs)("div",{className:"flex px-6 py-4",children:[(0,r.jsx)("span",{className:"w-[30%] shrink-0 text-muted-foreground",children:"Status"}),(0,r.jsx)("span",{children:function(n){switch(n){case l.Ij.Ready:return"Ready";case l.Ij.Failed:return"Processing error. Please check if the access token is still valid";case l.Ij.Pending:return"Awaiting the next data synchronization"}}(n.node.status)})]})})]},n.node.id)),!!(null==j?void 0:j.hasPreviousPage)&&(0,r.jsx)($,{onLoad:()=>{(null==j?void 0:j.startCursor)&&m(j.startCursor)},isFetching:x,children:(0,r.jsx)(w,{})})]})]}):(0,r.jsx)(I,{})})}function N(){let n=(0,o.useParams)();return(0,r.jsx)("div",{className:"my-4 flex justify-end",children:(0,r.jsx)(i(),{href:"./".concat(n.kind,"/new"),className:(0,f.d)(),children:"Create"})})}function I(){let n=(0,o.useParams)();return(0,r.jsxs)("div",{className:"flex flex-col items-center gap-4 rounded-lg border-4 border-dashed py-8",children:[(0,r.jsx)("div",{children:"No Data"}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(i(),{href:"./".concat(n.kind,"/new"),className:(0,f.d)({variant:"default"}),children:"Create"})})]})}function S(){return(0,r.jsxs)(g.Zb,{className:"w-full bg-transparent",children:[(0,r.jsx)(g.Ol,{className:"border-b px-6 py-4",children:(0,r.jsx)(g.ll,{children:(0,r.jsx)(m.O,{className:"w-[20%]"})})}),(0,r.jsx)(g.aY,{className:"px-6 py-4",children:(0,r.jsx)(m.O,{className:"w-[80%]"})})]})}function w(){return(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsx)(S,{}),(0,r.jsx)(S,{})]})}},39231:function(n,e,t){"use strict";t.d(e,{A:function(){return i}});var r=t(11978),s=t(78613),a=t(11529);function i(){let n=(0,r.useParams)(),e=(0,s.Z)(a.K,e=>{var t;return e.name===(null===(t=n.kind)||void 0===t?void 0:t.toLowerCase())}),t=e>-1?a.K[e].enum:a.K[0].enum;return t}},11529:function(n,e,t){"use strict";t.d(e,{K:function(){return s}});var r=t(18500);let s=[{name:"github",enum:r.q6.Github,meta:{displayName:"GitHub"}},{name:"github-self-hosted",enum:r.q6.GithubSelfHosted,meta:{displayName:"GitHub Self-Hosted"}},{name:"gitlab",enum:r.q6.Gitlab,meta:{displayName:"GitLab"}},{name:"gitlab-self-hosted",enum:r.q6.GitlabSelfHosted,meta:{displayName:"GitLab Self-Hosted"}}]},6230:function(n,e,t){"use strict";var r=t(36164),s=t(3546),a=t(24449),i=t(90379);e.Z=n=>{let{loading:e,fallback:t,delay:o,children:u}=n,[d,l]=s.useState(!e),[c]=(0,a.n)(d,null!=o?o:200);return(s.useEffect(()=>{e||d||l(!0)},[e]),c)?u:t||(0,r.jsx)(i.cg,{})}},90379:function(n,e,t){"use strict";t.d(e,{PF:function(){return u},cg:function(){return i},tB:function(){return o}});var r=t(36164),s=t(1544),a=t(3448);let i=n=>{let{className:e,...t}=n;return(0,r.jsxs)("div",{className:(0,s.cn)("space-y-3",e),...t,children:[(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-full"})]})},o=n=>{let{className:e,...t}=n;return(0,r.jsx)(a.O,{className:(0,s.cn)("h-4 w-full",e),...t})},u=n=>{let{className:e,...t}=n;return(0,r.jsxs)("div",{className:(0,s.cn)("flex flex-col gap-3",e),...t,children:[(0,r.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(a.O,{className:"h-4 w-full"}),(0,r.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(a.O,{className:"h-4 w-full"})]})}},31458:function(n,e,t){"use strict";t.d(e,{d:function(){return u},z:function(){return d}});var r=t(36164),s=t(3546),a=t(74047),i=t(14375),o=t(1544);let u=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((n,e)=>{let{className:t,variant:s,size:i,asChild:d=!1,...l}=n,c=d?a.g7:"button";return(0,r.jsx)(c,{className:(0,o.cn)(u({variant:s,size:i,className:t})),ref:e,...l})});d.displayName="Button"},79972:function(n,e,t){"use strict";t.d(e,{Ol:function(){return o},Zb:function(){return i},aY:function(){return l},eW:function(){return c},ll:function(){return u}});var r=t(36164),s=t(3546),a=t(1544);let i=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("div",{ref:e,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...s})});i.displayName="Card";let o=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("div",{ref:e,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",t),...s})});o.displayName="CardHeader";let u=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("h3",{ref:e,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",t),...s})});u.displayName="CardTitle";let d=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("p",{ref:e,className:(0,a.cn)("text-sm text-muted-foreground",t),...s})});d.displayName="CardDescription";let l=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("div",{ref:e,className:(0,a.cn)("p-6 pt-0",t),...s})});l.displayName="CardContent";let c=s.forwardRef((n,e)=>{let{className:t,...s}=n;return(0,r.jsx)("div",{ref:e,className:(0,a.cn)("flex items-center p-6 pt-0",t),...s})});c.displayName="CardFooter"},3448:function(n,e,t){"use strict";t.d(e,{O:function(){return a}});var r=t(36164),s=t(1544);function a(n){let{className:e,...t}=n;return(0,r.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-border",e),...t})}},21808:function(n,e,t){"use strict";t.d(e,{$6:function(){return a},$I:function(){return i},L8:function(){return s},ir:function(){return o},o0:function(){return r}});let r="name@yourcompany.com",s=20,a={DEMO_AUTO_LOGIN:"_tabby_demo_autologin",SEARCH_INITIAL_MSG:"_tabby_search_initial_msg",SEARCH_INITIAL_CONTEXTS:"_tabby_search_initial_contexts"},i=48,o="NOT_FOUND"},24449:function(n,e,t){"use strict";t.d(e,{S:function(){return o},n:function(){return u}});var r=t(3546),s=t(45391),a=t(16784);let i=n=>{let e=(0,a.d)(n);r.useEffect(()=>()=>{e.current()},[])};function o(n,e,t){let o=(0,a.d)(n),u=r.useMemo(()=>(0,s.Z)(function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];return o.current(...e)},e,t),[]);return i(()=>{var n;null==t||null===(n=t.onUnmount)||void 0===n||n.call(t,u),u.cancel()}),{run:u,cancel:u.cancel,flush:u.flush}}function u(n,e,t){let[s,a]=r.useState(n),{run:i}=o(()=>{a(n)},e,t);return r.useEffect(()=>{i()},[n]),[s,a]}},16784:function(n,e,t){"use strict";t.d(e,{d:function(){return s}});var r=t(3546);function s(n){let e=r.useRef(n);return e.current=n,e}},70410:function(n,e,t){"use strict";t.d(e,{Cl:function(){return c},D7:function(){return h},DQ:function(){return u},GG:function(){return i},Gx:function(){return x},S1:function(){return a},TH:function(){return d},XL:function(){return v},Y6:function(){return l},gI:function(){return b},hA:function(){return $},kb:function(){return f},lE:function(){return s},r4:function(){return p},ts:function(){return g},yB:function(){return o},zz:function(){return m}});var r=t(43240);let s=(0,r.BX)("\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),a=(0,r.BX)("\n  query gitRepositories(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitRepositories(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n          sourceId\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),i=(0,r.BX)("\n  query ListJobRuns(\n    $ids: [ID!]\n    $jobs: [String!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      jobs: $jobs\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          startedAt\n          finishedAt\n          exitCode\n          stdout\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),o=(0,r.BX)("\n  query GetJobRunStats($jobs: [String!]) {\n    jobRunStats(jobs: $jobs) {\n      success\n      failed\n      pending\n    }\n  }\n"),u=(0,r.BX)("\n  query ListJobs {\n    jobs\n  }\n"),d=(0,r.BX)("\n  query ListUsers($after: String, $before: String, $first: Int, $last: Int) {\n    users(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          isAdmin\n          isOwner\n          createdAt\n          active\n          name\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),l=(0,r.BX)("\n  query DailyStatsInPastYear($users: [ID!]) {\n    dailyStatsInPastYear(users: $users) {\n      start\n      end\n      completions\n      selects\n      views\n    }\n  }\n"),c=(0,r.BX)("\n  query DailyStats(\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n    $languages: [Language!]\n  ) {\n    dailyStats(start: $start, end: $end, users: $users, languages: $languages) {\n      start\n      end\n      completions\n      selects\n      views\n      language\n    }\n  }\n"),f=(0,r.BX)("\n  query ListIntegrations(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integrations(\n      ids: $ids\n      kind: $kind\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n          apiBase\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),g=(0,r.BX)("\n  query ListIntegratedRepositories(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integratedRepositories(\n      ids: $ids\n      kind: $kind\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          gitUrl\n          active\n          sourceId\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              startedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),m=(0,r.BX)("\n  query RepositoryList {\n    repositoryList {\n      id\n      name\n      kind\n      gitUrl\n      refs {\n        name\n        commit\n      }\n    }\n  }\n"),h=(0,r.BX)("\n  query RepositorySearch(\n    $kind: RepositoryKind!\n    $id: ID!\n    $rev: String\n    $pattern: String!\n  ) {\n    repositorySearch(kind: $kind, id: $id, rev: $rev, pattern: $pattern) {\n      type\n      path\n      indices\n    }\n  }\n"),x=(0,r.BX)("\n  query ContextInfo {\n    contextInfo {\n      sources {\n        id\n        sourceKind\n        sourceId\n        sourceName\n      }\n    }\n  }\n"),b=(0,r.BX)("\n  query UserGroups {\n    userGroups {\n      id\n      name\n      createdAt\n      updatedAt\n      members {\n        user {\n          id\n          email\n          name\n          createdAt\n        }\n        isGroupAdmin\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"),$=(0,r.BX)("\n  query sourceIdAccessPolicies($sourceId: String!) {\n    sourceIdAccessPolicies(sourceId: $sourceId) {\n      sourceId\n      read {\n        id\n        name\n      }\n    }\n  }\n"),v=(0,r.BX)("\n  query ListThreads(\n    $ids: [ID!]\n    $isEphemeral: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    threads(\n      ids: $ids\n      isEphemeral: $isEphemeral\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          userId\n          createdAt\n          updatedAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),p=(0,r.BX)("\n  query ListThreadMessages(\n    $threadId: ID!\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    threadMessages(\n      threadId: $threadId\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          threadId\n          role\n          content\n          attachment {\n            code {\n              gitUrl\n              filepath\n              language\n              content\n              startLine\n            }\n            clientCode {\n              filepath\n              content\n              startLine\n            }\n            doc {\n              __typename\n              ... on MessageAttachmentWebDoc {\n                title\n                link\n                content\n              }\n              ... on MessageAttachmentIssueDoc {\n                title\n                link\n                body\n                closed\n              }\n              ... on MessageAttachmentPullDoc {\n                title\n                link\n                body\n                merged\n                patch\n              }\n            }\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n")}},function(n){n.O(0,[1386,55,4007,7070,9624,1544,3240,3375,5289,1744],function(){return n(n.s=96800)}),_N_E=n.O()}]);