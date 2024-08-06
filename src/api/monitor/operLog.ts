import request from "@/utils/request";
import type { operLogSeachFormType } from "@/type/monitor/operLog"
/**
 * 获取操作日志列表
 * @param params 
 * @returns 
 */
export function getOperLogList(params: operLogSeachFormType) {
    return request({
        url: 'oper-log/list',
        method: 'get',
        params
    })
}

/**
 * 删除操作日志
 * @param Id 
 * @returns 
 */
export function deleteOperLog(Id: number | string) {
    return request({
        url: `oper-log/delete/${Id}`,
        method: 'delete',
    })
}

/**
 * 清空操作日志
 * @returns 
 */
export function operLogClear() {
    return request({
        url: `oper-log/clear`,
        method: 'delete',
    })
}

interface operLogExcelDownloadType {
    operIds: number | string
}
/**
 * 
 * @param params 
 * @returns 导出操作日志
 */
export function operLogExcelDownload(params?: operLogExcelDownloadType) {
    return request({
        url: 'oper-log/excel/download',
        method: 'get',
        params
    })
}

/**
 * 
 * @param params 
 * @returns 导出字典列表
 */
export function getOperLogInfo(id: number) {
    return request({
        url: `oper-log/info/${id}`,
        method: 'get',
    })
}