import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes: RouteRecordRaw[] = [
  /**
   * 首页
   */
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: {
      title: 'Home',
    },
  },
  /**
   * 子路由示例
   */
  // {
  //   path: '/foo',
  //   name: 'foo',
  //   component: () => import('@/components/TransferStation.vue'),
  //   meta: {
  //     title: 'Foo',
  //   },
  //   redirect: {
  //     name: 'bar',
  //   },
  //   children: [
  //     {
  //       path: 'bar',
  //       name: 'bar',
  //       component: () => import('@/views/foo/bar.vue'),
  //       meta: {
  //         title: 'Bar',
  //       },
  //     },
  //   ],
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register.vue'),
  },
  {
    path: '/jobdetail',
    name: 'jobdetail',
    component: () => import('@/views/jobdetail.vue'),
  },
  {
    path: '/student/personal',
    name: 'personal',
    component: () => import('@/views/student/personal.vue'),
  },
  {
    path: '/student/record',
    name: 'record',
    component: () => import('@/views/student/record.vue'),
  },
  {
    path: '/student/collection',
    name: 'collection',
    component: () => import('@/views/student/collection.vue'),
  },
  {
    path: '/student/inform',
    name: 'inform',
    component: () => import('@/views/student/inform.vue'),
  },
]

export default routes
