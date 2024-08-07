<template>
    <div class="common-layout">
        <el-container>
            <!-- 左侧导航 -->
            <el-aside class="elAsideWidth">
                <!-- 标题 -->
                <div class="aside-title" >
                    <img class="commonIconClass" style="margin-right: 12px;"  src="../../public/logo.png" alt=""><h1 v-if="!isCollapse">天凌管理系统</h1>
                </div>
                <menuList :isCollapse="isCollapse" class="aside-menu" />
            </el-aside>
            <el-container>
                <!-- 顶部区域 -->
                <el-header>
                    <headerIndex :isCollapse="isCollapse" @updateIsCollapse="updateIsCollapse" />
                </el-header>
                <!-- 页面主体 -->
                <el-main>
                    <router-view v-slot="{ Component }">
                        <transition name="fade-transform" mode="out-in">
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script lang="ts" setup>
import menuList from "@/layout/menu/index.vue"
import headerIndex from "@/layout/header/index.vue"

const isCollapse = ref(false);

const updateIsCollapse = () => {
    isCollapse.value = !isCollapse.value
}
</script>
<style lang="scss" scoped>
.elAsideWidth {
    width: fit-content;
    min-height: 100vh;
    background: #304156;

    .aside-title {
        width: 100%;
        height: 50px;
        // background: #304156;
        color: #fff;
        font-weight: bold;
        text-align: center;
        line-height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .aside-menu {
        height: calc(100vh - 50px);
    }
}

.el-header {
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 #0000001f, 0 0 3px 0 #0000000a;
    -webkit-box-shadow: 0 1px 3px 0 #0000001f, 0 0 3px 0 #0000000a;
    padding: 0;
    height: fit-content;
}
</style>