// 路由mate配置
export interface RouterMeta {
   /**菜单名称 */
   title?: string;
   /**菜单icon */
   icon?: string;
   /** icon类型 */
   iconType?: string;
   /**是否外链 */
   isLink?: string;
   /**是否缓存 */
   isCache?: string;
}

/**
* 路由树
*/
export interface RouterTree {

   /**菜单名称 */
   name?: string;

   /**路由路径 */
   path?: string;

   // /**菜单icon */
   // icon:string;

   /**组件路径 */
   component?: string;

   /**子菜单 */
   children?: RouterTree[];

   // 路由mata配置
   meta?: RouterMeta

   // /**是否外链 */
   // isLink:string;

   // /**是否缓存 */
   // isCache:string;

   /**路由是否显示 */
   visible?: string;

   /**路由是否可用 */
   status?: string;
}