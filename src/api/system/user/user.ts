import request from "@/utils/request";

import type {  formType ,seachFormType} from "@/type/system/user"

/**
 * 
 * @param data 表单数据
 * @returns 提交用户表单
 */
export function submitUser(data: formType) {
    return request({
        url: '/user',
        method: 'post',
        data:data
    })
}

/**
 * 
 * @param params 搜索表单数据
 * @returns 获取用户表单
 */
export function getUserList(params?: seachFormType) {
    return request({
        url: '/user/list',
        method: 'get',
        params
    })
}

/**
 * 
 * @param userId 表单ID
 * @returns 提交用户表单
 */
export function getUserInfo(userId:number) {
    return request({
        url: `/user/info/${userId}`,
        method: 'get',
    })
}

/**
 * 
 * @param data 表单数据
 * @returns 修改用户表单
 */
export function updateUserInfo(data:formType) {
    return request({
        url: `/user/update/${data.userId}`,
        method: 'put',
        data:data
    })
}

/**
 * 
 * @param userId 表单ID或者以逗号分隔的ids字符串
 * @returns 删除用户表单
 */
export function deleteUserInfo(userId:number|string) {
    return request({
        url: `/user/${userId}`,
        method: 'delete',
    })
}
type userExcelDownloadType = {
    userIds:number|string
}
/**
 * 
 * @param params 搜索表单数据
 * @returns 获取用户表单
 */
export function getUserExcelDownload(params?: userExcelDownloadType) {
    return request({
        url: '/user/excel/download',
        method: 'get',
        params
    })
}

/**
 * 
 * @param params 搜索表单数据
 * @returns 获取用户表单
 */
export function getSelectRole() {
    return request({
        url: 'role/selectRole',
        method: 'get',
    })
}
