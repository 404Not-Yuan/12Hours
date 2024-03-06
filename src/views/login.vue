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
          <!-- <div data-prop="phone" class="form-item">
            <img src="@/assets/img/phone.png" class="icon_phone" />
            <el-form ref="formRef1" :model="phoneValidateForm1" class="demo-ruleForm">
              <el-form-item prop="phone" :rules="[
                { required: true, message: '请输入手机号' },
                { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确，必须是11位数字且以1开头' },
              ]">
                <el-input v-model.number="phoneValidateForm1.phone" type="tel" placeholder="请输入手机号1" autocomplete="off" size="large"/>
              </el-form-item>
            </el-form>
          </div> -->
          <div data-prop="username" class="form-item">
            <img src="@/assets/img/user.png" class="icon_phone" />
            <el-input v-model="nameinput1" placeholder="请输入用户名" size="large"/>
          </div>
          <div data-prop="code" class="form-item">
            <img src="@/assets/img/password.png" class="icon_phone" />
            <el-input
              v-model="password1"
              type="password"
              placeholder="请输入密码1"
              show-password
              size="large"
            />
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
          <button type="submit" class="submit" @click="login(1)"><b>登录</b></button>
          <div class="register">
            还没有账号？<a href="#"><i @click="$router.push({
            name:'register'
          })">去注册</i></a>
          </div>
        </div>
      </div>
      <div v-show="customer == 2" class="tab-content">
        <div class="tab-pane">
          <!-- <div data-prop="phone" class="form-item">
            <img src="@/assets/img/phone.png" class="icon_phone" />
            <el-form ref="formRef2" :model="phoneValidateForm2" class="demo-ruleForm">
              <el-form-item prop="phone" :rules="[
                { required: true, message: '请输入手机号' },
                { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确，必须是11位数字且以1开头' },
              ]">
                <el-input v-model.number="phoneValidateForm2.phone" type="tel" placeholder="请输入手机号2" autocomplete="off" size="large"/>
              </el-form-item>
            </el-form>
          </div> -->
          <div data-prop="username" class="form-item">
            <img src="@/assets/img/user.png" class="icon_phone" />
            <el-input v-model="nameinput2" placeholder="请输入用户名" size="large"/>
          </div>
          <div data-prop="code" class="form-item">
            <img src="@/assets/img/password.png" class="icon_phone" />
            <el-input
              v-model="password2"
              type="password"
              placeholder="请输入密码2"
              show-password
              size="large"
            />
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
          <button type="submit" class="submit" @click="login(2)"><b>登录</b></button>
          <div class="register">
            还没有账号？<a href="#"><i @click="$router.push({
            name:'register'
          })">去注册</i></a>
          </div>
        </div>
      </div>
      <div v-show="customer == 3" class="tab-content">
        <div class="tab-pane">
          <!-- <div data-prop="phone" class="form-item">
            <img src="@/assets/img/phone.png" class="icon_phone" />
            <el-form ref="formRef3" :model="phoneValidateForm3" class="demo-ruleForm">
              <el-form-item prop="phone" :rules="[
                { required: true, message: '请输入手机号' },
                { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确，必须是11位数字且以1开头' },
              ]">
                <el-input v-model.number="phoneValidateForm3.phone" type="tel" placeholder="请输入手机号3" autocomplete="off" size="large"/>
              </el-form-item>
            </el-form>
          </div> -->
          <div data-prop="username" class="form-item">
            <img src="@/assets/img/user.png" class="icon_phone" />
            <el-input v-model="nameinput3" placeholder="请输入用户名" size="large"/>
          </div>
          <div data-prop="code" class="form-item">
            <img src="@/assets/img/password.png" class="icon_phone" />
            <el-input
              v-model="password3"
              type="password"
              placeholder="请输入密码3"
              show-password
              size="large"
            />
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
          <button type="submit" class="submit" @click="login(3)"><b>登录</b></button>
          <div class="register">
            还没有账号？<a href="#"><i @click="$router.push({
            name:'register'
          })">去注册</i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//省略类型声明
import { defineComponent, ref ,onMounted} from 'vue'
import type { FormInstance } from 'element-plus'
import http from '@/services/request'
import { hkdfSync } from 'crypto'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    onMounted(()=>{
      localStorage.clear()
      const token = localStorage.getItem('token');
      console.log(token,111)
    })
    const router = useRouter()
    // 用户名输入框
    const nameinput1 = ref('')
    const nameinput2 = ref('')
    const nameinput3 = ref('')
    //// 手机号相关
    const formRef1 = ref<FormInstance>()

    const phoneValidateForm1 = reactive({
      phone: '',
    })

    const formRef2 = ref<FormInstance>()

    const phoneValidateForm2 = reactive({
      phone: '',
    })

    const formRef3 = ref<FormInstance>()

    const phoneValidateForm3 = reactive({
      phone: '',
    })

    // 密码相关
    const password1 = ref('')
    const password2 = ref('')
    const password3 = ref('')
    //判断是否同意协议
    let isChecked = ref(false)
    function check() {
      isChecked.value = !isChecked.value

    }
    //用户登录切换
    const customer = ref<number>(1)
    function showTab(index: number) {
      customer.value = index
    }

    //学生登录
    function login(index){
      if(index==1){
        http.post('/stu/login', {
          username:nameinput1.value,
          password:password1.value
        }).then(response => {
          if(response.code==200){
            router.push({
              path:'/'
            })
          let stutoken = response.token;
            console.log(stutoken,666)
          localStorage.setItem("token",stutoken);
          }

        })
        .catch(error => {
          console.log(error)
        })
      }else if(index==2){
        http.post('/school/login', {
          username:nameinput2.value,
          password:password2.value
        }).then(response => {
          if(response.code==200){
            router.push({
              path:'/school/administration'
            })
          let schtoken = response.token;

          localStorage.setItem("token",schtoken);
          }
        })
        .catch(error => {
          console.log(error)
        })
      }else{
        console.log(nameinput3)
        http.post('/manager/login', {
          username:nameinput3.value,
          password:password3.value
        }).then(response => {
          if(response.code==200){
            router.push({
              path:'/admin/administration'
            })
          let admtoken = response.token;

          localStorage.setItem("token",admtoken);
          }
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
    return {
      isChecked,
      check,
      customer,
      showTab,
      nameinput1,nameinput2,nameinput3,
      formRef1,formRef2,formRef3,
      phoneValidateForm1,phoneValidateForm2,phoneValidateForm3,
      password1,password2,password3,
      login
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

<style lang="less">
.el-input__inner {
  border: none !important;
}
.el-form-item {
  margin: 0;
}
.el-form {
  width: 100%;
}

</style>
