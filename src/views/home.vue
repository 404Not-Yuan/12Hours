<template>
  <div class="home">
    <Header />
    <img alt="Vue logo" :src="logo" />
    <ToggleTheme />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/img/logo.png'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--c-text);
}
</style>
