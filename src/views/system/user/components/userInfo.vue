<template>
    <div>
        <el-form :model="form" ref="formRef" label-width="100px" :rules="rulesForm">
            <el-form-item label="用户昵称:" prop="nickName">
                <el-input v-model="form.nickName" placeholder="请输入用户昵称" />
            </el-form-item>
            <el-form-item label="手机号码:" prop="phoneNumber">
                <el-input v-model="form.phoneNumber" placeholder="请输入手机号码" />
            </el-form-item>
            <el-form-item label="邮箱地址:" prop="email">
                <el-input v-model="form.email" placeholder="请输入邮箱地址" />
            </el-form-item>
            <el-form-item label="用户性别:" prop="sex">
                <el-radio-group v-model="form.sex">
                    <el-radio :value="item.value" v-for="item in sexOptions">{{ item.label }}</el-radio>
                </el-radio-group>
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
import type { defaultProp, userInfoType } from "@/type/system/profile"
import type { FormRules } from 'element-plus'
import { updateUserInfo } from '@/api/system/user/profile'
import { confirm, msgSuccess } from "@/hooks/modal"
import type { tagsViewsType } from "@/type/common/tagsViews";
import { useTagsViews } from "@/stores/modules/tagsViews";
const route = useRoute()
const router = useRouter()
const formRef = ref()
const page = ref<tagsViewsType>({
    path: route.path,
    name: route.meta.title as string
})
const sexOptions = ref([
    {
        value: '0',
        label: '女'
    },
    {
        value: '1',
        label: '男'
    },
])
// 接收父组件传参
const prop = withDefaults(defineProps<defaultProp>(), {
    user: () => ({}),
})
// form表单
const form = ref<userInfoType>({})
// 表单校验
const rulesForm = ref<FormRules<userInfoType>>({
    nickName: [
        { required: true, message: "用户昵称不能为空", trigger: "blur" }
    ],
    email: [
        {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
            required: true
        }
    ],
    phoneNumber: [
        {
            pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
            message: "请输入正确的手机号码",
            trigger: "blur",
            required: true
        }
    ]
})

// 提交表单
const submitForm = () => {
    formRef.value.validate((valid: boolean) => {
        if (valid) {
            confirm('是否确认提交？').then(() => {
                updateUserInfo(form.value).then((res) => {
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