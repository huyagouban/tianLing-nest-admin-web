/** 页码组件传参类型 */
export interface paginationType{
     /**当前页数 */
     currentPage?:number;
     /** 每页条数 */
     pageSize?: number;
     /**每页显示个数选择器的选项设置 */
     pageSizes?: number[];
     /**是否使用小型分页样式 */
     small?:boolean;
     /**是否禁用分页 */
     disabled?:boolean;
     /**是否为分页按钮添加背景色 */
     background?:boolean;
     /**组件布局，子组件名用逗号分隔 */
     layout?:string;
     /**	总条目数 */
     total?:number
}