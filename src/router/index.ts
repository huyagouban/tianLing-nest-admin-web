import { createRouter, createWebHistory } from 'vue-router'

import layout from "@/layout/index.vue"

/**
 * 常驻路由
 */
export const constanRouters = [

  {
    path: '/',
    name: '/',
    redirect: '/index',
    component: layout,
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          title: "首页",
          icon: "House"
        },
        component: () => import("@/views/index.vue"),
      },

    ]
  },
  {
    path: '/user',
    component: layout,
    hidden: true,
    redirect: 'noredirect',
    children: [
      {
        path: '/user/userInfo',
        name: 'userInfo',
        meta: {
          title: "个人中心",
        },
        component: () => import('@/views/system/user/userInfo.vue'),
      },
    ]
  },
  {
    path: '/redirect',
    component: layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    hidden: true
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import('@/views/error/404.vue'),
    hidden: true
  },
  {
    path: '/403',
    component: () => import("@/views/error/403.vue"),
    hidden: true,
  },
]
/**
 * 动态路由  根据权限加载
 */
export const filterDynamicsRouters = [
  {
    path: '/system/dictData',
    component: layout,
    hidden: true,
    permissions: ['system:dict:list'],
    children: [
      {
        path: 'index/:dictType',
        name: 'dictData',
        meta: {
          title: '字典数据',
          activeMenu: '/system/dict'
        },
        component: () => import('@/views/system/dictData/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.NODE_ENV==='production'?'/tianLing-nest-admin-web/': import.meta.env.BASE_URL),
  routes: constanRouters
})

export default router
