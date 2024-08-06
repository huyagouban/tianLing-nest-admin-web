import { useUserStore } from "@/stores/modules/user";

/**
 * 
 * @returns 获取缓存中的token
 */
export function getToken() {
    return localStorage.getItem('token')
}

/**
 * 
 * @param token 
 * @returns 设置缓存中的token
 */
export function setToken(token: string) {
    localStorage.setItem('token', token)
}

/**
 * 
 * @returns 移除缓存中的token
 */
export function removeToken() {
    localStorage.removeItem('token')
}

/**
 * 
 * @param permission 
 * @returns 验证用户是否具备某权限
 */
function authPermission(permission: string) {
    const all_permission = "*:*:*";
    const permissions = useUserStore().permission
    if (permission && permission.length > 0) {
        return permissions.some(v => {
            return all_permission === v || v === permission
        })
    } else {
        return false
    }
}
/**
 * 
 * @param role 
 * @returns 验证用户是否具备某角色
 */
function authRole(role:string) {
    const super_admin = "admin";
    const roles = useUserStore().roles
    if (role && role.length > 0) {
        return roles.some(v => {
            return super_admin === v || v === role
        })
    } else {
        return false
    }
}


/** 验证用户是否具备某权限 */
export function hasPermi(permission:string) {
    return authPermission(permission);
}
/** 验证用户是否含有指定权限，只需包含其中一个 */
export function hasPermiOr(permissions:string[]) {
    return permissions.some(item => {
        return authPermission(item)
    })
}
/** 验证用户是否含有指定权限，必须全部拥有 */
export function hasPermiAnd(permissions:string[]) {
    return permissions.every(item => {
        return authPermission(item)
    })
}
/** 验证用户是否具备某角色 */
export function hasRole(role:string) {
    return authRole(role);
}
/**验证用户是否含有指定角色，只需包含其中一个*/
export function hasRoleOr(roles:string[]) {
    return roles.some(item => {
        return authRole(item)
    })
}
/** 验证用户是否含有指定角色，必须全部拥有*/
export function hasRoleAnd(roles:string[]) {
    return roles.every(item => {
        return authRole(item)
    })
}

