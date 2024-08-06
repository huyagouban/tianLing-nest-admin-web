import request from "@/utils/request";
import type{ OnlineInfo } from "@/type/monitor/online";
/**
 * 获取在线用户列表
 * @param params 
 * @returns 
 */
export function getOnlineList(params:OnlineInfo) {
    return request({
        url: 'online/list',
        method: 'get',
        params
    })
}


/**
 * 
 * @param id 
 * @returns 强退在线用户
 */
export function onlineLogout(id:number) {
    return request({
        url: `online/${id}`,
        method: 'delete',
    })
}