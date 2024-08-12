<template>
    <div>
        <el-dialog :model-value="prop.dialogVisible" :title="prop.title" width="680px" :before-close="closeDialog"
            destroy-on-close>
            <el-form :model="form" ref="formRef" label-width="100px" :rules="rulesForm">

                <el-form-item label="角色名称" prop="roleName">
                    <el-input v-model="form.roleName" placeholder="请输入角色名称" />
                </el-form-item>

                <el-form-item label="权限字符" prop="roleKey">
                    <template #label>
                        <el-tooltip content="控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasRole('admin')`)" placement="top">
                            <i-ep-QuestionFilled class="myicon" />
                        </el-tooltip>
                        权限字符
                    </template>
                    <el-input v-model="form.roleKey" placeholder="请输入权限字符" />
                </el-form-item>

                <el-form-item label="角色顺序" prop="roleSort">
                    <el-input-number style="width: 200px;" v-model="form.roleSort" placeholder="请输入角色顺序"
                        controls-position="right" :min="0" />
                </el-form-item>
                <el-form-item label="用户状态" prop="status">
                    <el-radio-group v-model="form.status">
                        <el-radio value="1">正常</el-radio>
                        <el-radio value="0">停用</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="菜单权限" prop="menuRole">
                    <el-col :span="24">
                        <el-checkbox v-model:model-value="unfoldAndFold" @change="unfoldAndFoldchange" label="展开/收起" />
                        <el-checkbox v-model:model-value="unselectAll" @change="unselectAllChange" label="全选/全不选" />
                        <el-checkbox v-model:model-value="linkage" @change="linkageChange" label="父子联动" />
                    </el-col>
                    <el-col :span="24">
                        <el-tree ref="menuTreeRef" class="tree-border" node-key="id" show-checkbox :data="menuOptions"
                            :props="menuTreeProp" :check-strictly="checkStrictly" empty-text="加载中，请稍候" />
                    </el-col>

                </el-form-item>
                <el-form-item label="备注" prop="remark">
                    <el-input v-model="form.remark" placeholder="请输入备注" type="textarea" rows="4" />
                </el-form-item>

            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="submitForm">
                        确定
                    </el-button>
                    <el-button @click="closeDialog">取消</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import type { defaultProp, formType, } from "@/type/system/role"
import type { menuOptionsType } from "@/type/system/menu"
import type { ElTree, FormRules } from 'element-plus'
import { submitRole, updateRole } from '@/api/system/role/role'
import { confirm, msgSuccess } from "@/hooks/modal"
import { getMenuList, } from '@/api/system/menu/menu'
const emit = defineEmits(['emitAddFormBtn'])
const formRef = ref()
const menuTreeRef = ref<typeof ElTree>()
const menuOptions = ref<menuOptionsType[]>([])
// 菜单树选择自定义prop
const menuTreeProp = {
    children: 'children',
    label: 'menuName',
}
/**tree组件是否父子联动 */
const checkStrictly = ref(false);
// 接收父组件传参
const prop = withDefaults(defineProps<defaultProp>(), {
    dialogVisible: false,
    title: "",
    roleForm: () => ({}),
    id: null
})
// form表单
const form = ref<formType>({
    roleSort: 0,
    status: "1",
})
// 展开/收起
const unfoldAndFold = ref(false)
// 全选/全不选
const unselectAll = ref(false);
// 父子联动
const linkage = ref(true);
/**表单校验*/
const rulesForm = ref<FormRules<formType>>({
    roleName: [
        { required: true, message: "角色名称不能为空", trigger: "blur" },
        { min: 2, max: 20, message: '角色名称长度必须介于 2 和 20 之间', trigger: 'blur' }
    ],
    roleKey: [
        { required: true, message: "角色权限不能为空", trigger: "blur" }
    ],
    roleSort: [
        { required: true, message: "用户密码不能为空", trigger: "blur" },
    ],
})

/**提交表单*/
const submitForm = () => {
    formRef.value.validate((valid: boolean) => {
        if (valid) {
            confirm('是否确认提交？').then(() => {
                form.value.menuIds = getMenuAllCheckedKeys()
                if (form.value.roleId) {
                    updateRole(form.value).then((res) => {
                         //@ts-ignore
                        msgSuccess(res.message!)
                        closeDialog()
                    })
                } else {
                    submitRole(form.value).then((res) => {
                         //@ts-ignore
                        msgSuccess(res.message!)
                        closeDialog()
                    })

                }
            })
        }

    })
}
/**关闭弹窗操作*/
const closeDialog = () => {
    formRef.value.resetFields();
    // 给父组件发信号
    emit('emitAddFormBtn', false)
}
/** 获取菜单树数据*/
const getMenuTree = () => {
    return new Promise((resolve, reject) => {
        getMenuList().then(res => {
            menuOptions.value = res.data;
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })

}
/**
 * tree组件展开和收起
 */
const unfoldAndFoldchange = (value: any) => {
    const nodes = menuTreeRef.value?.store.nodesMap
    for (let item in nodes) {
        nodes[item].expanded = value
    }
}
/**
 * tree组件全选与全不选
 */
const unselectAllChange = (value: any) => {
    menuTreeRef.value?.setCheckedNodes(value ? menuOptions.value : [])
}
/**
 * tree组件父子是否联动
 */
const linkageChange = (value: any) => {
    checkStrictly.value = !value
}
/**所有菜单节点数据*/
const getMenuAllCheckedKeys = () => {
    // 目前被选中的菜单节点
    let checkedKeys = menuTreeRef.value?.getCheckedKeys();
    // 半选中的菜单节点
    let halfCheckedKeys = menuTreeRef.value?.getHalfCheckedKeys();
    checkedKeys.unshift.apply(checkedKeys, halfCheckedKeys);
    return checkedKeys;
}
onMounted(async () => {
    await getMenuTree()
    if (prop.roleForm.roleId) {
        const { menuIds, ...role } = prop.roleForm
        form.value = role;
        nextTick(() => {
            menuIds?.forEach((menuId: number) => {
                menuTreeRef.value?.setChecked(menuId, true, false)
            })
            linkage.value = true
        })
    }
})

</script>

<style scoped lang="scss">
:deep(.el-form-item__label) {
    align-items: center;
}

.myicon {
    cursor: pointer;
}
</style>