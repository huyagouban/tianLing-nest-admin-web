import axios from "axios";
import errorStatus from '@/utils/errorStatus'
import { ElMessage, ElMessageBox } from 'element-plus'
import { expireElMessageBox } from "@/hooks/modal"
import { getToken, removeToken } from "@/hooks/auth";
// 是否显示重新登录
export let isRelogin = { show: false };

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // url = base url + request url
    timeout: 3000,// request timeout
})

// 请求拦截
service.interceptors.request.use(
    (config: any) => {
        if (getToken()) {
            config.headers['Authorization'] = 'Bearer ' + getToken() //获取到token的时候 让每个请求携带自定义token 请根据实际情况自行修改
        }
        return config
    },
    (error: any) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    const status = res.data.status || 200;
    // 获取错误信息
    const msg = errorStatus[status] || res.data.message || errorStatus['default']
    // 二进制数据则直接返回
    if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
        return res.data
    }
    if (status === 401) {
        expireElMessageBox().then(xpire => {
            removeToken()
            location.href = '/login'
        })
        return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    } else if (status === 500) {
        ElMessage({ message: msg, type: 'error' })
        return Promise.reject(new Error(msg))
    } else if (status === 601) {
        ElMessage({ message: msg, type: 'warning' })
        return Promise.reject('error')
    } else if (status !== 200) {
        // Notification.error({ title: msg })
        return Promise.reject('error')
    } else {
        return res.data
    }
},
    error => {
        let { message } = error;
        let { response } = error;
        if (error.code == "ECONNABORTED") {
            message = "系统接口请求超时";
        } else if (response.data.status == 500) {
            message = "后端接口连接异常";
        } else if (message.includes("Request failed with status status")) {
            message = "系统接口" + message.substr(message.length - 3) + "异常";
        } else if (response.data.status == 404) {
            message = "接口不存在，请联系管理员"
        } else if (response.data.status == 403) {
            return location.href = '/403'
        } else if (response.data.status == 401) {
            expireElMessageBox().then(xpire => {
                removeToken()
                location.href = '/login'
            })
            return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
        }
        ElMessage({ message: message, type: 'error', duration: 5 * 1000 })
        return Promise.reject(error)
    }
)

export default service