<template>
    <div class="breadcrumb-box">
        <el-breadcrumb separator="/">
            <transition-group name="breadcrumb">
                <el-breadcrumb-item v-for="item in routerList" :key="item.path">
                    {{ item.meta.title }}
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const routerList = ref<any[]>([])
/** 从router.matched 取出对应的路由数据 */
const getBreadcrumb = () => {
    let matched: any = route.matched.filter(item => item.meta && item.meta.title)

    const first = matched[0]
    if (!isDashboard(first)) {
        matched = [{ path: '/index', meta: { title: '首页' } }].concat(matched)
    }
    routerList.value = matched.filter((item: any) => item.meta && item.meta.title)
}
/** 判断路由中有没有首页 */
const isDashboard = (route: any) => {
    const name = route && route.name
    if (!name) {
        return false
    }
    return name.trim() === 'index'
}
onMounted(() => {
    getBreadcrumb()
})
/** 监听路由变化重新渲染 */
watch(route, (newValue, oldValue) => {
    getBreadcrumb()

})
</script>

<style scoped lang="scss">
.breadcrumb-box {
    margin-left: 1em;
}
</style>