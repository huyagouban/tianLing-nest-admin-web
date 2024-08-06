// 搜索类型
interface seachFormType {
    menuName?: string;
    status?:string;
}
// form组件父组件传参类型定义
interface defaultProp {
    dialogVisible: boolean;
    title: string;
    id?:number|null;
    menuForm?:formType;
}
// 新增或编辑form表单类型
interface formType {
    id?:number;
    parentId?: number | null;
    menuType?: string;
    icon?: string;
    iconType?:string;
    menuName?: string;
    sortNum?: number;
    isLink?: string;
    path?: string;
    component?: string;
    perms?: string;
    isCache?: string;
    visible?: string;
    status?: string;
}
type menuOptionsType = {
    id?:number;
    parentId?: number;
    menuName?: string;
    children?: any[]
}
export type { seachFormType, defaultProp, formType ,menuOptionsType}