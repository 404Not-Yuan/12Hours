<template>
  <div class="bg">
    <div class="tabs">
      <div class="tab-header">
        <span
          class="tab-btn"
          @click="showTab(1)"
          :class="{ active: customer == 1 }"
          >学生用户</span
        >
        <span
          class="tab-btn"
          @click="showTab(2)"
          :class="{ active: customer == 2 }"
          >企业用户</span
        >
        <span
          class="tab-btn"
          @click="showTab(3)"
          :class="{ active: customer == 3 }"
          >后台管理</span
        >
      </div>
      <div v-show="customer == 1" class="tab-content">
        <div class="tab-pane">
          <div data-prop="phone" class="form-item">
            <img src="@/assets/img/phone.png" class="icon_phone" />
            <input name="phone" type="text" placeholder="请输入手机号码1" />
          </div>
          <div data-prop="code" class="form-item">
            <img src="@/assets/img/password.png" class="icon_phone" />
            <input name="code" type="text" placeholder="请输入密码" />
          </div>
          <div class="form-item pl50">
            <img
              :src="
                isChecked
                  ? '/src/assets/img/checked.png'
                  : '/src/assets/img/unchecked.png'
              "
              class="icon_phone"
              @click="check"
            />
            已阅读并同意<i>《用户服务协议》</i>
          </div>
          <button type="submit" class="submit"><b>登录</b></button>
          <div class="register">
            还没有账号？<a href="#"><i>去注册</i></a>
          </div>
        </div>
      </div>
      <div v-show="customer == 2" class="tab-content">
        <div class="tab-pane">
          <div data-prop="phone" class="form-item">
            <img src="@/assets/img/phone.png" class="icon_phone" />
            <input name="phone" type="text" placeholder="请输入手机号码2" />
          </div>

          <div data-prop="code" class="form-item">
            <img src="@/assets/img/password.png" class="icon_phone" />
            <input name="code" type="text" placeholder="请输入密码" />
          </div>
          <div class="form-item pl50">
            <img
              :src="
                isChecked
                  ? '/src/assets/img/checked.png'
                  : '/src/assets/img/unchecked.png'
              "
              class="icon_phone"
              @click="check"
            />
            已阅读并同意<i>《用户服务协议》</i>
          </div>
          <button type="submit" class="submit"><b>登录</b></button>
          <div class="register">
            还没有账号？<a href="#"><i>去注册</i></a>
          </div>
        </div>
      </div>
      <div v-show="customer == 3" class="tab-content">
        <div class="tab-pane">
          <div data-prop="phone" class="form-item">
            <img src="@/assets/img/phone.png" class="icon_phone" />
            <input name="phone" type="text" placeholder="请输入手机号码3" />
          </div>

          <div data-prop="code" class="form-item">
            <img src="@/assets/img/password.png" class="icon_phone" />
            <input name="code" type="text" placeholder="请输入密码" />
          </div>
          <div class="form-item pl50">
            <img
              :src="
                isChecked
                  ? '/src/assets/img/checked.png'
                  : '/src/assets/img/unchecked.png'
              "
              class="icon_phone"
              @click="check"
            />
            已阅读并同意<i>《用户服务协议》</i>
          </div>
          <button type="submit" class="submit"><b>登录</b></button>
          <div class="register">
            还没有账号？<a href="#"><i>去注册</i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//省略类型声明
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    //判断是否同意协议
    let isChecked = ref(false)
    function check() {
      isChecked.value = !isChecked.value
      console.log(isChecked)
    }
    //用户登录切换
    const customer = ref<number>(1)
    function showTab(index: number) {
      customer.value = index
    }
    return {
      isChecked,
      check,
      customer,
      showTab,
    }
  },
})
</script>

<style lang="less" scoped>
.bg {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/img/bg1.png');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tabs {
  width: 35%;
  height: 420px;
  border: 1px solid #fff;
  border-radius: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
  padding: 20px 30px;
}

.tab-header {
  display: flex;
  justify-content: space-around;
  height: 60px;
}

.tab-btn {
  min-width: 25%;
  height: 100%;
  cursor: pointer;
  color: #ff4d4f;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab-btn.active {
  border-bottom: 5px solid #ff4d4f;
}

.tab-content {
  padding: 10px;
  margin-top: 20px;
}

.tab-content.active {
  display: block;
}

.tab-pane {
  display: flex;
  flex-direction: column;
  margin: 10px auto;
}

button {
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  background-color: transparent;
  color: #ff4d4f;
  font-size: large;
}
button:hover {
  opacity: 0.8;
}

.form-item {
  display: flex;
  justify-content: space-around;
  padding-bottom: 24px;
  color: #ff4d4f;
  align-items: center;
}
.icon_phone {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.form-item.pl50 {
  display: flex;
  justify-content: center;
  padding-left: 40px;
  cursor: pointer;
  color: #ff4d4f;
}
.form-item i {
  color: #ff4d4f;
  font-size: 14px;
}
.form-item input {
  width: 100%;
  height: 50px;
  padding-left: 15px;
  background-color: transparent;
}
.form-item input[type='text'] {
  border: none;
}
.form-item input[type='text']::placeholder {
  color: #ff4d4f;
}
.form-item.error input {
  border-color: #ff4d4f;
}
.form-item .code {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  color: #ff4d4f;
  text-align: center;
  text-decoration: none;
}

.register {
  display: flex;
  justify-content: flex-end;
  margin: 10px;
  color: #ff4d4f;
}
.register a {
  text-decoration: none;
  color: #ff4d4f;
}
.submit {
  background-color: #ff4d4f;
  color: #fff;
}
input[type='text']:focus {
  outline: none;
}
</style>
