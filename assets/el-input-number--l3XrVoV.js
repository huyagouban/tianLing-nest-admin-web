import{b as ie,b3 as ce,i as p,b4 as de,C as Z,b5 as P,b6 as y,U as h,g as ee,b1 as me,u as pe,r as be,aw as fe,b7 as ve,f as v,ap as E,ao as Ne,b8 as Ve,w as he,R as ye,aO as Ie,b9 as ge,o as b,h as x,D as W,k as t,n as K,A as _,j as Y,x as M,y as j,a7 as S,ba as we,bb as Ee,E as J,J as q,bc as _e,a9 as Se,B as z,a1 as Pe,_ as Ae,aK as Fe,a as Ce,bd as Q,H as ke}from"./index-CpodFpUQ.js";import{v as X}from"./index-D5u5-p8S.js";const Be=ie({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:ce,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||p(l)||["min","max"].includes(l),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0},...de(["ariaLabel"])}),De={[Z]:(l,A)=>A!==l,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[P]:l=>p(l)||y(l),[h]:l=>p(l)||y(l)},Te=["aria-label","onKeydown"],xe=["aria-label","onKeydown"],Ke=ee({name:"ElInputNumber"}),Me=ee({...Ke,props:Be,emits:De,setup(l,{expose:A,emit:c}){const r=l,{t:O}=me(),d=pe("input-number"),N=be(),u=fe({currentValue:r.modelValue,userInput:null}),{formItem:f}=ve(),U=v(()=>p(r.modelValue)&&r.modelValue<=r.min),L=v(()=>p(r.modelValue)&&r.modelValue>=r.max),ne=v(()=>{const e=R(r.step);return E(r.precision)?Math.max(R(r.modelValue),e):(e>r.precision,r.precision)}),F=v(()=>r.controls&&r.controlsPosition==="right"),$=Ne(),V=Ve(),C=v(()=>{if(u.userInput!==null)return u.userInput;let e=u.currentValue;if(y(e))return"";if(p(e)){if(Number.isNaN(e))return"";E(r.precision)||(e=e.toFixed(r.precision))}return e}),k=(e,n)=>{if(E(n)&&(n=ne.value),n===0)return Math.round(e);let a=String(e);const o=a.indexOf(".");if(o===-1||!a.replace(".","").split("")[o+n])return e;const g=a.length;return a.charAt(g-1)==="5"&&(a=`${a.slice(0,Math.max(0,g-1))}6`),Number.parseFloat(Number(a).toFixed(n))},R=e=>{if(y(e))return 0;const n=e.toString(),a=n.indexOf(".");let o=0;return a!==-1&&(o=n.length-a-1),o},G=(e,n=1)=>p(e)?k(e+r.step*n):u.currentValue,B=()=>{if(r.readonly||V.value||L.value)return;const e=Number(C.value)||0,n=G(e);I(n),c(P,u.currentValue),T()},D=()=>{if(r.readonly||V.value||U.value)return;const e=Number(C.value)||0,n=G(e,-1);I(n),c(P,u.currentValue),T()},H=(e,n)=>{const{max:a,min:o,step:s,precision:m,stepStrictly:g,valueOnClear:w}=r;a<o&&Fe("InputNumber","min should not be greater than max.");let i=Number(e);if(y(e)||Number.isNaN(i))return null;if(e===""){if(w===null)return null;i=Ce(w)?{min:o,max:a}[w]:w}return g&&(i=k(Math.round(i/s)*s,m)),E(m)||(i=k(i,m)),(i>a||i<o)&&(i=i>a?a:o,n&&c(h,i)),i},I=(e,n=!0)=>{var a;const o=u.currentValue,s=H(e);if(!n){c(h,s);return}o===s&&e||(u.userInput=null,c(h,s),o!==s&&c(Z,s,o),r.validateEvent&&((a=f==null?void 0:f.validate)==null||a.call(f,"change").catch(m=>Q())),u.currentValue=s)},te=e=>{u.userInput=e;const n=e===""?null:Number(e);c(P,n),I(n,!1)},ae=e=>{const n=e!==""?Number(e):"";(p(n)&&!Number.isNaN(n)||e==="")&&I(n),T(),u.userInput=null},re=()=>{var e,n;(n=(e=N.value)==null?void 0:e.focus)==null||n.call(e)},le=()=>{var e,n;(n=(e=N.value)==null?void 0:e.blur)==null||n.call(e)},ue=e=>{c("focus",e)},se=e=>{var n;u.userInput=null,c("blur",e),r.validateEvent&&((n=f==null?void 0:f.validate)==null||n.call(f,"blur").catch(a=>Q()))},T=()=>{u.currentValue!==r.modelValue&&(u.currentValue=r.modelValue)},oe=e=>{document.activeElement===e.target&&e.preventDefault()};return he(()=>r.modelValue,(e,n)=>{const a=H(e,!0);u.userInput===null&&a!==n&&(u.currentValue=a)},{immediate:!0}),ye(()=>{var e;const{min:n,max:a,modelValue:o}=r,s=(e=N.value)==null?void 0:e.input;if(s.setAttribute("role","spinbutton"),Number.isFinite(a)?s.setAttribute("aria-valuemax",String(a)):s.removeAttribute("aria-valuemax"),Number.isFinite(n)?s.setAttribute("aria-valuemin",String(n)):s.removeAttribute("aria-valuemin"),s.setAttribute("aria-valuenow",u.currentValue||u.currentValue===0?String(u.currentValue):""),s.setAttribute("aria-disabled",String(V.value)),!p(o)&&o!=null){let m=Number(o);Number.isNaN(m)&&(m=null),c(h,m)}s.addEventListener("wheel",oe,{passive:!1})}),Ie(()=>{var e,n;const a=(e=N.value)==null?void 0:e.input;a==null||a.setAttribute("aria-valuenow",`${(n=u.currentValue)!=null?n:""}`)}),ge({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-input-number",ref:"https://element-plus.org/en-US/component/input-number.html"},v(()=>!!r.label)),A({focus:re,blur:le}),(e,n)=>(b(),x("div",{class:K([t(d).b(),t(d).m(t($)),t(d).is("disabled",t(V)),t(d).is("without-controls",!e.controls),t(d).is("controls-right",t(F))]),onDragstart:n[0]||(n[0]=z(()=>{},["prevent"]))},[e.controls?W((b(),x("span",{key:0,role:"button","aria-label":t(O)("el.inputNumber.decrease"),class:K([t(d).e("decrease"),t(d).is("disabled",t(U))]),onKeydown:_(D,["enter"])},[Y(e.$slots,"decrease-icon",{},()=>[M(t(J),null,{default:j(()=>[t(F)?(b(),S(t(we),{key:0})):(b(),S(t(Ee),{key:1}))]),_:1})])],42,Te)),[[t(X),D]]):q("v-if",!0),e.controls?W((b(),x("span",{key:1,role:"button","aria-label":t(O)("el.inputNumber.increase"),class:K([t(d).e("increase"),t(d).is("disabled",t(L))]),onKeydown:_(B,["enter"])},[Y(e.$slots,"increase-icon",{},()=>[M(t(J),null,{default:j(()=>[t(F)?(b(),S(t(_e),{key:0})):(b(),S(t(Se),{key:1}))]),_:1})])],42,xe)),[[t(X),B]]):q("v-if",!0),M(t(Pe),{id:e.id,ref_key:"input",ref:N,type:"number",step:e.step,"model-value":t(C),placeholder:e.placeholder,readonly:e.readonly,disabled:t(V),size:t($),max:e.max,min:e.min,name:e.name,"aria-label":e.label||e.ariaLabel,"validate-event":!1,onKeydown:[_(z(B,["prevent"]),["up"]),_(z(D,["prevent"]),["down"])],onBlur:se,onFocus:ue,onInput:te,onChange:ae},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","aria-label","onKeydown"])],34))}});var ze=Ae(Me,[["__file","input-number.vue"]]);const Le=ke(ze);export{Le as E};