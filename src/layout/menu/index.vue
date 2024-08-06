<template>
    <div class="menu-bg">
        <el-menu class="menu-bg el-menu-vertical-demo" unique-opened :collapse="prop.isCollapse" :default-active="activeIndex"
             background-color="#304156" text-color="#fff">
            <sidebarMenuItem v-for="item in sidebarRouters" :item="item"></sidebarMenuItem>
        </el-menu>
    </div>
</template>

<script setup lang="ts" name="menuList">

import sidebarMenuItem from "@/layout/menu/sidebarMenuItem.vue"
import { useRouterStore } from "@/stores/modules/routers"
import type { menuDefaultProp } from "@/type/layout/menu";
const route = useRoute()
const activeIndex = ref(route.path)

/**从pinia里面获取路由树 */
const sidebarRouters = ref(useRouterStore().sidebarRouters)

const prop = withDefaults(defineProps<menuDefaultProp>(), {
    isCollapse: false
})

/** 监听路由变化重新渲染 */
watch(route, (newValue, oldValue) => {
    activeIndex.value = newValue.path;
})
</script>

<style scoped lang="scss">
.menu-bg {
    height: 100%;
    border-right: 0;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>