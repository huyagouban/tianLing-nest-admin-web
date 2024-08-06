<template>
    <div>
        <el-row>
            <el-col :span="24" :xs="24" :sm="8">
                <el-card class="box-card">
                    <template #header>
                        <div class="title">
                            个人信息
                        </div>
                    </template>
                    <div class="text-center">
                        <userAvatar  />
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="list-group-item-title">用户名称：</span>
                            <span>{{ user.userName }}</span>
                        </li>
                        <li class="list-group-item">
                            <span class="list-group-item-title">手机号码：</span>
                            <span>{{ user.phoneNumber }}</span>
                        </li>
                        <li class="list-group-item">
                            <span class="list-group-item-title">用户邮箱：</span>
                            <span>{{ user.email }}</span>
                        </li>
                        <li class="list-group-item">
                            <span class="list-group-item-title">所属角色：</span>
                            <span>{{ user.roles?.roleName }}</span>
                        </li>
                        <li class="list-group-item">
                            <span class="list-group-item-title">创建日期：</span>
                            <span>{{ parseTime(user.createDate!) }}</span>
                        </li>
                        <li class="list-group-item">
                            <span class="list-group-item-title">修改时间：</span>
                            <span>{{ parseTime(user.updateDate!) }}</span>
                        </li>
                    </ul>
                </el-card>
            </el-col>
            <el-col :span="24" :xs="24" :sm="16">
                <el-card>
                    <template #header>
                        <div class="title">
                            基本资料
                        </div>
                    </template>
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="基本资料" name="userInfo">
                            <userInfo :user="user" />
                        </el-tab-pane>
                        <el-tab-pane label="修改密码" name="resetPwd">
                            <resetPwd :user="user" />
                        </el-tab-pane>
                    </el-tabs>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import userInfo from "@/views/system/user/components/userInfo.vue"
import resetPwd from "@/views/system/user/components/resetPwd.vue"
import userAvatar from "@/views/system/user/components/userAvatar.vue"
import { getProfile } from "@/api/system/user/profile";
import type { userInfoType } from "@/type/system/profile";
import { parseTime } from "@/hooks/index"
const activeName = ref('userInfo')
const user = ref<userInfoType>({})
/**
 * 获取用户信息
 */
const getUserInfo = () => {
    getProfile().then(res => {
        if (res.status == 200) {
            user.value = res.data
        }
    })
}
onMounted(() => {
    getUserInfo()
})
</script>

<style scoped lang="scss"></style>