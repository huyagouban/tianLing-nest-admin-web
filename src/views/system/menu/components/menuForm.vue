<template>
    <div>
        <el-dialog :model-value="prop.dialogVisible" :title="prop.title" width="680px" :before-close="closeDialog"
            destroy-on-close>
            <el-form :model="form" ref="formRef" label-width="100px" :rules="rulesForm">
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="上级菜单" prop="parentId">
                            <el-tree-select v-model="form.parentId" node-key="id" check-strictly placeholder="请选择上级菜单"
                                :props="menuTreeProp" :data="menuOptions" :render-after-expand="false"
                                style="width: 508px" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="菜单类型" prop="menuType">
                            <el-radio-group v-model="form.menuType">
                                <el-radio value="M">目录</el-radio>
                                <el-radio value="C">菜单</el-radio>
                                <el-radio value="F">按钮</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="菜单图标" prop="icon" v-if="form.menuType != 'F'">
                            <el-popover placement="bottom" width="508" trigger="click">
                                <template #reference>
                                    <el-input v-model="form.icon" 
                                        readonly placeholder="请选择菜单图标" clearable >
                                        <template #prefix>                                            
                                            <tl-icon v-if="form.icon" :iconName="form.icon"  :iconType="form.iconType"></tl-icon>
                                            <el-icon v-else><Search /> </el-icon>
                                        </template>
                                    </el-input>
                                </template>
                                <el-tabs v-model="iconTabName">
                                    <el-tab-pane label="Svg" name="Svg">
                                        <svgSelect @iconActiveSelect="iconActiveSelect" :iconSelectName="form.icon">
                                        </svgSelect>
                                    </el-tab-pane>
                                    <el-tab-pane label="element" name="element">
                                        <elementIconSelect @iconActiveSelect="iconActiveSelect"
                                            :iconSelectName="form.icon">
                                        </elementIconSelect>
                                    </el-tab-pane>
                                </el-tabs>
                            </el-popover>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="菜单名称" prop="menuName">
                            <el-input v-model="form.menuName" placeholder="请输入菜单名称" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="显示排序" prop="sortNum">
                            <el-input-number v-model="form.sortNum" placeholder="请输入排序" controls-position="right"
                                :min="0" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" v-if="form.menuType != 'F'">
                        <el-form-item prop="isLink">
                            <template #label>
                                <el-tooltip content="选择是外链则路由地址需要以`http(s)://`开头" placement="top">
                                    <i-ep-QuestionFilled class="myicon" />
                                </el-tooltip>
                                是否外链
                            </template>
                            <el-radio-group v-model="form.isLink">
                                <el-radio value="1">是</el-radio>
                                <el-radio value="0">否</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" v-if="form.menuType != 'F'">
                        <el-form-item prop="path">
                            <template #label>
                                <el-tooltip content="访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头" placement="top">
                                    <i-ep-QuestionFilled class="myicon" />
                                </el-tooltip>
                                路由地址
                            </template>
                            <el-input v-model="form.path" placeholder="请输入路由地址" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" v-if="form.menuType == 'C'">
                        <el-form-item prop="component">
                            <template #label>
                                <el-tooltip content="访问的组件路径，如：`system/user/index`，默认在`views`目录下" placement="top">
                                    <i-ep-QuestionFilled class="myicon" />
                                </el-tooltip>
                                组件路径
                            </template>
                            <el-input v-model="form.component" placeholder="请输入组件路径" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" v-if="form.menuType != 'M'">
                        <el-form-item prop="perms">
                            <template #label>
                                <el-tooltip content="控制器中定义的权限字符，如：system:user:list" placement="top">
                                    <i-ep-QuestionFilled class="myicon" />
                                </el-tooltip>
                                权限字符
                            </template>
                            <el-input v-model="form.perms" placeholder="请输入权限字符" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" v-if="form.menuType == 'C'">
                        <el-form-item prop="isCache">
                            <template #label>
                                <el-tooltip content="选择是则会被`keep-alive`缓存，需要匹配组件的`name`和地址保持一致" placement="top">
                                    <i-ep-QuestionFilled class="myicon" />
                                </el-tooltip>
                                是否缓存
                            </template>
                            <el-radio-group v-model="form.isCache">
                                <el-radio value="1">缓存</el-radio>
                                <el-radio value="0">不缓存</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" v-if="form.menuType != 'F'">
                        <el-form-item prop="visible">
                            <template #label>
                                <el-tooltip content="选择隐藏则路由将不会出现在侧边栏，但仍然可以访问" placement="top">
                                    <i-ep-QuestionFilled class="myicon" />
                                </el-tooltip>
                                显示状态
                            </template>
                            <el-radio-group v-model="form.visible">
                                <el-radio value="1">显示</el-radio>
                                <el-radio value="0">隐藏</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item>
                            <template #label>
                                <el-tooltip content="选择停用则路由将不会出现在侧边栏，也不能被访问" placement="top">
                                    <i-ep-QuestionFilled class="myicon" />
                                </el-tooltip>
                                菜单状态
                            </template>
                            <el-radio-group v-model="form.status">
                                <el-radio value="1">正常</el-radio>
                                <el-radio value="0">停用</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
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
import type { defaultProp, formType, menuOptionsType } from "@/type/system/menu"
import type { FormRules } from 'element-plus'
import elementIconSelect from "@/components/icons/elementIconSelect.vue";
import svgSelect from "@/components/icons/svgSelect.vue";
import { Search } from '@element-plus/icons-vue'
import { getMenuList, submitMenu, updateMenuInfo } from '@/api/system/menu/menu'
import { confirm, msgSuccess } from "@/hooks/modal"
const emit = defineEmits(['emitAddFormBtn'])
const formRef = ref()
const menuOptions = ref<menuOptionsType[]>([])
// 接收父组件传参
const prop = withDefaults(defineProps<defaultProp>(), {
    dialogVisible: false,
    title: "",
    menuForm: () => ({}),
    id: null
})
// form表单
const form = ref<formType>({
    parentId: 0,
    menuType: "M",
    icon: '',
    iconType:'',
    menuName: '',
    sortNum: undefined,
    isLink: '0',
    path: '',
    component: '',
    perms: '',
    isCache: '0',
    visible: '1',
    status: '1',
})
// 表单校验
const rulesForm = ref<FormRules<formType>>({
    menuName: [
        {
            required: true,
            message: '菜单名称不能为空',
            trigger: 'blur',
        },
    ],
    sortNum: [
        { required: true, message: "显示排序不能为空", trigger: "blur" }
    ],
    path: [
        { required: true, message: "路由地址不能为空", trigger: "blur" }
    ]
})
/**
 * @returns 菜单图标
 */
