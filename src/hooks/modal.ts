
// 统一封装的提示
// import { ElMessage, ElMessageBox } from 'element-plus'
/**
 * 
 * @param content 提示语
 * @returns  确认窗体
 */
export function confirm(content: String) {
    return ElMessageBox.confirm(`${content}`, "系统提示", {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: "warning",
    })
}

/**
 * 
 * @param content 提示语
 * @returns  成功消息
 */
export function msgSuccess(content: String) {
    return ElMessage({
        message: `${content}`,
        type: 'success',
    })
}

/**
 * 
 * @param content 提示语
 * @returns  失败消息
 */
export function msgError(content: String) {
    return ElMessage.error(`${content}`)
}
/**
 * 
 * @returns  登录过期
 */
export function expireElMessageBox() {
    return ElMessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', { confirmButtonText: '重新登录', cancelButtonText: '取消', type: 'warning' })
}

/**
 * 
 * @param text 提交内容标题
 * @param title 标题 
 * @param rxg 正则表达式
 * @param tip 验证提示语
 * @param placeholder 输入框提示语
 * @returns  提交内容输入框
 */
export function prompt(text: String, title: string, rxg: RegExp, tip: String,placeholder:string) {
   return ElMessageBox.prompt(`${text}`, `${title}`, {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        inputPattern: rxg,
        inputErrorMessage: `${tip}`,
        inputPlaceholder: `${placeholder}`
    })
}
