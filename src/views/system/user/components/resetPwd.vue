<template>
    <div>
        <el-form :model="form" ref="formRef" label-width="100px" :rules="rulesForm">
            <el-form-item label="旧密码:" prop="password">
                <el-input v-model="form.oldPassword" placeholder="请输入旧密码" show-password />
            </el-form-item>
            <el-form-item label="新密码:" prop="newPassword">
                <el-input v-model="form.newPassword" placeholder="请输入新密码" show-password/>
            </el-form-item>
            <el-form-item label="确认密码:" prop="confirmPassword">
                <el-input  v-model="form.confirmPassword" placeholder="两次密码需一致" show-password/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="small" @click="submitForm">
                    确定
                </el-button>
                <el-button type="danger" size="small" @click="closeDialog">关闭</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import type { defaultProp, userInfoPassword } from "@/type/system/profile"
import type { FormRules } from 'element-plus'
import { updatePassword } from '@/api/system/user/profile'
import { confirm, msgSuccess } from "@/hooks/modal"
import type { tagsViewsType } from "@/type/common/tagsViews";
import { useTagsViews } from "@/stores/modules/tagsViews";
const formRef = ref()
const route = useRoute()
const router = useRouter()
const page = ref<tagsViewsType>({
    path: route.path,
    name: route.meta.title as string
})
// 接收父组件传参
const prop = withDefaults(defineProps<defaultProp>(), {
    user: () => ({}),
})
// form表单
const form = ref<userInfoPassword>({})
const equalToPassword = (rule: any, value: any, callback: any) => {
    if (form.value.newPassword !== value) {
        callback(new Error("两次输入的密码不一致"));
    } else {
        callback();
    }
};
// 表单校验
const rulesForm = ref<FormRules<userInfoPassword>>({
    oldPassword: [
        { required: true, message: "旧密码不能为空", trigger: "blur" },
    ],
    newPassword: [
        { required: true, message: "用户密码不能为空", trigger: "blur" },
        { min: 5, max: 20, message: '用户密码长度必须介于 5 和 20 之间', trigger: 'blur' },
        { pattern: /^[^<>"'|\\]+$/, message: "不能包含非法字符：< > \" ' \\\ |", trigger: "blur" }
    ],
    confirmPassword: [
        { required: true, message: "确认密码不能为空", trigger: "blur" },
        { required: true, validator: equalToPassword, trigger: "blur" }
    ]
})

// 提交表单
const submitForm = () => {
    formRef.value.validate((valid: boolean) => {
        if (valid) {
            confirm('是否确认提交？').then(() => {
                updatePassword(form.value).then((res) => {
                     //@ts-ignore
                    msgSuccess(res.message!)
                })
            })
        }

    })
}
/** 关闭页面操作 */
const closeDialog = () => {
    // 给父组件发信号
    useTagsViews().closeTagsViews(page.value)
    router.push({
        path: useTagsViews().tagsviewsList[useTagsViews().tagsviewsList.length - 1].path
    })
}
watch(() => prop.user, (newValue, oldValue) => {
    form.value = newValue
})

</script>

<style scoped lang="scss">
:deep(.el-form-item__label) {
    align-items: center;
}

.myicon {
    cursor: pointer;
}
</style>