<template>
<<<<<<< HEAD
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
          <div data-prop="username" class="form-item">
            <img src="@/assets/img/user.png" class="icon_phone" />
            <input name="username" type="text" placeholder="请输入用户名" />
          </div>
          <div data-prop="phone" class="form-item">
            <img src="@/assets/img/phone.png" class="icon_phone" />
            <input name="phone" type="text" placeholder="请输入手机号码1" />
          </div>
          <div data-prop="code" class="form-item">
            <img src="@/assets/img/password.png" class="icon_phone" />
            <input name="code" type="text" placeholder="请输入密码" />
          </div>
          <div data-prop="code" class="form-item">
            <img src="@/assets/img/password.png" class="icon_phone" />
            <input name="code" type="text" placeholder="请确认密码" />
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
          <button type="submit" class="submit">注册</button>
        </div>
      </div>
      <div v-show="customer == 2" class="tab-content">
        <div class="tab-pane">
          <div data-prop="username" class="form-item">
            <img src="@/assets/img/user.png" class="icon_phone" />
            <input name="username" type="text" placeholder="请输入用户名" />
          </div>
          <div data-prop="phone" class="form-item">
            <img src="@/assets/img/phone.png" class="icon_phone" />
            <input name="phone" type="text" placeholder="请输入手机号码2" />
          </div>

          <div data-prop="code" class="form-item">
            <img src="@/assets/img/password.png" class="icon_phone" />
            <input name="code" type="text" placeholder="请输入密码" />
          </div>
          <div data-prop="code" class="form-item">
            <img src="@/assets/img/password.png" class="icon_phone" />
            <input name="code" type="text" placeholder="请确认密码" />
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
          <button type="submit" class="submit">注册</button>
        </div>
      </div>
      <div v-show="customer == 3" class="tab-content">
        <div class="tab-pane">
          <div data-prop="username" class="form-item">
            <img src="@/assets/img/user.png" class="icon_phone" />
            <input name="username" type="text" placeholder="请输入用户名" />
          </div>
          <div data-prop="phone" class="form-item">
            <img src="@/assets/img/phone.png" class="icon_phone" />
            <input name="phone" type="text" placeholder="请输入手机号码3" />
          </div>

          <div data-prop="code" class="form-item">
            <img src="@/assets/img/password.png" class="icon_phone" />
            <input name="code" type="text" placeholder="请输入密码" />
          </div>
          <div data-prop="code" class="form-item">
            <img src="@/assets/img/password.png" class="icon_phone" />
            <input name="code" type="text" placeholder="请确认密码" />
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
          <button type="submit" class="submit">注册</button>
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
=======
  <body>
    <div class="tabs">
      <div class="tab-header">
        <button class="tab-btn active" onclick="showTab(1)">
          <b>学生用户</b>
        </button>
        <button class="tab-btn" onclick="showTab(2)">
          <b>企业用户</b>
        </button>
        <button class="tab-btn" onclick="showTab(3)">
          <b>后台管理</b>
        </button>
      </div>
      <div id="tab1" class="tab-content active">
        <div class="tab-pane">
          <div data-prop="username" class="form-item">
            <span class="icon"></span>
            <input name="username" type="text" placeholder="设置用户名称" />
          </div>

          <div data-prop="phone" class="form-item">
            <span class="icon"></span>
            <input name="phone" type="text" placeholder="输入手机号码" />
          </div>

          <div data-prop="code" class="form-item">
            <span class="icon"></span>
            <input name="code" type="text" placeholder="短信验证码" />
            <a class="code" href="javascript:;">发送验证码</a>
          </div>

          <div data-prop="password" class="form-item">
            <span class="icon"></span>
            <input
              name="password"
              type="password"
              placeholder="设置6至20位字母、数字和符号组合"
            />
          </div>
          <div data-prop="confirm" class="form-item">
            <span class="icon"></span>
            <input
              name="confirm"
              type="password"
              placeholder="请再次输入上面密码"
            />
          </div>

          <div class="form-item pl50">
            <div class="tubiao">
              <i class="iconfont icon-queren" />
            </div>
            已阅读并同意<i>《用户服务协议》</i>
          </div>
          <button type="submit" class="submit">
            <b>注册</b>
          </button>
        </div>
      </div>
      <div id="tab2" class="tab-content">
        <div class="tab-pane">
          <div data-prop="username" class="form-item">
            <span class="icon"></span>
            <input name="username" type="text" placeholder="设置用户名称" />
          </div>

          <div data-prop="phone" class="form-item">
            <span class="icon"></span>
            <input name="phone" type="text" placeholder="输入手机号码" />
          </div>

          <div data-prop="code" class="form-item">
            <span class="icon"></span>
            <input name="code" type="text" placeholder="短信验证码" />
            <a class="code" href="javascript:;">发送验证码</a>
          </div>

          <div data-prop="password" class="form-item">
            <span class="icon"></span>
            <input
              name="password"
              type="password"
              placeholder="设置6至20位字母、数字和符号组合"
            />
          </div>
          <div data-prop="confirm" class="form-item">
            <span class="icon"></span>
            <input
              name="confirm"
              type="password"
              placeholder="请再次输入上面密码"
            />
          </div>

          <div class="form-item pl50">
            <div class="tubiao">
              <i class="iconfont icon-queren" />
            </div>
            已阅读并同意<i>《用户服务协议》</i>
          </div>
          <button type="submit" class="submit">
            <b>注册</b>
          </button>
        </div>
      </div>
      <div id="tab3" class="tab-content">
        <div class="tab-pane">
          <div data-prop="username" class="form-item">
            <span class="icon"></span>
            <input name="username" type="text" placeholder="设置用户名称" />
          </div>

          <div data-prop="phone" class="form-item">
            <span class="icon"></span>
            <input name="phone" type="text" placeholder="输入手机号码" />
          </div>

          <div data-prop="code" class="form-item">
            <span class="icon"></span>
            <input name="code" type="text" placeholder="短信验证码" />
            <a class="code" href="javascript:;">发送验证码</a>
          </div>

          <div data-prop="password" class="form-item">
            <span class="icon"></span>
            <input
              name="password"
              type="password"
              placeholder="设置6至20位字母、数字和符号组合"
            />
          </div>
          <div data-prop="confirm" class="form-item">
            <span class="icon"></span>
            <input
              name="confirm"
              type="password"
              placeholder="请再次输入上面密码"
            />
          </div>

          <div class="form-item pl50">
            <div class="tubiao">
              <i class="iconfont icon-queren" />
            </div>
            已阅读并同意<i>《用户服务协议》</i>
          </div>
          <button type="submit" class="submit">
            <b>注册</b>
          </button>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup lang="ts">
