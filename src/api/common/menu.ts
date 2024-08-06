import request from "@/utils/request";

/**
 * 
 * @returns 获取路由列表树
 */
export function getRouters() {
    return request({
        url: '/menu/getRouters',
        method: 'get',
    })
}