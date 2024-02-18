<template>
  <Header />
  <div class="setting-box">
    <div class="setting-title">修改个人信息</div>
    <div class="setting-content">
      <el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon">
          <Plus />
        </el-icon>
      </el-upload>
      <div class="detailed-information">
        <!-- 手机号 -->
        <div class="form-information">
          <span>手机号：</span>
          <el-form ref="formRef" :model="phoneValidateForm" class="demo-ruleForm">
            <el-form-item prop="phone" :rules="[
              { required: true, message: '请输入手机号' },
              { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确，必须是11位数字且以1开头' },
            ]">
              <el-input v-model.number="phoneValidateForm.phone" type="tel" placeholder="请输入手机号" autocomplete="off" />
            </el-form-item>
          </el-form>
        </div>
        <!-- 姓名 -->
        <div class="form-information">
          <span>真实姓名：</span>
          <div class="form-item">
            <el-input v-model="input1" placeholder="请输入您的姓名" clearable />
          </div>
        </div>
        <!-- 性别 -->
        <div class="form-information">
          <span>性别：</span>
          <div class="form-item">
            <el-radio-group v-model="radio">
              <el-radio :label="3">男</el-radio>
              <el-radio :label="6">女</el-radio>
              <el-radio :label="9">保密</el-radio>
            </el-radio-group>
          </div>
        </div>
        <!-- 生日 -->
        <div class="form-information">
          <span>生日：</span>
          <div class="form-item">
            <el-date-picker v-model="value1" type="date" placeholder="请选择您的生日" size="default" />
          </div>
        </div>
        <!-- 所在学校  需改 -->
        <!-- <div class="form-information">
          <span>所在学校：</span>
          <div class="form-item">
            <el-select
            v-model="valueSchool"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入您所在的学校"
            :remote-method="remoteMethod"
            :loading="loadingSchool"
            style="width: 240px"
          >
            <el-option
              v-for="item in optionsSchool"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
            <template #loading>
              <svg class="circular" viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="20" fill="none" />
              </svg>
            </template>
          </el-select>
          </div>
        </div> -->
        <!-- 所在院系 -->
        <div class="form-information">
          <span>所在院系：</span>
          <div class="form-item">
            <el-input v-model="input2" placeholder="请输入您所在的院系" clearable />
          </div>
        </div>
        <!-- 所学专业 -->
        <div class="form-information">
          <span>所学专业：</span>
          <div class="form-item">
            <el-input v-model="input3" placeholder="请输入您所学的专业" clearable />
          </div>
        </div>
        <!-- 毕业情况 -->
        <div class="form-information">
          <span>是否毕业：</span>
          <div class="form-item">
            <el-select v-model="graduatevalue" clearable value-key="id" placeholder="请选择您的情况" style="width: 200px">
              <el-option v-for="item in graduateOptions" :key="item.id" :label="item.label" :value="item" />
            </el-select>
          </div>
        </div>
        <!-- 籍贯 -->
        <div class="form-information">
          <span>原籍：</span>
          <div class="form-item">
            <el-form-item style="width: 200px;">
              <el-cascader :options="addressOptions" @change="handleChange" placeholder="请选择您的籍贯"></el-cascader>
            </el-form-item>
          </div>
        </div>
        <!-- 工作单位 -->
        <div class="form-information">
          <span>现工作单位：</span>
          <div class="form-item">
            <el-input v-model="input4" placeholder="无工作单位请填无" clearable />
          </div>
        </div>
        <!-- 邮箱 -->
        <div class="form-information">
          <span>常用邮箱：</span>
          <div class="form-item">
            <el-form ref="formRef1" :model="dynamicValidateForm" class="demo-dynamic">
              <el-form-item prop="email" :rules="[
                {
                  required: true,
                  message: '请输入邮箱地址',
                  trigger: 'blur',
                },
                {
                  type: 'email',
                  message: '请输入正确的邮箱地址',
                  trigger: ['blur', 'change'],
                },
              ]">
                <el-input v-model="dynamicValidateForm.email" placeholder="请输入您的邮箱" />
              </el-form-item>
            </el-form>
          </div>
        </div>
        <button type="submit" class="submit">
          提交
        </button>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { defineComponent } from 'vue'
