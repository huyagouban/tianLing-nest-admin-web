import{b as Y,b1 as ae,g as N,b2 as se,l as q,cB as te,f as k,cC as ne,o as w,h as K,s as O,j as D,n as p,k as e,v as re,x as M,y as g,a7 as U,aq as ie,E as ce,J as _,K as Q,_ as W,cD as de,cE as ue,d as J,U as X,aD as fe,cF as ve,cg as G,r as E,cG as ye,cH as pe,aE as ge,cI as me,w as H,cJ as be,ar as Ce,R as he,au as De,cK as Z,aw as Ee,aS as ke,bI as we,u as Ie,p as Be,by as Fe,D as Te,cL as Se,cM as Ae,aF as Pe,cf as $e,F as Le,cN as Re,cO as Oe,H as Me}from"./index-gd7kCRgy.js";const x=Symbol("dialogInjectionKey"),ee=Y({center:Boolean,alignCenter:Boolean,closeIcon:{type:ae},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),Ne={close:()=>!0},ze=N({name:"ElDialogContent"}),Ve=N({...ze,props:ee,emits:Ne,setup(o,{expose:c}){const t=o,{t:A}=se(),{Close:n}=de,{dialogRef:f,headerRef:m,bodyId:b,ns:a,style:r}=q(x),{focusTrapRef:v}=q(te),y=k(()=>[a.b(),a.is("fullscreen",t.fullscreen),a.is("draggable",t.draggable),a.is("align-center",t.alignCenter),{[a.m("center")]:t.center}]),C=ue(v,f),d=k(()=>t.draggable),u=k(()=>t.overflow),{resetPostion:I}=ne(f,m,d,u);return c({resetPostion:I}),(s,P)=>(w(),K("div",{ref:e(C),class:p(e(y)),style:Q(e(r)),tabindex:"-1"},[O("header",{ref_key:"headerRef",ref:m,class:p([e(a).e("header"),{"show-close":s.showClose}])},[D(s.$slots,"header",{},()=>[O("span",{role:"heading","aria-level":s.ariaLevel,class:p(e(a).e("title"))},re(s.title),11,["aria-level"])]),s.showClose?(w(),K("button",{key:0,"aria-label":e(A)("el.dialog.close"),class:p(e(a).e("headerbtn")),type:"button",onClick:B=>s.$emit("close")},[M(e(ce),{class:p(e(a).e("close"))},{default:g(()=>[(w(),U(ie(s.closeIcon||e(n))))]),_:1},8,["class"])],10,["aria-label","onClick"])):_("v-if",!0)],2),O("div",{id:e(b),class:p(e(a).e("body"))},[D(s.$slots,"default")],10,["id"]),s.$slots.footer?(w(),K("footer",{key:0,class:p(e(a).e("footer"))},[D(s.$slots,"footer")],2)):_("v-if",!0)],6))}});var Ke=W(Ve,[["__file","dialog-content.vue"]]);const Ue=Y({...ee,appendToBody:Boolean,appendTo:{type:J([String,Object]),default:"body"},beforeClose:{type:J(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:Boolean,headerAriaLevel:{type:String,default:"2"}}),_e={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[X]:o=>fe(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},je=(o,c)=>{var t;const n=De().emit,{nextZIndex:f}=ve();let m="";const b=G(),a=G(),r=E(!1),v=E(!1),y=E(!1),C=E((t=o.zIndex)!=null?t:f());let d,u;const I=ye("namespace",pe),s=k(()=>{const i={},h=`--${I.value}-dialog`;return o.fullscreen||(o.top&&(i[`${h}-margin-top`]=o.top),o.width&&(i[`${h}-width`]=ge(o.width))),i}),P=k(()=>o.alignCenter?{display:"flex"}:{});function B(){n("opened")}function z(){n("closed"),n(X,!1),o.destroyOnClose&&(y.value=!1)}function V(){n("close")}function $(){u==null||u(),d==null||d(),o.openDelay&&o.openDelay>0?{stop:d}=Z(()=>L(),o.openDelay):L()}function F(){d==null||d(),u==null||u(),o.closeDelay&&o.closeDelay>0?{stop:u}=Z(()=>R(),o.closeDelay):R()}function T(){function i(h){h||(v.value=!0,r.value=!1)}o.beforeClose?o.beforeClose(i):F()}function S(){o.closeOnClickModal&&T()}function L(){Ee&&(r.value=!0)}function R(){r.value=!1}function l(){n("openAutoFocus")}function j(){n("closeAutoFocus")}function oe(i){var h;((h=i.detail)==null?void 0:h.focusReason)==="pointer"&&i.preventDefault()}o.lockScroll&&me(r);function le(){o.closeOnPressEscape&&T()}return H(()=>o.modelValue,i=>{i?(v.value=!1,$(),y.value=!0,C.value=be(o.zIndex)?f():C.value++,Ce(()=>{n("open"),c.value&&(c.value.scrollTop=0)})):r.value&&F()}),H(()=>o.fullscreen,i=>{c.value&&(i?(m=c.value.style.transform,c.value.style.transform=""):c.value.style.transform=m)}),he(()=>{o.modelValue&&(r.value=!0,y.value=!0,$())}),{afterEnter:B,afterLeave:z,beforeLeave:V,handleClose:T,onModalClick:S,close:F,doClose:R,onOpenAutoFocus:l,onCloseAutoFocus:j,onCloseRequested:le,onFocusoutPrevented:oe,titleId:b,bodyId:a,closed:v,style:s,overlayDialogStyle:P,rendered:y,visible:r,zIndex:C}},qe=N({name:"ElDialog",inheritAttrs:!1}),Je=N({...qe,props:Ue,emits:_e,setup(o,{expose:c}){const t=o,A=ke();we({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},k(()=>!!A.title));const n=Ie("dialog"),f=E(),m=E(),b=E(),{visible:a,titleId:r,bodyId:v,style:y,overlayDialogStyle:C,rendered:d,zIndex:u,afterEnter:I,afterLeave:s,beforeLeave:P,handleClose:B,onModalClick:z,onOpenAutoFocus:V,onCloseAutoFocus:$,onCloseRequested:F,onFocusoutPrevented:T}=je(t,f);Be(x,{dialogRef:f,headerRef:m,bodyId:v,ns:n,rendered:d,style:y});const S=Oe(z),L=k(()=>t.draggable&&!t.fullscreen);return c({visible:a,dialogContentRef:b,resetPostion:()=>{b.value.resetPostion()}}),(l,j)=>(w(),U(e(Re),{to:l.appendTo,disabled:l.appendTo!=="body"?!1:!l.appendToBody},{default:g(()=>[M(Fe,{name:"dialog-fade",onAfterEnter:e(I),onAfterLeave:e(s),onBeforeLeave:e(P),persisted:""},{default:g(()=>[Te(M(e(Se),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(u)},{default:g(()=>[O("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(r),"aria-describedby":e(v),class:p(`${e(n).namespace.value}-overlay-dialog`),style:Q(e(C)),onClick:e(S).onClick,onMousedown:e(S).onMousedown,onMouseup:e(S).onMouseup},[M(e(Ae),{loop:"",trapped:e(a),"focus-start-el":"container",onFocusAfterTrapped:e(V),onFocusAfterReleased:e($),onFocusoutPrevented:e(T),onReleaseRequested:e(F)},{default:g(()=>[e(d)?(w(),U(Ke,Pe({key:0,ref_key:"dialogContentRef",ref:b},l.$attrs,{center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(L),overflow:l.overflow,fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,"aria-level":l.headerAriaLevel,onClose:e(B)}),$e({header:g(()=>[l.$slots.title?D(l.$slots,"title",{key:1}):D(l.$slots,"header",{key:0,close:e(B),titleId:e(r),titleClass:e(n).e("title")})]),default:g(()=>[D(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:g(()=>[D(l.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):_("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,["aria-label","aria-labelledby","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["mask","overlay-class","z-index"]),[[Le,e(a)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});var Ge=W(Je,[["__file","dialog.vue"]]);const Ze=Me(Ge);export{Ze as E};
