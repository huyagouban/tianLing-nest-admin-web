import type { statusEnum, seachPage } from "@/type/common/common";

export interface dictDataType {
    dictDataId?: number;
    /**
     * 字典类型
     */
    dictType?: string;

    /**
     * 字典标签
     */
    dictDataLabel?: string;

    /**
     * 字典键值
     */
    dictDataValue?: string;

    /**
     * 字典顺序
     */
    sortNum?: number;


    /**
     * 状态
     */
    status?: statusEnum;

    /**
     * 备注
     */
    remark?: string;

    /**
     * 回显样式
     */
    cssClass?:string;
}




// form组件父组件传参类型定义
export interface defaultProp {
    dialogVisible: boolean;
    title: string;
    dictDataForm?: dictDataType;
}

export interface seachFormType extends seachPage {
    dictDataLabel?: string;
    dictDataValue?: string;
    dictType?: string;
    status?: statusEnum;
}