import { reactive, ref} from 'vue'
import { provinceAndCityData, codeToText } from 'element-china-area-data'
import type { FormInstance, UploadProps } from 'element-plus'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
export default defineComponent({
  setup() {
    // 头像相关
    const imageUrl = ref('')

    const handleAvatarSuccess: UploadProps['onSuccess'] = (
      response,
      uploadFile
    ) => {
      imageUrl.value = URL.createObjectURL(uploadFile.raw!)
    }

    const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
      if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('照片必须为JPG格式!')
        return false
      } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('照片大小不可超过2MB!')
        return false
      }
    }
    // 手机号相关
    const formRef = ref<FormInstance>()

    const phoneValidateForm = reactive({
      phone: '',
    })
    // 各类普通输入框
    const input1 = ref('')
    const input2 = ref('')
    const radio = ref(3)
    const value1 = ref('')
    const input3 = ref('')
    const input4 = ref('')

    // 以下注释掉的内容为 学校 相关
    // interface ListItem {
    //   value: string
    //   label: string
    // }

    // const listSchool = ref<ListItem[]>([])
    // const optionsSchool = ref<ListItem[]>([])
    // const valueSchool = ref<string[]>([])
    // const loadingSchool = ref(false)

    //   onMounted(() => {
    // listSchool.value = stateschool.map((item) => {
    //   return { value: `value:${item}`, label: `label:${item}` }
    // })
    //   })

    // const remoteMethod = (query: string) => {
    //   if (query) {
    //     loadingSchool.value = true
    //     setTimeout(() => {
    //       loadingSchool.value = false
    //       optionsSchool.value = listSchool.value.filter((item) => {
    //         return item.label.toLowerCase().includes(query.toLowerCase())
    //       })
    //     }, 3000)
    //   } else {
    //     optionsSchool.value = []
    //   }
    // }

    // const stateschool = [
    //   '北京大学',
    //   '清华大学',
    //   '天津大学',
    //   '南京大学',
    //   '天津科技大学',
    //   '天津工业大学',
    // ]
    // 毕业情况相关
    type Option = {
      id: number
      label: string
      desc: string
    }
    const graduatevalue = ref<Option>()
    const graduateOptions = ref([
      { id: 1, label: '不限', desc: 'graduate1' },
      { id: 2, label: '在校生', desc: 'graduate2' },
      { id: 3, label: '应届生', desc: 'graduate3' },
      { id: 4, label: '1-3年', desc: 'graduate4' },
      { id: 4, label: '3-5年', desc: 'graduate5' },
      { id: 4, label: '5-10年', desc: 'graduate6' },
      { id: 4, label: '10年以上', desc: 'graduate7' },
    ])
    // 邮箱相关
    const formRef1 = ref<FormInstance>()
    const dynamicValidateForm = reactive<{
      domains: DomainItem[]
      email: string
    }>({
      domains: [
        {
          key: 1,
          value: '',
        },
      ],
      email: '',
    })
    interface DomainItem {
      key: number
      value: string
    }
    // 籍贯相关
    const addressvalue = ref<Option>()
    let addressOptions = ref(provinceAndCityData);
    const handleChange = (value) => {
      let provinceCode = value[0]; //省编码
      let cityCode = value[1]          //市编码
      let province = codeToText[value[0]];  //省中文
      let city = codeToText[value[1]];  //市中文
    }

    return {
      beforeAvatarUpload, handleAvatarSuccess, imageUrl, input1, input2, radio, value1, input3, input4, graduatevalue,
      graduateOptions, addressvalue, addressOptions, handleChange, formRef1, dynamicValidateForm, formRef, 
      phoneValidateForm,
    }
  },
})
</script>

<style lang="less" scoped>
.setting-box {
  display: flex;
  flex-direction: column;
  padding-left: 18%;
  border-radius: 23px;
  width: 70%;
  margin: auto;
  background-color: #fff;
  padding-bottom: 45px;
}

.setting-title {
  margin: 30px 0;
  border-left: 5px solid #ff4d4f;
  padding-left: 15px;
}

.setting-content {
  display: flex;
}

.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.detailed-information {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
}

.form-information {
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  .form-item {
    padding: 0;
  }

  span {
    width: 150px;
    padding-right: 0;
  }
}

.submit {
  margin: auto;
  width: 145px;
  height: 35px;
  border-radius: 15px;
  border: 1px solid #ff4d4f;
  background-color: transparent;
  font-weight: 200;
}
</style>

<style lang="less">
.el-input__inner {
  border: none !important;
}

.el-select__input {
  border: none !important;
}

.el-form-item {
  margin-bottom: 0;
}

.avatar-uploader .el-upload {
  border: 2px dashed #666;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>


