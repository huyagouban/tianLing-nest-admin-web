import type { tagsViewsType } from "@/type/common/tagsViews";
import router from "@/router/index";
import { useTagsViews } from "@/stores/modules/tagsViews";
/**
 * 刷新页面
 */
export const refreshPage = (page: tagsViewsType) => {
    useTagsViews().delCachedView(page).then(() => {
        router.replace({ path: '/redirect' + page.path })
    })
}
/**
 * 关闭当前页面
 */
export const closeCurrentPage = (page: tagsViewsType) => {
  return  useTagsViews().delCachedView(page)
}

/**
 * 关闭其他页面
 */
export const closeOtherPage = (page: tagsViewsType) => {
    useTagsViews().closeOtherviews(page)
}

/**
 * 关闭左侧页面
 */
export const closeLeftPage = (page: tagsViewsType) => {
    useTagsViews().closeLeftviews(page)
}
/**
 * 关闭右侧页面
 */
export const closeRightPage = (page: tagsViewsType) => {
    useTagsViews().closeRightviews(page)
}
/**
 * 关闭全部页面
 */
export const delAllPages = (page: tagsViewsType) => {
    useTagsViews().closeAllviews(page)
}