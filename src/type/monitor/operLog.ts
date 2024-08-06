import type { seachPage } from "@/type/common/common";

/**
 * 操作日志
 */
export interface operLogSeachFormType extends seachPage {

    /** 操作地址 */
    operIp?: string

    /** 模块标题 */
    title?: string

    /** 操作类型 */
    operType?: string

    /** 操作人员 */
    operName?: string

    /** 操作状态 */
    operStatus?: '0'|'1'

    /** 请求地址 */
    requestUrl?: string

    /** 操作时间 */
    startAndEndTime?: string[]

}
/**
 * 操作日志弹窗
 */
export interface operLogDialogOptionType{
    viable: boolean;
    title: string;
    data: any;
}