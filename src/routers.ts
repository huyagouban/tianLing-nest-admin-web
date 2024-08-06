import { useRouterStore } from "@/stores/modules/routers";
import router from "@/router/index";
import { getToken, removeToken } from "@/hooks/auth";
import { useUserStore } from "@/stores/modules/user";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })
router.beforeEach((to, from, next: any) => {    
    NProgress.start()
    if (getToken()) {
        if (useUserStore().roles.length === 0) {
            // 防止多次初始化路由
            useUserStore().getLoginUserInfo().then((login) => {
                useRouterStore().routers().then((res: any) => {
                    let routerList = res;
                    routerList.forEach((item: any) => {
                        // 确保路由未被添加过
                        if (!router.hasRoute(item.name)) {
                            router.addRoute(item);
                        }
                    });
                    // 重定向到原始目标，以避免无限循环
                    next({ ...to, replace: true });
                    NProgress.done()
                }).catch(err => {
                    removeToken();
                    useUserStore().reset()
                    next({ path: '/login' });
                });
            }).catch(err => {
                next()
            });
        } else {
            next()
        }
    } else {
        // 如果没有token或者路由已经初始化过了，直接进行相应的处理
        next(to.path === '/login' ? undefined : '/login');
        NProgress.done()
    }
});
router.afterEach(() => {
    NProgress.done()
});