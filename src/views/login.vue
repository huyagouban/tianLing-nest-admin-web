<template>
    <div class="particles-js-box">
        <vue-particles id="particles-js" :options="particlesConfig" />
        <div class="login-container">
            <h1>天凌后台管理系统</h1>
            <p>基于Nest&Vue后台管理系统</p>
            <el-form :model="loginForm" ref="loginFormRef" :rules="rulesForm" style="max-width: 600px">
                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-form-item prop="userName">
                            <el-input :prefix-icon="User" v-model="loginForm.userName" placeholder="请输入账号" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item prop="password">
                            <el-input :prefix-icon="Lock" v-model="loginForm.password" placeholder="请输入密码"
                                show-password />
                        </el-form-item>
                    </el-col>
                    <el-col :span="14">
                        <el-form-item prop="code">
                            <el-input :prefix-icon="FolderChecked" @keyup.enter.native="subMitLogin"
                                v-model="loginForm.code" placeholder="请输入验证码" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item>
                            <div class="captchaSvg" @click="getCaptcha" v-html="captchaSvg"></div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item prop="remember">
                            <el-checkbox v-model="loginForm.remember" @keyup.enter.native="subMitLogin" label="记住密码" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item style="width: 100%;">
                            <el-button style="width: 100%;" type="primary" @click="subMitLogin">登录</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>

        </div>
    </div>
</template>

<script setup lang="ts">
import particlesConfig from "@/assets/particles/particles.json"
import { User, Lock, FolderChecked } from '@element-plus/icons-vue'
import { getCaptchaSvg } from "@/api/common/code";
import type { loginFormType } from "@/type/login";
import { login } from "@/api/login"
import type { FormRules } from 'element-plus'
import { confirm } from "@/hooks/modal"
const router = useRouter()
/**登录form表单数据*/
const loginForm = ref<loginFormType>({
    userName: '',
    password: '',
    code: '',
    remember: false,
})
const loginFormRef = ref()
// 表单校验
const rulesForm = ref<FormRules<loginFormType>>({
    userName: [
        { required: true, message: "用户名称不能为空", trigger: "blur" },
        { min: 2, max: 20, message: '用户名称长度必须介于 2 和 20 之间', trigger: 'blur' }
    ],
    code: [
        { required: true, message: "验证码不能为空", trigger: "blur" }
    ],
    password: [
        { required: true, message: "用户密码不能为空", trigger: "blur" },
        { min: 5, max: 20, message: '用户密码长度必须介于 5 和 20 之间', trigger: 'blur' },
        { pattern: /^[^<>"'|\\]+$/, message: "不能包含非法字符：< > \" ' \\\ |", trigger: "blur" }
    ],
})
/**
 * 验证码数据
 */
const captchaSvg = ref()
/**
 * 获取验证码
 */
const getCaptcha = () => {
    getCaptchaSvg().then(res => {
        captchaSvg.value = res.data
    })
}
/**登录 */
const subMitLogin = () => {
    loginFormRef.value.validate((valid: boolean) => {
        if (valid) {
            if (loginForm.value.remember) {
                localStorage.setItem('userName', loginForm.value.userName)
                localStorage.setItem('password', loginForm.value.password)
            } else {
                localStorage.removeItem('userName')
                localStorage.removeItem('password')
            }
            login(loginForm.value).then(res => {
                if (res.status == 200) {
                    let token = res.data.access_token;
                    localStorage.setItem('token', token);
                    router.push({
                        path: '/'
                    })
                } else {
                    getCaptcha()
                }
            })
        }
    })

}
const init = () => {
    if (localStorage.getItem('userName')) {
        loginForm.value.userName = localStorage.getItem('userName') as string
    }
    if (localStorage.getItem('password')) {
        loginForm.value.password = localStorage.getItem('password') as string
    }
}
onMounted(() => {
    init()
    getCaptcha()
})
</script>

<style scoped lang="scss">
.particles-js-box {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1; //这里建议层级设为-1，但-1可能会导致被其他元素遮挡

    #particles-js {
        background-color: #2d3a4b;
        width: 100%;
        height: 100%;
    }

    .login-container {
        position: absolute;
        background: #fff;
        padding: 20px;
        width: 400px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;

        h1 {
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            margin: 0 0 20px 0;
        }

        p {
            text-align: center;
            font-size: 12px;
            margin: 0 0 20px 0;
            color: #909399;
        }

        .captchaSvg {
            cursor: pointer;
            width: 100%;
            height: 100%;
        }
    }
}
</style>