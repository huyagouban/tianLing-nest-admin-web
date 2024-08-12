<template>
    <div>
        <!-- 搜索区域 -->
        <el-card>
            <el-form :model="seachForm" ref="seachFormRef" label-width="auto" :inline="true">
                <el-form-item label="用户名称" prop="userName">
                    <el-input class="w200" v-model="seachForm.userName" placeholder="请输入用户名称" />
                </el-form-item>
                <el-form-item label="手机号码" prop="phoneNumber">
                    <el-input class="w200" v-model="seachForm.phoneNumber" placeholder="请输入手机号码" />
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
                    <el-button v-hasPermi="['sys_user_add']" type="primary" plain :icon="Plus"
                        @click="addForm">新增</el-button>
                    <el-button v-hasPermi="['sys_user_delete']" type="danger" plain :icon="Delete"
                        :disabled="ids.length > 0 ? false : true" @click="deleteForms">批量删除</el-button>
                    <el-button v-hasPermi="['sys_user_import']" :icon="Upload" plain type="info"
                        @click="handleImport">导入</el-button>
                    <el-button v-hasPermi="['sys_user_export']" :icon="Download" plain type="warning"
                        :disabled="ids.length > 0 ? false : true" @click="handleDownload">导出</el-button>
                </el-col>
            </el-row>

        </el-card>
        <!-- 菜单列表区域 -->
        <el-card>
            <el-table :data="menuList" style="width: 100%" v-loading="loading" border empty-text="暂无数据"
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"
                    :selectable="(row, index) => { return row.userId == 1 ? false : true }" />
                <el-table-column type="index" align="center" width="80" label="序号">
                    <template #default="scope">
                        {{ scope.$index + 1 }}
                    </template>
                </el-table-column>
                <el-table-column prop="userName" header-align="center" show-overflow-tooltip min-width="120"
                    label="用户名称" />
                <el-table-column prop="nickName" header-align="center" show-overflow-tooltip min-width="120"
                    label="用户昵称" />
                <el-table-column prop="phoneNumber" header-align="center" min-width="150" label="手机号码" />
                <el-table-column prop="status" align="center" width="80" label="状态">
                    <template #default="scope">
                        <el-switch :disabled="scope.row.userId == 1 ? true : false" v-model="scope.row.status"
                            @change="statusChange(scope.row.userId, scope.row.status)" active-value="1"
                            inactive-value="0" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
                    </template>
                </el-table-column>
                <el-table-column prop="updateDate" align="center" width="180" label="创建时间">
                    <template #default="scope">
                        {{ parseTime(scope.row.updateDate) }}
                    </template>
                </el-table-column>
                <el-table-column prop="address" header-align="center" width="200" label="操作" fixed="right">
                    <template #default="scope">
                        <el-link v-hasPermi="['sys_user_edit']" :underline="false"
                            :disabled="scope.row.userId == 1 ? true : false" :icon="Edit" type="success"
                            @click="editMenuForm(scope.row.userId)">编辑</el-link>
                        <el-link v-hasPermi="['sys_user_delete']" :underline="false"
                            :disabled="scope.row.userId == 1 ? true : false" :icon="Delete" type="danger"
                            @click="deleteMenuForm(scope.row.userId)">删除</el-link>
                        <el-link v-hasPermi="['sys_user_resetPwd']" :underline="false" :icon="Key" type="primary"
                            @click="updatePassword(scope.row.userId)">重置密码</el-link>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页组件 -->
            <pagination :currentPage="seachForm.currentPage" :pageSize="seachForm.pageSize" :total="total"
                @paginationSizeChange="paginationSizeChange" @paginationCurrentChange="paginationCurrentChange">
            </pagination>
        </el-card>
        <!-- 新增或编辑form弹窗组件 -->
        <userFormDialog v-if="formData.dialogVisible" :dialogVisible="formData.dialogVisible"
            :userForm="formData.userForm" :title="formData.title" @emitAddFormBtn="emitAddFormBtn">
        </userFormDialog>
        <!-- 导入组件 -->
        <importUpload :dialogVisible="uploadOptions.dialogVisible" :title="uploadOptions.title"
            :uploadFile="uploadOptions.uploadFile" @importClose="handleImportClose"></importUpload>
    </div>
