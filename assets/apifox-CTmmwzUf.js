import{g as c,r,f as m,R as p,D as _,k as t,o as a,h as i,s as f,K as h,x as g}from"./index-CpodFpUQ.js";import{v as x}from"./el-loading-BOfnPg9C.js";const v=["src"],w=c({__name:"index",props:{src:{type:String,required:!0}},setup(n){const o=n,e=r(document.documentElement.clientHeight-94.5+"px;"),s=r(!0),l=m(()=>o.src);return p(()=>{setTimeout(()=>{s.value=!1},300),window.onresize=function(){e.value=document.documentElement.clientHeight-94.5+"px;"}}),(u,y)=>{const d=x;return _((a(),i("div",{style:h("height:"+t(e))},[f("iframe",{src:t(l),frameborder:"no",style:{width:"100%",height:"100%"},scrolling:"auto"},null,8,v)],4)),[[d,t(s)]])}}}),E=c({__name:"apifox",setup(n){return(o,e)=>(a(),i("div",null,[g(w,{src:"https://tl-nest-admin.apifox.cn"})]))}});export{E as default};