
import request from "@/utils/request";
/**
 * @url 下载模板接口地址
 * @returns 获取下载模板
 */
export function getExcelTemlate(url:string) {
    return request({
        url: `${url}`,
        method: 'get',
    })
}
/**
 * 
 * @param url 上传地址
 * @param data 上传文件
 * @returns 上传接口
 */
export function uploadFile(url:string,file:any) {
    return request({
        url: `${url}`,
        method: 'post',
        data: file
    })
}