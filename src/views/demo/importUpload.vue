<template>
    <div>
        <el-card>
            <el-form label-position="top">
                <el-form-item label="上传组件：也可用于模版导入">
                    <el-button :icon="Upload" plain type="info" @click="handleImport">导入</el-button>
                </el-form-item>
                <el-form-item label="参数说明：">
                    <el-table :data="importUploadOptions" border>
                        <el-table-column prop="name" align="center" label="参数名称" width="120" />
                        <el-table-column prop="type" align="center" label="参数类型" width="150" />
                        <el-table-column prop="isDefault" align="center" label="是否必传" width="90" />
                        <el-table-column prop="default" align="center" label="默认值" />
                        <el-table-column prop="desc" align="center" label="描述" />
                    </el-table>
                </el-form-item>
                <el-form-item label="uploadFileOptions说明：">
                    <el-table :data="uploadFileOptions" border>
                        <el-table-column prop="name" align="center" label="参数名称" width="120" />
                        <el-table-column prop="type" align="center" label="参数类型" width="150" />
                        <el-table-column prop="isDefault" align="center" label="是否必传" width="90" />
                        <el-table-column prop="default" align="center" label="默认值" />
                        <el-table-column prop="desc" align="center" label="描述" />
                    </el-table>
                </el-form-item>
                <p>其他参数请参考el-upload......</p>
            </el-form>
        </el-card>

        <!-- 导入组件 -->
        <importUpload :dialogVisible="uploadOptions.dialogVisible" :title="uploadOptions.title" :isTemlate="uploadOptions.isTemlate"
            :uploadFile="uploadOptions.uploadFile" @importClose="handleImportClose"></importUpload>
    </div>
</template>

<script setup lang="ts">
import { Upload, } from '@element-plus/icons-vue'
import importUpload from "@/components/importUpload/importUpload.vue";
import type { UploadDialogProps } from "@/type/common/upload"
// 导入组件需要的参数
const uploadOptions = ref<UploadDialogProps>({
    dialogVisible: false,
    title: '',
    isTemlate: true,
    uploadFile: {
        temlateUrl: '',
        uploadUrl: '',
        autoUpload: false,
    }
})
const importUploadOptions = [
    {
        name: 'dialogVisible',
        type: 'boolean',
        isDefault: '是',
        default: 'false',
        desc: '显示状态'
    },
    {
        name: 'title',
        type: 'string',
        isDefault: '是',
        default: '',
        desc: '显示标题'
    },
    {
        name: 'draggable',
        type: 'boolean',
        isDefault: '否',
        default: 'false',
        desc: '是否可拖拽'
    },
    {
        name: 'width',
        type: 'string',
        isDefault: '否',
        default: '680px',
        desc: '弹窗宽度'
    },
    {
        name: 'isTemlate',
        type: 'boolean',
        isDefault: '否',
        default: 'true',
        desc: '是否显示下载模板'
    },

    {
        name: 'uploadFile',
        type: 'uploadFileOptions',
        isDefault: '是',
        default: '',
        desc: '上传所需配置，参见下面详细说明'
    },
]
const uploadFileOptions = [
    {
        name: 'temlateUrl',
        type: 'string',
        isDefault: '是',
        default: '',
        desc: '下载模板路径'
    },
    {
        name: 'uploadUrl',
        type: 'string',
        isDefault: '是',
        default: '',
        desc: '上传路径'
    },
    {
        name: 'multiple',
        type: 'boolean',
        isDefault: '否',
        default: 'false',
        desc: '是否支持多选文件'
    },
    {
        name: 'accept',
        type: 'string',
        isDefault: '否',
        default: '.xls,.xlsx',
        desc: '接受上传的文件类型'
    },
    {
        name: 'autoUpload',
        type: 'boolean',
        isDefault: '否',
        default: 'true',
        desc: '是否自动上传文件'
    },
]
/**
 * 导入按钮操作
 */
const handleImport = () => {
    uploadOptions.value.dialogVisible = true;
    uploadOptions.value.title = '导入组件示例';
}

/**
 * 导入组件关闭
 */
const handleImportClose = () => {
    uploadOptions.value.dialogVisible = false;
    uploadOptions.value.title = '';
}
</script>

<style scoped lang="scss"></style>