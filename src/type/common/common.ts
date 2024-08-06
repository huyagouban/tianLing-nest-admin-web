
// 状态枚举  1:正常/开启/* 0:禁用/关闭/*
export type statusEnum='0'|'1';



// 搜索页码
export interface seachPage  {
    currentPage: number;
    pageSize: number;
}