<template>
    <div style="width: 100%;display: flex; justify-content: center;margin-top: 20px;">
        <el-pagination v-model:current-page="prop.currentPage" v-model:page-size="prop.pageSize"
            :page-sizes="prop.pageSizes" :small="prop.small" :disabled="prop.disabled" :background="prop.background"
            :layout="prop.layout" :total="prop.total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>
</template>

<script setup lang="ts">
import type { paginationType } from "@/type/common/pagination";
const prop = withDefaults(defineProps<paginationType>(), {
    /**当前页数 */
    currentPage: 1,
    /** 每页条数 */
    pageSize: 10,
    /**每页显示个数选择器的选项设置 */
    pageSizes: () => ([10, 20, 50, 100]),
    /**是否使用小型分页样式 */
    small: true,
    /**是否禁用分页 */
    disabled: false,
    /**是否为分页按钮添加背景色 */
    background: true,
    /**组件布局，子组件名用逗号分隔 */
    layout: "total, sizes, prev, pager, next, jumper",
    /**	总条目数 */
    total: 0
})

const emit = defineEmits(['paginationSizeChange', 'paginationCurrentChange'])
/**page-size 每页显示条目个数改变时触发 */
const handleSizeChange = (pageSize: number) => {
    emit('paginationSizeChange', pageSize)
}
/**current-page 当前页数改变时触发 */
const handleCurrentChange = (currentPage: number) => {
    emit('paginationCurrentChange', currentPage)
}
</script>

<style scoped lang="scss"></style>