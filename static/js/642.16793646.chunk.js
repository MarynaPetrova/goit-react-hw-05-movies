"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[642],{687:(e,a,t)=>{t.d(a,{Bt:()=>l,FE:()=>r,Y5:()=>s,vw:()=>o,y:()=>d});var c=t(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";const n="c4cadb3d157e55315d13da915983f2ee",i="language=en-US",o=async()=>(await c.Z.get("/trending/movie/day?api_key=".concat(n))).data,r=async(e,a)=>(await c.Z.get("/search/movie?query=".concat(e,"&").concat(i,"&page=").concat(a,"&api_key=").concat(n))).data,s=async e=>(await c.Z.get("/movie/".concat(e,"?").concat(i,"&api_key=").concat(n))).data,d=async e=>(await c.Z.get("/movie/".concat(e,"/credits?").concat(i,"&api_key=").concat(n))).data,l=async e=>(await c.Z.get("/movie/".concat(e,"/reviews?").concat(i,"&page=1&api_key=").concat(n))).data},642:(e,a,t)=>{t.r(a),t.d(a,{default:()=>l});var c=t(689),n=t(791),i=t(687),o=t(767),r=t(686),s=t.n(r),d=t(184);function l(){const e=(0,c.UO)(),[a,t]=(0,n.useState)([]),[r,l]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{!async function(){try{l(!0);const{results:a}=await(0,i.Bt)(e.movieId);t(a)}catch(a){s().Notify.failure("Oops, something went wrong, try reloading the page")}finally{l(!1)}}()}),[e.movieId]),(0,d.jsxs)("div",{children:[r&&(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(o.a,{})}),0===a.length&&(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("p",{children:"Unfortunately, there are no reviews"})}),(0,d.jsx)("ul",{children:a.length>0&&(0,d.jsx)(d.Fragment,{children:a.map((e=>{const{author:a,id:t,content:c}=e;return(0,d.jsxs)("li",{children:[" ",(0,d.jsx)("b",{children:a}),(0,d.jsx)("p",{children:c})]},t)}))})})]})}}}]);
//# sourceMappingURL=642.16793646.chunk.js.map