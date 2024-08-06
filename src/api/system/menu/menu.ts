import request from "@/utils/request";
import type {  formType ,seachFormType} from "@/type/system/menu"

/**
 * 
 * @param data 表单数据
 * @returns 提交菜单表单
 */
export function submitMenu(data: formType) {
    return request({
        url: '/menu',
        method: 'post',
        data:data
    })
}

/**
 * 
 * @param data 表单数据
 * @returns 获取菜单表单
 */
export function getMenuList(params?: seachFormType) {
    return request({
        url: '/menu/list',
        method: 'get',
        params
    })
}

/**
 * 
 * @param id 表单ID
 * @returns 提交菜单表单
 */
export function getMenuInfo(id:number) {
    return request({
        url: `/menu/info/${id}`,
        method: 'get',
    })
}

/**
 * 
 * @param data 表单数据
 * @returns 修改菜单表单
 */
export function updateMenuInfo(data:formType) {
    return request({
        url: `/menu/${data.id}`,
        method: 'patch',
        data:data
    })
}

/**
 * 
 * @param id 表单ID
 * @returns 删除菜单表单
 */
export function deleteMenuInfo(id:number) {
    return request({
        url: `/menu/${id}`,
        method: 'delete',
    })
}
