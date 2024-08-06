import type { formType } from "@/type/system/user";
import type { roleType } from "@/type/system/role";

/**
 * @description 用户信息
 */
export interface userInfoType extends formType {
    avatar?:string;
    roles?: roleType;
    createDate?: string;
    updateDate?: string;
}
/**
 * @description 默认属性
 */
export interface defaultProp {
    user: userInfoType,
}


export interface userInfoPassword extends userInfoType {
    /** 旧密码 */

    oldPassword?: string

    /** 新密码 */

    newPassword?: string

    /** 确认密码 */
    confirmPassword?: string
}


/**
 * @description 上传文件
 */
export interface UploadRawFile extends File {
    uid: number
}

