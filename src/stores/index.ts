export * from './message'

import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null, // 用户信息，如果为null则表示用户未登录
  }),
  actions: {
    setUser(userData) {
      this.user = userData;
    },
    clearUser() {
      this.user = null;
    },
    // 可以添加更多的actions来处理登录、登出等
  },
});
