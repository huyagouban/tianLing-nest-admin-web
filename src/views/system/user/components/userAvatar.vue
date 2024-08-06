<template>
    <div>
        <div class="user-avatar-header" @click="editCropper">
            <img :src="options.img ? options.img : avatarUrl" alt="点击上传头像" class="img-circle img-lg" />
        </div>
        <el-dialog v-model="dialogVisible" :title="title" width="800" :before-close="handleClose" append-to-body
            @opened="modalOpened">
            <el-row>
                <el-col :xs="24" :md="12" :style="{ height: '350px' }">
                    <vue-cropper ref="cropper" :img="options.img" :info="true" :autoCrop="options.autoCrop"
                        :autoCropWidth="options.autoCropWidth" :autoCropHeight="options.autoCropHeight"
                        :fixedBox="options.fixedBox" :outputType="options.outputType" @realTime="realTime"
                        v-if="visible" />
                </el-col>
                <el-col :xs="24" :md="12" :style="{ height: '350px' }">
                    <div class="avatar-upload-preview">
                        <img :src="options.previews.url" :style="options.previews.img" />
                    </div>
                </el-col>
            </el-row>
            <br />
            <el-row>
                <el-col :sm="2">
                    <el-upload action="#" :http-request="requestUpload" :show-file-list="false"
                        :before-upload="beforeUpload">
                        <el-button>
                            选择
                            <el-icon class="el-icon--right">
                                <Upload />
                            </el-icon>
                        </el-button>
                    </el-upload>
                </el-col>
                <el-col :sm="{ span: 1, offset: 2 }">
                    <el-button icon="Plus" @click="changeScale(1)"></el-button>
                </el-col>
                <el-col :sm="{ span: 1, offset: 1 }">
                    <el-button icon="Minus" @click="changeScale(-1)"></el-button>
                </el-col>
                <el-col :sm="{ span: 1, offset: 1 }">
                    <el-button icon="RefreshLeft" @click="rotateLeft()"></el-button>
                </el-col>
                <el-col :sm="{ span: 1, offset: 1 }">
                    <el-button icon="RefreshRight" @click="rotateRight()"></el-button>
                </el-col>
                <el-col :sm="{ span: 2, offset: 6 }">
                    <el-button :disabled="uploadBtm" type="primary" @click="uploadImg()">提 交</el-button>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import "vue-cropper/dist/index.css";
import { VueCropper } from "vue-cropper";
import { uploadAvatar } from "@/api/system/user/profile";
import type { UploadRawFile, } from "@/type/system/profile";
import { msgError, msgSuccess } from "@/hooks/modal";
import avatarUrl from "../../../../../public/avatar.jpeg"
import { useUserStore } from "@/stores/modules/user";
import { getFileUrl } from "@/hooks/url";
/**
 * 本地测试地址
 */
const baseUrl = getFileUrl()

const cropper = ref()
/**
 * 弹窗显示
 */
const dialogVisible = ref(false);
/**
 * 弹窗标题
 */
const title = ref("修改头像");
/**
 * 控制是否可以上传
 */
const uploadBtm = ref(true);
/**
 * 是否显示cropper
 */
const visible = ref(false);

/**
 * 打开弹窗
 */
const editCropper = () => {
    dialogVisible.value = true;

}
/**
 * Dialog 打开动画结束时的回调
 */
const modalOpened = () => {
    visible.value = true;
}
//图片裁剪数据
const options = ref({
    img: avatarUrl,     // 裁剪图片的地址
    autoCrop: true,            // 是否默认生成截图框
    autoCropWidth: 200,        // 默认生成截图框宽度
    autoCropHeight: 200,       // 默认生成截图框高度
    fixedBox: true,            // 固定截图框大小 不允许改变
    outputType: "png",         // 默认生成截图为PNG格式
    filename: 'avatar',        // 文件名称
    previews: {                //预览数据
        url: '',
        img: '',
    },
});
/** 实时预览 */
const realTime = (data: any) => {
    options.value.previews = data;
}
/** 覆盖elmentplus默认上传行为 */
const requestUpload: any = () => { }

/** 向左旋转 */
const rotateLeft = () => {
    cropper.value.rotateLeft();
}

/** 向右旋转 */
const rotateRight = () => {
    cropper.value.rotateRight();
}

/** 图片缩放 */
const changeScale = (num: number) => {
    num = num || 1;
    cropper.value.changeScale(num);
}
/** 上传预处理 */
const beforeUpload = (file: UploadRawFile) => {
    if (file.type.indexOf("image/") == -1) {
        msgError("文件格式错误，请上传图片类型,如：JPG，PNG后缀的图片。");
    } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            options.value.img = reader.result as string;
            options.value.filename = file.name;
        };
        uploadBtm.value = false
    }
}
/** 上传图片 */
const uploadImg = () => {
    cropper.value.getCropBlob((data: Blob) => {
        let formData = new FormData();
        uploadBtm.value = true
        formData.append("avatarfile", data, options.value.filename);
        uploadAvatar(formData).then(res => {
            if (res.status == 200) {
                options.value.img = baseUrl + res.data.avatar;
                msgSuccess("修改成功");
                handleClose()
            } else {
                uploadBtm.value = false
            }

        });
    });
}
/**
 * 关闭弹窗
 */
const handleClose = () => {
    dialogVisible.value = false;
    visible.value = false;
}
/**
 * 从pinia获取头像地址
 */
const getAvatarUrl = () => {
    return useUserStore().userAvatarUrl as string
}
/**
 * 监听是否有变化
 */
watch(() => getAvatarUrl, (newValue, oldValue) => {
    options.value.img = getAvatarUrl()
})
</script>

<style scoped lang="scss">
.user-avatar-header {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 120px;
}

.user-avatar-header:hover:after {
    content: '+';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    color: #eee;
    background: rgba(0, 0, 0, 0.5);
    font-size: 24px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: pointer;
    line-height: 110px;
    border-radius: 50%;
}

.avatar-upload-preview {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0 0 4px #ccc;
    overflow: hidden;
}
</style>