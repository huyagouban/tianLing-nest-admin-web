<template>
    <div>
        <el-dialog :model-value="prop.dialogVisible" :title="prop.title" width="680px" :before-close="closeDialog"
            destroy-on-close>
            <el-form :model="form" ref="formRef" label-width="100px" :rules="rulesForm">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="字典标签" prop="dictDataLabel">
                            <el-input v-model="form.dictDataLabel" placeholder="请输入字典标签" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="字典键值" prop="dictDataValue">
                            <el-input v-model="form.dictDataValue" placeholder="请输入字典键值" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="字典顺序" prop="sortNum">
                            <el-input-number v-model="form.sortNum" placeholder="请输入字典顺序" controls-position="right"
                                :min="0" />
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
                        <el-form-item label="回显样式" prop="remark">
                            <el-select v-model="form.cssClass" placeholder="请选择回显样式" style="width: 240px">
                                <el-option v-for="item in cssClassOptions" :key="item.value"
                                    :label="item.label + '(' + item.value + ')'" :value="item.value" />
                            </el-select>
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
import type { dictDataType, defaultProp } from "@/type/system/dictData"
import type { FormRules } from 'element-plus'
import { submitDictData, updateDictData } from '@/api/system/dict/data'
import { confirm, msgSuccess } from "@/hooks/modal"
const emit = defineEmits(['emitAddFormBtn'])
const formRef = ref()

// 数据标签回显样式
const cssClassOptions = [
    {
        value: "default",
        label: "默认"
    },
    {
        value: "primary",
        label: "主要"
    },
    {
        value: "success",
        label: "成功"
    },
    {
        value: "info",
        label: "信息"
    },
    {
        value: "warning",
        label: "警告"
    },
    {
        value: "danger",
        label: "危险"
    }
]
// 接收父组件传参
const prop = withDefaults(defineProps<defaultProp>(), {
    dialogVisible: false,
    title: "",
    dictDataForm: () => ({}),
    id: null
})
// form表单
const form = ref<dictDataType>({
    sortNum: 0,
    status: "1",
})
// 表单校验
const rulesForm = ref<FormRules<dictDataType>>({
    dictDataLabel: [
        { required: true, message: "字典标签不能为空", trigger: "blur" },
    ],
    dictDataValue: [
        { required: true, message: "字典键值不能为空", trigger: "blur" }
    ],
    sortNum: [
        { required: true, message: "字典顺序不能为空", trigger: "blur" }
    ]
})

// 提交表单
const submitForm = () => {
    formRef.value.validate((valid: boolean) => {
        if (valid) {
            confirm('是否确认提交？').then(() => {
                if (form.value.dictDataId) {
                    updateDictData(form.value).then((res) => {
                        msgSuccess(res.message!)
                        closeDialog()
                    })
                } else {
                    submitDictData(form.value).then((res) => {
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
    if (prop.dictDataForm.dictDataId) {
        return form.value = prop.dictDataForm;
    }
    if (prop.dictDataForm.dictType) {
        return form.value = { ...form.value, dictType: prop.dictDataForm.dictType, }
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