import{g as f,r as _,o as b,h as g,x as e,y as a,k as o,ag as y,t as h,s as D,N as E}from"./index-CpodFpUQ.js";import{E as F}from"./el-card-q23y_vI7.js";import{a as V,E as x}from"./el-form-item-CvcOi-Xh.js";import{E as w,a as T}from"./el-table-column-CD1Eg5LV.js";import"./el-checkbox-gOJjs20a.js";import{_ as U}from"./importUpload.vue_vue_type_script_setup_true_lang-ComOKFG4.js";import"./_baseClone-Bd2QEoHD.js";import"./debounce-DB3PlMcl.js";import"./isEqual-DA5FAILj.js";import"./el-dialog-BdRR_6YM.js";import"./el-progress-GAzN0prh.js";import"./el-link-1sriVKj4.js";import"./index-DgcNhbwt.js";import"./upload-DpPL4qb1.js";const C=D("p",null,"其他参数请参考el-upload......",-1),P=f({__name:"importUpload",setup(v){const t=_({dialogVisible:!1,title:"",isTemlate:!0,uploadFile:{temlateUrl:"",uploadUrl:"",autoUpload:!1}}),s=[{name:"dialogVisible",type:"boolean",isDefault:"是",default:"false",desc:"显示状态"},{name:"title",type:"string",isDefault:"是",default:"",desc:"显示标题"},{name:"draggable",type:"boolean",isDefault:"否",default:"false",desc:"是否可拖拽"},{name:"width",type:"string",isDefault:"否",default:"680px",desc:"弹窗宽度"},{name:"isTemlate",type:"boolean",isDefault:"否",default:"true",desc:"是否显示下载模板"},{name:"uploadFile",type:"uploadFileOptions",isDefault:"是",default:"",desc:"上传所需配置，参见下面详细说明"}],p=[{name:"temlateUrl",type:"string",isDefault:"是",default:"",desc:"下载模板路径"},{name:"uploadUrl",type:"string",isDefault:"是",default:"",desc:"上传路径"},{name:"multiple",type:"boolean",isDefault:"否",default:"false",desc:"是否支持多选文件"},{name:"accept",type:"string",isDefault:"否",default:".xls,.xlsx",desc:"接受上传的文件类型"},{name:"autoUpload",type:"boolean",isDefault:"否",default:"true",desc:"是否自动上传文件"}],d=()=>{t.value.dialogVisible=!0,t.value.title="导入组件示例"},r=()=>{t.value.dialogVisible=!1,t.value.title=""};return(O,k)=>{const u=E,i=V,l=w,n=T,m=x,c=F;return b(),g("div",null,[e(c,null,{default:a(()=>[e(m,{"label-position":"top"},{default:a(()=>[e(i,{label:"上传组件：也可用于模版导入"},{default:a(()=>[e(u,{icon:o(y),plain:"",type:"info",onClick:d},{default:a(()=>[h("导入")]),_:1},8,["icon"])]),_:1}),e(i,{label:"参数说明："},{default:a(()=>[e(n,{data:s,border:""},{default:a(()=>[e(l,{prop:"name",align:"center",label:"参数名称",width:"120"}),e(l,{prop:"type",align:"center",label:"参数类型",width:"150"}),e(l,{prop:"isDefault",align:"center",label:"是否必传",width:"90"}),e(l,{prop:"default",align:"center",label:"默认值"}),e(l,{prop:"desc",align:"center",label:"描述"})]),_:1})]),_:1}),e(i,{label:"uploadFileOptions说明："},{default:a(()=>[e(n,{data:p,border:""},{default:a(()=>[e(l,{prop:"name",align:"center",label:"参数名称",width:"120"}),e(l,{prop:"type",align:"center",label:"参数类型",width:"150"}),e(l,{prop:"isDefault",align:"center",label:"是否必传",width:"90"}),e(l,{prop:"default",align:"center",label:"默认值"}),e(l,{prop:"desc",align:"center",label:"描述"})]),_:1})]),_:1}),C]),_:1})]),_:1}),e(U,{dialogVisible:o(t).dialogVisible,title:o(t).title,isTemlate:o(t).isTemlate,uploadFile:o(t).uploadFile,onImportClose:r},null,8,["dialogVisible","title","isTemlate","uploadFile"])])}}});export{P as default};
