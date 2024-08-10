import{l as me,f as i,aV as Q,aj as tl,bZ as j,w as G,au as Ve,_ as ge,g as se,u as ne,ce as nl,k as Oe,aw as he,at as sl,al as Xl,ar as H,D as te,F as Te,o as v,h as I,j as R,s as k,v as L,n as r,B,r as V,R as Ee,aL as U,J as $,K as ve,cf as Jl,av as X,b1 as Zl,cg as Yl,b7 as xl,bH as _l,br as et,c as F,ch as lt,ao as tt,bd as nt,bX as st,ap as ot,i as at,ai as it,ci as we,U as z,aQ as ut,cj as rt,C as ol,a as dt,b as ct,b3 as pt,d as fe,aB as ft,b0 as Ye,bo as vt,ba as mt,ck as bt,cl as gt,bp as ht,b4 as yt,a1 as St,M as Ct,bw as Ot,ay as wt,E as It,bC as Vt,p as al,X as K,a4 as Tt,x as A,y as M,a5 as xe,a6 as _e,t as el,a7 as W,A as le,cm as Et,aq as Ie,cn as $t,e as kt,H as Rt,I as il}from"./index-CpodFpUQ.js";import{s as ye,a as ul}from"./token-DI9FKtlJ.js";import{e as Mt}from"./strings-tw-UTuVM.js";import{i as be}from"./isEqual-DA5FAILj.js";import{b as Dt,d as Bt}from"./debounce-DB3PlMcl.js";function Lt(e,n,a,h){e.length;for(var u=a+1;u--;)if(n(e[u],u,e))return u;return-1}function Ft(e,n,a){var h=e==null?0:e.length;if(!h)return-1;var u=h-1;return Lt(e,Dt(n),u)}function Nt(e,n){const a=me(ye),h=me(ul,{disabled:!1}),u=i(()=>a.props.multiple?m(a.props.modelValue,e.value):m([a.props.modelValue],e.value)),S=i(()=>{if(a.props.multiple){const d=a.props.modelValue||[];return!u.value&&d.length>=a.props.multipleLimit&&a.props.multipleLimit>0}else return!1}),t=i(()=>e.label||(Q(e.value)?"":e.value)),b=i(()=>e.value||e.label||""),p=i(()=>e.disabled||n.groupDisabled||S.value),g=Ve(),m=(d=[],f)=>{if(Q(e.value)){const o=a.props.valueKey;return d&&d.some(T=>tl(j(T,o))===j(f,o))}else return d&&d.includes(f)},C=()=>{!e.disabled&&!h.disabled&&(a.states.hoveringIndex=a.optionsArray.indexOf(g.proxy))},O=d=>{const f=new RegExp(Mt(d),"i");n.visible=f.test(t.value)||e.created};return G(()=>t.value,()=>{!e.created&&!a.props.remote&&a.setSelected()}),G(()=>e.value,(d,f)=>{const{remote:o,valueKey:T}=a.props;if(be(d,f)||(a.onOptionDestroy(f,g.proxy),a.onOptionCreate(g.proxy)),!e.created&&!o){if(T&&Q(d)&&Q(f)&&d[T]===f[T])return;a.setSelected()}}),G(()=>h.disabled,()=>{n.groupDisabled=h.disabled},{immediate:!0}),{select:a,currentLabel:t,currentValue:b,itemSelected:u,isDisabled:p,hoverItem:C,updateOption:O}}const Wt=se({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const n=ne("select"),a=nl(),h=i(()=>[n.be("dropdown","item"),n.is("disabled",Oe(b)),n.is("selected",Oe(t)),n.is("hovering",Oe(O))]),u=he({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:S,itemSelected:t,isDisabled:b,select:p,hoverItem:g,updateOption:m}=Nt(e,u),{visible:C,hover:O}=sl(u),d=Ve().proxy;p.onOptionCreate(d),Xl(()=>{const o=d.value,{selected:T}=p.states,oe=(p.props.multiple?T:[T]).some(ae=>ae.value===d.value);H(()=>{p.states.cachedOptions.get(o)===d&&!oe&&p.states.cachedOptions.delete(o)}),p.onOptionDestroy(o,d)});function f(){e.disabled!==!0&&u.groupDisabled!==!0&&p.handleOptionSelect(d)}return{ns:n,id:a,containerKls:h,currentLabel:S,itemSelected:t,isDisabled:b,select:p,hoverItem:g,updateOption:m,visible:C,hover:O,selectOptionClick:f,states:u}}}),zt=["id","aria-disabled","aria-selected"];function Pt(e,n,a,h,u,S){return te((v(),I("li",{id:e.id,class:r(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:n[0]||(n[0]=(...t)=>e.hoverItem&&e.hoverItem(...t)),onClick:n[1]||(n[1]=B((...t)=>e.selectOptionClick&&e.selectOptionClick(...t),["stop"]))},[R(e.$slots,"default",{},()=>[k("span",null,L(e.currentLabel),1)])],42,zt)),[[Te,e.visible]])}var $e=ge(Wt,[["render",Pt],["__file","option.vue"]]);const Kt=se({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=me(ye),n=ne("select"),a=i(()=>e.props.popperClass),h=i(()=>e.props.multiple),u=i(()=>e.props.fitInputWidth),S=V("");function t(){var b;S.value=`${(b=e.selectRef)==null?void 0:b.offsetWidth}px`}return Ee(()=>{t(),U(e.selectRef,t)}),{ns:n,minWidth:S,popperClass:a,isMultiple:h,isFitInputWidth:u}}});function At(e,n,a,h,u,S){return v(),I("div",{class:r([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:ve({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(v(),I("div",{key:0,class:r(e.ns.be("dropdown","header"))},[R(e.$slots,"header")],2)):$("v-if",!0),R(e.$slots,"default"),e.$slots.footer?(v(),I("div",{key:1,class:r(e.ns.be("dropdown","footer"))},[R(e.$slots,"footer")],2)):$("v-if",!0)],6)}var Ht=ge(Kt,[["render",At],["__file","select-dropdown.vue"]]);function Ut(e){const n=V(!1);return{handleCompositionStart:()=>{n.value=!0},handleCompositionUpdate:S=>{const t=S.target.value,b=t[t.length-1]||"";n.value=!Jl(b)},handleCompositionEnd:S=>{n.value&&(n.value=!1,X(e)&&e(S))}}}const jt=11,Gt=(e,n)=>{const{t:a}=Zl(),h=nl(),u=ne("select"),S=ne("input"),t=he({inputValue:"",options:new Map,cachedOptions:new Map,disabledOptions:new Map,optionValues:[],selected:e.multiple?[]:{},selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),b=V(null),p=V(null),g=V(null),m=V(null),C=V(null),O=V(null),d=V(null),f=V(null),o=V(null),T=V(null),J=V(null),oe=V(null),{wrapperRef:ae,isFocused:ke,handleFocus:dl,handleBlur:Re}=Yl(C,{afterFocus(){e.automaticDropdown&&!w.value&&(w.value=!0,t.menuVisibleOnFocus=!0)},beforeBlur(l){var s,c;return((s=g.value)==null?void 0:s.isFocusInsideContent(l))||((c=m.value)==null?void 0:c.isFocusInsideContent(l))},afterBlur(){w.value=!1,t.menuVisibleOnFocus=!1}}),w=V(!1),Z=V(),{form:Me,formItem:Y}=xl(),{inputId:cl}=_l(e,{formItemContext:Y}),{valueOnClear:pl,isEmptyValue:fl}=et(e),ie=i(()=>e.disabled||(Me==null?void 0:Me.disabled)),Se=i(()=>e.multiple?F(e.modelValue)&&e.modelValue.length>0:!fl(e.modelValue)),vl=i(()=>e.clearable&&!ie.value&&t.inputHovering&&Se.value),De=i(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),ml=i(()=>u.is("reverse",De.value&&w.value)),Be=i(()=>(Y==null?void 0:Y.validateState)||""),bl=i(()=>lt[Be.value]),gl=i(()=>e.remote?300:0),Le=i(()=>e.loading?e.loadingText||a("el.select.loading"):e.remote&&!t.inputValue&&t.options.size===0?!1:e.filterable&&t.inputValue&&t.options.size>0&&x.value===0?e.noMatchText||a("el.select.noMatch"):t.options.size===0?e.noDataText||a("el.select.noData"):null),x=i(()=>E.value.filter(l=>l.visible).length),E=i(()=>{const l=Array.from(t.options.values()),s=[];return t.optionValues.forEach(c=>{const y=l.findIndex(N=>N.value===c);y>-1&&s.push(l[y])}),s.length>=l.length?s:l}),hl=i(()=>Array.from(t.cachedOptions.values())),yl=i(()=>{const l=E.value.filter(s=>!s.created).some(s=>s.currentLabel===t.inputValue);return e.filterable&&e.allowCreate&&t.inputValue!==""&&!l}),Fe=()=>{e.filterable&&X(e.filterMethod)||e.filterable&&e.remote&&X(e.remoteMethod)||E.value.forEach(l=>{var s;(s=l.updateOption)==null||s.call(l,t.inputValue)})},Ne=tt(),Sl=i(()=>["small"].includes(Ne.value)?"small":"default"),Cl=i({get(){return w.value&&Le.value!==!1},set(l){w.value=l}}),Ol=i(()=>F(e.modelValue)?e.modelValue.length===0&&!t.inputValue:e.filterable?!t.inputValue:!0),wl=i(()=>{var l;const s=(l=e.placeholder)!=null?l:a("el.select.placeholder");return e.multiple||!Se.value?s:t.selectedLabel});G(()=>e.modelValue,(l,s)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(t.inputValue="",ue("")),re(),!be(l,s)&&e.validateEvent&&(Y==null||Y.validate("change").catch(c=>nt()))},{flush:"post",deep:!0}),G(()=>w.value,l=>{l?ue(t.inputValue):(t.inputValue="",t.previousQuery=null,t.isBeforeHide=!0),n("visible-change",l)}),G(()=>t.options.entries(),()=>{var l;if(!st)return;const s=((l=b.value)==null?void 0:l.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!ot(e.modelValue)||!Array.from(s).includes(document.activeElement))&&re(),e.defaultFirstOption&&(e.filterable||e.remote)&&x.value&&We()},{flush:"post"}),G(()=>t.hoveringIndex,l=>{at(l)&&l>-1?Z.value=E.value[l]||{}:Z.value={},E.value.forEach(s=>{s.hover=Z.value===s})}),it(()=>{t.isBeforeHide||Fe()});const ue=l=>{t.previousQuery!==l&&(t.previousQuery=l,e.filterable&&X(e.filterMethod)?e.filterMethod(l):e.filterable&&e.remote&&X(e.remoteMethod)&&e.remoteMethod(l),e.defaultFirstOption&&(e.filterable||e.remote)&&x.value?H(We):H(Il))},We=()=>{const l=E.value.filter(y=>y.visible&&!y.disabled&&!y.states.groupDisabled),s=l.find(y=>y.created),c=l[0];t.hoveringIndex=qe(E.value,s||c)},re=()=>{if(e.multiple)t.selectedLabel="";else{const s=ze(e.modelValue);t.selectedLabel=s.currentLabel,t.selected=s;return}const l=[];F(e.modelValue)&&e.modelValue.forEach(s=>{l.push(ze(s))}),t.selected=l},ze=l=>{let s;const c=we(l).toLowerCase()==="object",y=we(l).toLowerCase()==="null",N=we(l).toLowerCase()==="undefined";for(let P=t.cachedOptions.size-1;P>=0;P--){const D=hl.value[P];if(c?j(D.value,e.valueKey)===j(l,e.valueKey):D.value===l){s={value:l,currentLabel:D.currentLabel,get isDisabled(){return D.isDisabled}};break}}if(s)return s;const q=c?l.label:!y&&!N?l:"";return{value:l,currentLabel:q}},Il=()=>{e.multiple?t.hoveringIndex=E.value.findIndex(l=>t.selected.some(s=>ee(s)===ee(l))):t.hoveringIndex=E.value.findIndex(l=>ee(l)===ee(t.selected))},Vl=()=>{t.selectionWidth=p.value.getBoundingClientRect().width},Pe=()=>{t.calculatorWidth=O.value.getBoundingClientRect().width},Tl=()=>{t.collapseItemWidth=J.value.getBoundingClientRect().width},Ce=()=>{var l,s;(s=(l=g.value)==null?void 0:l.updatePopper)==null||s.call(l)},Ke=()=>{var l,s;(s=(l=m.value)==null?void 0:l.updatePopper)==null||s.call(l)},Ae=()=>{t.inputValue.length>0&&!w.value&&(w.value=!0),ue(t.inputValue)},He=l=>{if(t.inputValue=l.target.value,e.remote)Ue();else return Ae()},Ue=Bt(()=>{Ae()},gl.value),_=l=>{be(e.modelValue,l)||n(ol,l)},El=l=>Ft(l,s=>!t.disabledOptions.has(s)),$l=l=>{if(e.multiple&&l.code!==ut.delete&&l.target.value.length<=0){const s=e.modelValue.slice(),c=El(s);if(c<0)return;const y=s[c];s.splice(c,1),n(z,s),_(s),n("remove-tag",y)}},kl=(l,s)=>{const c=t.selected.indexOf(s);if(c>-1&&!ie.value){const y=e.modelValue.slice();y.splice(c,1),n(z,y),_(y),n("remove-tag",s.value)}l.stopPropagation(),ce()},je=l=>{l.stopPropagation();const s=e.multiple?[]:pl.value;if(e.multiple)for(const c of t.selected)c.isDisabled&&s.push(c.value);n(z,s),_(s),t.hoveringIndex=-1,w.value=!1,n("clear"),ce()},Ge=l=>{if(e.multiple){const s=(e.modelValue||[]).slice(),c=qe(s,l.value);c>-1?s.splice(c,1):(e.multipleLimit<=0||s.length<e.multipleLimit)&&s.push(l.value),n(z,s),_(s),l.created&&ue(""),e.filterable&&!e.reserveKeyword&&(t.inputValue="")}else n(z,l.value),_(l.value),w.value=!1;ce(),!w.value&&H(()=>{de(l)})},qe=(l=[],s)=>{if(!Q(s))return l.indexOf(s);const c=e.valueKey;let y=-1;return l.some((N,q)=>tl(j(N,c))===j(s,c)?(y=q,!0):!1),y},de=l=>{var s,c,y,N,q;const pe=F(l)?l[0]:l;let P=null;if(pe!=null&&pe.value){const D=E.value.filter(Ze=>Ze.value===pe.value);D.length>0&&(P=D[0].$el)}if(g.value&&P){const D=(N=(y=(c=(s=g.value)==null?void 0:s.popperRef)==null?void 0:c.contentRef)==null?void 0:y.querySelector)==null?void 0:N.call(y,`.${u.be("dropdown","wrap")}`);D&&rt(D,P)}(q=oe.value)==null||q.handleScroll()},Rl=l=>{t.options.set(l.value,l),t.cachedOptions.set(l.value,l),l.disabled&&t.disabledOptions.set(l.value,l)},Ml=(l,s)=>{t.options.get(l)===s&&t.options.delete(l)},{handleCompositionStart:Dl,handleCompositionUpdate:Bl,handleCompositionEnd:Ll}=Ut(l=>He(l)),Fl=i(()=>{var l,s;return(s=(l=g.value)==null?void 0:l.popperRef)==null?void 0:s.contentRef}),Nl=()=>{t.isBeforeHide=!1,H(()=>de(t.selected))},ce=()=>{var l;(l=C.value)==null||l.focus()},Wl=()=>{Qe()},zl=l=>{je(l)},Qe=l=>{if(w.value=!1,ke.value){const s=new FocusEvent("focus",l);H(()=>Re(s))}},Pl=()=>{t.inputValue.length>0?t.inputValue="":w.value=!1},Xe=()=>{ie.value||(t.menuVisibleOnFocus?t.menuVisibleOnFocus=!1:w.value=!w.value)},Kl=()=>{w.value?E.value[t.hoveringIndex]&&Ge(E.value[t.hoveringIndex]):Xe()},ee=l=>Q(l.value)?j(l.value,e.valueKey):l.value,Al=i(()=>E.value.filter(l=>l.visible).every(l=>l.disabled)),Hl=i(()=>e.multiple?e.collapseTags?t.selected.slice(0,e.maxCollapseTags):t.selected:[]),Ul=i(()=>e.multiple?e.collapseTags?t.selected.slice(e.maxCollapseTags):[]:[]),Je=l=>{if(!w.value){w.value=!0;return}if(!(t.options.size===0||x.value===0)&&!Al.value){l==="next"?(t.hoveringIndex++,t.hoveringIndex===t.options.size&&(t.hoveringIndex=0)):l==="prev"&&(t.hoveringIndex--,t.hoveringIndex<0&&(t.hoveringIndex=t.options.size-1));const s=E.value[t.hoveringIndex];(s.disabled===!0||s.states.groupDisabled===!0||!s.visible)&&Je(l),H(()=>de(Z.value))}},jl=()=>{if(!p.value)return 0;const l=window.getComputedStyle(p.value);return Number.parseFloat(l.gap||"6px")},Gl=i(()=>{const l=jl();return{maxWidth:`${J.value&&e.maxCollapseTags===1?t.selectionWidth-t.collapseItemWidth-l:t.selectionWidth}px`}}),ql=i(()=>({maxWidth:`${t.selectionWidth}px`})),Ql=i(()=>({width:`${Math.max(t.calculatorWidth,jt)}px`}));return e.multiple&&!F(e.modelValue)&&n(z,[]),!e.multiple&&F(e.modelValue)&&n(z,""),U(p,Vl),U(O,Pe),U(o,Ce),U(ae,Ce),U(T,Ke),U(J,Tl),Ee(()=>{re()}),{inputId:cl,contentId:h,nsSelect:u,nsInput:S,states:t,isFocused:ke,expanded:w,optionsArray:E,hoverOption:Z,selectSize:Ne,filteredOptionsCount:x,resetCalculatorWidth:Pe,updateTooltip:Ce,updateTagTooltip:Ke,debouncedOnInputChange:Ue,onInput:He,deletePrevTag:$l,deleteTag:kl,deleteSelected:je,handleOptionSelect:Ge,scrollToOption:de,hasModelValue:Se,shouldShowPlaceholder:Ol,currentPlaceholder:wl,showClose:vl,iconComponent:De,iconReverse:ml,validateState:Be,validateIcon:bl,showNewOption:yl,updateOptions:Fe,collapseTagSize:Sl,setSelected:re,selectDisabled:ie,emptyText:Le,handleCompositionStart:Dl,handleCompositionUpdate:Bl,handleCompositionEnd:Ll,onOptionCreate:Rl,onOptionDestroy:Ml,handleMenuEnter:Nl,handleFocus:dl,focus:ce,blur:Wl,handleBlur:Re,handleClearClick:zl,handleClickOutside:Qe,handleEsc:Pl,toggleMenu:Xe,selectOption:Kl,getValueKey:ee,navigateOptions:Je,dropdownMenuVisible:Cl,showTagList:Hl,collapseTagList:Ul,tagStyle:Gl,collapseTagStyle:ql,inputStyle:Ql,popperRef:Fl,inputRef:C,tooltipRef:g,tagTooltipRef:m,calculatorRef:O,prefixRef:d,suffixRef:f,selectRef:b,wrapperRef:ae,selectionRef:p,scrollbarRef:oe,menuRef:o,tagMenuRef:T,collapseItemRef:J}};var qt=se({name:"ElOptions",setup(e,{slots:n}){const a=me(ye);let h=[];return()=>{var u,S;const t=(u=n.default)==null?void 0:u.call(n),b=[];function p(g){F(g)&&g.forEach(m=>{var C,O,d,f;const o=(C=(m==null?void 0:m.type)||{})==null?void 0:C.name;o==="ElOptionGroup"?p(!dt(m.children)&&!F(m.children)&&X((O=m.children)==null?void 0:O.default)?(d=m.children)==null?void 0:d.default():m.children):o==="ElOption"?b.push((f=m.props)==null?void 0:f.value):F(m.children)&&p(m.children)})}return t.length&&p((S=t[0])==null?void 0:S.children),be(b,h)||(h=b,a&&(a.states.optionValues=b)),t}}});const Qt=ct({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:pt,effect:{type:fe(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:fe(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:ft.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:Ye,default:vt},fitInputWidth:Boolean,suffixIcon:{type:Ye,default:mt},tagType:{...bt.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,placement:{type:fe(String),values:gt,default:"bottom-start"},fallbackPlacements:{type:fe(Array),default:["bottom-start","top-start","right","left"]},...ht,...yt(["ariaLabel"])}),ll="ElSelect",Xt=se({name:ll,componentName:ll,components:{ElInput:St,ElSelectMenu:Ht,ElOption:$e,ElOptions:qt,ElTag:Ct,ElScrollbar:Ot,ElTooltip:wt,ElIcon:It},directives:{ClickOutside:Vt},props:Qt,emits:[z,ol,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:n}){const a=Gt(e,n);return al(ye,he({props:e,states:a.states,optionsArray:a.optionsArray,handleOptionSelect:a.handleOptionSelect,onOptionCreate:a.onOptionCreate,onOptionDestroy:a.onOptionDestroy,selectRef:a.selectRef,setSelected:a.setSelected})),{...a}}}),Jt=["id","disabled","autocomplete","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label"],Zt=["textContent"],Yt={key:1};function xt(e,n,a,h,u,S){const t=K("el-tag"),b=K("el-tooltip"),p=K("el-icon"),g=K("el-option"),m=K("el-options"),C=K("el-scrollbar"),O=K("el-select-menu"),d=Tt("click-outside");return te((v(),I("div",{ref:"selectRef",class:r([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),onMouseenter:n[16]||(n[16]=f=>e.states.inputHovering=!0),onMouseleave:n[17]||(n[17]=f=>e.states.inputHovering=!1),onClick:n[18]||(n[18]=B((...f)=>e.toggleMenu&&e.toggleMenu(...f),["prevent","stop"]))},[A(b,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onBeforeShow:e.handleMenuEnter,onHide:n[15]||(n[15]=f=>e.states.isBeforeHide=!1)},{default:M(()=>{var f;return[k("div",{ref:"wrapperRef",class:r([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)])},[e.$slots.prefix?(v(),I("div",{key:0,ref:"prefixRef",class:r(e.nsSelect.e("prefix"))},[R(e.$slots,"prefix")],2)):$("v-if",!0),k("div",{ref:"selectionRef",class:r([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?R(e.$slots,"tag",{key:0},()=>[(v(!0),I(xe,null,_e(e.showTagList,o=>(v(),I("div",{key:e.getValueKey(o),class:r(e.nsSelect.e("selected-item"))},[A(t,{closable:!e.selectDisabled&&!o.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:ve(e.tagStyle),onClose:T=>e.deleteTag(T,o)},{default:M(()=>[k("span",{class:r(e.nsSelect.e("tags-text"))},[R(e.$slots,"label",{label:o.currentLabel,value:o.value},()=>[el(L(o.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","style","onClose"])],2))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(v(),W(b,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:M(()=>[k("div",{ref:"collapseItemRef",class:r(e.nsSelect.e("selected-item"))},[A(t,{closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:ve(e.collapseTagStyle)},{default:M(()=>[k("span",{class:r(e.nsSelect.e("tags-text"))}," + "+L(e.states.selected.length-e.maxCollapseTags),3)]),_:1},8,["size","type","style"])],2)]),content:M(()=>[k("div",{ref:"tagMenuRef",class:r(e.nsSelect.e("selection"))},[(v(!0),I(xe,null,_e(e.collapseTagList,o=>(v(),I("div",{key:e.getValueKey(o),class:r(e.nsSelect.e("selected-item"))},[A(t,{class:"in-tooltip",closable:!e.selectDisabled&&!o.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",onClose:T=>e.deleteTag(T,o)},{default:M(()=>[k("span",{class:r(e.nsSelect.e("tags-text"))},[R(e.$slots,"label",{label:o.currentLabel,value:o.value},()=>[el(L(o.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","onClose"])],2))),128))],2)]),_:3},8,["disabled","effect","teleported"])):$("v-if",!0)]):$("v-if",!0),e.selectDisabled?$("v-if",!0):(v(),I("div",{key:1,class:r([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[te(k("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":n[0]||(n[0]=o=>e.states.inputValue=o),type:"text",class:r([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:ve(e.inputStyle),role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":((f=e.hoverOption)==null?void 0:f.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:n[1]||(n[1]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onBlur:n[2]||(n[2]=(...o)=>e.handleBlur&&e.handleBlur(...o)),onKeydown:[n[3]||(n[3]=le(B(o=>e.navigateOptions("next"),["stop","prevent"]),["down"])),n[4]||(n[4]=le(B(o=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),n[5]||(n[5]=le(B((...o)=>e.handleEsc&&e.handleEsc(...o),["stop","prevent"]),["esc"])),n[6]||(n[6]=le(B((...o)=>e.selectOption&&e.selectOption(...o),["stop","prevent"]),["enter"])),n[7]||(n[7]=le(B((...o)=>e.deletePrevTag&&e.deletePrevTag(...o),["stop"]),["delete"]))],onCompositionstart:n[8]||(n[8]=(...o)=>e.handleCompositionStart&&e.handleCompositionStart(...o)),onCompositionupdate:n[9]||(n[9]=(...o)=>e.handleCompositionUpdate&&e.handleCompositionUpdate(...o)),onCompositionend:n[10]||(n[10]=(...o)=>e.handleCompositionEnd&&e.handleCompositionEnd(...o)),onInput:n[11]||(n[11]=(...o)=>e.onInput&&e.onInput(...o)),onClick:n[12]||(n[12]=B((...o)=>e.toggleMenu&&e.toggleMenu(...o),["stop"]))},null,46,Jt),[[Et,e.states.inputValue]]),e.filterable?(v(),I("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:r(e.nsSelect.e("input-calculator")),textContent:L(e.states.inputValue)},null,10,Zt)):$("v-if",!0)],2)),e.shouldShowPlaceholder?(v(),I("div",{key:2,class:r([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[e.hasModelValue?R(e.$slots,"label",{key:0,label:e.currentPlaceholder,value:e.modelValue},()=>[k("span",null,L(e.currentPlaceholder),1)]):(v(),I("span",Yt,L(e.currentPlaceholder),1))],2)):$("v-if",!0)],2),k("div",{ref:"suffixRef",class:r(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(v(),W(p,{key:0,class:r([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:M(()=>[(v(),W(Ie(e.iconComponent)))]),_:1},8,["class"])):$("v-if",!0),e.showClose&&e.clearIcon?(v(),W(p,{key:1,class:r([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:M(()=>[(v(),W(Ie(e.clearIcon)))]),_:1},8,["class","onClick"])):$("v-if",!0),e.validateState&&e.validateIcon?(v(),W(p,{key:2,class:r([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:M(()=>[(v(),W(Ie(e.validateIcon)))]),_:1},8,["class"])):$("v-if",!0)],2)],2)]}),content:M(()=>[A(O,{ref:"menuRef"},{default:M(()=>[e.$slots.header?(v(),I("div",{key:0,class:r(e.nsSelect.be("dropdown","header")),onClick:n[13]||(n[13]=B(()=>{},["stop"]))},[R(e.$slots,"header")],2)):$("v-if",!0),te(A(C,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:r([e.nsSelect.is("empty",e.filteredOptionsCount===0)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:M(()=>[e.showNewOption?(v(),W(g,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):$("v-if",!0),A(m,null,{default:M(()=>[R(e.$slots,"default")]),_:3})]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[Te,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(v(),I("div",{key:1,class:r(e.nsSelect.be("dropdown","loading"))},[R(e.$slots,"loading")],2)):e.loading||e.filteredOptionsCount===0?(v(),I("div",{key:2,class:r(e.nsSelect.be("dropdown","empty"))},[R(e.$slots,"empty",{},()=>[k("span",null,L(e.emptyText),1)])],2)):$("v-if",!0),e.$slots.footer?(v(),I("div",{key:3,class:r(e.nsSelect.be("dropdown","footer")),onClick:n[14]||(n[14]=B(()=>{},["stop"]))},[R(e.$slots,"footer")],2)):$("v-if",!0)]),_:3},512)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","onBeforeShow"])],34)),[[d,e.handleClickOutside,e.popperRef]])}var _t=ge(Xt,[["render",xt],["__file","select.vue"]]);const en=se({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const n=ne("select"),a=V(null),h=Ve(),u=V([]);al(ul,he({...sl(e)}));const S=i(()=>u.value.some(g=>g.visible===!0)),t=g=>{var m,C;return((m=g.type)==null?void 0:m.name)==="ElOption"&&!!((C=g.component)!=null&&C.proxy)},b=g=>{const m=kt(g),C=[];return m.forEach(O=>{var d,f;t(O)?C.push(O.component.proxy):(d=O.children)!=null&&d.length?C.push(...b(O.children)):(f=O.component)!=null&&f.subTree&&C.push(...b(O.component.subTree))}),C},p=()=>{u.value=b(h.subTree)};return Ee(()=>{p()}),$t(a,p,{attributes:!0,subtree:!0,childList:!0}),{groupRef:a,visible:S,ns:n}}});function ln(e,n,a,h,u,S){return te((v(),I("ul",{ref:"groupRef",class:r(e.ns.be("group","wrap"))},[k("li",{class:r(e.ns.be("group","title"))},L(e.label),3),k("li",null,[k("ul",{class:r(e.ns.b("group"))},[R(e.$slots,"default")],2)])],2)),[[Te,e.visible]])}var rl=ge(en,[["render",ln],["__file","option-group.vue"]]);const un=Rt(_t,{Option:$e,OptionGroup:rl}),rn=il($e);il(rl);export{rn as E,un as a};
