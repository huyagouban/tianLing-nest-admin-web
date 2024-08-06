import { defineStore } from "pinia";
import { logout, loginUserInfo } from "@/api/login";
import { msgSuccess } from "@/hooks/modal";
import {  removeToken } from "@/hooks/auth";
import { useRouterStore } from "@/stores/modules/routers";
import { useTagsViews } from "@/stores/modules/tagsViews";
export const useUserStore = defineStore('user', () => {
    const roles = ref<string[]>([])
    const permission = ref<string[]>([])
    const userAvatarUrl= ref<string|null>(null)
    /**
     * 
     * @returns 退出登录
     */
    function userLoginOut() {
        return new Promise((resolve, reject) => {
            logout().then(res => {
                if (res.status == 200) {
                    resolve(res)
                } else {
                    reject(res)
                }
            }).catch(err => {
                reject(err)
            })
        })
    }
    /**
     * 
     * @returns 获取登录用户信息
     */
    const getLoginUserInfo = () => {
        return new Promise((resolve, reject) => {
            loginUserInfo().then(res => {
                if (res.status == 200) {
                    if (res.data.roles && res.data.roles.length > 0) {// 验证返回的roles是否是一个非空数组
                        roles.value = res.data.roles
                        permission.value = res.data.permissions
                        userAvatarUrl.value=res.data.user.avatar
                    }
                    resolve(res)
                } else {
                    reject(res)
                }
            }).catch(err => {
                reject(err)
            })
        })
    }
    /**
     * 
     * @returns 重置
     */
    const  reset=()=>{
        removeToken();
        roles.value=[];
        useRouterStore().breadcrumbRouters = []
        useRouterStore().sidebarRouters = []
        useTagsViews().tagsviewsList = []
        userAvatarUrl.value=null
    }
    return { userLoginOut, getLoginUserInfo, roles ,permission,reset,userAvatarUrl}
})