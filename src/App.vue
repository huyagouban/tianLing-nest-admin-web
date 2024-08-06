<template>
    <div>
        <el-config-provider :locale="locale">
            <router-view v-slot="{ Component }">
                <transition name="fade-transform" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </el-config-provider>
    </div>
</template>
<script lang="ts" setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const locale = zhCn
</script>