</template>

<script setup lang="ts">
import type { seachFormType, defaultProp, statusEnum } from "@/type/system/user"
import { Search, Plus, Edit, Delete, Upload, Download, Key } from '@element-plus/icons-vue'
import userFormDialog from "@/views/system/user/components/userForm.vue"
import { getUserList, getUserInfo, deleteUserInfo, updateUserInfo, getUserExcelDownload, } from '@/api/system/user/user'
import { parseTime, downloadExcel } from "@/hooks/index"
import { confirm, msgSuccess, msgError, prompt } from "@/hooks/modal"
import pagination from "@/components/pagination/pagination.vue";
import importUpload from "@/components/importUpload/importUpload.vue";
import type { UploadDialogProps } from "@/type/common/upload"
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
    getMenu()
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
    userForm: {},
    id: null
});
// 导入组件需要的参数
const uploadOptions = ref<UploadDialogProps>({
    dialogVisible: false,
    title: '',
    uploadFile: {
        temlateUrl: '/user/excel/temlate',
        uploadUrl: import.meta.env.VITE_BASE_URL + '/user/import',
        autoUpload: false,
    }
})
// 新增菜单操作
const addForm = () => {
    formData.value.dialogVisible = true;
    formData.value.title = "新增"
}
// 关闭弹窗操作
const emitAddFormBtn = () => {
    formData.value.dialogVisible = false;
    formData.value.userForm = {};
    formData.value.id = null;
    queryParmas()
}
// 修改按钮操作
const editMenuForm = (id: number) => {
    getUserInfo(id).then(res => {
        formData.value.userForm = res.data;
        formData.value.title = "编辑"
        formData.value.dialogVisible = true;
    })
}
/**
 * @returns 选中数据
 */
const handleSelectionChange = (newSelection: any[]) => {
    ids.value = newSelection.map(item => item.userId)
}
/** 删除按钮操作 */
const deleteMenuForm = (id: number) => {
    confirm('是否确认删除？').then(() => {
        deleteUserInfo(id).then((res) => {
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
        deleteUserInfo(ids.value.toString()).then((res) => {
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
        userId: id,
        status: status
    }
    updateUserInfo(data).then(res => {
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
// 获取菜单列表数据
const getMenu = () => {
    loading.value = true
    getUserList(seachForm.value).then((res) => {
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
    getMenu();
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
            userIds: ids.value.toString()
        }
        getUserExcelDownload(data).then((res) => {
            downloadExcel(res.data.data, '用户信息')
        })
    })
}
/**
 * 导入按钮操作
 */
const handleImport = () => {
    uploadOptions.value.dialogVisible = true;
    uploadOptions.value.title = '导入用户信息';
}
/**
 * 导入组件关闭
 */
const handleImportClose = () => {
    uploadOptions.value.dialogVisible = false;
    uploadOptions.value.title = '';
    resetQuery()
}
/**
 * 修改密码
 */
const updatePassword = (userId: number) => {
    prompt('新密码：', '修改密码', /^(?!.*[<>\"'\\|])(?=.*[^\s]).{5,20}$/,
        "用户密码不能为空并且长度必须介于 5 和 20 之间并且不能包含非法字符：(< > ” ' \\ | ", '请输入新密码').then(({ value }) => {
            let data = {
                userId: userId,
                password: value
            }
            updateUserInfo(data).then((res) => {
                if (res.status == 200) {
                     //@ts-ignore
                    msgSuccess(res.message!)
                } else {
                     //@ts-ignore
                    msgError(res.message!)
                }
            })
        })
}

onMounted(() => {
    getMenu()
})
</script>

<style scoped lang="scss"></style>