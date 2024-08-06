import request from "@/utils/request";
import type { seachFormType, dictType } from "@/type/system/dict"

/**
 * 
 * @param data 表单数据
 * @returns 提交字典表单
 */
export function submitDict(data: dictType) {
    return request({
        url: 'dict/add',
        method: 'post',
        data: data
    })
}

/**
 * 
 * @param params 搜索字典数据
 * @returns 获取字典列表
 */
export function getDictList(params?: seachFormType) {
    return request({
        url: 'dict/list',
        method: 'get',
        params
    })
}

/**
 * 
 * @param params 搜索字典数据
 * @returns 获取字典列表
 */
export function getDictSelectList(params?: seachFormType) {
    return request({
        url: 'dict/selectList',
        method: 'get',
        params
    })
}

/**
 * 
 * @param dectId 字典Id
 * @returns 获取字典详情
 */
export function getDictInfo(dictId: number) {
    return request({
        url: `/dict/dictInfo/${dictId}`,
        method: 'get',
    })
}

/**
 * 
 * @param data 字典表单数据
 * @returns 修改字典表单
 */
export function updateDict(data: dictType) {
    return request({
        url: `/dict/update/${data.dictId}`,
        method: 'put',
        data: data
    })
}


/**
 * 
 * @param id 字典Id或者以逗号隔开的字典Id
 * @returns 删除字典表单
 */
export function deleteDict(dictId: number | string) {
    return request({
        url: `dict/delete/${dictId}`,
        method: 'delete',
    })
}


type userExcelDownloadType = {
    dictIds: number | string
}

/**
 * 
 * @param params 
 * @returns 导出字典列表
 */
export function getUserExcelDownload(params?: userExcelDownloadType) {
    return request({
        url: 'dict/excel/download',
        method: 'get',
        params
    })
}

