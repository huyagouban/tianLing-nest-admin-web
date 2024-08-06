import request from "@/utils/request";

/**
 * 
 * @returns 获取验证码
 */
export function getCaptchaSvg() {
    return request({
        url: 'auth/captcha',
        method: 'get',
    })
}