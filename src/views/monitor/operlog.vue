<template>
    <div>
        <!-- 搜索区域 -->
        <el-card>
            <el-form :model="seachForm" ref="seachFormRef" label-width="auto" :inline="true">
                <el-form-item label="操作地址" prop="operIp">
                    <el-input class="w200" v-model="seachForm.operIp" placeholder="请输入操作地址" />
                </el-form-item>

                <el-form-item label="系统模块" prop="title">
                    <el-input class="w200" v-model="seachForm.title" placeholder="请输入系统模块" />
                </el-form-item>
                <el-form-item label="操作人员" prop="operName">
                    <el-input class="w200" v-model="seachForm.operName" placeholder="请输入操作人员" />
                </el-form-item>

                <el-form-item label="操作类型" prop="operType">
                    <el-select class="w200" v-model="seachForm.operType" placeholder="请选择操作类型" style="width: 240px">
                        <el-option v-for="item in sys_oper_type" :key="item.dictDataId" :label="item.dictDataLabel"
                            :value="item.dictDataValue" />
                    </el-select>
                </el-form-item>
                <el-form-item label="操作状态" prop="operStatus">
                    <el-select class="w200" v-model="seachForm.operStatus" placeholder="请选择登录状态" style="width: 240px">
                        <el-option v-for="item in monitor_loginLog_status" :key="item.dictDataId"
                            :label="item.dictDataLabel" :value="item.dictDataValue" />
                    </el-select>
                </el-form-item>
                <el-form-item label="操作时间" prop="startAndEndTime">
                    <el-date-picker class="w200" v-model="seachForm.startAndEndTime" type="daterange"
                        range-separator="—" start-placeholder="开始时间" end-placeholder="操作时间" />
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
        <!-- 操作日志列表区域 -->
        <el-card>
            <el-table :data="operLogList" style="width: 100%" v-loading="loading" border empty-text="暂无数据"
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="50" />
                <el-table-column prop="operId" align="center" width="90" label="日志编号" />
                <el-table-column prop="title" header-align="center" show-overflow-tooltip min-width="90" label="系统模块" />
                <el-table-column prop="operType" align="center" show-overflow-tooltip width="90" label="操作类型">
                    <template #default="scope">
                        <dictData :dictDataOption="sys_oper_type" :operType="scope.row.operType" />
                    </template>
                </el-table-column>
                <el-table-column prop="operName" align="center" show-overflow-tooltip width="90" label="操作人员" />
                <el-table-column prop="operIp" align="center" min-width="90" label="操作地址" />
                <el-table-column prop="operLocation" align="center" min-width="90" label="操作地点" />
                <el-table-column prop="operStatus" align="center" show-overflow-tooltip width="90" label="操作状态">
                    <template #default="scope">
                        <dictData :dictDataOption="monitor_loginLog_status" :operType="scope.row.operStatus" />
                    </template>
                </el-table-column>
                <el-table-column prop="updateDate" align="center" width="180" label="操作日期">
                    <template #default="scope">
                        {{ parseTime(scope.row.updateDate) }}
                    </template>
                </el-table-column>
                <el-table-column prop="costTime" align="center" show-overflow-tooltip width="90" label="消耗时间" />
                <el-table-column align="center" width="120" label="操作" fixed="right">
                    <template #default="scope">
                        <el-link :underline="false" :icon="View" type="primary"
                            @click="operLogInfo(scope.row.operId)">详情</el-link>

                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页组件 -->
            <pagination :currentPage="seachForm.currentPage" :pageSize="seachForm.pageSize" :total="total"
                @paginationSizeChange="paginationSizeChange" @paginationCurrentChange="paginationCurrentChange">
            </pagination>
            <!-- 详情弹窗 -->
            <el-dialog v-model="operDialogOption.viable" :title="operDialogOption.title" width="800"
                :before-close="handleClose">
                <el-form ref="form" :model="operDialogOption.data" label-width="100px" size="small">
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="操作模块：">{{ operDialogOption.data.title }}</el-form-item>
                            <el-form-item label="登录信息：">{{ operDialogOption.data.operName }} / {{
                                operDialogOption.data.operIp }} /
                                {{ operDialogOption.data.operLocation
                                }}</el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="请求地址：">{{ operDialogOption.data.requestUrl }}</el-form-item>
                            <el-form-item label="请求方式：">{{ operDialogOption.data.requestMethod }}</el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="操作方法：">{{ operDialogOption.data.operMethod }}</el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="请求参数：">{{ operDialogOption.data.requestParam }}</el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="返回参数：">
                                {{ operDialogOption.data.requestResult }}</el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="操作状态：">
                                <div v-if="operDialogOption.data.operStatus === '1'">成功</div>
                                <div v-else-if="operDialogOption.data.operStatus === '0'">失败</div>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="消耗时间：">{{ operDialogOption.data.costTime }}</el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="操作时间：">{{ parseTime(operDialogOption.data.createDate) }}</el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="异常信息：" v-if="operDialogOption.data.operStatus === '0'">{{
                                operDialogOption.data.requestErrmsg
                            }}</el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <template #footer>
                    <div class="dialog-footer">
                        <el-button @click="handleClose">关闭</el-button>
                    </div>
                </template>
            </el-dialog>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import type { operLogSeachFormType, operLogDialogOptionType } from "@/type/monitor/operLog"
