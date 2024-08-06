import { defineStore } from "pinia";
import type { RouteRecordRaw, } from "vue-router";
import { getRouters } from "@/api/common/menu";
import Layout from "@/layout/index.vue"
import router, { constanRouters, filterDynamicsRouters } from "@/router/index"
import { hasPermiOr, hasRoleOr } from "@/hooks/auth";
// 匹配views里面所有的.vue文件
const modules = import.meta.glob('@/views/**/*.vue')
export const useRouterStore = defineStore('router', () => {
    /** 面包屑导航所需数据 */
    const breadcrumbRouters = ref<any[]>([]);
    /** 左侧导航所需数据 */
    const sidebarRouters = ref<any[]>([]);
    /**
     * 
     * @returns 从后台获取路由
     */
    function routers() {
        return new Promise((resolve: any, redirect: any) => {
            let routersList: any[] = [];
            getRouters().then(res => {
                routersList = res.data;
                routersList = filterAsyncRouter(res.data, false, true)
                breadcrumbRouters.value = routersList
                sidebarRouters.value = constanRouters[0].children!.concat(routersList)

                // routersList.push({ path: '*', redirect: '/404', hidden: true })
                const asyncRoutes = filterDynamicRoutes(filterDynamicsRouters);
                asyncRoutes.forEach((item: any) => {
                    // 确保路由未被添加过
                    if (!router.hasRoute(item.name)) {
                        router.addRoute(item);
                    }
                });
                resolve(routersList)
            }).catch(err => {
                redirect(err)
            })
        })


    }
    return { breadcrumbRouters, sidebarRouters, routers }
})

// 动态路由遍历，验证是否具备权限
export function filterDynamicRoutes(routes: any) {
    const res: any[] = []
    routes.forEach((route: any) => {
        if (route.permissions) {
            if (hasPermiOr(route.permissions)) {
                res.push(route)
            }
        } else if (route.roles) {
            if (hasRoleOr(route.roles)) {
                res.push(route)
            }
        }
    })
    return res
}
/**
 * 
 * @param asyncRouterMap 
 * @param lastRouter 
 * @param type 
 * @returns 遍历后台传来的路由字符串，转换为组件对象
 */
function filterAsyncRouter(asyncRouterMap: any[], lastRouter: any = false, type = false) {
    return asyncRouterMap.filter(route => {
        if (type && route.children) {
            route.children = filterChildren(route.children, route)
        }
        if (route.component) {
            // Layout ParentView 组件特殊处理
            if (route.component === 'layout') {
                route.component = Layout
            } else {
                route.component = loadView(route.component)
            }
        }
        if (route.children != null && route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children, route, type)
        } else {
            delete route['children']
            delete route['redirect']
        }
        return true
    })
}
function filterChildren(childrenMap: RouteRecordRaw[], lastRouter?: { path: string, meta: { isLink: string } }): any[] {
    const children: RouteRecordRaw[] = [];

    childrenMap.forEach((child) => {
        const updatedChild = { ...child }; // 深拷贝避免修改原始对象

        if (lastRouter && updatedChild.meta?.isLink==='0') {
            updatedChild.path = `${lastRouter.path}${child.path}`; // 使用模板字符串拼接路径            
        }

        if (child.children && child.children.length > 0) {
            //@ts-ignore
            updatedChild.children = filterChildren(child.children, updatedChild); // 递归调用处理子元素
        }

        children.push(updatedChild);
    });
    return children;
}


export const loadView = (view: string) => {
    // 使用 import 实现生产环境的路由懒加载
    let res;
    for (const path in modules) {
        const dir = path.split('views/')[1].split('.vue')[0];
        if (dir === view) {
            res = modules[path];
        }
    }
    return res;
}