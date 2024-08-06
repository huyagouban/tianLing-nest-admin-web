<template>
    <div>
        <!-- 搜索区域 -->
        <el-card>
            <el-form :model="seachForm" ref="seachFormRef" label-width="auto" :inline="true">
                <el-form-item label="角色名称" prop="roleName">
                    <el-input class="w200" v-model="seachForm.roleName" placeholder="请输入角色名称" />
                </el-form-item>
                <el-form-item label="权限字符" prop="roleKey">
                    <el-input class="w200" v-model="seachForm.roleKey" placeholder="请输入权限字符" />
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
                    <el-button v-hasPermi="['sys_role_add']" type="primary" plain :icon="Plus"
                        @click="addForm">新增</el-button>
                    <el-button v-hasPermi="['sys_role_delete']" type="danger" plain :icon="Delete"
                        :disabled="ids.length > 0 ? false : true" @click="deleteForms">批量删除</el-button>
                    <el-button v-hasPermi="['sys_role_export']" :icon="Download" plain type="warning"
                        :disabled="ids.length > 0 ? false : true" @click="handleDownload">导出</el-button>
                </el-col>
            </el-row>

        </el-card>
        <!-- 菜单列表区域 -->
        <el-card>
            <el-table :data="menuList" style="width: 100%" v-loading="loading" border empty-text="暂无数据"
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"
                    :selectable="(row, index) => { return row.roleId == 1 ? false : true }" />
                <el-table-column type="index" align="center" width="80" label="序号">
                    <template #default="scope">
                        {{ scope.$index + 1 }}
                    </template>
                </el-table-column>
                <el-table-column prop="roleName" header-align="center" show-overflow-tooltip min-width="120"
                    label="角色名称" />
                <el-table-column prop="roleKey" header-align="center" show-overflow-tooltip min-width="120"
                    label="字符权限" />
                <el-table-column prop="roleSort" align="center" width="100" label="显示顺序" />
                <el-table-column prop="status" align="center" width="80" label="状态">
                    <template #default="scope">
                        <el-switch :disabled="scope.row.roleId == 1 ? true : false" v-model="scope.row.status"
                            @change="statusChange(scope.row.roleId, scope.row.status)" active-value="1"
                            inactive-value="0" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
                    </template>
                </el-table-column>
                <el-table-column prop="updateDate" align="center" width="180" label="创建时间">
                    <template #default="scope">
                        {{ parseTime(scope.row.updateDate) }}
                    </template>
                </el-table-column>
                <el-table-column prop="address" header-align="center" width="120" label="操作" fixed="right">
                    <template #default="scope">
                        <el-link v-hasPermi="['sys_role_edit']" :underline="false"
                            :disabled="scope.row.roleId == 1 ? true : false" :icon="Edit" type="success"
                            @click="editMenuForm(scope.row.roleId)">编辑</el-link>
                        <el-link v-hasPermi="['sys_role_delete']" :underline="false"
                            :disabled="scope.row.roleId == 1 ? true : false" :icon="Delete" type="danger"
                            @click="deleteMenuForm(scope.row.roleId)">删除</el-link>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页组件 -->
            <pagination :currentPage="seachForm.currentPage" :pageSize="seachForm.pageSize" :total="total"
                @paginationSizeChange="paginationSizeChange" @paginationCurrentChange="paginationCurrentChange">
            </pagination>
        </el-card>
        <!-- 新增或编辑form弹窗组件 -->
        <roleFormDialog v-if="formData.dialogVisible" :dialogVisible="formData.dialogVisible"
            :roleForm="formData.roleForm" :title="formData.title" @emitAddFormBtn="emitAddFormBtn">
        </roleFormDialog>
    </div>
</template>

<script setup lang="ts">
import type { seachFormType, defaultProp } from "@/type/system/role"
import type { statusEnum } from "@/type/common/common";
import { Search, Plus, Edit, Delete, Download } from '@element-plus/icons-vue'
import roleFormDialog from "@/views/system/role/components/roleForm.vue"
import { getRoleList, getRoleInfo, deleteRole, updateRole, getRoleExcelDownload } from '@/api/system/role/role'
import { parseTime, downloadExcel } from "@/hooks/index"
import { confirm, msgSuccess, msgError } from "@/hooks/modal"
import pagination from "@/components/pagination/pagination.vue";
import { useDict } from "@/hooks/dict";
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
    getRole()
}
// 重置搜索条件
const resetQuery = () => {
    seachFormRef.value.resetFields();
    queryParmas();
}
// 菜单列表数据
const menuList = ref<any[]>([])
// 新增或编辑组件状态
const formData = ref<defaultProp>({
    dialogVisible: false,
    title: '',
    roleForm: {},
    id: null
});
// 新增按钮操作
const addForm = () => {
    formData.value.dialogVisible = true;
    formData.value.title = "新增角色"
}
// 关闭弹窗操作
const emitAddFormBtn = () => {
    formData.value.dialogVisible = false;
    formData.value.roleForm = {};
    formData.value.id = null;
    queryParmas()
}
// 修改按钮操作
const editMenuForm = (id: number) => {
    getRoleInfo(id).then(res => {
        formData.value.roleForm = res.data;
        formData.value.title = "编辑"
        formData.value.dialogVisible = true;
    })
}
/**
 * @returns 选中数据
 */
const handleSelectionChange = (newSelection: any[]) => {
    ids.value = newSelection.map(item => item.roleId)
}
/** 删除按钮操作 */
const deleteMenuForm = (id: number) => {
    confirm('是否确认删除？').then(() => {
        deleteRole(id).then((res) => {
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
        deleteRole(ids.value.toString()).then((res) => {
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
        roleId: id,
        status: status
    }
    updateRole(data).then(res => {
        if (res.status == 200) {
            msgSuccess(res.message!)
        } else {
            msgError(res.message!)
        }
        queryParmas()
    })
}
// 获取角色列表数据
const getRole = () => {
    loading.value = true
    getRoleList(seachForm.value).then((res) => {
        menuList.value = res.data.list;
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
    getRole();
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
            roleIds: ids.value.toString()
        }
        getRoleExcelDownload(data).then((res) => {
            downloadExcel(res.data.data, '角色信息')
        })
    })
}


onMounted(() => {
    getRole()
})
</script>

<style scoped lang="scss"></style>