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
          <div data-prop="username" class="form-item">
            <img src="@/assets/img/user.png" class="icon_phone" />
            <el-input v-model="nameinput1" placeholder="请输入用户名" size="large"/>
          </div>
          <div data-prop="phone" class="form-item">
            <img src="@/assets/img/phone.png" class="icon_phone" />
            <el-form ref="formRef1" :model="phoneValidateForm1" class="demo-ruleForm">
              <el-form-item prop="phone" :rules="[
                { required: true, message: '请输入手机号' },
                { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确，必须是11位数字且以1开头' },
              ]">
                <el-input v-model.number="phoneValidateForm1.phone" type="tel" placeholder="请输入手机号1" autocomplete="off" size="large"/>
              </el-form-item>
            </el-form>
          </div>
          <el-form
            ref="ruleFormRef1"
            :model="ruleForm1"
            status-icon
            :rules="rules1"
            class="demo-ruleForm"
          >
            <div data-prop="code" class="form-item">
              <img src="@/assets/img/password.png" class="icon_phone" />
              <el-form-item prop="pass">
                <el-input 
                  v-model="ruleForm1.pass" 
                  type="password" 
                  autocomplete="off" 
                  size="large"
                  placeholder="请输入密码" />
              </el-form-item>
            </div>
            <div data-prop="code" class="form-item">
              <img src="@/assets/img/password.png" class="icon_phone" />
              <el-form-item prop="checkPass">
                <el-input
                  v-model="ruleForm1.checkPass"
                  type="password"
                  autocomplete="off"
                  size="large"
                  placeholder="请重新输入密码"
                />
              </el-form-item>
            </div>
          </el-form>
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
            <el-input v-model="nameinput2" placeholder="请输入用户名" size="large"/>
          </div>
          <div data-prop="phone" class="form-item">
            <img src="@/assets/img/phone.png" class="icon_phone" />
            <el-form ref="formRef2" :model="phoneValidateForm2" class="demo-ruleForm">
              <el-form-item prop="phone" :rules="[
                { required: true, message: '请输入手机号' },
                { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确，必须是11位数字且以1开头' },
              ]">
                <el-input v-model.number="phoneValidateForm2.phone" type="tel" placeholder="请输入手机号2" autocomplete="off" size="large"/>
              </el-form-item>
            </el-form>
          </div>

          <el-form
            ref="ruleFormRef2"
            :model="ruleForm2"
            status-icon
            :rules="rules2"
            class="demo-ruleForm"
          >
            <div data-prop="code" class="form-item">
              <img src="@/assets/img/password.png" class="icon_phone" />
              <el-form-item prop="pass">
                <el-input 
                  v-model="ruleForm2.pass" 
                  type="password" 
                  autocomplete="off" 
                  size="large"
                  placeholder="请输入密码" />
              </el-form-item>
            </div>
            <div data-prop="code" class="form-item">
              <img src="@/assets/img/password.png" class="icon_phone" />
              <el-form-item prop="checkPass">
                <el-input
                  v-model="ruleForm2.checkPass"
                  type="password"
                  autocomplete="off"
                  size="large"
                  placeholder="请重新输入密码"
                />
              </el-form-item>
            </div>
          </el-form>
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
            <el-input v-model="nameinput3" placeholder="请输入用户名" size="large"/>
          </div>
          <div data-prop="phone" class="form-item">
            <img src="@/assets/img/phone.png" class="icon_phone" />
            <el-form ref="formRef3" :model="phoneValidateForm3" class="demo-ruleForm">
              <el-form-item prop="phone" :rules="[
                { required: true, message: '请输入手机号' },
                { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确，必须是11位数字且以1开头' },
              ]">
                <el-input v-model.number="phoneValidateForm3.phone" type="tel" placeholder="请输入手机号3" autocomplete="off" size="large"/>
              </el-form-item>
            </el-form>
          </div>

          <el-form
            ref="ruleFormRef3"
            :model="ruleForm3"
            status-icon
            :rules="rules3"
            class="demo-ruleForm"
          >
            <div data-prop="code" class="form-item">
              <img src="@/assets/img/password.png" class="icon_phone" />
              <el-form-item prop="pass">
                <el-input 
                  v-model="ruleForm3.pass" 
                  type="password" 
                  autocomplete="off" 
                  size="large"
                  placeholder="请输入密码" />
              </el-form-item>
            </div>
            <div data-prop="code" class="form-item">
              <img src="@/assets/img/password.png" class="icon_phone" />
              <el-form-item prop="checkPass">
                <el-input
                  v-model="ruleForm3.checkPass"
                  type="password"
                  autocomplete="off"
                  size="large"
                  placeholder="请重新输入密码"
                />
              </el-form-item>
            </div>
          </el-form>
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
import { defineComponent, ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
export default defineComponent({
  setup() {
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
    // 密码框1
    const ruleFormRef1 = ref<FormInstance>()
    const validatePass1 = (rule: any, value: any, callback: any) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (ruleForm1.checkPass !== '') {
          if (!ruleFormRef1.value) return
          ruleFormRef1.value.validateField('checkPass', () => null)
        }
        callback()
      }
    }
    const validatePass12 = (rule: any, value: any, callback: any) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== ruleForm1.pass) {
        callback(new Error("两次输入不一致！请重新确认"))
      } else {
        callback()
      }
    }
    const ruleForm1 = reactive({
      pass: '',
      checkPass: '',
    })
    const rules1 = reactive<FormRules<typeof ruleForm1>>({
      pass: [{ validator: validatePass1, trigger: 'blur' }],
      checkPass: [{ validator: validatePass12, trigger: 'blur' }],
    })
    // 密码框2
    const ruleFormRef2 = ref<FormInstance>()
    const validatePass2 = (rule: any, value: any, callback: any) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (ruleForm2.checkPass !== '') {
          if (!ruleFormRef2.value) return
          ruleFormRef2.value.validateField('checkPass', () => null)
        }
        callback()
      }
    }
    const validatePass22 = (rule: any, value: any, callback: any) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== ruleForm2.pass) {
        callback(new Error("两次输入不一致！请重新确认"))
      } else {
        callback()
      }
    }
    const ruleForm2 = reactive({
      pass: '',
      checkPass: '',
    })
    const rules2 = reactive<FormRules<typeof ruleForm2>>({
      pass: [{ validator: validatePass2, trigger: 'blur' }],
      checkPass: [{ validator: validatePass22, trigger: 'blur' }],
    })
    // 密码框3
    const ruleFormRef3 = ref<FormInstance>()
    const validatePass3 = (rule: any, value: any, callback: any) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (ruleForm3.checkPass !== '') {
          if (!ruleFormRef3.value) return
          ruleFormRef3.value.validateField('checkPass', () => null)
        }
        callback()
      }
    }
    const validatePass32 = (rule: any, value: any, callback: any) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== ruleForm3.pass) {
        callback(new Error("两次输入不一致！请重新确认"))
      } else {
        callback()
      }
    }
    const ruleForm3 = reactive({
      pass: '',
      checkPass: '',
    })
    const rules3 = reactive<FormRules<typeof ruleForm3>>({
      pass: [{ validator: validatePass3, trigger: 'blur' }],
      checkPass: [{ validator: validatePass32, trigger: 'blur' }],
    })
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
      nameinput1,nameinput2,nameinput3,
      formRef1,formRef2,formRef3,
      phoneValidateForm1,phoneValidateForm2,phoneValidateForm3,
      validatePass1,ruleFormRef1,validatePass12,ruleForm1,rules1,
      validatePass2,ruleFormRef2,validatePass22,ruleForm2,rules2,
      validatePass3,ruleFormRef3,validatePass32,ruleForm3,rules3,
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
  height: 530px;
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
  margin-bottom: 30px;
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
// .register {
//   display: flex;
//   justify-content: flex-end;
//   margin: 10px;
//   color: #ff4d4f;
// }
// .register a {
//   text-decoration: none;
//   color: #ff4d4f;
// }
.submit {
  background-color: #ff4d4f;
  color: #fff;
}
</style>

<style lang="less">
.el-input__inner {
  border: none !important;
}
.el-form-item {
  width: 100%;
  margin: 0;
}
.el-form {
  width: 100%;
}

</style>
