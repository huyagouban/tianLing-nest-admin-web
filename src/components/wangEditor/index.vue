<template>
    <div class="editor-wrapper">
        <!-- 工具栏 -->
        <Toolbar id="toolbar-container" :editor="editorRef" :default-config="toolbarConfig" :mode="mode" />
        <!-- 编辑器 -->
        <Editor id="editor-container" :style="{ minHeight: props.editorHeight + 'px', overflowY: 'hidden' }"
            v-model="modelValue" :default-config="editorConfig" :mode="mode" @on-change="handleChange"
            @on-created="handleCreated" />
    </div>
</template>

<script setup lang="ts">
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { DomEditor, type IDomEditor } from '@wangeditor/editor'
import { uploadFile } from "@/api/common/upload";
import { getFileUrl } from "@/hooks/url";
const props = defineProps({
    modelValue: {
        type: [String],
        default: "",
    },
    editorHeight: {
        type: [Number],
        default: 400,
    },
});

const emit = defineEmits(["modelValueChange"]);

const modelValue = ref(props.modelValue);

const editorRef = shallowRef(); // 编辑器实例，必须用 shallowRef

const mode = ref("default"); // 编辑器模式
const toolbarConfig = ref({
    excludeKeys: [
        "emotion",
        "insertImage",
        "insertVideo",
        "insertTable",
    ]
}); // 工具条配置
// 编辑器配置
const editorConfig = ref({
    placeholder: "请输入内容...",
    MENU_CONF: {
        uploadImage: {
            // 自定义图片上传
            async customUpload(file: any, insertFn: any) {
                let formData = new FormData();
                formData.append("file", file);
                uploadFile("upload/uploadImage", formData).then((res) => {
                    insertFn(getFileUrl() + res.data.fileUrl);
                });
            },
        },
        uploadVideo:{
            // 自定义视频上传
            async customUpload(file: any, insertFn: any) {
                let formData = new FormData();
                formData.append("file", file);
                uploadFile("upload/video", formData).then((res) => {
                    insertFn(getFileUrl() + res.data.fileUrl);
                });
            },
        }
    },
});

const handleCreated = (editor: IDomEditor) => {
    editorRef.value = editor; // 记录 editor 实例，重要！
    setTimeout(() => {
        const toolbar = DomEditor.getToolbar(editor)
        console.log(toolbar?.getConfig().toolbarKeys);

    }, 3000);


};

function handleChange(editor: any) {
    emit("modelValueChange", editor.getHtml());
}


// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value;
    if (editor == null) return;
    editor.destroy();
});
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>