const iconTabName = ref('Svg')
// 获取菜单树数据
const getMenuTree = () => {
    getMenuList().then(res => {
        const menu: menuOptionsType = { id: 0, parentId: 0, menuName: '主类目', children: [] };
        menu.children = res.data
        menuOptions.value.push(menu)
    })

}
// 菜单树选择自定义prop
const menuTreeProp = {
    children: 'children',
    label: 'menuName',
}
// 选择菜单图标
const iconActiveSelect = (name: string,type:string) => {
    form.value.icon = name;
    form.value.iconType = type;
}
// 提交表单
const submitForm = () => {
    formRef.value.validate((valid: boolean) => {
        if (valid) {
            confirm('是否确认提交？').then(() => {
                if (form.value.id) {
                    updateMenuInfo(form.value).then((res) => {
                        msgSuccess('修改成功')
                        closeDialog()
                    })
                } else {
                    submitMenu(form.value).then((res) => {
                        msgSuccess('新增成功')
                        closeDialog()
                    })

                }
            })


        }

    })
}
// 关闭弹窗操作=>
const closeDialog = () => {
    formRef.value.resetFields();
    // 给父组件发信号
    emit('emitAddFormBtn', false)
}
onMounted(() => {
    if (prop.menuForm.id) {
        form.value = prop.menuForm;
    }
    if (prop.id) {
        form.value.parentId = prop.id;
    }
    getMenuTree()
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