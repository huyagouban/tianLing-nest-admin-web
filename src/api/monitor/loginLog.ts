import request from "@/utils/request";
import type { loginLogSeachFormType } from "@/type/monitor/loginLog";
/**
 * 获取登录日志列表
 * @param params 
 * @returns 
 */
export function getLoginLogList(params?: loginLogSeachFormType) {
    return request({
        url: '/login-log/list',
        method: 'get',
        params
    })
}

/**
 * 删除登录日志
 * @param Id 
 * @returns 
 */
export function deleteLoginLog(Id: number | string) {
    return request({
        url: `login-log/delete/${Id}`,
        method: 'delete',
    })
}

interface LoginLogExcelDownloadType {
    loginLogIds: number | string
}
/**
 * 
 * @param params 
 * @returns 导出字登录日志
 */
export function LoginLogExcelDownload(params?: LoginLogExcelDownloadType) {
    return request({
        url: 'login-log/excel/download',
        method: 'get',
        params
    })
}

/**
 * 清空登录日志
 * @returns 
 */
export function loginLogClear() {
    return request({
        url: `login-log/clear`,
        method: 'delete',
    })
}
