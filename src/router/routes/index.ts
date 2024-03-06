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
      title: '首页',

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
    meta: {
      title: '登录',
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register.vue'),
    meta: {
      title: '注册',
    },
  },
  {
    path: '/jobdetail',
    name: 'jobdetail',
    component: () => import('@/views/jobdetail.vue'),
    meta: {
      title: '职位详情',
      auth:true,
      roles:['student']
    },
  },
  {
    path: '/student/personal',
    name: 'personal',
    component: () => import('@/views/student/personal.vue'),
    meta: {
      title: '个人管理',
      roles:['student'],
      auth:true,
    },
  },
  {
    path: '/student/record',
    name: 'record',
    component: () => import('@/views/student/record.vue'),
    meta: {
      title: '申请记录',
      roles:['student'],
      auth:true,
    },
  },
  {
    path: '/student/collection',
    name: 'collection',
    component: () => import('@/views/student/collection.vue'),
    meta: {
      title: '关注收藏',
      roles:['student'],
      auth:true,
    },
  },
  {
    path: '/student/inform',
    name: 'inform',
    component: () => import('@/views/student/inform.vue'),
    meta: {
      title: '消息通知',
      roles:['student'],
      auth:true,
    },
  },
  {
    path: '/student/setting',
    name: 'setting',
    component: () => import('@/views/student/setting.vue'),
    meta: {
      title: '账号设置',
      roles:['student'],
      auth:true,
    },
  },
  {
    path: '/school/administration',
    name: 'schooladministration',
    component: () => import('@/views/school/administration.vue'),
    meta: {
      title: '学校管理',
      roles:['school'],
  
    },
  },
  {
    path: '/admin/administration',
    name: 'adminadministration',
    component: () => import('@/views/admin/administration.vue'),
    meta: {
      title: '管理员管理管理',
      roles:['admin'],

    },
  },
]

export default routes
