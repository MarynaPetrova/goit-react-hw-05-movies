"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[53],{687:(e,a,t)=>{t.d(a,{Bt:()=>l,FE:()=>i,Y5:()=>o,vw:()=>r,y:()=>d});var s=t(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3";const c="c4cadb3d157e55315d13da915983f2ee",n="language=en-US",r=async()=>(await s.Z.get("/trending/movie/day?api_key=".concat(c))).data,i=async(e,a)=>(await s.Z.get("/search/movie?query=".concat(e,"&").concat(n,"&page=").concat(a,"&api_key=").concat(c))).data,o=async e=>(await s.Z.get("/movie/".concat(e,"?").concat(n,"&api_key=").concat(c))).data,d=async e=>(await s.Z.get("/movie/".concat(e,"/credits?").concat(n,"&api_key=").concat(c))).data,l=async e=>(await s.Z.get("/movie/".concat(e,"/reviews?").concat(n,"&page=1&api_key=").concat(c))).data},53:(e,a,t)=>{t.r(a),t.d(a,{default:()=>x});var s=t(689),c=t(87),n=t(791),r=t(687),i=t(184);const o=()=>(0,i.jsxs)("svg",{className:"card-arrow",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 32 32",children:[(0,i.jsx)("title",{children:"arrow-left"}),(0,i.jsx)("path",{d:"M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"})]}),d=e=>{var a,t;let{movie:r}=e;const d=(0,s.TH)(),l=(0,n.useRef)(d),{genres:h,overview:v,poster_path:x,release_date:m,title:j,vote_average:p}=r;return(0,i.jsxs)("div",{className:"card-wrapper",children:[(0,i.jsxs)(c.rU,{className:"card-back-arrow",to:null!==(a=null===(t=l.current.state)||void 0===t?void 0:t.from)&&void 0!==a?a:"/",children:[(0,i.jsx)(o,{}),"Go back"]}),(0,i.jsx)("div",{className:"card-details-wrapper",children:(null===r||void 0===r?void 0:r.release_date)&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/","w300").concat(x),alt:"".concat(j," movie poster")}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("h1",{children:[j," ",(0,i.jsxs)("span",{children:["(",m.split("-")[0],")"]})]}),(0,i.jsxs)("p",{children:["User score: ",(10*p).toFixed(1),"%"]}),(0,i.jsx)("h2",{children:"Overview"}),(0,i.jsx)("p",{children:v}),(0,i.jsx)("h3",{children:"Genres"}),!!h&&0===h.length&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("p",{children:"Unfortunately, there is no information about genres"})}),!!h&&h.length>0&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:"card-genres-list",children:h.map((e=>(0,i.jsx)("li",{children:e.name},e.id)))})})]})]})})]})};var l=t(767),h=t(686),v=t.n(h);function x(){const e=(0,s.UO)(),[a,t]=(0,n.useState)({}),[o,h]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{!async function(){try{h(!0);const a=await(0,r.Y5)(e.movieId);t(a)}catch(a){v().Notify.failure("Oops, something went wrong, try reloading the page")}finally{h(!1)}}()}),[e.movieId]),(0,i.jsxs)("div",{children:[o&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.a,{})}),(0,i.jsx)(d,{movie:a}),(0,i.jsxs)("div",{className:"card-add-info",children:[(0,i.jsx)("h4",{children:"Additional information"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,i.jsx)(s.j3,{})]})}}}]);
//# sourceMappingURL=53.b3377e95.chunk.js.map