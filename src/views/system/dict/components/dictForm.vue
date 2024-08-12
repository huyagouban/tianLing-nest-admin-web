<template>
    <div>
        <el-dialog :model-value="prop.dialogVisible" :title="prop.title" width="680px" :before-close="closeDialog"
            destroy-on-close>
            <el-form :model="form" ref="formRef" label-width="100px" :rules="rulesForm">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="字典名称" prop="dictName">
                            <el-input v-model="form.dictName" placeholder="请输入字典名称" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="字典类型" prop="dictType">
                            <el-input v-model="form.dictType" placeholder="请输入字典类型" />
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
                            <el-input v-model="form.remark" placeholder="请输入备注" type="textarea" rows="4" />
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
import type { dictType, defaultProp } from "@/type/system/dict"
import type { FormRules } from 'element-plus'
import { submitDict, updateDict} from '@/api/system/dict/dict'
import { confirm, msgSuccess } from "@/hooks/modal"
const emit = defineEmits(['emitAddFormBtn'])
const formRef = ref()
const userRoleOptions = ref()
// 接收父组件传参
const prop = withDefaults(defineProps<defaultProp>(), {
    dialogVisible: false,
    title: "",
    dictForm: () => ({}),
    id: null
})
// form表单
const form = ref<dictType>({
    status: "1",
})
// 表单校验
const rulesForm = ref<FormRules<dictType>>({
    dictName: [
        { required: true, message: "字典名称不能为空", trigger: "blur" },
    ],
    dictType: [
        { required: true, message: "字典类型不能为空", trigger: "blur" }
    ],
})

// 提交表单
const submitForm = () => {
    formRef.value.validate((valid: boolean) => {
        if (valid) {
            confirm('是否确认提交？').then(() => {
                if (form.value.dictId) {
                    updateDict(form.value).then((res) => {
                         //@ts-ignore
                        msgSuccess(res.message!)
                        closeDialog()
                    })
                } else {
                    submitDict(form.value).then((res) => {
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
onMounted(() => {
    if (prop.dictForm.dictId) {
        form.value = prop.dictForm;
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