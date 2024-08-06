import type { seachPage } from "@/type/common/common";

/**
 * 登录日志
 */
export interface loginLogSeachFormType extends seachPage{
    /**
     * 登录状态
     */
    loginStatus?:'0'|'1';

    /**
     * 登录名称
     */
    loginName?:string;
}