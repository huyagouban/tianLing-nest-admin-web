/**
 * 导入组件可接收参数
 */
export interface UploadDialogProps {
    // 显示状态
    dialogVisible: boolean;
    // 显示标题
    title: string;
    // 是否可拖拽
    draggable?: boolean;
    // 弹窗宽度
    width?: string;
    //是否显示下载模板
    isTemlate?:boolean;
    uploadFile: uploadFileOptions;
}

export interface uploadFileOptions {
    // 下载模板路径
    temlateUrl: string;
    // 上传路径
    uploadUrl: string;
    // 是否支持多选文件
    multiple?: boolean;
    // 接受上传的文件类型
    accept?: string;
    // 是否自动上传文件
    autoUpload?:boolean;
}