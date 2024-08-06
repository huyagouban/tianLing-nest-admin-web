import type { statusEnum } from "@/type/common/common";
/**
 * 字典类型
 */
export interface dictType {
    dictId?: number;
    dictName?: string;
    dictType?: string;
    status?: statusEnum;
    remark?: string;
    createBy?: string;
    createTime?: string;
    updateBy?: string;
    updateTime?: string;
}

export interface seachFormType extends dictType {
    startAndEndTime?: string[];
    currentPage: number;
    pageSize: number;
}

// form组件父组件传参类型定义
export interface defaultProp {
    dialogVisible: boolean;
    title: string;
    id?: string | null;
    dictForm?: dictType;
}