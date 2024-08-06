
// 用户管理搜索表单类型
export interface seachFormType {
    // 用户名称
    userName?: string;
    // 手机号码
    phoneNumber?: string;
    // 用户状态
    status?: statusEnum;
    // 创建时间区间
    startAndEndTime?: string;
    /**当前页数 */
    currentPage?: number;
    /** 每页条数 */
    pageSize?: number;
}
// 用户状态枚举类型
export type statusEnum = "0" | "1"|string

// 性别枚举类型
type sexEnum = "0" | "1"
// form表单类型
export interface formType {
    // 用户ID
    userId?: Number;
    // 用户昵称
    nickName?: string;
    // 手机号码
    phoneNumber?: string;
    // 邮箱地址
    email?: string;
    // 用户性别
    sex?: sexEnum;
    // 用户名称
    userName?: string;
    // 用户密码
    password?: string;
    // 用户角色ID
    roleIds?: number;
    // 用户状态
    status?: statusEnum;
    // 备注
    remark?: string;
}

// form组件父组件传参类型定义
export interface defaultProp {
    dialogVisible: boolean;
    title: string;
    id?: string | null;
    userForm?: formType;
}