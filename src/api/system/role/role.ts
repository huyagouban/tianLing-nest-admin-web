import request from "@/utils/request";
import type { formType, seachFormType} from "@/type/system/role"
/**
 * 
 * @param data 表单数据
 * @returns 提交角色表单
 */
export function submitRole(data: formType) {
    return request({
        url: 'role/add',
        method: 'post',
        data: data
    })
}

/**
 * 
 * @param params 搜索表单数据
 * @returns 获取角色表单
 */
export function getRoleList(params?: seachFormType) {
    return request({
        url: 'role/list',
        method: 'get',
        params
    })
}

/**
 * 
 * @returns 获取角色详情
 */
export function getRoleInfo(id?: number) {
    return request({
        url: `role/list/${id}`,
        method: 'get',
    })
}

/**
 * 
 * @returns 修改角色信息
 */
export function updateRole(data?:formType) {
    return request({
        url: `/role/update/${data?.roleId}`,
        method: 'put',
        data:data
    })
}

/**
 * 
 * @returns 删除角色信息
 */
export function deleteRole(ids?:string|number) {
    return request({
        url: `/role/delete/${ids}`,
        method: 'delete',
    })
}
type roleExcelDownloadType = {
    roleIds:number|string
}
/**
 * 
 * @returns 导出角色信息
 */
export function getRoleExcelDownload(params?: roleExcelDownloadType) {
    return request({
        url: '/role/excel/download',
        method: 'get',
        params
    })
}