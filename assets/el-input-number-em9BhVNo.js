import{b as oe,b5 as ce,i as p,b6 as de,C as Z,b7 as P,b8 as y,U as h,g as ee,b2 as me,u as pe,r as be,ax as fe,b9 as ve,f as V,ap as E,ao as Ne,ba as Ve,w as he,R as ye,aP as Ie,o as b,h as T,D as W,k as t,n as M,A as _,j as Y,x as z,y as j,a7 as S,bb as ge,bc as we,E as J,J as q,bd as Ee,a9 as _e,B as K,a1 as Se,_ as Pe,aL as Ae,a as Fe,be as Q,H as Ce}from"./index-gd7kCRgy.js";import{v as X}from"./index-CG8g6kB4.js";const ke=oe({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:ce,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||p(l)||["min","max"].includes(l),default:null},name:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0},...de(["ariaLabel"])}),xe={[Z]:(l,A)=>A!==l,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[P]:l=>p(l)||y(l),[h]:l=>p(l)||y(l)},Be=ee({name:"ElInputNumber"}),De=ee({...Be,props:ke,emits:xe,setup(l,{expose:A,emit:c}){const r=l,{t:L}=me(),d=pe("input-number"),v=be(),u=fe({currentValue:r.modelValue,userInput:null}),{formItem:f}=ve(),O=V(()=>p(r.modelValue)&&r.modelValue<=r.min),U=V(()=>p(r.modelValue)&&r.modelValue>=r.max),ne=V(()=>{const e=R(r.step);return E(r.precision)?Math.max(R(r.modelValue),e):(e>r.precision,r.precision)}),F=V(()=>r.controls&&r.controlsPosition==="right"),$=Ne(),N=Ve(),C=V(()=>{if(u.userInput!==null)return u.userInput;let e=u.currentValue;if(y(e))return"";if(p(e)){if(Number.isNaN(e))return"";E(r.precision)||(e=e.toFixed(r.precision))}return e}),k=(e,n)=>{if(E(n)&&(n=ne.value),n===0)return Math.round(e);let a=String(e);const i=a.indexOf(".");if(i===-1||!a.replace(".","").split("")[i+n])return e;const g=a.length;return a.charAt(g-1)==="5"&&(a=`${a.slice(0,Math.max(0,g-1))}6`),Number.parseFloat(Number(a).toFixed(n))},R=e=>{if(y(e))return 0;const n=e.toString(),a=n.indexOf(".");let i=0;return a!==-1&&(i=n.length-a-1),i},G=(e,n=1)=>p(e)?k(e+r.step*n):u.currentValue,x=()=>{if(r.readonly||N.value||U.value)return;const e=Number(C.value)||0,n=G(e);I(n),c(P,u.currentValue),D()},B=()=>{if(r.readonly||N.value||O.value)return;const e=Number(C.value)||0,n=G(e,-1);I(n),c(P,u.currentValue),D()},H=(e,n)=>{const{max:a,min:i,step:s,precision:m,stepStrictly:g,valueOnClear:w}=r;a<i&&Ae("InputNumber","min should not be greater than max.");let o=Number(e);if(y(e)||Number.isNaN(o))return null;if(e===""){if(w===null)return null;o=Fe(w)?{min:i,max:a}[w]:w}return g&&(o=k(Math.round(o/s)*s,m)),E(m)||(o=k(o,m)),(o>a||o<i)&&(o=o>a?a:i,n&&c(h,o)),o},I=(e,n=!0)=>{var a;const i=u.currentValue,s=H(e);if(!n){c(h,s);return}i===s&&e||(u.userInput=null,c(h,s),i!==s&&c(Z,s,i),r.validateEvent&&((a=f==null?void 0:f.validate)==null||a.call(f,"change").catch(m=>Q())),u.currentValue=s)},te=e=>{u.userInput=e;const n=e===""?null:Number(e);c(P,n),I(n,!1)},ae=e=>{const n=e!==""?Number(e):"";(p(n)&&!Number.isNaN(n)||e==="")&&I(n),D(),u.userInput=null},re=()=>{var e,n;(n=(e=v.value)==null?void 0:e.focus)==null||n.call(e)},le=()=>{var e,n;(n=(e=v.value)==null?void 0:e.blur)==null||n.call(e)},ue=e=>{c("focus",e)},se=e=>{var n;u.userInput=null,c("blur",e),r.validateEvent&&((n=f==null?void 0:f.validate)==null||n.call(f,"blur").catch(a=>Q()))},D=()=>{u.currentValue!==r.modelValue&&(u.currentValue=r.modelValue)},ie=e=>{document.activeElement===e.target&&e.preventDefault()};return he(()=>r.modelValue,(e,n)=>{const a=H(e,!0);u.userInput===null&&a!==n&&(u.currentValue=a)},{immediate:!0}),ye(()=>{var e;const{min:n,max:a,modelValue:i}=r,s=(e=v.value)==null?void 0:e.input;if(s.setAttribute("role","spinbutton"),Number.isFinite(a)?s.setAttribute("aria-valuemax",String(a)):s.removeAttribute("aria-valuemax"),Number.isFinite(n)?s.setAttribute("aria-valuemin",String(n)):s.removeAttribute("aria-valuemin"),s.setAttribute("aria-valuenow",u.currentValue||u.currentValue===0?String(u.currentValue):""),s.setAttribute("aria-disabled",String(N.value)),!p(i)&&i!=null){let m=Number(i);Number.isNaN(m)&&(m=null),c(h,m)}s.addEventListener("wheel",ie,{passive:!1})}),Ie(()=>{var e,n;const a=(e=v.value)==null?void 0:e.input;a==null||a.setAttribute("aria-valuenow",`${(n=u.currentValue)!=null?n:""}`)}),A({focus:re,blur:le}),(e,n)=>(b(),T("div",{class:M([t(d).b(),t(d).m(t($)),t(d).is("disabled",t(N)),t(d).is("without-controls",!e.controls),t(d).is("controls-right",t(F))]),onDragstart:K(()=>{},["prevent"])},[e.controls?W((b(),T("span",{key:0,role:"button","aria-label":t(L)("el.inputNumber.decrease"),class:M([t(d).e("decrease"),t(d).is("disabled",t(O))]),onKeydown:_(B,["enter"])},[Y(e.$slots,"decrease-icon",{},()=>[z(t(J),null,{default:j(()=>[t(F)?(b(),S(t(ge),{key:0})):(b(),S(t(we),{key:1}))]),_:1})])],42,["aria-label","onKeydown"])),[[t(X),B]]):q("v-if",!0),e.controls?W((b(),T("span",{key:1,role:"button","aria-label":t(L)("el.inputNumber.increase"),class:M([t(d).e("increase"),t(d).is("disabled",t(U))]),onKeydown:_(x,["enter"])},[Y(e.$slots,"increase-icon",{},()=>[z(t(J),null,{default:j(()=>[t(F)?(b(),S(t(Ee),{key:0})):(b(),S(t(_e),{key:1}))]),_:1})])],42,["aria-label","onKeydown"])),[[t(X),x]]):q("v-if",!0),z(t(Se),{id:e.id,ref_key:"input",ref:v,type:"number",step:e.step,"model-value":t(C),placeholder:e.placeholder,readonly:e.readonly,disabled:t(N),size:t($),max:e.max,min:e.min,name:e.name,"aria-label":e.ariaLabel,"validate-event":!1,onKeydown:[_(K(x,["prevent"]),["up"]),_(K(B,["prevent"]),["down"])],onBlur:se,onFocus:ue,onInput:te,onChange:ae},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","aria-label","onKeydown"])],42,["onDragstart"]))}});var Te=Pe(De,[["__file","input-number.vue"]]);const Ke=Ce(Te);export{Ke as E};
