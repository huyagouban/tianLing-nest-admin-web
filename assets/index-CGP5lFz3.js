import{g as te,r as f,R as ae,a4 as oe,o as i,h as P,x as t,y as a,k as l,a5 as ne,a6 as re,a7 as c,a8 as se,t as u,D as g,a9 as ie,aa as R,ab as de,v as N,ac as ue,J as me,ad as V,ae as C,af as k,a1 as ce,N as pe}from"./index-CpodFpUQ.js";import{v as _e}from"./el-loading-BOfnPg9C.js";import{E as fe,a as ge}from"./el-table-column-CD1Eg5LV.js";import"./el-checkbox-gOJjs20a.js";import{E as he}from"./el-link-1sriVKj4.js";import{E as we}from"./el-switch-CHw-uFi2.js";import{E as be}from"./el-card-q23y_vI7.js";import{E as ve}from"./el-row-D5xM9lwf.js";import{E as ye}from"./el-col-57__bE4T.js";import{a as Ee,E as Ve}from"./el-form-item-CvcOi-Xh.js";import{E as Ce}from"./el-date-picker-CRvtB8U1.js";import{E as ke,a as Fe}from"./el-select-B4_7IAkN.js";import{r as Se,g as xe,d as z,u as De,a as Ie,b as Pe}from"./roleForm-CKQbqCeZ.js";import{p as Re,d as Ne}from"./index-DgcNhbwt.js";import{_ as ze}from"./pagination.vue_vue_type_script_setup_true_lang-CFSpbPsp.js";import{u as Te}from"./dict-BF9NBz1l.js";import"./debounce-DB3PlMcl.js";import"./_baseClone-Bd2QEoHD.js";import"./isEqual-DA5FAILj.js";import"./index-D5u5-p8S.js";import"./token-DI9FKtlJ.js";import"./strings-tw-UTuVM.js";import"./el-dialog-BdRR_6YM.js";import"./menu-BR7_zR8D.js";import"./el-radio-BM65Nv2y.js";import"./el-input-number--l3XrVoV.js";import"./data-dQwJxLXj.js";const ul=te({__name:"index",setup(Be){const{sys_show_hide:T}=Te("sys_show_hide"),p=f([]),F=f(),v=f(!1),r=f({currentPage:1,pageSize:10}),S=f(0),_=()=>{r.value.currentPage=1,y()},B=()=>{F.value.resetFields(),_()},x=f([]),s=f({dialogVisible:!1,title:"",roleForm:{},id:null}),L=()=>{s.value.dialogVisible=!0,s.value.title="新增角色"},U=()=>{s.value.dialogVisible=!1,s.value.roleForm={},s.value.id=null,_()},A=o=>{xe(o).then(n=>{s.value.roleForm=n.data,s.value.title="编辑",s.value.dialogVisible=!0})},$=o=>{p.value=o.map(n=>n.roleId)},K=o=>{V("是否确认删除？").then(()=>{z(o).then(n=>{C(n.message),_()})})},M=()=>{if(p.value.length==0){k("请选择要删除的数据");return}V("是否确认删除？").then(()=>{z(p.value.toString()).then(o=>{C(o.message),_()})})},j=(o,n)=>{De({roleId:o,status:n}).then(d=>{d.status==200?C(d.message):k(d.message),_()})},y=()=>{v.value=!0,Ie(r.value).then(o=>{x.value=o.data.list,S.value=o.data.total,v.value=!1})},q=o=>{r.value.pageSize=o,_()},J=o=>{r.value.currentPage=o,y()},O=()=>{if(p.value.length==0){k("请选择要导出的数据");return}V("是否确认导出？").then(()=>{let o={roleIds:p.value.toString()};Pe(o).then(n=>{Ne(n.data.data,"角色信息")})})};return ae(()=>{y()}),(o,n)=>{const E=ce,d=Ee,Q=ke,G=Fe,H=Ce,h=pe,W=Ve,X=ye,Y=ve,D=be,m=fe,Z=we,I=he,ee=ge,w=oe("hasPermi"),le=_e;return i(),P("div",null,[t(D,null,{default:a(()=>[t(W,{model:l(r),ref_key:"seachFormRef",ref:F,"label-width":"auto",inline:!0},{default:a(()=>[t(d,{label:"角色名称",prop:"roleName"},{default:a(()=>[t(E,{class:"w200",modelValue:l(r).roleName,"onUpdate:modelValue":n[0]||(n[0]=e=>l(r).roleName=e),placeholder:"请输入角色名称"},null,8,["modelValue"])]),_:1}),t(d,{label:"权限字符",prop:"roleKey"},{default:a(()=>[t(E,{class:"w200",modelValue:l(r).roleKey,"onUpdate:modelValue":n[1]||(n[1]=e=>l(r).roleKey=e),placeholder:"请输入权限字符"},null,8,["modelValue"])]),_:1}),t(d,{label:"状态",prop:"status"},{default:a(()=>[t(G,{class:"w200",modelValue:l(r).status,"onUpdate:modelValue":n[2]||(n[2]=e=>l(r).status=e),placeholder:"请选择用户状态",style:{width:"240px"}},{default:a(()=>[(i(!0),P(ne,null,re(l(T),e=>(i(),c(Q,{key:e.dictDataId,label:e.dictDataLabel,value:e.dictDataValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(d,{label:"创建时间",prop:"startAndEndTime"},{default:a(()=>[t(H,{class:"w200",modelValue:l(r).startAndEndTime,"onUpdate:modelValue":n[3]||(n[3]=e=>l(r).startAndEndTime=e),type:"daterange","range-separator":"—","start-placeholder":"开始时间","end-placeholder":"结束时间"},null,8,["modelValue"])]),_:1}),t(d,null,{default:a(()=>[t(h,{type:"primary",icon:l(se),onClick:_},{default:a(()=>[u("搜索")]),_:1},8,["icon"]),t(h,{onClick:B},{default:a(()=>[u("重置")]),_:1})]),_:1})]),_:1},8,["model"]),t(Y,{justify:"end"},{default:a(()=>[t(X,{span:24},{default:a(()=>[g((i(),c(h,{type:"primary",plain:"",icon:l(ie),onClick:L},{default:a(()=>[u("新增")]),_:1},8,["icon"])),[[w,["sys_role_add"]]]),g((i(),c(h,{type:"danger",plain:"",icon:l(R),disabled:!(l(p).length>0),onClick:M},{default:a(()=>[u("批量删除")]),_:1},8,["icon","disabled"])),[[w,["sys_role_delete"]]]),g((i(),c(h,{icon:l(de),plain:"",type:"warning",disabled:!(l(p).length>0),onClick:O},{default:a(()=>[u("导出")]),_:1},8,["icon","disabled"])),[[w,["sys_role_export"]]])]),_:1})]),_:1})]),_:1}),t(D,null,{default:a(()=>[g((i(),c(ee,{data:l(x),style:{width:"100%"},border:"","empty-text":"暂无数据",onSelectionChange:$},{default:a(()=>[t(m,{type:"selection",width:"55",selectable:(e,b)=>e.roleId!=1},null,8,["selectable"]),t(m,{type:"index",align:"center",width:"80",label:"序号"},{default:a(e=>[u(N(e.$index+1),1)]),_:1}),t(m,{prop:"roleName","header-align":"center","show-overflow-tooltip":"","min-width":"120",label:"角色名称"}),t(m,{prop:"roleKey","header-align":"center","show-overflow-tooltip":"","min-width":"120",label:"字符权限"}),t(m,{prop:"roleSort",align:"center",width:"100",label:"显示顺序"}),t(m,{prop:"status",align:"center",width:"80",label:"状态"},{default:a(e=>[t(Z,{disabled:e.row.roleId==1,modelValue:e.row.status,"onUpdate:modelValue":b=>e.row.status=b,onChange:b=>j(e.row.roleId,e.row.status),"active-value":"1","inactive-value":"0",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["disabled","modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(m,{prop:"updateDate",align:"center",width:"180",label:"创建时间"},{default:a(e=>[u(N(l(Re)(e.row.updateDate)),1)]),_:1}),t(m,{prop:"address","header-align":"center",width:"120",label:"操作",fixed:"right"},{default:a(e=>[g((i(),c(I,{underline:!1,disabled:e.row.roleId==1,icon:l(ue),type:"success",onClick:b=>A(e.row.roleId)},{default:a(()=>[u("编辑")]),_:2},1032,["disabled","icon","onClick"])),[[w,["sys_role_edit"]]]),g((i(),c(I,{underline:!1,disabled:e.row.roleId==1,icon:l(R),type:"danger",onClick:b=>K(e.row.roleId)},{default:a(()=>[u("删除")]),_:2},1032,["disabled","icon","onClick"])),[[w,["sys_role_delete"]]])]),_:1})]),_:1},8,["data"])),[[le,l(v)]]),t(ze,{currentPage:l(r).currentPage,pageSize:l(r).pageSize,total:l(S),onPaginationSizeChange:q,onPaginationCurrentChange:J},null,8,["currentPage","pageSize","total"])]),_:1}),l(s).dialogVisible?(i(),c(Se,{key:0,dialogVisible:l(s).dialogVisible,roleForm:l(s).roleForm,title:l(s).title,onEmitAddFormBtn:U},null,8,["dialogVisible","roleForm","title"])):me("",!0)])}}});export{ul as default};
