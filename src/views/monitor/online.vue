<template>
    <div>
        <!-- 搜索区域 -->
        <el-card>
            <el-form :model="seachForm" ref="seachFormRef" label-width="auto" :inline="true">
                <el-form-item label="登录地址" prop="loginIp">
                    <el-input class="w200" v-model="seachForm.loginIp" placeholder="请输入登录地址" />
                </el-form-item>
                <el-form-item label="用户名称" prop="loginName">
                    <el-input class="w200" v-model="seachForm.loginName" placeholder="请输入用户名称" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :icon="Search" @click="queryParmas">搜索</el-button>
                    <el-button @click="resetQuery">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <!-- 操作日志列表区域 -->
        <el-card>
            <el-table :data="onlineList" style="width: 100%" v-loading="loading" border empty-text="暂无数据"
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="50" />
                <el-table-column prop="userSk" align="center" min-width="180" show-overflow-tooltip label="会话编号" />
                <el-table-column prop="loginName" header-align="center" show-overflow-tooltip min-width="90"
                    label="登录名称" />
                <el-table-column prop="loginIp" align="center" min-width="90" label="登录地址" />
                <el-table-column prop="loginLocation" align="center" min-width="90" label="登录地点" />
                <el-table-column prop="browser" align="center" show-overflow-tooltip min-width="80" label="浏览器" />
                <el-table-column prop="os" align="center" show-overflow-tooltip min-width="90" label="操作系统" />
                <el-table-column prop="loginTime" align="center" width="180" label="登陆日期">
                    <template #default="scope">
                        {{ parseTime(scope.row.loginTime) }}
                    </template>
                </el-table-column>
                <el-table-column align="center" width="120" label="操作" fixed="right">
                    <template #default="scope">
                        <el-link :underline="false" :icon="Delete" type="danger"
                            @click="quitOnline(scope.row.userId)">强退</el-link>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页组件 -->
            <pagination :currentPage="seachForm.currentPage" :pageSize="seachForm.pageSize" :total="total"
                @paginationSizeChange="paginationSizeChange" @paginationCurrentChange="paginationCurrentChange">
            </pagination>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import type { OnlineInfo } from "@/type/monitor/online"
import { Search, Delete } from '@element-plus/icons-vue'
import { getOnlineList, onlineLogout } from "@/api/monitor/online";
import { parseTime, } from "@/hooks/index"
import { confirm, msgSuccess, msgError, } from "@/hooks/modal"
import pagination from "@/components/pagination/pagination.vue";

/**
 * @returns 选中的id
 */
const ids = ref<number[]>([])
const seachFormRef = ref();
// 加载状态
const loading = ref(false)
// 搜索数据
const seachForm = ref<OnlineInfo>({
    currentPage: 1,
    pageSize: 10,
});
/**	总条目数 */
const total = ref<number>(0);
// 搜索按钮操作
const queryParmas = () => {
    seachForm.value.currentPage = 1;
    getOnline()
}
// 重置搜索条件
const resetQuery = () => {
    seachFormRef.value.resetFields();
    queryParmas();
}
// 在线用户列表数据
const onlineList = ref<any[]>([])


/**
 * @returns 选中数据
 */
const handleSelectionChange = (newSelection: any[]) => {
    ids.value = newSelection.map(item => item.operId)
}


/**
 * 获取操作日志列表
 */
const getOnline = () => {
    loading.value = true
    getOnlineList(seachForm.value).then((res) => {
        onlineList.value = res.data.list;
        total.value = res.data.total;
        loading.value = false;
    })
}
/**page-size 每页显示条目个数改变时触发 */
const paginationSizeChange = (pageSize: number) => {
    seachForm.value.pageSize = pageSize;
    queryParmas();
}
/**current-page 当前页数改变时触发 */
const paginationCurrentChange = (currentPage: number) => {
    seachForm.value.currentPage = currentPage;
    getOnline();
}
/**
 * @returns 强退
 */
const quitOnline = (id: number) => {
    confirm('是否确认强制退出该用户？').then(() => {
        onlineLogout(id).then((res) => {
            msgSuccess(res.message!)
            queryParmas()
        })
    })
}


onMounted(() => {
    getOnline()
})
</script>

<style scoped lang="scss"></style>