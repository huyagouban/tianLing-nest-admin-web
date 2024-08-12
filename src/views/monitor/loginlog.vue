<template>
    <div>
        <!-- 搜索区域 -->
        <el-card>
            <el-form :model="seachForm" ref="seachFormRef" label-width="auto" :inline="true">
                <el-form-item label="用户名称" prop="loginName">
                    <el-input class="w200" v-model="seachForm.loginName" placeholder="请输入用户名称" />
                </el-form-item>

                <el-form-item label="登录状态" prop="loginStatus">
                    <el-select class="w200" v-model="seachForm.loginStatus" placeholder="请选择登录状态" style="width: 240px">
                        <el-option v-for="item in monitor_loginLog_status" :key="item.dictDataId"
                            :label="item.dictDataLabel" :value="item.dictDataValue" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :icon="Search" @click="queryParmas">搜索</el-button>
                    <el-button @click="resetQuery">重置</el-button>
                </el-form-item>
            </el-form>
            <el-row justify="end">
                <el-col :span="24">
                    <el-button type="danger" v-hasPermi="['monitor_loginLog_delete']" plain :icon="Delete"
                        :disabled="ids.length > 0 ? false : true" @click="deleteForms">批量删除</el-button>
                    <el-button type="danger" v-hasPermi="['monitor_loginLog_clear']" plain :icon="Delete"
                        @click="clearForms">清空</el-button>
                    <el-button :icon="Download" v-hasPermi="['monitor_loginLog_export']" plain type="warning"
                        @click="handleDownload">导出</el-button>
                </el-col>
            </el-row>

        </el-card>
        <!-- 登录日志列表区域 -->
        <el-card>
            <el-table :data="loginLogList" style="width: 100%" v-loading="loading" border empty-text="暂无数据"
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="50" />
                <el-table-column type="index" align="center" width="60" label="序号">
                    <template #default="scope">
                        {{ scope.$index + 1 }}
                    </template>
                </el-table-column>
                <el-table-column prop="loginName" header-align="center" show-overflow-tooltip min-width="90"
                    label="用户名称" />
                <el-table-column prop="loginIp" header-align="center" show-overflow-tooltip min-width="90"
                    label="登录地址" />
                <el-table-column prop="loginLocation" align="center" width="90" label="登陆地点" />
                <el-table-column prop="browser" align="center" show-overflow-tooltip min-width="80" label="浏览器" />
                <el-table-column prop="os" align="center" show-overflow-tooltip min-width="90" label="操作系统" />
                <el-table-column prop="loginStatus" align="center" show-overflow-tooltip min-width="90" label="登录状态">
                    <template #default="scope">
                            <dictData :dictDataOption="monitor_loginLog_status" :operType="scope.row.loginStatus" />
                    </template>
                </el-table-column>
                <el-table-column prop="loginMessage" header-align="center" show-overflow-tooltip min-width="90"
                    label="操作信息" />
                <el-table-column prop="updateDate" align="center" width="180" label="登录时间">
                    <template #default="scope">
                        {{ parseTime(scope.row.updateDate) }}
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
import type { loginLogSeachFormType } from "@/type/monitor/loginLog"
import { Search, Delete, Download, } from '@element-plus/icons-vue'
import { getLoginLogList, deleteLoginLog, LoginLogExcelDownload, loginLogClear } from '@/api/monitor/loginLog'
import { parseTime, downloadExcel } from "@/hooks/index"
import { confirm, msgSuccess, msgError, } from "@/hooks/modal"
import pagination from "@/components/pagination/pagination.vue";
import { useDict } from "@/hooks/dict";
const router = useRouter()
//@ts-ignore
const { monitor_loginLog_status } = useDict('monitor_loginLog_status')
/**
 * @returns 选中的id
 */
const ids = ref<number[]>([])
const seachFormRef = ref();
// 加载状态
const loading = ref(false)
// 搜索数据
const seachForm = ref<loginLogSeachFormType>({
    currentPage: 1,
    pageSize: 10,
});
/**	总条目数 */
const total = ref<number>(0);
// 搜索按钮操作
const queryParmas = () => {
    seachForm.value.currentPage = 1;
    getLoginLog()
}
// 重置搜索条件
const resetQuery = () => {
    seachFormRef.value.resetFields();
    queryParmas();
}
// 登录日志列表数据
const loginLogList = ref<any[]>([])

/**
 * @returns 选中数据
 */
const handleSelectionChange = (newSelection: any[]) => {
    ids.value = newSelection.map(item => item.loginId)
}
/** 批量删除操作 */
const deleteForms = () => {
    if (ids.value.length == 0) {
        msgError('请选择要删除的数据')
        return
    }
    confirm('是否确认删除？').then(() => {
        deleteLoginLog(ids.value.toString()).then((res) => {
            //@ts-ignore
            msgSuccess(res.message!)
            queryParmas()
        })
    })
}

/**清空操作 */
const clearForms = () => {
    confirm('是否确认清空？').then(() => {
        loginLogClear().then((res) => {
             //@ts-ignore
            msgSuccess(res.message!)
            queryParmas()
        })
    })
}
/**
 * 获取登录日志列表
 */
const getLoginLog = () => {
    loading.value = true
    getLoginLogList(seachForm.value).then((res) => {
        loginLogList.value = res.data.list;
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
    getLoginLog();
}

/**
 * @returns 导出按钮操作
 */
const handleDownload = () => {
    confirm('是否确认导出？').then(() => {
        let data = {
            loginLogIds: ids.value ? ids.value.toString() : ''
        }
        LoginLogExcelDownload(data).then((res) => {
            downloadExcel(res.data.data, '登录日志')
        })
    })
}


onMounted(() => {
    getLoginLog()
})
</script>

<style scoped lang="scss"></style>