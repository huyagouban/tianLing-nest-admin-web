<template>
    <div>
        <!-- 搜索区域 -->
        <el-card>
            <el-form :model="seachForm" ref="seachFormRef" label-width="auto" :inline="true">
                <el-form-item label="字典名称" prop="dictName">
                    <el-input class="w200" v-model="seachForm.dictName" placeholder="请输入字典名称" />
                </el-form-item>
                <el-form-item label="字典类型" prop="dictType">
                    <el-input class="w200" v-model="seachForm.dictType" placeholder="请输入字典类型" />
                </el-form-item>
                <el-form-item label="状态" prop="status">
                    <el-select class="w200" v-model="seachForm.status" placeholder="请选择用户状态" style="width: 240px">
                        <el-option v-for="item in sys_show_hide" :key="item.dictDataId" :label="item.dictDataLabel"
                            :value="item.dictDataValue" />
                    </el-select>
                </el-form-item>
                <el-form-item label="创建时间" prop="startAndEndTime">
                    <el-date-picker class="w200" v-model="seachForm.startAndEndTime" type="daterange"
                        range-separator="—" start-placeholder="开始时间" end-placeholder="结束时间" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :icon="Search" @click="queryParmas">搜索</el-button>
                    <el-button @click="resetQuery">重置</el-button>
                </el-form-item>
            </el-form>
            <el-row justify="end">
                <el-col :span="24">
                    <el-button v-hasPermi="['sys_dict_add']" type="primary" plain :icon="Plus"
                        @click="addForm">新增</el-button>
                    <el-button v-hasPermi="['sys_dict_delete']" type="danger" plain :icon="Delete"
                        :disabled="ids.length > 0 ? false : true" @click="deleteForms">批量删除</el-button>
                    <el-button v-hasPermi="['sys_dict_export']" :icon="Download" plain type="warning"
                        :disabled="ids.length > 0 ? false : true" @click="handleDownload">导出</el-button>
                </el-col>
            </el-row>

        </el-card>
        <!-- 字典列表区域 -->
        <el-card>
            <el-table :data="dictList" style="width: 100%" v-loading="loading" border empty-text="暂无数据"
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" />
                <el-table-column type="index" align="center" width="80" label="序号">
                    <template #default="scope">
                        {{ scope.$index + 1 }}
                    </template>
                </el-table-column>
                <el-table-column prop="dictName" header-align="center" show-overflow-tooltip min-width="120"
                    label="字典名称" />
                <el-table-column prop="dictType" align="center" show-overflow-tooltip min-width="120" label="字典类型">
                    <template #default="scope">
                        <el-text type="primary" class="cursorPointer" size="small" @click="toDictData(scope.row.dictType)">{{ scope.row.dictType
                            }}</el-text>
                    </template>
                </el-table-column>

                <el-table-column prop="status" align="center" width="80" label="状态">
                    <template #default="scope">
                        <el-switch v-model="scope.row.status" @change="statusChange(scope.row.dictId, scope.row.status)"
                            active-value="1" inactive-value="0"
                            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
                    </template>
                </el-table-column>
                <el-table-column prop="remark" header-align="center" show-overflow-tooltip min-width="150" label="备注" />
                <el-table-column prop="updateDate" align="center" width="180" label="创建时间">
                    <template #default="scope">
                        {{ parseTime(scope.row.updateDate) }}
                    </template>
                </el-table-column>
                <el-table-column prop="address" header-align="center" width="120" label="操作" fixed="right">
                    <template #default="scope">
                        <el-link v-hasPermi="['sys_dict_edit']" :underline="false" :icon="Edit" type="success"
                            @click="editMenuForm(scope.row.dictId)">编辑</el-link>
                        <el-link v-hasPermi="['sys_dict_delete']" :underline="false" :icon="Delete" type="danger"
                            @click="deleteMenuForm(scope.row.dictId)">删除</el-link>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页组件 -->
            <pagination :currentPage="seachForm.currentPage" :pageSize="seachForm.pageSize" :total="total"
                @paginationSizeChange="paginationSizeChange" @paginationCurrentChange="paginationCurrentChange">
            </pagination>
        </el-card>
        <!-- 新增或编辑form弹窗组件 -->
        <dictFormDialog v-if="formData.dialogVisible" :dialogVisible="formData.dialogVisible"
            :dictForm="formData.dictForm" :title="formData.title" @emitAddFormBtn="emitAddFormBtn">
        </dictFormDialog>
    </div>