// tab切换效果
/*
    function showTab(tabIndex: number) {
        const tabBtns = document.getElementsByClassName('tab-btn');
        const tabContents = document.getElementsByClassName('tab-content');
        for (let i = 0; i < tabBtns.length; i++) {
            tabBtns[i].classList.remove('active');
            tabContents[i].classList.remove('active');
        }
        tabBtns[tabIndex - 1].classList.add('active');
        tabContents[tabIndex - 1].classList.add('active');
    }
    */
// 获取验证码
;(function () {
  const code = document.querySelector('.code')
  let flag = true
  code.addEventListener('click', function () {
    if (flag) {
      flag = false
      let i = 60
      code.innerHTML = `${i}秒后重新获取`
      const timerId = setInterval(function () {
        i--
        code.innerHTML = `${i}秒后重新获取`
        if (i === 0) {
          clearInterval(timerId)
          code.innerHTML = `重新获取`
          flag = true
        }
      }, 1000)
    }
  })
})()

// 同意协议点击设置
const queren = document.querySelector('.icon-queren')
queren.addEventListener('click', function () {
  this.classList.toggle('icon-queren2')
>>>>>>> a4bcec0af2daa50520107041dd9a7db680e6722b
})
</script>

<style lang="less" scoped>
<<<<<<< HEAD
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
  height: 530px;
=======
@import url('https://at.alicdn.com/t/font_2143783_iq6z4ey5vu.css');
body {
  background-image: url(./bg1.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.tabs {
  width: 35%;
  margin: 100px auto;
>>>>>>> a4bcec0af2daa50520107041dd9a7db680e6722b
  border: 1px solid #fff;
  border-radius: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
<<<<<<< HEAD
  padding: 20px 30px;
}

=======
}
>>>>>>> a4bcec0af2daa50520107041dd9a7db680e6722b
.tab-header {
  display: flex;
  justify-content: space-around;
  height: 60px;
}
<<<<<<< HEAD

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

=======
.tab-btn {
  width: 24%;
  height: 100%;
  border: none;
  cursor: pointer;
  color: #ff4d4f;
}
.tab-btn.active {
  border-bottom: 5px solid #ff4d4f;
}
.tab-content {
  display: none;
  padding: 10px;
  margin-top: 20px;
}
.tab-content.active {
  display: block;
}
.tab-pane {
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 10px auto;
}
>>>>>>> a4bcec0af2daa50520107041dd9a7db680e6722b
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
<<<<<<< HEAD

=======
>>>>>>> a4bcec0af2daa50520107041dd9a7db680e6722b
.form-item {
  display: flex;
  justify-content: space-around;
  padding-bottom: 24px;
  color: #ff4d4f;
  align-items: center;
}
<<<<<<< HEAD
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
=======
>>>>>>> a4bcec0af2daa50520107041dd9a7db680e6722b
.form-item input {
  width: 100%;
  height: 50px;
  padding-left: 15px;
  background-color: transparent;
<<<<<<< HEAD
=======
  color: #ff4d4f;
>>>>>>> a4bcec0af2daa50520107041dd9a7db680e6722b
}
.form-item input[type='text'] {
  border: none;
}
.form-item input[type='text']::placeholder {
  color: #ff4d4f;
}
<<<<<<< HEAD
.form-item.error input {
  border-color: #ff4d4f;
=======
.form-item input[type='password'] {
  border: none;
}
.form-item input[type='password']::placeholder {
  color: #ff4d4f;
>>>>>>> a4bcec0af2daa50520107041dd9a7db680e6722b
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
<<<<<<< HEAD

=======
.form-item.pl50 {
  display: flex;
  justify-content: center;
  padding-left: 40px;
  cursor: pointer;
  color: #ff4d4f;
}
.tubiao {
  margin-right: 5px;
}
.form-item i {
  color: #ff4d4f;
  font-size: 14px;
}
>>>>>>> a4bcec0af2daa50520107041dd9a7db680e6722b
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
<<<<<<< HEAD
input[type='text']:focus {
  outline: none;
=======
@font-face {
  font-family: 'icomoon';
  src: url('fonts/icomoon.eot?kz1s1y');
  src:
    url('fonts/icomoon.eot?kz1s1y#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?kz1s1y') format('truetype'),
    url('fonts/icomoon.woff?kz1s1y') format('woff'),
    url('fonts/icomoon.svg?kz1s1y#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
.icon {
  font-family: 'icomoon';
>>>>>>> a4bcec0af2daa50520107041dd9a7db680e6722b
}
</style>
