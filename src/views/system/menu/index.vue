<template>
    <div>
        <!-- 搜索区域 -->
        <el-card>
            <el-form :model="seachForm" ref="seachFormRef" label-width="auto" :inline="true">
                <el-form-item label="菜单名称" prop="menuName">
                    <el-input v-model="seachForm.menuName" placeholder="请输入菜单名称" />
                </el-form-item>
                <el-form-item label="状态" prop="status">
                    <el-select v-model="seachForm.status" placeholder="请选择菜单状态" style="width: 240px">
                        <el-option v-for="item in sys_show_hide" :key="item.dictDataId" :label="item.dictDataLabel"
                            :value="item.dictDataValue" />
                    </el-select>
                    <!-- <el-input v-model="seachForm.status" /> -->
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :icon="Search" @click="queryParmas">搜索</el-button>
                    <el-button @click="resetQuery">重置</el-button>
                </el-form-item>
            </el-form>
            <el-button v-hasPermi="['sys_menu_add']" type="primary" plain :icon="Plus" @click="addForm">新增</el-button>
        </el-card>
        <!-- 菜单列表区域 -->
        <el-card>
            <el-table :data="menuList" style="width: 100%" v-loading="loading" row-key="id" border empty-text="暂无数据"
                :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
                <el-table-column prop="menuName" show-overflow-tooltip header-align="center" min-width="120"
                    label="菜单名称" />
                <el-table-column prop="icon" align="center" width="80" label="图标">
                    <template #default="scope">
                        <div class="iconClass">
                            <tl-icon class="flex" v-if="scope.row.icon" :iconName="scope.row.icon"
                                :iconType="scope.row.iconType"></tl-icon>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="sortNum" align="center" width="80" label="排序" />
                <el-table-column prop="perms" align="center" min-width="120" show-overflow-tooltip label="权限字符" />
                <el-table-column prop="component" show-overflow-tooltip min-width="120" header-align="center"
                    label="组件路径" />
                <el-table-column prop="status" align="center" width="80" label="状态">
                    <template #default="scope">
                        <el-switch v-model="scope.row.status" @change="statusChange(scope.row.id, scope.row.status)"
                            active-value="1" inactive-value="0"
                            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
                    </template>
                </el-table-column>
                <el-table-column prop="createDate" align="center" width="180" label="创建时间">
                    <template #default="scope">
                        {{ parseTime(scope.row.createDate) }}
                    </template>
                </el-table-column>
                <el-table-column prop="address" align="center" width="180" label="操作" fixed="right">
                    <template #default="scope">
                        <el-link v-hasPermi="['sys_menu_edit']" :underline="false" :icon="Edit" type="success"
                            @click="editMenuForm(scope.row.id)">编辑</el-link>
                        <el-link v-hasPermi="['sys_menu_add']" :icon="Plus" type="primary" :underline="false"
                            @click="addMenuForm(scope.row.id)">新增</el-link>
                        <el-link v-hasPermi="['sys_menu_delete']" :icon="Delete" type="danger" :underline="false"
                            @click="deleteMenuForm(scope.row.id)">删除</el-link>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <!-- 新增菜单弹窗组件 -->
        <menuFormDialog v-if="formData.dialogVisible" :dialogVisible="formData.dialogVisible"
            :menuForm="formData.menuForm" :title="formData.title" :id="formData.id" @emitAddFormBtn="emitAddFormBtn" />
    </div>
</template>

<script setup lang="ts">
import type { seachFormType, defaultProp } from "@/type/system/menu"
import { Search, Plus, Edit, Delete } from '@element-plus/icons-vue'
import menuFormDialog from "@/views/system/menu/components/menuForm.vue"
import { getMenuList, getMenuInfo, deleteMenuInfo, updateMenuInfo } from '@/api/system/menu/menu'
import { parseTime } from "@/hooks/index"
import { confirm, msgSuccess, msgError } from "@/hooks/modal"
import { useDict } from "@/hooks/dict";
//@ts-ignore
const { sys_show_hide } = useDict('sys_show_hide')
const seachFormRef = ref();
// 加载状态
const loading = ref(false)
// 搜索数据
const seachForm = ref<seachFormType>({});
// 搜索按钮操作
const queryParmas = () => {
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
    menuForm: {},
    id: null
});
// 新增菜单操作
const addForm = () => {
    formData.value.dialogVisible = true;
    formData.value.title = "新增"
}
// 关闭弹窗操作
const emitAddFormBtn = () => {
    formData.value.dialogVisible = false;
    formData.value.menuForm = {};
    formData.value.id = null;
    queryParmas()
}
// 修改按钮操作
const editMenuForm = (id: number) => {
    getMenuInfo(id).then(res => {
        formData.value.menuForm = res.data;
        formData.value.title = "编辑"
        formData.value.dialogVisible = true;
    })
}
// 删除按钮操作
const deleteMenuForm = (id: number) => {
    confirm('是否确认删除？').then(() => {
        deleteMenuInfo(id).then((res) => {
            if (res.status == 200) {
                msgSuccess(res.data)
                queryParmas()
            }
        })
    })
}
/**
 * 
 * @param id 用户id
 * @param status 用户状态
 * @returns 修改用户状态
 */
const statusChange = async (id: number, status: '1' | '0') => {
    let data = {
        id: id,
        status: status
    }
    updateMenuInfo(data).then(res => {
        if (res.status == 200) {
             //@ts-ignore
            msgSuccess(res.message!)
        }
        queryParmas()
    }).catch(err => {
        queryParmas()
    })
}
const addMenuForm = (id: number) => {
    formData.value.id = id;
    addForm();
}
// 获取菜单列表数据
const getMenu = () => {
    loading.value = true
    getMenuList(seachForm.value).then((res) => {
        menuList.value = res.data;
        loading.value = false;
    })
}
onMounted(() => {
    getMenu()
})
</script>

<style scoped lang="scss">
.iconClass {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>