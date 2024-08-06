<template>
    <el-sub-menu :index="(prop.item.path as string)" v-if="prop.item.children && prop.item.children.length > 0">
        <template #title>
            <el-icon class="iconFontSize">
                <tl-icon class="flex" v-if="prop.item.meta?.icon" :iconName="prop.item.meta?.icon"
                    :iconType="prop.item.meta?.iconType"></tl-icon>
            </el-icon>
            <span>{{ prop.item.meta?.title }}</span>
        </template>
        <sidebarMenuItem v-for="child in item.children" :item="child"></sidebarMenuItem>
    </el-sub-menu>
    <el-menu-item :index="prop.item.path" @click="toPath" v-else>
        <el-icon class="iconFontSize">
            <tl-icon class="flex" v-if="prop.item.meta?.icon" :iconName="prop.item.meta?.icon"
                :iconType="prop.item.meta?.iconType"></tl-icon>
        </el-icon>
        <template #title>{{ prop.item.meta?.title }}</template>
    </el-menu-item>
</template>

<script setup lang="ts" name="sidebarMenuItem">
import type { menuItemType } from "@/type/layout/menu"
import { isExternal } from "@/utils/validate";
const router = useRouter()
// 定义从父组件传过来的参数
const prop = withDefaults(defineProps<menuItemType>(), {
    item: () => ({}),
})

const toPath = ({ index }: any) => {
    if (isExternal(index)) return window.open(index)
    router.push(index)
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/commonIcon.scss";
</style>