import{b as r,an as i,g as s,ao as p,u as c,f as u,ap as m,o as d,a7 as f,y,j as _,n as g,k as x,K as S,aq as C,_ as v,H as z}from"./index-CpodFpUQ.js";const b=r({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:i,default:""},truncated:{type:Boolean},lineClamp:{type:[String,Number]},tag:{type:String,default:"span"}}),k=s({name:"ElText"}),w=s({...k,props:b,setup(n){const t=n,l=p(),e=c("text"),o=u(()=>[e.b(),e.m(t.type),e.m(l.value),e.is("truncated",t.truncated),e.is("line-clamp",!m(t.lineClamp))]);return(a,B)=>(d(),f(C(a.tag),{class:g(x(o)),style:S({"-webkit-line-clamp":a.lineClamp})},{default:y(()=>[_(a.$slots,"default")]),_:3},8,["class","style"]))}});var h=v(w,[["__file","text.vue"]]);const T=z(h);export{T as E};
