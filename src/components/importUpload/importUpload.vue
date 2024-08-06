<template>
    <div>
        <el-dialog :draggable="props.draggable" :model-value="props.dialogVisible" :title="props.title"
            :width="props.width" :before-close="handleClose">
            <el-upload ref="uploadRef" drag :action="props.uploadFile.uploadUrl" :limit="1" :disabled="disabled"
                :on-progress="onProgress" :auto-upload="props.uploadFile.autoUpload"
                :multiple="props.uploadFile.multiple" :before-upload="beforeUpload" :accept="props.uploadFile.accept"
                :on-error="onError" :on-success="onSuccess" :on-exceed="onExceed">
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text" >
                    将文件拖到此处，或 <em>点击上传</em>
                </div>
                <template #tip>
                    <div class="el-upload__tip text-center">
                        仅支持{{ props.uploadFile.accept ? props.uploadFile.accept : '.xls,.xlsx' }}格式文件。<el-link
                            type="primary" style="font-size: 12px;vertical-align: baseline;" v-if="props.isTemlate"
                            @click="excelTemlate">下载模板</el-link>
                    </div>
                </template>
            </el-upload>
            <template #footer>
                <div class="dialog-footer ">
                    <el-button @click="handleClose">取消</el-button>
                    <el-button type="primary" :loading="disabled" @click="submitUpload">
                        确定
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { downloadExcel } from "@/hooks/index"
import { msgError, msgSuccess } from "@/hooks/modal";
import errorStatus from '@/utils/errorStatus'
import type { UploadDialogProps } from "@/type/common/upload"
import { getExcelTemlate } from "@/api/common/upload";
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
import { genFileId } from 'element-plus'
// 组件接受默认值
const props = withDefaults(defineProps<UploadDialogProps>(), {
    // 显示状态
    dialogVisible: false,
    // 显示标题
    title: "导入",
    // 是否可拖拽
    draggable: false,
    // 弹窗宽度
    width: '680px',
    //是否显示下载模板按钮
    isTemlate: true,
    // 上传组件所需配置
    uploadFile: () => ({
        // 下载模板路径
        temlateUrl: '',
        // 上传路径
        uploadUrl: '',
        // 是否支持多选文件
        multiple: false,
        // 接受上传的文件类型
        accept: '.xls,.xlsx',
        // 是否自动上传文件
        autoUpload: true,
    })
})
// 是否禁用上传
const disabled = ref(false)
const uploadRef = ref<UploadInstance>()
const emit = defineEmits(['importClose'])
/**
 * 关闭前的回调，会暂停 Dialog 的关闭
 */
const handleClose = () => {
    if (disabled.value) {
        return
    }
    uploadRef.value!.clearFiles();
    emit('importClose')
}
/**
 * 下载模板按钮
 */
const excelTemlate = () => {
    if (!props.uploadFile.temlateUrl) return msgError('请设置模板下载路径')
    getExcelTemlate(`${props.uploadFile.temlateUrl}`).then(res => {
        downloadExcel(res.data.data, '导入模板')
    })
}
/**
 * 确认上传按钮操作
 */
const submitUpload = () => {
    uploadRef.value!.submit()
}

/**
 * 上传失败的钩子
 */
const onError = (error: Error) => {
    //@ts-ignore
    if (error.status == 404) {
        msgError(errorStatus[404])
    } else {
        let message = JSON.parse(error.message)
        msgError(message.message)
    }
    disabled.value = false

}
/**
 * 上传成功的钩子
 */
const onSuccess = (res: any) => {
    if (res.status == 200) {
        msgSuccess(res.message)
        emit('importClose')
    } else {
        uploadRef.value!.clearFiles()
        disabled.value = false
        msgError(res.message)
    }
}
/** 
 * 当超出限制时，执行的钩子函数
 */
const onExceed: UploadProps['onExceed'] = (files: File[]) => {
    uploadRef.value!.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    uploadRef.value!.handleStart(file)
}
// 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
const beforeUpload = (rawFile: UploadRawFile) => {
    const isExcel = rawFile.name.indexOf('.xls') > -1 || rawFile.name.indexOf('.xlsx') > -1
    if (!isExcel) {
        msgError('上传文件只能是 xls、xlsx 格式!')
        return false
    }
    if (rawFile.size > 10 * 1024 * 1024) {
        msgError('上传文件大小不能超过 10MB!')
        return false
    }
}
const onProgress = () => {
    disabled.value = true
}

</script>

<style scoped lang="scss"></style>