import { useUserStore } from "@/stores/modules/user";
import type { DirectiveBinding } from "vue";
/**
 * 操作权限指令
 * @directive 单个权限验证（v-hasPermi="['user:add']"）
 * @directive 多个权限验证，满足一个则显示（v-hasPermi="['user:add','user:edit']"）
 * @directive 多个权限验证，全部满足则显示（v-hasPermi="['user:add,user:edit']"）
 */
export const hasPermi = (el:HTMLElement, binding:DirectiveBinding) => {
    const { value } = binding;
    const all_permission = "*:*:*";
    const permissions = useUserStore().permission;
    if (value && value instanceof Array && value.length > 0) {
        const permissionFlag = value
        const hasPermissions = permissions.some(permission => {
            return all_permission === permission || permissionFlag.includes(permission)
        })

        if (!hasPermissions) {
            el.parentNode && el.parentNode.removeChild(el)
        }
    } else {
        throw new Error(`请设置操作权限标签值`)
    }
}