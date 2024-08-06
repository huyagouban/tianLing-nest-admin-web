import { defineStore } from "pinia";
import type { tagsViewsType } from "@/type/common/tagsViews";
import path from "path";
import { de } from "element-plus/es/locales.mjs";

export const useTagsViews = defineStore('tagsViews', () => {
    /**tags路由列表 */
    const tagsviewsList = ref<tagsViewsType[]>([]);
    /**添加tags路由  判断是否是首页，是首页直接添加。不是首页，判断首页是否在tags列表中，不在则将首页添加到数组首位 */
    const addTagsViews = (item: tagsViewsType) => {
        if (item.path === "/index") {
            tagsviewsList.value.push(item)
        } else {
            if (!tagsviewsList.value.some(item => item.path === "/index")) {
                const indexTags = {
                    path: "/index",
                    name: "首页"
                }
                tagsviewsList.value.unshift(indexTags)
            }
            tagsviewsList.value.push(item)
        }

    }

    /**删除tags路由 */
    const closeTagsViews = (item: tagsViewsType) => {
        tagsviewsList.value = tagsviewsList.value.filter(tags => tags.path !== item.path)
    }
    /**删除缓存路由 */
    const delCachedView = (item: tagsViewsType) => {
        return new Promise((resolve, reject) => {
            const index = tagsviewsList.value.indexOf(item)
            index > -1 && tagsviewsList.value.splice(index, 1)
            resolve(tagsviewsList.value)
        })

    }
    /**关闭其他路由 */
    const closeOtherviews = (item: tagsViewsType) => {
        tagsviewsList.value = tagsviewsList.value.filter(tags => tags.path === item.path)
        if (item.path !== "/index") {
            const indexTags = {
                path: "/index",
                name: "首页"
            }
            tagsviewsList.value.unshift(indexTags)
        }

    }
    /**关闭左侧路由 */
    const closeLeftviews = (item: tagsViewsType) => {
        let index = tagsviewsList.value.indexOf(item)
        tagsviewsList.value = tagsviewsList.value.slice(index, tagsviewsList.value.length - 1)
    }

    /**关闭右侧路由 */
    const closeRightviews = (item: tagsViewsType) => {
        let index = tagsviewsList.value.indexOf(item)
        tagsviewsList.value = tagsviewsList.value.slice(0, index + 1)
    }
    /**关闭全部路由 */
    const closeAllviews=(item:tagsViewsType)=>{
        tagsviewsList.value = []
    }
    return { tagsviewsList, addTagsViews, closeTagsViews, delCachedView, closeOtherviews, closeLeftviews, closeRightviews ,closeAllviews}
})