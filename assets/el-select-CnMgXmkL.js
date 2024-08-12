import{l as he,f as i,e as z,aW as J,aj as ol,b$ as U,w as j,au as Te,_ as ge,g as ae,u as ne,cg as il,k as we,ax as ye,at as ul,al as xl,ar as A,D as te,F as $e,o as v,h as w,j as R,s as k,v as L,n as r,B,r as V,R as ke,aM as H,J as $,K as be,b2 as et,ch as lt,ci as tt,b9 as nt,bK as at,bs as st,c as q,cj as ot,ao as it,ap as ve,ck as xe,be as ut,aw as rt,i as dt,ai as ct,av as le,cl as Ie,aR as pt,U as Q,cm as ft,C as rl,a as vt,b as mt,b5 as bt,d as me,aC as ht,b1 as el,bp as gt,bb as yt,cn as ll,co as St,bq as Ct,b6 as Ot,M as wt,bx as It,az as Vt,E as Et,bD as Tt,p as dl,X as P,a4 as $t,x as K,y as M,a5 as tl,a6 as nl,t as al,a7 as W,A as ee,cp as kt,aq as Ve,cq as Rt,cr as Mt,H as Dt,I as cl}from"./index-gd7kCRgy.js";import{s as Se,a as pl}from"./token-DI9FKtlJ.js";import{e as Bt}from"./strings-BZHY2u5A.js";import{i as Ee}from"./isEqual-DUkHDidl.js";import{b as Lt,d as Nt}from"./debounce-AfzU3xsE.js";function Wt(e,s,a,y){e.length;for(var c=a+1;c--;)if(s(e[c],c,e))return c;return-1}function zt(e,s,a){var y=e==null?0:e.length;if(!y)return-1;var c=y-1;return Wt(e,Lt(s),c)}function Ft(e,s){const a=he(Se),y=he(pl,{disabled:!1}),c=i(()=>b(z(a.props.modelValue),e.value)),I=i(()=>{var d;if(a.props.multiple){const f=z((d=a.props.modelValue)!=null?d:[]);return!c.value&&f.length>=a.props.multipleLimit&&a.props.multipleLimit>0}else return!1}),t=i(()=>e.label||(J(e.value)?"":e.value)),g=i(()=>e.value||e.label||""),p=i(()=>e.disabled||s.groupDisabled||I.value),h=Te(),b=(d=[],f)=>{if(J(e.value)){const u=a.props.valueKey;return d&&d.some(E=>ol(U(E,u))===U(f,u))}else return d&&d.includes(f)},S=()=>{!e.disabled&&!y.disabled&&(a.states.hoveringIndex=a.optionsArray.indexOf(h.proxy))},C=d=>{const f=new RegExp(Bt(d),"i");s.visible=f.test(t.value)||e.created};return j(()=>t.value,()=>{!e.created&&!a.props.remote&&a.setSelected()}),j(()=>e.value,(d,f)=>{const{remote:u,valueKey:E}=a.props;if(d!==f&&(a.onOptionDestroy(f,h.proxy),a.onOptionCreate(h.proxy)),!e.created&&!u){if(E&&J(d)&&J(f)&&d[E]===f[E])return;a.setSelected()}}),j(()=>y.disabled,()=>{s.groupDisabled=y.disabled},{immediate:!0}),{select:a,currentLabel:t,currentValue:g,itemSelected:c,isDisabled:p,hoverItem:S,updateOption:C}}const Pt=ae({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const s=ne("select"),a=il(),y=i(()=>[s.be("dropdown","item"),s.is("disabled",we(g)),s.is("selected",we(t)),s.is("hovering",we(C))]),c=ye({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:I,itemSelected:t,isDisabled:g,select:p,hoverItem:h,updateOption:b}=Ft(e,c),{visible:S,hover:C}=ul(c),d=Te().proxy;p.onOptionCreate(d),xl(()=>{const u=d.value,{selected:E}=p.states,se=(p.props.multiple?E:[E]).some(oe=>oe.value===d.value);A(()=>{p.states.cachedOptions.get(u)===d&&!se&&p.states.cachedOptions.delete(u)}),p.onOptionDestroy(u,d)});function f(){g.value||p.handleOptionSelect(d)}return{ns:s,id:a,containerKls:y,currentLabel:I,itemSelected:t,isDisabled:g,select:p,hoverItem:h,updateOption:b,visible:S,hover:C,selectOptionClick:f,states:c}}});function Kt(e,s,a,y,c,I){return te((v(),w("li",{id:e.id,class:r(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:e.hoverItem,onClick:B(e.selectOptionClick,["stop"])},[R(e.$slots,"default",{},()=>[k("span",null,L(e.currentLabel),1)])],42,["id","aria-disabled","aria-selected","onMouseenter","onClick"])),[[$e,e.visible]])}var Re=ge(Pt,[["render",Kt],["__file","option.vue"]]);const At=ae({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=he(Se),s=ne("select"),a=i(()=>e.props.popperClass),y=i(()=>e.props.multiple),c=i(()=>e.props.fitInputWidth),I=V("");function t(){var g;I.value=`${(g=e.selectRef)==null?void 0:g.offsetWidth}px`}return ke(()=>{t(),H(e.selectRef,t)}),{ns:s,minWidth:I,popperClass:a,isMultiple:y,isFitInputWidth:c}}});function Ht(e,s,a,y,c,I){return v(),w("div",{class:r([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:be({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(v(),w("div",{key:0,class:r(e.ns.be("dropdown","header"))},[R(e.$slots,"header")],2)):$("v-if",!0),R(e.$slots,"default"),e.$slots.footer?(v(),w("div",{key:1,class:r(e.ns.be("dropdown","footer"))},[R(e.$slots,"footer")],2)):$("v-if",!0)],6)}var Ut=ge(At,[["render",Ht],["__file","select-dropdown.vue"]]);const jt=11,qt=(e,s)=>{const{t:a}=et(),y=il(),c=ne("select"),I=ne("input"),t=ye({inputValue:"",options:new Map,cachedOptions:new Map,disabledOptions:new Map,optionValues:[],selected:e.multiple?[]:{},selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),g=V(null),p=V(null),h=V(null),b=V(null),S=V(null),C=V(null),d=V(null),f=V(null),u=V(null),E=V(null),X=V(null),se=V(null),{isComposing:oe,handleCompositionStart:vl,handleCompositionUpdate:ml,handleCompositionEnd:bl}=lt({afterComposition:l=>je(l)}),{wrapperRef:Me,isFocused:De,handleBlur:hl}=tt(S,{afterFocus(){e.automaticDropdown&&!O.value&&(O.value=!0,t.menuVisibleOnFocus=!0)},beforeBlur(l){var n,o;return((n=h.value)==null?void 0:n.isFocusInsideContent(l))||((o=b.value)==null?void 0:o.isFocusInsideContent(l))},afterBlur(){O.value=!1,t.menuVisibleOnFocus=!1}}),O=V(!1),Y=V(),{form:Be,formItem:Z}=nt(),{inputId:gl}=at(e,{formItemContext:Z}),{valueOnClear:yl,isEmptyValue:Sl}=st(e),ie=i(()=>e.disabled||(Be==null?void 0:Be.disabled)),Ce=i(()=>q(e.modelValue)?e.modelValue.length>0:!Sl(e.modelValue)),Cl=i(()=>e.clearable&&!ie.value&&t.inputHovering&&Ce.value),Le=i(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),Ol=i(()=>c.is("reverse",Le.value&&O.value)),Ne=i(()=>(Z==null?void 0:Z.validateState)||""),wl=i(()=>ot[Ne.value]),Il=i(()=>e.remote?300:0),We=i(()=>e.loading?e.loadingText||a("el.select.loading"):e.remote&&!t.inputValue&&t.options.size===0?!1:e.filterable&&t.inputValue&&t.options.size>0&&ue.value===0?e.noMatchText||a("el.select.noMatch"):t.options.size===0?e.noDataText||a("el.select.noData"):null),ue=i(()=>T.value.filter(l=>l.visible).length),T=i(()=>{const l=Array.from(t.options.values()),n=[];return t.optionValues.forEach(o=>{const m=l.findIndex(N=>N.value===o);m>-1&&n.push(l[m])}),n.length>=l.length?n:l}),Vl=i(()=>Array.from(t.cachedOptions.values())),El=i(()=>{const l=T.value.filter(n=>!n.created).some(n=>n.currentLabel===t.inputValue);return e.filterable&&e.allowCreate&&t.inputValue!==""&&!l}),ze=()=>{e.filterable&&le(e.filterMethod)||e.filterable&&e.remote&&le(e.remoteMethod)||T.value.forEach(l=>{var n;(n=l.updateOption)==null||n.call(l,t.inputValue)})},Fe=it(),Tl=i(()=>["small"].includes(Fe.value)?"small":"default"),$l=i({get(){return O.value&&We.value!==!1},set(l){O.value=l}}),kl=i(()=>{if(e.multiple&&!ve(e.modelValue))return z(e.modelValue).length===0&&!t.inputValue;const l=q(e.modelValue)?e.modelValue[0]:e.modelValue;return e.filterable||ve(l)?!t.inputValue:!0}),Rl=i(()=>{var l;const n=(l=e.placeholder)!=null?l:a("el.select.placeholder");return e.multiple||!Ce.value?n:t.selectedLabel}),Ml=i(()=>xe?null:"mouseenter");j(()=>e.modelValue,(l,n)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(t.inputValue="",re("")),de(),!Ee(l,n)&&e.validateEvent&&(Z==null||Z.validate("change").catch(o=>ut()))},{flush:"post",deep:!0}),j(()=>O.value,l=>{l?re(t.inputValue):(t.inputValue="",t.previousQuery=null,t.isBeforeHide=!0),s("visible-change",l)}),j(()=>t.options.entries(),()=>{var l;if(!rt)return;const n=((l=g.value)==null?void 0:l.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!ve(e.modelValue)||!Array.from(n).includes(document.activeElement))&&de(),e.defaultFirstOption&&(e.filterable||e.remote)&&ue.value&&Pe()},{flush:"post"}),j(()=>t.hoveringIndex,l=>{dt(l)&&l>-1?Y.value=T.value[l]||{}:Y.value={},T.value.forEach(n=>{n.hover=Y.value===n})}),ct(()=>{t.isBeforeHide||ze()});const re=l=>{t.previousQuery===l||oe.value||(t.previousQuery=l,e.filterable&&le(e.filterMethod)?e.filterMethod(l):e.filterable&&e.remote&&le(e.remoteMethod)&&e.remoteMethod(l),e.defaultFirstOption&&(e.filterable||e.remote)&&ue.value?A(Pe):A(Dl))},Pe=()=>{const l=T.value.filter(m=>m.visible&&!m.disabled&&!m.states.groupDisabled),n=l.find(m=>m.created),o=l[0];t.hoveringIndex=Je(T.value,n||o)},de=()=>{if(e.multiple)t.selectedLabel="";else{const n=q(e.modelValue)?e.modelValue[0]:e.modelValue,o=Ke(n);t.selectedLabel=o.currentLabel,t.selected=o;return}const l=[];ve(e.modelValue)||z(e.modelValue).forEach(n=>{l.push(Ke(n))}),t.selected=l},Ke=l=>{let n;const o=Ie(l).toLowerCase()==="object",m=Ie(l).toLowerCase()==="null",N=Ie(l).toLowerCase()==="undefined";for(let F=t.cachedOptions.size-1;F>=0;F--){const D=Vl.value[F];if(o?U(D.value,e.valueKey)===U(l,e.valueKey):D.value===l){n={value:l,currentLabel:D.currentLabel,get isDisabled(){return D.isDisabled}};break}}if(n)return n;const G=o?l.label:!m&&!N?l:"";return{value:l,currentLabel:G}},Dl=()=>{e.multiple?t.hoveringIndex=T.value.findIndex(l=>t.selected.some(n=>x(n)===x(l))):t.hoveringIndex=T.value.findIndex(l=>x(l)===x(t.selected))},Bl=()=>{t.selectionWidth=p.value.getBoundingClientRect().width},Ae=()=>{t.calculatorWidth=C.value.getBoundingClientRect().width},Ll=()=>{t.collapseItemWidth=X.value.getBoundingClientRect().width},Oe=()=>{var l,n;(n=(l=h.value)==null?void 0:l.updatePopper)==null||n.call(l)},He=()=>{var l,n;(n=(l=b.value)==null?void 0:l.updatePopper)==null||n.call(l)},Ue=()=>{t.inputValue.length>0&&!O.value&&(O.value=!0),re(t.inputValue)},je=l=>{if(t.inputValue=l.target.value,e.remote)qe();else return Ue()},qe=Nt(()=>{Ue()},Il.value),_=l=>{Ee(e.modelValue,l)||s(rl,l)},Nl=l=>zt(l,n=>!t.disabledOptions.has(n)),Wl=l=>{if(e.multiple&&l.code!==pt.delete&&l.target.value.length<=0){const n=z(e.modelValue).slice(),o=Nl(n);if(o<0)return;const m=n[o];n.splice(o,1),s(Q,n),_(n),s("remove-tag",m)}},zl=(l,n)=>{const o=t.selected.indexOf(n);if(o>-1&&!ie.value){const m=z(e.modelValue).slice();m.splice(o,1),s(Q,m),_(m),s("remove-tag",n.value)}l.stopPropagation(),pe()},Ge=l=>{l.stopPropagation();const n=e.multiple?[]:yl.value;if(e.multiple)for(const o of t.selected)o.isDisabled&&n.push(o.value);s(Q,n),_(n),t.hoveringIndex=-1,O.value=!1,s("clear"),pe()},Qe=l=>{var n;if(e.multiple){const o=z((n=e.modelValue)!=null?n:[]).slice(),m=Je(o,l.value);m>-1?o.splice(m,1):(e.multipleLimit<=0||o.length<e.multipleLimit)&&o.push(l.value),s(Q,o),_(o),l.created&&re(""),e.filterable&&!e.reserveKeyword&&(t.inputValue="")}else s(Q,l.value),_(l.value),O.value=!1;pe(),!O.value&&A(()=>{ce(l)})},Je=(l=[],n)=>{if(!J(n))return l.indexOf(n);const o=e.valueKey;let m=-1;return l.some((N,G)=>ol(U(N,o))===U(n,o)?(m=G,!0):!1),m},ce=l=>{var n,o,m,N,G;const fe=q(l)?l[0]:l;let F=null;if(fe!=null&&fe.value){const D=T.value.filter(_e=>_e.value===fe.value);D.length>0&&(F=D[0].$el)}if(h.value&&F){const D=(N=(m=(o=(n=h.value)==null?void 0:n.popperRef)==null?void 0:o.contentRef)==null?void 0:m.querySelector)==null?void 0:N.call(m,`.${c.be("dropdown","wrap")}`);D&&ft(D,F)}(G=se.value)==null||G.handleScroll()},Fl=l=>{t.options.set(l.value,l),t.cachedOptions.set(l.value,l),l.disabled&&t.disabledOptions.set(l.value,l)},Pl=(l,n)=>{t.options.get(l)===n&&t.options.delete(l)},Kl=i(()=>{var l,n;return(n=(l=h.value)==null?void 0:l.popperRef)==null?void 0:n.contentRef}),Al=()=>{t.isBeforeHide=!1,A(()=>ce(t.selected))},pe=()=>{var l;(l=S.value)==null||l.focus()},Hl=()=>{Xe()},Ul=l=>{Ge(l)},Xe=l=>{if(O.value=!1,De.value){const n=new FocusEvent("focus",l);A(()=>hl(n))}},jl=()=>{t.inputValue.length>0?t.inputValue="":O.value=!1},Ye=()=>{ie.value||(xe&&(t.inputHovering=!0),t.menuVisibleOnFocus?t.menuVisibleOnFocus=!1:O.value=!O.value)},ql=()=>{O.value?T.value[t.hoveringIndex]&&Qe(T.value[t.hoveringIndex]):Ye()},x=l=>J(l.value)?U(l.value,e.valueKey):l.value,Gl=i(()=>T.value.filter(l=>l.visible).every(l=>l.disabled)),Ql=i(()=>e.multiple?e.collapseTags?t.selected.slice(0,e.maxCollapseTags):t.selected:[]),Jl=i(()=>e.multiple?e.collapseTags?t.selected.slice(e.maxCollapseTags):[]:[]),Ze=l=>{if(!O.value){O.value=!0;return}if(!(t.options.size===0||t.filteredOptionsCount===0||oe.value)&&!Gl.value){l==="next"?(t.hoveringIndex++,t.hoveringIndex===t.options.size&&(t.hoveringIndex=0)):l==="prev"&&(t.hoveringIndex--,t.hoveringIndex<0&&(t.hoveringIndex=t.options.size-1));const n=T.value[t.hoveringIndex];(n.disabled===!0||n.states.groupDisabled===!0||!n.visible)&&Ze(l),A(()=>ce(Y.value))}},Xl=()=>{if(!p.value)return 0;const l=window.getComputedStyle(p.value);return Number.parseFloat(l.gap||"6px")},Yl=i(()=>{const l=Xl();return{maxWidth:`${X.value&&e.maxCollapseTags===1?t.selectionWidth-t.collapseItemWidth-l:t.selectionWidth}px`}}),Zl=i(()=>({maxWidth:`${t.selectionWidth}px`})),_l=i(()=>({width:`${Math.max(t.calculatorWidth,jt)}px`}));return H(p,Bl),H(C,Ae),H(u,Oe),H(Me,Oe),H(E,He),H(X,Ll),ke(()=>{de()}),{inputId:gl,contentId:y,nsSelect:c,nsInput:I,states:t,isFocused:De,expanded:O,optionsArray:T,hoverOption:Y,selectSize:Fe,filteredOptionsCount:ue,resetCalculatorWidth:Ae,updateTooltip:Oe,updateTagTooltip:He,debouncedOnInputChange:qe,onInput:je,deletePrevTag:Wl,deleteTag:zl,deleteSelected:Ge,handleOptionSelect:Qe,scrollToOption:ce,hasModelValue:Ce,shouldShowPlaceholder:kl,currentPlaceholder:Rl,mouseEnterEventName:Ml,showClose:Cl,iconComponent:Le,iconReverse:Ol,validateState:Ne,validateIcon:wl,showNewOption:El,updateOptions:ze,collapseTagSize:Tl,setSelected:de,selectDisabled:ie,emptyText:We,handleCompositionStart:vl,handleCompositionUpdate:ml,handleCompositionEnd:bl,onOptionCreate:Fl,onOptionDestroy:Pl,handleMenuEnter:Al,focus:pe,blur:Hl,handleClearClick:Ul,handleClickOutside:Xe,handleEsc:jl,toggleMenu:Ye,selectOption:ql,getValueKey:x,navigateOptions:Ze,dropdownMenuVisible:$l,showTagList:Ql,collapseTagList:Jl,tagStyle:Yl,collapseTagStyle:Zl,inputStyle:_l,popperRef:Kl,inputRef:S,tooltipRef:h,tagTooltipRef:b,calculatorRef:C,prefixRef:d,suffixRef:f,selectRef:g,wrapperRef:Me,selectionRef:p,scrollbarRef:se,menuRef:u,tagMenuRef:E,collapseItemRef:X}};var Gt=ae({name:"ElOptions",setup(e,{slots:s}){const a=he(Se);let y=[];return()=>{var c,I;const t=(c=s.default)==null?void 0:c.call(s),g=[];function p(h){q(h)&&h.forEach(b=>{var S,C,d,f;const u=(S=(b==null?void 0:b.type)||{})==null?void 0:S.name;u==="ElOptionGroup"?p(!vt(b.children)&&!q(b.children)&&le((C=b.children)==null?void 0:C.default)?(d=b.children)==null?void 0:d.default():b.children):u==="ElOption"?g.push((f=b.props)==null?void 0:f.value):q(b.children)&&p(b.children)})}return t.length&&p((I=t[0])==null?void 0:I.children),Ee(g,y)||(y=g,a&&(a.states.optionValues=g)),t}}});const Qt=mt({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:bt,effect:{type:me(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:me(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:ht.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:el,default:gt},fitInputWidth:Boolean,suffixIcon:{type:el,default:yt},tagType:{...ll.type,default:"info"},tagEffect:{...ll.effect,default:"light"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,placement:{type:me(String),values:St,default:"bottom-start"},fallbackPlacements:{type:me(Array),default:["bottom-start","top-start","right","left"]},...Ct,...Ot(["ariaLabel"])}),sl="ElSelect",Jt=ae({name:sl,componentName:sl,components:{ElSelectMenu:Ut,ElOption:Re,ElOptions:Gt,ElTag:wt,ElScrollbar:It,ElTooltip:Vt,ElIcon:Et},directives:{ClickOutside:Tt},props:Qt,emits:[Q,rl,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:s}){const a=qt(e,s);return dl(Se,ye({props:e,states:a.states,optionsArray:a.optionsArray,handleOptionSelect:a.handleOptionSelect,onOptionCreate:a.onOptionCreate,onOptionDestroy:a.onOptionDestroy,selectRef:a.selectRef,setSelected:a.setSelected})),{...a}}});function Xt(e,s,a,y,c,I){const t=P("el-tag"),g=P("el-tooltip"),p=P("el-icon"),h=P("el-option"),b=P("el-options"),S=P("el-scrollbar"),C=P("el-select-menu"),d=$t("click-outside");return te((v(),w("div",{ref:"selectRef",class:r([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),[Rt(e.mouseEnterEventName)]:f=>e.states.inputHovering=!0,onMouseleave:f=>e.states.inputHovering=!1},[K(g,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onBeforeShow:e.handleMenuEnter,onHide:f=>e.states.isBeforeHide=!1},{default:M(()=>{var f;return[k("div",{ref:"wrapperRef",class:r([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)]),onClick:B(e.toggleMenu,["prevent","stop"])},[e.$slots.prefix?(v(),w("div",{key:0,ref:"prefixRef",class:r(e.nsSelect.e("prefix"))},[R(e.$slots,"prefix")],2)):$("v-if",!0),k("div",{ref:"selectionRef",class:r([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?R(e.$slots,"tag",{key:0},()=>[(v(!0),w(tl,null,nl(e.showTagList,u=>(v(),w("div",{key:e.getValueKey(u),class:r(e.nsSelect.e("selected-item"))},[K(t,{closable:!e.selectDisabled&&!u.isDisabled,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",style:be(e.tagStyle),onClose:E=>e.deleteTag(E,u)},{default:M(()=>[k("span",{class:r(e.nsSelect.e("tags-text"))},[R(e.$slots,"label",{label:u.currentLabel,value:u.value},()=>[al(L(u.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","effect","style","onClose"])],2))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(v(),W(g,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:M(()=>[k("div",{ref:"collapseItemRef",class:r(e.nsSelect.e("selected-item"))},[K(t,{closable:!1,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",style:be(e.collapseTagStyle)},{default:M(()=>[k("span",{class:r(e.nsSelect.e("tags-text"))}," + "+L(e.states.selected.length-e.maxCollapseTags),3)]),_:1},8,["size","type","effect","style"])],2)]),content:M(()=>[k("div",{ref:"tagMenuRef",class:r(e.nsSelect.e("selection"))},[(v(!0),w(tl,null,nl(e.collapseTagList,u=>(v(),w("div",{key:e.getValueKey(u),class:r(e.nsSelect.e("selected-item"))},[K(t,{class:"in-tooltip",closable:!e.selectDisabled&&!u.isDisabled,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",onClose:E=>e.deleteTag(E,u)},{default:M(()=>[k("span",{class:r(e.nsSelect.e("tags-text"))},[R(e.$slots,"label",{label:u.currentLabel,value:u.value},()=>[al(L(u.currentLabel),1)])],2)]),_:2},1032,["closable","size","type","effect","onClose"])],2))),128))],2)]),_:3},8,["disabled","effect","teleported"])):$("v-if",!0)]):$("v-if",!0),e.selectDisabled?$("v-if",!0):(v(),w("div",{key:1,class:r([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[te(k("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":u=>e.states.inputValue=u,type:"text",name:e.name,class:r([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:be(e.inputStyle),role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":((f=e.hoverOption)==null?void 0:f.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onKeydown:[ee(B(u=>e.navigateOptions("next"),["stop","prevent"]),["down"]),ee(B(u=>e.navigateOptions("prev"),["stop","prevent"]),["up"]),ee(B(e.handleEsc,["stop","prevent"]),["esc"]),ee(B(e.selectOption,["stop","prevent"]),["enter"]),ee(B(e.deletePrevTag,["stop"]),["delete"])],onCompositionstart:e.handleCompositionStart,onCompositionupdate:e.handleCompositionUpdate,onCompositionend:e.handleCompositionEnd,onInput:e.onInput,onClick:B(e.toggleMenu,["stop"])},null,46,["id","onUpdate:modelValue","name","disabled","autocomplete","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label","onKeydown","onCompositionstart","onCompositionupdate","onCompositionend","onInput","onClick"]),[[kt,e.states.inputValue]]),e.filterable?(v(),w("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:r(e.nsSelect.e("input-calculator")),textContent:L(e.states.inputValue)},null,10,["textContent"])):$("v-if",!0)],2)),e.shouldShowPlaceholder?(v(),w("div",{key:2,class:r([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[e.hasModelValue?R(e.$slots,"label",{key:0,label:e.currentPlaceholder,value:e.modelValue},()=>[k("span",null,L(e.currentPlaceholder),1)]):(v(),w("span",{key:1},L(e.currentPlaceholder),1))],2)):$("v-if",!0)],2),k("div",{ref:"suffixRef",class:r(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(v(),W(p,{key:0,class:r([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:M(()=>[(v(),W(Ve(e.iconComponent)))]),_:1},8,["class"])):$("v-if",!0),e.showClose&&e.clearIcon?(v(),W(p,{key:1,class:r([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:M(()=>[(v(),W(Ve(e.clearIcon)))]),_:1},8,["class","onClick"])):$("v-if",!0),e.validateState&&e.validateIcon?(v(),W(p,{key:2,class:r([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:M(()=>[(v(),W(Ve(e.validateIcon)))]),_:1},8,["class"])):$("v-if",!0)],2)],10,["onClick"])]}),content:M(()=>[K(C,{ref:"menuRef"},{default:M(()=>[e.$slots.header?(v(),w("div",{key:0,class:r(e.nsSelect.be("dropdown","header")),onClick:B(()=>{},["stop"])},[R(e.$slots,"header")],10,["onClick"])):$("v-if",!0),te(K(S,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:r([e.nsSelect.is("empty",e.filteredOptionsCount===0)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:M(()=>[e.showNewOption?(v(),W(h,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):$("v-if",!0),K(b,null,{default:M(()=>[R(e.$slots,"default")]),_:3})]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[$e,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(v(),w("div",{key:1,class:r(e.nsSelect.be("dropdown","loading"))},[R(e.$slots,"loading")],2)):e.loading||e.filteredOptionsCount===0?(v(),w("div",{key:2,class:r(e.nsSelect.be("dropdown","empty"))},[R(e.$slots,"empty",{},()=>[k("span",null,L(e.emptyText),1)])],2)):$("v-if",!0),e.$slots.footer?(v(),w("div",{key:3,class:r(e.nsSelect.be("dropdown","footer")),onClick:B(()=>{},["stop"])},[R(e.$slots,"footer")],10,["onClick"])):$("v-if",!0)]),_:3},512)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","onBeforeShow","onHide"])],16,["onMouseleave"])),[[d,e.handleClickOutside,e.popperRef]])}var Yt=ge(Jt,[["render",Xt],["__file","select.vue"]]);const Zt=ae({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const s=ne("select"),a=V(null),y=Te(),c=V([]);dl(pl,ye({...ul(e)}));const I=i(()=>c.value.some(h=>h.visible===!0)),t=h=>{var b,S;return((b=h.type)==null?void 0:b.name)==="ElOption"&&!!((S=h.component)!=null&&S.proxy)},g=h=>{const b=z(h),S=[];return b.forEach(C=>{var d,f;t(C)?S.push(C.component.proxy):(d=C.children)!=null&&d.length?S.push(...g(C.children)):(f=C.component)!=null&&f.subTree&&S.push(...g(C.component.subTree))}),S},p=()=>{c.value=g(y.subTree)};return ke(()=>{p()}),Mt(a,p,{attributes:!0,subtree:!0,childList:!0}),{groupRef:a,visible:I,ns:s}}});function _t(e,s,a,y,c,I){return te((v(),w("ul",{ref:"groupRef",class:r(e.ns.be("group","wrap"))},[k("li",{class:r(e.ns.be("group","title"))},L(e.label),3),k("li",null,[k("ul",{class:r(e.ns.b("group"))},[R(e.$slots,"default")],2)])],2)),[[$e,e.visible]])}var fl=ge(Zt,[["render",_t],["__file","option-group.vue"]]);const an=Dt(Yt,{Option:Re,OptionGroup:fl}),sn=cl(Re);cl(fl);export{sn as E,an as a};
