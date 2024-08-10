import{b as V,d as D,m as G,U as q,C as z,i as M,a as R,c as Z,r as $,e as A,w as O,p as U,u as j,f as _,g as b,o as k,h as I,j as S,n as y,k as t,_ as P,l as Q,q as J,s as e,t as m,v as F,x as o,y as s,z as Y,E as X,A as ee,B as te,D as le,F as se,G as oe,H as L,I as ne,J as ae,K as ie,L as ce,M as de,N as re,O as ue,P as pe,Q as _e}from"./index-CpodFpUQ.js";import{E as me}from"./el-card-q23y_vI7.js";import{E as fe}from"./el-text-JKyPlfiK.js";import{E as he}from"./el-row-D5xM9lwf.js";import{E as ve}from"./el-col-57__bE4T.js";import{E as ye}from"./el-link-1sriVKj4.js";const B=n=>M(n)||R(n)||Z(n),ge=V({accordion:Boolean,modelValue:{type:D([Array,String,Number]),default:()=>G([])}}),be={[q]:B,[z]:B},H=Symbol("collapseContextKey"),Ce=(n,d)=>{const a=$(A(n.modelValue)),r=c=>{a.value=c;const i=n.accordion?a.value[0]:a.value;d(q,i),d(z,i)},l=c=>{if(n.accordion)r([a.value[0]===c?"":c]);else{const i=[...a.value],p=i.indexOf(c);p>-1?i.splice(p,1):i.push(c),r(i)}};return O(()=>n.modelValue,()=>a.value=A(n.modelValue),{deep:!0}),U(H,{activeNames:a,handleItemClick:l}),{activeNames:a,setActiveNames:r}},Ee=()=>{const n=j("collapse");return{rootKls:_(()=>n.b())}},we=b({name:"ElCollapse"}),xe=b({...we,props:ge,emits:be,setup(n,{expose:d,emit:a}){const r=n,{activeNames:l,setActiveNames:c}=Ce(r,a),{rootKls:i}=Ee();return d({activeNames:l,setActiveNames:c}),(p,f)=>(k(),I("div",{class:y(t(i))},[S(p.$slots,"default")],2))}});var ke=P(xe,[["__file","collapse.vue"]]);const Ie=V({title:{type:String,default:""},name:{type:D([String,Number]),default:void 0},disabled:Boolean}),Ne=n=>{const d=Q(H),{namespace:a}=j("collapse"),r=$(!1),l=$(!1),c=J(),i=_(()=>c.current++),p=_(()=>{var h;return(h=n.name)!=null?h:`${a.value}-id-${c.prefix}-${t(i)}`}),f=_(()=>d==null?void 0:d.activeNames.value.includes(t(p)));return{focusing:r,id:i,isActive:f,handleFocus:()=>{setTimeout(()=>{l.value?l.value=!1:r.value=!0},50)},handleHeaderClick:()=>{n.disabled||(d==null||d.handleItemClick(t(p)),r.value=!1,l.value=!0)},handleEnterClick:()=>{d==null||d.handleItemClick(t(p))}}},Ke=(n,{focusing:d,isActive:a,id:r})=>{const l=j("collapse"),c=_(()=>[l.b("item"),l.is("active",t(a)),l.is("disabled",n.disabled)]),i=_(()=>[l.be("item","header"),l.is("active",t(a)),{focusing:t(d)&&!n.disabled}]),p=_(()=>[l.be("item","arrow"),l.is("active",t(a))]),f=_(()=>l.be("item","wrap")),C=_(()=>l.be("item","content")),g=_(()=>l.b(`content-${t(r)}`)),E=_(()=>l.b(`head-${t(r)}`));return{arrowKls:p,headKls:i,rootKls:c,itemWrapperKls:f,itemContentKls:C,scopedContentId:g,scopedHeadId:E}},$e=["id","aria-expanded","aria-controls","aria-describedby","tabindex"],Se=["id","aria-hidden","aria-labelledby"],je=b({name:"ElCollapseItem"}),Te=b({...je,props:Ie,setup(n,{expose:d}){const a=n,{focusing:r,id:l,isActive:c,handleFocus:i,handleHeaderClick:p,handleEnterClick:f}=Ne(a),{arrowKls:C,headKls:g,rootKls:E,itemWrapperKls:h,itemContentKls:T,scopedContentId:x,scopedHeadId:N}=Ke(a,{focusing:r,isActive:c,id:l});return d({isActive:c}),(K,v)=>(k(),I("div",{class:y(t(E))},[e("button",{id:t(N),class:y(t(g)),"aria-expanded":t(c),"aria-controls":t(x),"aria-describedby":t(x),tabindex:K.disabled?-1:0,type:"button",onClick:v[0]||(v[0]=(...w)=>t(p)&&t(p)(...w)),onKeydown:v[1]||(v[1]=ee(te((...w)=>t(f)&&t(f)(...w),["stop","prevent"]),["space","enter"])),onFocus:v[2]||(v[2]=(...w)=>t(i)&&t(i)(...w)),onBlur:v[3]||(v[3]=w=>r.value=!1)},[S(K.$slots,"title",{},()=>[m(F(K.title),1)]),o(t(X),{class:y(t(C))},{default:s(()=>[o(t(Y))]),_:1},8,["class"])],42,$e),o(t(oe),null,{default:s(()=>[le(e("div",{id:t(x),role:"region",class:y(t(h)),"aria-hidden":!t(c),"aria-labelledby":t(N)},[e("div",{class:y(t(T))},[S(K.$slots,"default")],2)],10,Se),[[se,t(c)]])]),_:3})],2))}});var W=P(Te,[["__file","collapse-item.vue"]]);const Ve=L(ke,{CollapseItem:W}),De=ne(W),Pe=V({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:D(String),default:"solid"}}),Ae=b({name:"ElDivider"}),Be=b({...Ae,props:Pe,setup(n){const d=n,a=j("divider"),r=_(()=>a.cssVar({"border-style":d.borderStyle}));return(l,c)=>(k(),I("div",{class:y([t(a).b(),t(a).m(l.direction)]),style:ie(t(r)),role:"separator"},[l.$slots.default&&l.direction!=="vertical"?(k(),I("div",{key:0,class:y([t(a).e("text"),t(a).is(l.contentPosition)])},[S(l.$slots,"default")],2)):ae("v-if",!0)],6))}});var qe=P(Be,[["__file","divider.vue"]]);const ze=L(qe),Fe=""+new URL("WeChat-BL86Lm-v.jpg",import.meta.url).href,Le=""+new URL("Alipay-BYLdlVCa.jpg",import.meta.url).href,He=""+new URL("WeChatPay-TJTQtyEa.jpg",import.meta.url).href,u=n=>(ue("data-v-6ffb6d08"),n=n(),pe(),n),We={class:"app-container home"},Ge={class:"text-warning",style:{"font-size":"14px"}},Me=u(()=>e("br",null,null,-1)),Re=u(()=>e("br",null,null,-1)),Ze=u(()=>e("br",null,null,-1)),Oe=u(()=>e("br",null,null,-1)),Ue=u(()=>e("hr",null,null,-1)),Qe=u(()=>e("h2",null,"天凌后台管理框架",-1)),Je=u(()=>e("p",null," 一直想做一款后台管理系统，看了很多优秀的开源项目但是发现没有合适自己的。需要学习其他后端语言，学习成本高，于是利用空闲休息时间开始自己写一套后台系统。如此有了天凌管理系统，她可以用于所有的Web应用程序，如网站管理后台，等等，当然，您也可以进行深度定制，以做出更强系统。所有前端后台代码封装过后十分精简易上手，出错概率低。系统会陆续更新一些实用功能。 ",-1)),Ye=u(()=>e("p",null," 这是一个适合前端开发者的一款后台管理系统，只需要简单了解一下Node.js，nest.js即可上手。 ",-1)),Xe=u(()=>e("b",null,"当前版本:",-1)),et=u(()=>e("h2",null,"技术选型",-1)),tt=u(()=>e("h4",null,"后端技术",-1)),lt=u(()=>e("ul",null,[e("li",null,"Node"),e("li",null,"Nest"),e("li",null,"JWT"),e("li",null,"Redis"),e("li",null,"rxjs"),e("li",null,"typeorm"),e("li",null,"...")],-1)),st=u(()=>e("h4",null,"前端技术",-1)),ot=u(()=>e("ul",null,[e("li",null,"Vue3"),e("li",null,"Pinia"),e("li",null,"Element-Plus"),e("li",null,"Axios"),e("li",null,"TypeScript"),e("li",null,"WangeDitor"),e("li",null,"...")],-1)),nt=u(()=>e("div",{class:"clearfix"},[e("span",null,"联系信息")],-1)),at=u(()=>e("div",{class:"body"},[e("p"),e("p",null,[e("i",{class:"el-icon-user-solid"}),m(" QQ群： "),e("a",{href:"http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=qeE58GqXx8bZzxpPe_j152fqWZIhSud4&authKey=DusCHL%2F3uiKr%2FZ7aGeKc8Zj%2F%2FiD4qlTk9Zn7RB4VM%2B2aAZEdZCFy08jP8DExGMAG&noverify=0&group_code=1001388768",target:"_blank"},"1001388768")]),e("p",null,[e("img",{src:Fe,alt:"donate",style:{width:"45%"}})])],-1)),it=u(()=>e("div",{class:"clearfix"},[e("span",null,"更新日志")],-1)),ct=u(()=>e("ol",null,[e("li",null,"天凌前后端分离系统测试发布")],-1)),dt=u(()=>e("div",{class:"clearfix"},[e("span",null,"捐赠支持")],-1)),rt=u(()=>e("div",{class:"body",style:{"text-align":"center"}},[e("div",{class:"",style:{display:"flex","justify-content":"space-between"}},[e("img",{src:Le,alt:"donate",style:{width:"45%"}}),e("img",{src:He,alt:"donate",style:{width:"45%"}})]),e("span",{style:{display:"inline-block",height:"30px","line-height":"30px"}},"你可以请作者喝杯咖啡表示鼓励")],-1)),ut=b({__name:"index",setup(n){const d=$("0.0.1");function a(r){window.open(r,"__blank")}return(r,l)=>{const c=ye,i=ve,p=he,f=fe,C=de,g=re,E=ze,h=me,T=De,x=Ve;return k(),I("div",We,[o(p,{gutter:20},{default:s(()=>[o(i,{sm:24,lg:24},{default:s(()=>[e("blockquote",Ge,[m(" 阿里云：上云优惠聚集地，云小站专属折扣优惠，新老用户99元一年 "),Me,o(c,{href:"https://www.aliyun.com/minisite/goods?userCode=8zecm2vo",type:"primary",target:"_blank"},{default:s(()=>[m("https://www.aliyun.com/minisite/goods?userCode=8zecm2vo")]),_:1}),Re,m(" 通义灵码_智能编码助手_AI编程-阿里云 "),Ze,o(c,{href:"https://tongyi.aliyun.com/lingma/pricing?userCode=8zecm2vo",type:"primary",target:"_blank"},{default:s(()=>[m("https://tongyi.aliyun.com/lingma/pricing?userCode=8zecm2vo")]),_:1}),Oe]),Ue]),_:1})]),_:1}),o(p,{gutter:20},{default:s(()=>[o(i,{sm:24,lg:12,style:{"padding-left":"20px"}},{default:s(()=>[Qe,Je,Ye,e("p",null,[o(f,{class:"mx-1",type:"danger"},{default:s(()=>[m(" 注意：目前正在开发中，功能正在进一步完善中。暂时可作为个人练习使用。如商用请谨慎使用，如出现问题概不负责。 ")]),_:1})]),e("p",null,[Xe,m(),e("span",null,"v"+F(t(d)),1)]),e("p",null,[o(C,{type:"danger"},{default:s(()=>[m("¥免费开源")]),_:1})]),e("p",null,[o(g,{type:"primary",icon:"Cloudy",plain:"",onClick:l[0]||(l[0]=N=>a("https://gitee.com/y_project/RuoYi-Vue"))},{default:s(()=>[m("访问码云")]),_:1}),o(g,{plain:"",onClick:l[1]||(l[1]=N=>a("https://github.com/huyagouban/tianLing-nest-admin-web"))},{icon:s(()=>[o(ce,{iconClass:"icon-test_1",className:"icon"})]),default:s(()=>[m(" 访问GitHub")]),_:1})])]),_:1}),o(i,{sm:24,lg:12,style:{"padding-left":"50px"}},{default:s(()=>[o(p,null,{default:s(()=>[o(i,{span:12},{default:s(()=>[et]),_:1})]),_:1}),o(p,null,{default:s(()=>[o(i,{span:6},{default:s(()=>[tt,lt]),_:1}),o(i,{span:6},{default:s(()=>[st,ot]),_:1})]),_:1})]),_:1})]),_:1}),o(E),o(p,{gutter:20},{default:s(()=>[o(i,{xs:24,sm:24,md:12,lg:8},{default:s(()=>[o(h,{class:"update-log"},{header:s(()=>[nt]),default:s(()=>[at]),_:1})]),_:1}),o(i,{xs:24,sm:24,md:12,lg:8},{default:s(()=>[o(h,{class:"update-log"},{header:s(()=>[it]),default:s(()=>[o(x,{accordion:""},{default:s(()=>[o(T,{title:"v0.0.1 - 2024-08-05"},{default:s(()=>[ct]),_:1})]),_:1})]),_:1})]),_:1}),o(i,{xs:24,sm:24,md:12,lg:8},{default:s(()=>[o(h,{class:"update-log"},{header:s(()=>[dt]),default:s(()=>[rt]),_:1})]),_:1})]),_:1})])}}}),yt=_e(ut,[["__scopeId","data-v-6ffb6d08"]]);export{yt as default};