</template>

<script setup lang="ts">
import type { seachFormType, defaultProp } from "@/type/system/dict"
import type { statusEnum } from "@/type/common/common";
import { Search, Plus, Edit, Delete, Download, } from '@element-plus/icons-vue'
import dictFormDialog from "@/views/system/dict/components/dictForm.vue"
import { getDictList, getDictInfo, updateDict, deleteDict, getUserExcelDownload } from '@/api/system/dict/dict'
import { parseTime, downloadExcel } from "@/hooks/index"
import { confirm, msgSuccess, msgError, } from "@/hooks/modal"
import pagination from "@/components/pagination/pagination.vue";
import { useDict } from "@/hooks/dict";
const router = useRouter()
//@ts-ignore
const { sys_show_hide } = useDict('sys_show_hide')
/**
 * @returns 选中的id
 */
const ids = ref<number[]>([])
const seachFormRef = ref();
// 加载状态
const loading = ref(false)
// 搜索数据
const seachForm = ref<seachFormType>({
    currentPage: 1,
    pageSize: 10,
});
/**	总条目数 */
const total = ref<number>(0);
// 搜索按钮操作
const queryParmas = () => {
    seachForm.value.currentPage = 1;
    getDict()
}
// 重置搜索条件
const resetQuery = () => {
    seachFormRef.value.resetFields();
    queryParmas();
}
// 字典列表数据
const dictList = ref<any[]>([])
// 新增或编辑组件状态
const formData = ref<defaultProp>({
    dialogVisible: false,
    title: '',
    dictForm: {},
    id: null
});
// 新增字典操作
const addForm = () => {
    formData.value.dialogVisible = true;
    formData.value.title = "新增"
}
// 关闭弹窗操作
const emitAddFormBtn = () => {
    formData.value.dialogVisible = false;
    formData.value.dictForm = {};
    formData.value.id = null;
    queryParmas()
}
// 修改按钮操作
const editMenuForm = (id: number) => {
    getDictInfo(id).then(res => {
        formData.value.dictForm = res.data;
        formData.value.title = "编辑"
        formData.value.dialogVisible = true;
    })
}
/**
 * @returns 选中数据
 */
const handleSelectionChange = (newSelection: any[]) => {
    ids.value = newSelection.map(item => item.dictId)
}
/** 删除按钮操作 */
const deleteMenuForm = (id: number) => {
    confirm('是否确认删除？').then(() => {
        deleteDict(id).then((res) => {
            //@ts-ignore
            msgSuccess(res.message!)
            queryParmas()
        })
    })
}
/** 批量删除操作 */
const deleteForms = () => {
    if (ids.value.length == 0) {
        msgError('请选择要删除的数据')
        return
    }
    confirm('是否确认删除？').then(() => {
        deleteDict(ids.value.toString()).then((res) => {
            //@ts-ignore
            msgSuccess(res.message!)
            queryParmas()
        })
    })
}
/**
 * 
 * @param id 用户id
 * @param status 用户状态
 * @returns 修改用户状态
 */
const statusChange = (id: number, status: statusEnum) => {
    let data = {
        dictId: id,
        status: status
    }
    updateDict(data).then(res => {
        if (res.status == 200) {
             //@ts-ignore
            msgSuccess(res.message!)
        } else {
             //@ts-ignore
            msgError(res.message!)
        }
        queryParmas()
    })
}
// 获取字典列表数据
const getDict = () => {
    loading.value = true
    getDictList(seachForm.value).then((res) => {
        dictList.value = res.data.list;
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
    getDict();
}

/**
 * @returns 导出按钮操作
 */
const handleDownload = () => {
    if (ids.value.length == 0) {
        msgError('请选择要导出的数据')
        return
    }
    confirm('是否确认导出？').then(() => {
        let data = {
            dictIds: ids.value.toString()
        }
        getUserExcelDownload(data).then((res) => {
            downloadExcel(res.data.data, '字典信息')
        })
    })
}

const toDictData = (dictType: string) => {
    router.push({
        path: `/system/dictData/index/${dictType}`,
    })
}

onMounted(() => {
    getDict()
})
</script>

<style scoped lang="scss"></style>