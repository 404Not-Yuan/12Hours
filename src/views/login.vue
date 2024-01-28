<template>
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
          <div data-prop="phone" class="form-item">
            <span class="icon"></span>
            <input name="phone" type="text" placeholder="输入手机号码  " />
          </div>

          <div data-prop="code" class="form-item">
            <span class="icon"></span>
            <input name="code" type="text" placeholder="短信验证码" />
            <a class="code" href="javascript:;">发送验证码</a>
          </div>
          <div class="form-item pl50">
            <div class="tubiao">
              <i class="iconfont icon-queren" />
            </div>
            已阅读并同意<i>《用户服务协议》</i>
          </div>
          <button type="submit" class="submit">
            <b>登录</b>
          </button>
          <div class="register">
            还没有账号？<a href="#"><i>去注册</i></a>
          </div>
        </div>
      </div>
      <div id="tab2" class="tab-content">
        <div class="tab-pane">
          <div data-prop="phone" class="form-item">
            <span class="icon"></span>
            <input name="phone" type="text" placeholder="输入手机号码  " />
          </div>

          <div data-prop="code" class="form-item">
            <span class="icon"></span>
            <input name="code" type="text" placeholder="短信验证码" />
            <a class="code" href="javascript:;">发送验证码</a>
          </div>
          <div class="form-item pl50">
            <div class="tubiao">
              <i class="iconfont icon-queren" />
            </div>
            已阅读并同意<i>《用户服务协议》</i>
          </div>
          <button type="submit" class="submit">
            <b>登录</b>
          </button>
          <div class="register">
            还没有账号？<a href="#"><i>去注册</i></a>
          </div>
        </div>
      </div>
      <div id="tab3" class="tab-content">
        <div class="tab-pane">
          <div data-prop="phone" class="form-item">
            <span class="icon"></span>
            <input name="phone" type="text" placeholder="输入手机号码  " />
          </div>

          <div data-prop="code" class="form-item">
            <span class="icon"></span>
            <input name="code" type="text" placeholder="短信验证码" />
            <a class="code" href="javascript:;">发送验证码</a>
          </div>
          <div class="form-item pl50">
            <div class="tubiao">
              <i class="iconfont icon-queren" />
            </div>
            已阅读并同意<i>《用户服务协议》</i>
          </div>
          <button type="submit" class="submit">
            <b>登录</b>
          </button>
          <div class="register">
            还没有账号？<a href="#"><i>去注册</i></a>
          </div>
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
// 阅读同意点击事件
const queren = document.querySelector('.icon-queren')
queren.addEventListener('click', function () {
  this.classList.toggle('icon-queren2')
})
</script>

<style lang="less" scoped>
@import url('https://at.alicdn.com/t/font_2143783_iq6z4ey5vu.css');
body {
  background-image: url(../assets/img/bg1.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.tabs {
  width: 35%;
  height: 420px;
  margin: 100px auto;
  border: 1px solid #fff;
  border-radius: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
}
.tab-header {
  display: flex;
  justify-content: space-around;
  height: 60px;
}
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
.form-item input {
  width: 100%;
  height: 50px;
  padding-left: 15px;
  background-color: transparent;
  color: #ff4d4f;
}
.form-item input[type='text'] {
  border: none;
}
.form-item input[type='text']::placeholder {
  color: #ff4d4f;
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
}
</style>
