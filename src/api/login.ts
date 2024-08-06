import request from "@/utils/request";
import type { loginFormType } from "@/type/login";
/**
 * @url
 * @returns 登录接口
 */
export function login(data: loginFormType) {
    return request({
        url: '/auth/login',
        method: 'post',
        data: data
    })
}
/**
 * 
 * @returns 退出登录接口
 */
export function logout() {
    return request({
        url: '/auth/logout',
        method: 'delete'
    })
}
/**
 * 
 * @returns 获取登录的用户信息接口
 */
export function loginUserInfo() {
    return request({
        url: '/auth/loginUserInfo',
        method: 'get'
    })
}