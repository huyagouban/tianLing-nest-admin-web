import request from "@/utils/request";

import type { dictDataType, seachFormType } from "@/type/system/dictData";
/**
 * 
 * @param data 表单数据
 * @returns 提交字典表单
 */
export function submitDictData(data: dictDataType) {
    return request({
        url: '/dict-data/add',
        method: 'post',
        data: data
    })
}

/**
 * 
 * @param params 搜索字典数据
 * @returns 获取字典列表
 */
export function getDictDataList(params?: seachFormType) {
    return request({
        url: 'dict-data/list',
        method: 'get',
        params
    })
}


/**
 * 
 * @param dictDataId 字典数据Id
 * @returns 获取字典数据详情
 */
export function getDictDataInfo(dictDataId: number) {
    return request({
        url: `dict-data/list/${dictDataId}`,
        method: 'get',
    })
}


/**
 * 
 * @param dictDataId 字典数据Id
 * @returns 获取字典数据详情
 */
export function updateDictData(data: dictDataType) {
    return request({
        url: `dict-data/update/${data.dictDataId}`,
        method: 'put',
        data: data
    })
}

/**
 * 
 * @param dictDataId 字典数据Id
 * @returns 获取字典数据详情
 */
export function deleteDictData(dictDataIds: number|string) {
    return request({
        url: `dict-data/delete/${dictDataIds}`,
        method: 'delete',
    })
}


type userExcelDownloadType = {
    dictDataIds: number | string
}

/**
 * 
 * @param params 
 * @returns 导出字典列表
 */
export function ExcelDownload(params?: userExcelDownloadType) {
    return request({
        url: 'dict-data/excel/download',
        method: 'get',
        params
    })
}


/**
 * 
 * @param params 
 * @returns 导出字典列表
 */
export function getDictDataOption(dictType?: string) {
    return request({
        url: `dict-data/option/${dictType}`,
        method: 'get',
    })
}



