<template>
    <div>
        <el-dialog :model-value="prop.dialogVisible" :title="prop.title" width="680px" :before-close="closeDialog"
            destroy-on-close>
            <el-form :model="form" ref="formRef" label-width="100px" :rules="rulesForm">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="用户昵称" prop="nickName">
                            <el-input v-model="form.nickName" placeholder="请输入用户昵称" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="手机号码" prop="phoneNumber">
                            <el-input v-model="form.phoneNumber" placeholder="请输入手机号码" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="邮箱地址" prop="email">
                            <el-input v-model="form.email" placeholder="请输入邮箱地址" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="用户性别" prop="sex">
                            <el-select v-model="form.sex" placeholder="请选择用户性别">
                                <el-option v-for="item in sexOptions" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="用户名称" prop="userName">
                            <el-input v-model="form.userName" placeholder="请输入用户名称" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" v-if="!prop.userForm.userId">
                        <el-form-item label="用户密码" prop="password">
                            <el-input v-model="form.password" placeholder="请输入用户密码" type="password" show-password />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="用户角色" prop="roleIds">
                            <el-select v-model="form.roleIds" placeholder="请选择用户角色">
                                <el-option v-for="item in userRoleOptions" :key="item.roleId" :label="item.roleName"
                                    :value="item.roleId" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="用户状态" prop="status">
                            <el-radio-group v-model="form.status">
                                <el-radio value="1">正常</el-radio>
                                <el-radio value="0">停用</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="备注" prop="remark">
                            <el-input v-model="form.remark" placeholder="请输入备注" type="textarea" :rows="4" />
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="submitForm">
                        确定
                    </el-button>
                    <el-button @click="closeDialog">取消</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import type { defaultProp, formType, } from "@/type/system/user"
import type { FormRules } from 'element-plus'
import { submitUser, updateUserInfo, getSelectRole } from '@/api/system/user/user'
import { confirm, msgSuccess } from "@/hooks/modal"
const emit = defineEmits(['emitAddFormBtn'])
const formRef = ref()
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
const userRoleOptions = ref()
// 接收父组件传参
const prop = withDefaults(defineProps<defaultProp>(), {
    dialogVisible: false,
    title: "",
    userForm: () => ({}),
    id: null
})
// form表单
const form = ref<formType>({
    status: "1",
})
// 表单校验
const rulesForm = ref<FormRules<formType>>({
    userName: [
        { required: true, message: "用户名称不能为空", trigger: "blur" },
        { min: 2, max: 20, message: '用户名称长度必须介于 2 和 20 之间', trigger: 'blur' }
    ],
    nickName: [
        { required: true, message: "用户昵称不能为空", trigger: "blur" }
    ],
    password: [
        { required: true, message: "用户密码不能为空", trigger: "blur" },
        { min: 5, max: 20, message: '用户密码长度必须介于 5 和 20 之间', trigger: 'blur' },
        { pattern: /^[^<>"'|\\]+$/, message: "不能包含非法字符：< > \" ' \\\ |", trigger: "blur" }
    ],
    email: [
        {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
        }
    ],
    phoneNumber: [
        {
            pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
            message: "请输入正确的手机号码",
            trigger: "blur"
        }
    ]
})

// 提交表单
const submitForm = () => {
    formRef.value.validate((valid: boolean) => {
        if (valid) {
            confirm('是否确认提交？').then(() => {
                if (form.value.userId) {
                    updateUserInfo(form.value).then((res) => {
                         //@ts-ignore
                        msgSuccess(res.message!)
                        closeDialog()
                    })
                } else {
                    submitUser(form.value).then((res) => {
                         //@ts-ignore
                        msgSuccess(res.message!)
                        closeDialog()
                    })

                }
            })
        }

    })
}
// 关闭弹窗操作=>
const closeDialog = () => {
    formRef.value.resetFields();
    // 给父组件发信号
    emit('emitAddFormBtn', false)
}
const getUserRoleOptions = () => {
    getSelectRole().then((res) => {
        userRoleOptions.value = res.data
    })
}
onMounted(() => {
    getUserRoleOptions()
    if (prop.userForm.userId) {
        form.value = prop.userForm;
    }

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