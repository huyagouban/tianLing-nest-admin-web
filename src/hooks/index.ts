// 通用函数封装
import type { menuOptionsType } from "@/type/system/menu"
/**
 * 
 * @param time 传入时间
 * @param pattern 想要优化的时间格式
 * @returns 日期格式化
 */
export function parseTime(time: string | number | Date, pattern?: string) {
    if (arguments.length === 0 || !time) {
        return null
    }
    const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
            time = parseInt(time)
        } else if (typeof time === 'string') {
            time = time.replace(new RegExp(/-/gm), '/').replace('T', ' ').replace(new RegExp(/\.[\d]{3}/gm), '');
        }
        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        date = new Date(time)
    }
    const formatObj: any = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}
/**
 * 
 * @param data 要下载的Buffer文件流
 * @param fileName 自定义的文件名
 */
export function downloadExcel(data: ArrayBuffer, fileName?: string) {
    const uin8Array: Uint8Array = new Uint8Array(data as unknown as ArrayBuffer)
    // 将buffer转成blob
    const blob = new Blob([uin8Array], { type: 'application/octet-stream' })
    const a: HTMLAnchorElement = document.createElement('a');
    const blobUrl: string = window.URL.createObjectURL(blob)
    a.href = blobUrl;
    a.download = `${fileName || new Date().getTime()}.xlsx`;
    a.click();
    window.URL.revokeObjectURL(blobUrl);
}
