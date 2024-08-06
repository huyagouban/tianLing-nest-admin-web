<template>
    <div>
        <el-scrollbar>
            <el-tag :class="['tagsViews', item.path === route.path ? 'tag-color-avtive' : 'tag-color']"
                :closable="item.path === '/index' ? false : item.path === route.path ? true : false"
                v-for="item in tagsViews" @click="toTagsViews(item)" @close="closeTagsViews(item)"
                @contextmenu.prevent.native="(e: MouseEvent) => openContextMenu(item, e)">{{
                    item.name }}</el-tag>
        </el-scrollbar>
        <ul v-show="contextmenuOption.visible"
            :style="{ left: contextmenuOption.left + 'px', top: contextmenuOption.top + 'px' }" class="contextmenu">
            <li @click="refreshTagsViews">
                <Refresh class="commonIconClass" /> 刷新页面
            </li>
            <li v-if="!isCloseCurrent()" @click="closeCurrentTagsViews">
                <Close class="commonIconClass" /> 关闭当前
            </li>
            <li v-if="!isCloseOther()" @click="closeOtherTagsViews">
                <CircleClose class="commonIconClass" /> 关闭其他
            </li>
            <li v-if="!isCloseLeft()" @click="closeLeftTagsViews">
                <Back class="commonIconClass" /> 关闭左侧
            </li>
            <li v-if="isCloseRight()" @click="closeRightTagsViews">
                <Right class="commonIconClass" /> 关闭右侧
            </li>
            <li v-if="isCloseAll()" @click="closeAllTagsViews">
                <CircleClose class="commonIconClass" /> 全部关闭
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useTagsViews } from "@/stores/modules/tagsViews";
import type { tagsViewsType } from "@/type/common/tagsViews";
import { Refresh, Close, CircleClose, Back, Right } from '@element-plus/icons-vue'
import { refreshPage, closeOtherPage, closeLeftPage, closeRightPage, delAllPages } from "@/hooks/tab";
const route = useRoute()
const router = useRouter()
const tagsViews = ref<tagsViewsType[]>([])
const selectTagsViews = ref<tagsViewsType | null>()
const contextmenuOption = ref({ visible: false, left: 0, top: 0 })
/**
 * 监听路由变化
 */
const watchTagsViews = () => {
    if (route.meta && route.meta.title) {
        if (!useTagsViews().tagsviewsList.some(item => item.path === route.path)) {
            useTagsViews().addTagsViews({
                path: route.path,
                name: route.meta.title as string,
            })
        }
        tagsViews.value = useTagsViews().tagsviewsList;
    }
}
/**
 * 
 * @param item 点击的标签
 * @returns 点击标签跳转路由
 */
const toTagsViews = (item: tagsViewsType) => {
    router.push({
        path: item.path
    })
}
/**
 * 
 * @param item 点击的标签
 * @returns 删除标签
 */
const closeTagsViews = (item: tagsViewsType) => {
    useTagsViews().closeTagsViews(item)
    router.push({
        path: useTagsViews().tagsviewsList[useTagsViews().tagsviewsList.length - 1].path
    })
}
/**
 * 
 * @param item 点击的标签
 * @param e 鼠标点击事件
 * @returns 打开右键菜单
 */
const openContextMenu = (item: tagsViewsType, e: MouseEvent) => {
    if (item.path !== route.path) return

    selectTagsViews.value = item;
    contextmenuOption.value = {
        visible: true,
        left: e.clientX,
        top: e.clientY
    }
}
/**
 * 关闭右键菜单
 */
const closeContextMenu = () => {
    selectTagsViews.value = null;
    contextmenuOption.value = {
        visible: false,
        left: 0,
        top: 0
    }
}
/**
 * 判断是否关闭当前,是首页就不显示，否则就显示
 */
const isCloseCurrent = () => {
    return selectTagsViews.value?.path === '/index' ? true : false
}

/**
 * 判断是否关闭其他,只有两个标签就不显示，否则就显示
 */
const isCloseOther = () => {
    return tagsViews.value.length <= 2 ? true : false
}
/**
 * 判断是否关闭左侧,只有两个标签就不显示，否则就显示
 */
const isCloseLeft = () => {
    let index = tagsViews.value.findIndex(item => item.path === selectTagsViews.value?.path)
    if (tagsViews.value.length > 2 && index > 1) {
        return false
    } else {
        return true
    }
}
/**
 * 判断是否关闭右侧,只有两个标签就不显示，否则就显示
 */
const isCloseRight = () => {
    return (tagsViews.value.length > 2 && tagsViews.value[tagsViews.value.length - 1] !== selectTagsViews.value) ? true : false
}
/**
 * 判断是否关闭全部,只有两个标签就不显示，否则就显示
 */
const isCloseAll = () => {
    return tagsViews.value.length > 2 ? true : false
}
/**
 * 刷新页面
 */
const refreshTagsViews = () => {
    refreshPage(selectTagsViews.value as tagsViewsType)
}
/**
 * 关闭当前标签
 */
const closeCurrentTagsViews = () => {
    useTagsViews().delCachedView(selectTagsViews.value as tagsViewsType).then(() => {
        router.push({
            path: tagsViews.value[tagsViews.value.length - 1].path
        })
    })
}
/**
 * 关闭其他标签
 */
const closeOtherTagsViews = () => {
    closeOtherPage(selectTagsViews.value as tagsViewsType)
    watchTagsViews()
}
/**
 * 关闭左侧标签
 */
const closeLeftTagsViews = () => {
    closeLeftPage(selectTagsViews.value as tagsViewsType)
    watchTagsViews()
}
/**
 * 关闭右侧标签
 */
const closeRightTagsViews = () => {
    closeRightPage(selectTagsViews.value as tagsViewsType)
    watchTagsViews()
}
/**
 * 关闭全部标签
 */
const closeAllTagsViews = () => {
    delAllPages(selectTagsViews.value as tagsViewsType)
    router.push({
        path: '/index'
    })
}
// 初始化
onMounted(() => {
    watchTagsViews()
})
/** 监听路由变化重新渲染 */
watch(route, (newValue, oldValue) => {
    watchTagsViews()
})
/** 监听右键菜单是否显示 */
watch(contextmenuOption, (newValue, oldValue) => {
    if (newValue.visible) {
        document.body.addEventListener('click', closeContextMenu)
    } else {
        document.body.removeEventListener('click', closeContextMenu)
    }
})
</script>

<style scoped lang="scss">
.tag-color {
    color: #000;
    background-color: #fff;
}

.tag-color-avtive {
    color: #fff;
    background-color: #409eff;

    :deep(.el-tag__close) {
        color: #fff;
    }

    :deep(.el-tag__close:hover) {
        background-color: #b4bccc
    }
}

.contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);

    li {
        margin: 0;
        padding: 7px 16px;
        cursor: pointer;

        &:hover {
            background: #eee;
        }
    }
}
</style>