import { Search, Delete, Download, View } from '@element-plus/icons-vue'
import { getOperLogList, deleteOperLog, operLogClear, operLogExcelDownload, getOperLogInfo } from "@/api/monitor/operLog"
import { parseTime, downloadExcel } from "@/hooks/index"
import { confirm, msgSuccess, msgError, } from "@/hooks/modal"
import pagination from "@/components/pagination/pagination.vue";
import { useDict } from "@/hooks/dict";
import dictData from "@/components/dictData/dictData.vue"
//@ts-ignore
const { monitor_loginLog_status, sys_oper_type } = useDict('monitor_loginLog_status', 'sys_oper_type')
/**
 * @returns 选中的id
 */
const ids = ref<number[]>([])
const seachFormRef = ref();
// 加载状态
const loading = ref(false)
// 搜索数据
const seachForm = ref<operLogSeachFormType>({
    currentPage: 1,
    pageSize: 10,
});
/**	总条目数 */
const total = ref<number>(0);
// 搜索按钮操作
const queryParmas = () => {
    seachForm.value.currentPage = 1;
    getOperLog()
}
// 重置搜索条件
const resetQuery = () => {
    seachFormRef.value.resetFields();
    queryParmas();
}
// 操作日志列表数据
const operLogList = ref<any[]>([])

const operDialogOption = ref<operLogDialogOptionType>({
    viable: false,
    title: '操作日志详情',
    data: {}
})

/**
 * @returns 选中数据
 */
const handleSelectionChange = (newSelection: any[]) => {
    ids.value = newSelection.map(item => item.operId)
}
/** 批量删除操作 */
const deleteForms = () => {
    if (ids.value.length == 0) {
        msgError('请选择要删除的数据')
        return
    }
    confirm('是否确认删除？').then(() => {
        deleteOperLog(ids.value.toString()).then((res) => {
             //@ts-ignore
            msgSuccess(res.message!)
            queryParmas()
        })
    })
}

/**清空操作 */
const clearForms = () => {
    confirm('是否确认清空？').then(() => {
        operLogClear().then((res) => {
             //@ts-ignore
            msgSuccess(res.message!)
            queryParmas()
        })
    })
}
/**
 * 获取操作日志列表
 */
const getOperLog = () => {
    loading.value = true
    getOperLogList(seachForm.value).then((res) => {
        operLogList.value = res.data.list;
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
    getOperLog();
}

/**
 * @returns 导出按钮操作
 */
const handleDownload = () => {
    confirm('是否确认导出？').then(() => {
        let data = {
            operIds: ids.value ? ids.value.toString() : ''
        }
        operLogExcelDownload(data).then((res) => {
            downloadExcel(res.data.data, '操作日志')
        })
    })
}

/**
 * @returns 详情
 */
const operLogInfo = (id: number) => {
    getOperLogInfo(id).then(res => {
        operDialogOption.value.data = res.data;
        operDialogOption.value.viable = true;
    })
}
/**
 * @returns 关闭详情
 */
const handleClose = () => {
    operDialogOption.value.viable = false;
    operDialogOption.value.data = {};
}
onMounted(() => {
    getOperLog()
})
</script>

<style scoped lang="scss"></style>