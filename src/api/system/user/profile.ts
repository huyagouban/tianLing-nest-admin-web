import request from "@/utils/request";
import type { userInfoType,userInfoPassword } from "@/type/system/profile"
/**
 * 
 * @returns 获取个人信息
 */
export function getProfile() {
    return request({
        url: '/profile',
        method: 'get',
    })
}


/**
 * 
 * @returns 修改基本信息
 */
export function updateUserInfo(data:userInfoType) {
    return request({
        url: 'profile/updateUserInfo',
        method: 'put',
        data: data
    })
}

/**
 * 
 * @returns 修改基本信息
 */
export function updatePassword(data:userInfoPassword) {
    return request({
        url: 'profile/UpdatePassword',
        method: 'put',
        data: data
    })
}

/**
 * 
 * @returns 修改基本信息
 */
export function uploadAvatar(data:any) {
    return request({
        url: 'upload/uploadAvatar',
        method: 'post',
        data: data
    })
}


