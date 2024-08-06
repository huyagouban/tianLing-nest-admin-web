<template>
    <div class="header-box">
        <div class="header-top">
            <div class="header-top-left">
                <el-icon class="cursor" @click="toIsCollapse">
                    <Fold v-if="!prop.isCollapse" />
                    <Expand v-else />
                </el-icon>
                <breadcrumb />
            </div>
            <div class="header-top-right">
                <el-dropdown trigger="click">
                    <span class="header-top-right-avatar-box">
                        <el-avatar size="default" :src="avatarUrl" style="margin-right: 8px;" />
                        <el-icon>
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="goUserInfo">个人中心</el-dropdown-item>
                            <el-dropdown-item divided @click="goLogout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
        <div class="header-bottom">
            <tagsViews></tagsViews>
        </div>
    </div>
</template>

<script setup lang="ts">
import breadcrumb from "@/layout/header/breadcrumb/index.vue";
import tagsViews from "@/layout/header/tagsViews/index.vue";
import type { menuDefaultProp } from "@/type/layout/menu";
import { Fold, Expand } from '@element-plus/icons-vue'
import { useUserStore } from "@/stores/modules/user";
import { confirm } from "@/hooks/modal"
import { removeToken } from "@/hooks/auth";
import { getFileUrl } from "@/hooks/url";
import avatarJpegUrl from "../../../public/avatar.jpeg";

const avatarUrl = computed(() => {
    if (!useUserStore().userAvatarUrl) return avatarJpegUrl
    return getFileUrl() + useUserStore().userAvatarUrl as string
})
const prop = withDefaults(defineProps<menuDefaultProp>(), {
    isCollapse: false
})
const emit = defineEmits(['updateIsCollapse']);
const router = useRouter()
const toIsCollapse = () => {
    emit('updateIsCollapse')
}

const goLogout = () => {
    confirm('确定注销并退出系统吗？').then(() => {
        useUserStore().userLoginOut().then((res: any) => {
            if (res.status = 200) {
                removeToken();
                useUserStore().reset()
                router.replace({ path: '/login' })
            }
        })
    })
}
const goUserInfo = () => {
    router.push({ path: '/user/userInfo' })
}
</script>

<style scoped lang="scss">
.header-box {
    height: 100%;

    .header-top {
        display: flex;
        // height: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        border-bottom: 1px solid #d8dce5;

        .header-top-left {
            display: flex;
            height: 100%;
            align-items: center;

            .cursor {
                cursor: pointer;
                font-size: 22px;
            }
        }

        .header-top-right {
            .header-top-right-avatar-box {
                display: flex;
                align-items: center;
                cursor: pointer;
            }
        }
    }

    .header-bottom {
        padding: 5px 20px;
    }
}
</style>