import type { seachPage } from "@/type/common/common";

/**
 * 在线用户信息
 */
export interface OnlineInfo extends seachPage {
    /** 会话Key */
    userSk?: string

    /** 登录名称 */
    loginName?: string

    /** 登录地址 */
    loginIp?: string

    /** 登录地点 */
    loginLocation?: string

    /** 浏览器 */
    browser?: string

    /** 操作系统 */
    os?: string

    /** 登录时间 */
    loginTime?: number
}
