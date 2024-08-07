<template>
    <div class="app-container home">
        <el-row :gutter="20">
            <el-col :sm="24" :lg="24">
                <blockquote class="text-warning" style="font-size: 14px">
                    阿里云：上云优惠聚集地，云小站专属折扣优惠，新老用户99元一年
                    <br />
                    <el-link href="https://www.aliyun.com/minisite/goods?userCode=8zecm2vo" type="primary"
                        target="_blank">https://www.aliyun.com/minisite/goods?userCode=8zecm2vo</el-link>
                    <br />
                    通义灵码_智能编码助手_AI编程-阿里云
                    <br />
                    <el-link href="https://tongyi.aliyun.com/lingma/pricing?userCode=8zecm2vo" type="primary"
                        target="_blank">https://tongyi.aliyun.com/lingma/pricing?userCode=8zecm2vo</el-link>
                    <br />
                </blockquote>

                <hr />
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :sm="24" :lg="12" style="padding-left: 20px">
                <h2>天凌后台管理框架</h2>
                <p>
                    一直想做一款后台管理系统，看了很多优秀的开源项目但是发现没有合适自己的。需要学习其他后端语言，学习成本高，于是利用空闲休息时间开始自己写一套后台系统。如此有了天凌管理系统，她可以用于所有的Web应用程序，如网站管理后台，等等，当然，您也可以进行深度定制，以做出更强系统。所有前端后台代码封装过后十分精简易上手，出错概率低。系统会陆续更新一些实用功能。
                </p>
                <p>
                    这是一个适合前端开发者的一款后台管理系统，只需要简单了解一下Node.js，nest.js即可上手。
                </p>
                <p>
                    <el-text class="mx-1" type="danger">
                        注意：目前正在开发中，功能正在进一步完善中。暂时可作为个人练习使用。如商用请谨慎使用，如出现问题概不负责。
                    </el-text>
                </p>
                <p>
                    <b>当前版本:</b> <span>v{{ version }}</span>
                </p>
                <p>
                    <el-tag type="danger">&yen;免费开源</el-tag>
                </p>
                <p>
                    <el-button type="primary" icon="Cloudy" plain
                        @click="goTarget('https://gitee.com/y_project/RuoYi-Vue')">访问码云</el-button>
                    <el-button plain @click="goTarget('https://github.com/huyagouban/tianLing-nest-admin-web')">
                        <template #icon>
                            <svgIcon iconClass="icon-test_1" className="icon"></svgIcon>
                        </template>
                        访问GitHub</el-button>
                    <!-- <el-button icon="HomeFilled" plain @click="goTarget('http://ruoyi.vip')">访问主页</el-button> -->
                </p>
            </el-col>

            <el-col :sm="24" :lg="12" style="padding-left: 50px">
                <el-row>
                    <el-col :span="12">
                        <h2>技术选型</h2>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <h4>后端技术</h4>
                        <ul>
                            <li>Node</li>
                            <li>Nest</li>
                            <li>JWT</li>
                            <li>Redis</li>
                            <li>rxjs</li>
                            <li>typeorm</li>
                            <li>...</li>
                        </ul>
                    </el-col>
                    <el-col :span="6">
                        <h4>前端技术</h4>
                        <ul>
                            <li>Vue3</li>
                            <li>Pinia</li>
                            <li>Element-Plus</li>
                            <li>Axios</li>
                            <li>TypeScript</li>
                            <li>WangeDitor</li>
                            <li>...</li>
                        </ul>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-divider />
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="8">
                <el-card class="update-log">
                    <template v-slot:header>
                        <div class="clearfix">
                            <span>联系信息</span>
                        </div>
                    </template>
                    <div class="body">
                        <p>
                            <!-- <i class="el-icon-s-promotion"></i> 官网：<el-link href="http://www.ruoyi.vip"
                                target="_blank">http://www.ruoyi.vip</el-link> -->
                        </p>
                        <p>
                            <i class="el-icon-user-solid"></i> QQ群： <a
                                href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=qeE58GqXx8bZzxpPe_j152fqWZIhSud4&authKey=DusCHL%2F3uiKr%2FZ7aGeKc8Zj%2F%2FiD4qlTk9Zn7RB4VM%2B2aAZEdZCFy08jP8DExGMAG&noverify=0&group_code=1001388768"
                                target="_blank">1001388768</a>
                        </p>
                        <p>
                            <img src="@/assets//images/WeChat.jpg" alt="donate" style="width:45%" />
                        </p>
                    </div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8">
                <el-card class="update-log">
                    <template v-slot:header>
                        <div class="clearfix">
                            <span>更新日志</span>
                        </div>
                    </template>
                    <el-collapse accordion>
                        <el-collapse-item title="v0.0.1 - 2024-08-05">
                            <ol>
                                <li>天凌前后端分离系统测试发布</li>
                            </ol>
                        </el-collapse-item>
                    </el-collapse>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8">
                <el-card class="update-log">
                    <template v-slot:header>
                        <div class="clearfix">
                            <span>捐赠支持</span>
                        </div>
                    </template>
                    <div class="body" style="text-align: center;">
                        <div class="" style="display: flex; justify-content: space-between;">
                            <img src="@/assets//images/Alipay.jpg" alt="donate" style="width:45%" />
                            <img src="@/assets//images/WeChatPay.jpg" alt="donate" style="width:45%" />
                        </div>
                        <span style="display: inline-block; height: 30px; line-height: 30px;">你可以请作者喝杯咖啡表示鼓励</span>

                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup name="Index" lang="ts">
import svgIcon from "@/components/icons/svgIcon.vue";
const version = ref('0.0.1')

function goTarget(url: string) {
    window.open(url, '__blank')
}
</script>

<style scoped lang="scss">
.home {
    blockquote {
        padding: 10px 20px;
        margin: 0 0 20px;
        font-size: 17.5px;
        border-left: 5px solid #eee;
    }

    hr {
        margin-top: 20px;
        margin-bottom: 20px;
        border: 0;
        border-top: 1px solid #eee;
    }

    .col-item {
        margin-bottom: 20px;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    font-family: "open sans",
    "Helvetica Neue",
    Helvetica,
    Arial,
    sans-serif;
    font-size: 13px;
    color: #676a6c;
    overflow-x: hidden;

    ul {
        list-style-type: none;
    }

    h4 {
        margin-top: 0px;
    }

    h2 {
        margin-top: 10px;
        font-size: 26px;
        font-weight: 100;
    }

    p {
        margin-top: 10px;

        b {
            font-weight: 700;
        }
    }

    .update-log {
        ol {
            display: block;
            list-style-type: decimal;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0;
            margin-inline-end: 0;
            padding-inline-start: 40px;
        }
    }
}
</style>