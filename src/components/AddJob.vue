<template>
  <div class="content">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="职位名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请填写职位名称"/>
      </el-form-item>
      <el-form-item label="职位类型" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择职位类型">
          <el-option label="兼职" value="shanghai" />
          <el-option label="全职" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="工作时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              v-model="ruleForm.date1"
              type="date"
              label="起始时间"
              placeholder="起始时间"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col class="text-center" :span="2">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-date-picker
              v-model="ruleForm.date2"
              label="结束时间"
              placeholder="结束时间"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="职位地点" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请填写职位地点"/>
      </el-form-item>
      <el-form-item label="企业logo" prop="logo" required>
        <el-upload
          class="avatar-uploader"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="线上/线下" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上" />
          <el-radio label="线下" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="职位详情" prop="desc">
        <el-input v-model="ruleForm.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          创建
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">重新修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules,UploadProps } from 'element-plus'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
interface RuleForm {
  name: string
  region: string
  date1: string
  date2: string
  delivery: boolean
  resource: string
  desc: string,
  logo: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: 'Hello',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  resource: '',
  desc: '',
  logo:''
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: '请填写职位名称', trigger: 'blur' },

  ],
  region: [
    {
      required: true,
      message: '请选择职位类型',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: '请选择起始日期',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: '请选择结束日期',
      trigger: 'change',
    },
  ],

  resource: [
    {
      required: true,
      message: '请选择线上/线下',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: '请填写职位详情', trigger: 'blur' },
  ],
})
const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
}
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>
<style lang="less" scoped>
.content{
  padding:40px 20px;
}
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
/deep/ .avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
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
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>

