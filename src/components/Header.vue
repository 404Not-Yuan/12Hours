<template>
  <div class="header">
    <div class="left" />
    <div class="titleList">
      <div class="title">首页</div>
      <router-link to="/student/personal">
        <div class="title">个人中心</div>
      </router-link>

    </div>
    <div class="right" v-if="token==''">
      <router-link to="/login">
        <span class="login">登录</span>
      </router-link>
        <span class="delimiter">|</span>
      <router-link to="/register">
        <span class="register">注册</span>
      </router-link>
    </div>
    <div class="right" v-else>
      <router-link to="/login">
        <span class="login">退出登录</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
 const token = localStorage.getItem('token');
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 80px;
  background: #ff4743;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .titleList {
    display: flex;
    justify-content: space-between;
    .title {
      padding: 0 10px;
      color: #fff;
    }
  }
  .right {
    width: 110px;
    height: 34px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    line-height: 14px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 100px;
  }
  .login {
    color: #fff;
  }
  .register {
    color: #fff;
  }
  .delimiter {
    margin-right: 6px;
    margin-left: 6px;
    margin-bottom: 1.5px;
  }
}
</style>
