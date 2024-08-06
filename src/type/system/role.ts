import type{ statusEnum } from "@/type/common/common";

// form组件父组件传参类型定义
export interface defaultProp {
    dialogVisible: boolean;
    title: string;
    id?: string | null;
    roleForm?: formType;
}

// form表单类型
export interface formType {
    // 用户ID
    roleId?: Number;
    // 角色名称
    roleName?: string;
    // 角色权限
    roleKey?: string;
    // 角色顺序
    roleSort?: number;
    // 角色状态
    status?: statusEnum;
    // 菜单权限ID
    menuIds?: number[];
    // 备注
    remark?: string;
}

// 角色管理搜索表单类型
export interface seachFormType {
    // 用户名称
    roleName?: string;
    // 手机号码
    roleKey?: string;
    // 用户状态
    status?: statusEnum;
    // 创建时间区间
    startAndEndTime?: string;
    /**当前页数 */
    currentPage?: number;
    /** 每页条数 */
    pageSize?: number;
}

/**供外部使用，防止重名*/
export  interface roleType extends formType{}