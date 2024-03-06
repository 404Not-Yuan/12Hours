import { createRouter, createWebHistory } from 'vue-router'
import progress from '@bassist/progress'
import routes from './routes'
import { APP_NAME } from '@/constants'

import { useAuthStore } from '../stores/index';
progress.configure({ showSpinner: false })
progress.setColor('var(--c-brand)')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition ? savedPosition : { top: 0, left: 0 }
  },
})

router.beforeEach((to,from,next) => {
  progress.start()
  // const authStore = useAuthStore();
  //authstore.user是真是假判断
  // const isAuthenticated = !!authStore.user;
  // 从LocalStorage中获取token
  const token = localStorage.getItem('stutoken');
  console.log(token)
  if (to.meta.auth && token=='') {
    // 如果路由需要认证，但用户未登录，则重定向到登录页面
    next({ name: 'login' });
  } else {
    // 否则，允许路由继续
    next();
  }
  // next()
})

router.afterEach((to) => {
  const { title } = to.meta
  document.title = title ? `${title} - ${APP_NAME}` : APP_NAME
  progress.done()
})

export default router
