"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[737],{687:(e,t,a)=>{a.d(t,{Bt:()=>u,FE:()=>i,Y5:()=>r,vw:()=>s,y:()=>l});var n=a(294);n.Z.defaults.baseURL="https://api.themoviedb.org/3";const c="c4cadb3d157e55315d13da915983f2ee",o="language=en-US",s=async()=>(await n.Z.get("/trending/movie/day?api_key=".concat(c))).data,i=async(e,t)=>(await n.Z.get("/search/movie?query=".concat(e,"&").concat(o,"&page=").concat(t,"&api_key=").concat(c))).data,r=async e=>(await n.Z.get("/movie/".concat(e,"?").concat(o,"&api_key=").concat(c))).data,l=async e=>(await n.Z.get("/movie/".concat(e,"/credits?").concat(o,"&api_key=").concat(c))).data,u=async e=>(await n.Z.get("/movie/".concat(e,"/reviews?").concat(o,"&page=1&api_key=").concat(c))).data},737:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(791),c=a(87),o=a(687),s=a(184);const i=e=>{let{onSubmit:t}=e;return(0,s.jsxs)("form",{className:"searchForm",children:[(0,s.jsx)("input",{className:"searchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie"}),(0,s.jsx)("button",{type:"submit",className:"searchForm-button",onClick:e=>{t(e.target.previousElementSibling.value),e.preventDefault()},children:"Search"})]})};var r=a(689);const l=e=>{let{movies:t}=e;const a=(0,r.TH)();return(0,s.jsx)("ul",{className:"movies-list",children:t.map((e=>(0,s.jsx)("li",{children:(0,s.jsx)(c.rU,{to:"".concat(e.id),state:{from:a},children:e.title})},e.id)))})},u=e=>{let{nextPage:t}=e;return(0,s.jsx)("button",{onClick:t,className:"button",type:"button",children:"Load More"})};var d=a(767),m=a(686),h=a.n(m);function p(){var e;const[t,a]=(0,n.useState)([]),[r,m]=(0,n.useState)(!1),[p,g]=(0,n.useState)(1),[y,v]=(0,n.useState)(),[f,x]=(0,n.useState)(null),[w,j]=(0,c.lr)(""),b=null!==(e=w.get("query"))&&void 0!==e?e:"";(0,n.useEffect)((()=>{!async function(){if(""!==b)try{m(!0);const{results:e,total_pages:t}=await(0,o.FE)(b,p);0===e.length&&h().Notify.failure('Oops, no movie with the title "'.concat(b,'" was found.')),v(p<Math.ceil(t/20)),a(e)}catch(e){h().Notify.failure("Oops, something went wrong, try reloading the page")}finally{m(!1)}}()}),[b,p,f]);return(0,s.jsxs)("div",{children:[(0,s.jsx)(i,{onSubmit:e=>{j({query:e}),g(1),a([]),x(Date.now())}}),t.length>0&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l,{movies:t})}),r&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(d.a,{})}),y&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(u,{nextPage:()=>{g((e=>e+1))}})})]})}}}]);
//# sourceMappingURL=737.b3aa10c7.chunk.js.map