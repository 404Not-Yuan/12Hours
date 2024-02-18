<template>
  <div class="home">
    <Header />

  <!-- 首页内容 -->
    <div class="screening-box">
      <!-- 搜索栏 -->
      <div class="search-box">
        <div class="wrap-box">
          <input name="search" type="text" placeholder="搜索职位、公司" />
          <button type="submit" class="search-button">搜索</button>
        </div>
      </div>

      <!-- 筛选盒子 -->
      <div class="select-box">
        <!-- 第一栏，关于“城市” -->
        <div class="row-box">
          <div class="row-title">城市</div>
          <div class="row-items">
            <ul>
              <li
                v-for="(country, index) in Countrys"
                :key="index"
                :class="{ activeColor: country.active }"
                @click="changeColor(Countrys,country)"
              >
                <span>{{ country.name }}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 第二栏，关于“薪资” -->
        <div class="row-box">
          <div class="row-title">薪资</div>
          <ul>
            <li
              v-for="(salary, index) in Salaries"
              :key="index"
              :class="{ activeColor: salary.active }"
              @click="changeColor(Salaries,salary)"
            >
              <span>{{ salary.name }}</span>
            </li>
          </ul>
        </div>
        <!-- 第三栏，关于“类型” -->
        <div class="row-box">
          <div class="row-title">类型</div>
          <ul>
            <li
              v-for="(exper, index) in Job_type"
              :key="index"
              :class="{ activeColor: exper.active }"
              @click="changeColor(Job_type,exper)"
            >
              <span>{{ exper.name }}</span>
            </li>
          </ul>
        </div>
        <!-- 以下为“更多”栏 -->
        <div class="row-box">
          <div class="row-title">更多</div>
          <div class="select-container">
            <el-select
              v-model="value1"
              clearable
              value-key="id"
              placeholder="学历要求"
              style="width: 100px"
            >
              <el-option
                v-for="item in options1"
                :key="item.id"
                :label="item.label"
                :value="item"
              />
            </el-select>

            <el-select
              v-model="value2"
              clearable
              value-key="id"
              placeholder="工作经验"
              style="width: 100px"
            >
              <el-option
                v-for="item in options2"
                :key="item.id"
                :label="item.label"
                :value="item"
              />
            </el-select>

            <el-select
              v-model="value3"
              clearable
              value-key="id"
              placeholder="单位性质"
              style="width: 100px"
            >
              <el-option
                v-for="item in options3"
                :key="item.id"
                :label="item.label"
                :value="item"
              />
            </el-select>

            <el-select
              v-model="value4"
              clearable
              value-key="id"
              placeholder="单位规模"
              style="width: 100px"
            >
              <el-option
                v-for="item in options4"
                :key="item.id"
                :label="item.label"
                :value="item"
              />
            </el-select>

            <el-select
              v-model="value5"
              clearable
              value-key="id"
              placeholder="更新时间"
              style="width: 100px"
            >
              <el-option
                v-for="item in options5"
                :key="item.id"
                :label="item.label"
                :value="item"
              />
            </el-select> 
          </div>
        </div>   
      </div>
    </div>
    <Job />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Job from '@/components/Job.vue'
import { ref } from 'vue'
// 筛选框的内容
const Countrys = ref([
  { name: '全国', active: false },
  { name: '北京', active: false },
  { name: '天津', active: false },
  { name: '广州', active: false },
  { name: '上海', active: false },
  { name: '杭州', active: false },
  { name: '河北', active: false },
  { name: '山西', active: false },
  { name: '内蒙古', active: false },
  { name: '辽宁', active: false },
  { name: '吉林', active: false },
  { name: '黑龙江', active: false },
  { name: '江苏', active: false },
  { name: '浙江', active: false },
  { name: '安徽', active: false },
  { name: '福建', active: false },
  { name: '江西', active: false },
  { name: '山东', active: false },
  { name: '湖南', active: false },
  { name: '河北', active: false },
  { name: '其他', active: false },
])
const Salaries = ref([
  { name: '不限', active: false },
  { name: '3K以下', active: false },
  { name: '3K-5K', active: false },
  { name: '5K-10K', active: false },
  { name: '10K-20K', active: false },
  { name: '20K-40K', active: false },
  { name: '40K-60K', active: false },
  { name: '60K以上', active: false },
])
const Job_type = ref([
  { name: '不限', active: false },
  { name: '教育培训', active: false },
  { name: '广告/传媒/文化/体育', active: false },
  { name: '服务业', active: false },
  { name: '房地产/建筑', active: false },
  { name: '专业服务', active: false },
  { name: '金融', active: false },
  { name: '汽车', active: false },
  { name: '互联网/IT/电子/通信', active: false },
  { name: '制药/医疗', active: false },
  { name: '交通/物流/贸易/零售', active: false },
  { name: '能源/化工/环保', active: false },
  { name: '消费品', active: false },
  { name: '机械/制造', active: false },
  { name: '政府/非盈利机构', active: false },
  { name: '其他', active: false },
])
// 筛选框点击事件函数
function changeColor(List: Array<{ name: string; active: boolean }>,item: { name: string; active: boolean }) {
  for (const item of List) {
    item.active = false
  }
  item.active = !item.active
}

// 关于"更多"选择框
type Option = {
  id: number
  label: string
  desc: string
}
const value1 = ref<Option>()
const options1 = ref([
  { id: 1, label: '不限', desc: 'xueli1' },
  { id: 2, label: '本科', desc: 'xueli2' },
  { id: 3, label: '研究生', desc: 'xueli3' },
  { id: 4, label: '博士', desc: 'xueli4' },
])

const value2 = ref<Option>()
const options2 = ref([
  { id: 1, label: '不限', desc: 'experience1' },
  { id: 2, label: '在校生', desc: 'experience2' },
  { id: 3, label: '应届生', desc: 'experience3' },
  { id: 4, label: '1-3年', desc: 'experience4' },
  { id: 5, label: '3-5年', desc: 'experience5' },
  { id: 6, label: '5-10年', desc: 'experience6' },
  { id: 7, label: '10年以上', desc: 'experience7' },
])

const value3 = ref<Option>()
const options3 = ref([
  { id: 1, label: '不限', desc: 'danwei1' },
  { id: 2, label: '国企', desc: 'danwei2' },
  { id: 3, label: '民营', desc: 'danwei3' },
  { id: 4, label: '合资', desc: 'danwei4' },
  { id: 5, label: '外企', desc: 'danwei5' },
  { id: 6, label: '股份制企业', desc: 'danwei6' },
  { id: 7, label: '上市公司', desc: 'danwei7' },
  { id: 8, label: '事业单位', desc: 'danwei8' },
  { id: 9, label: '其他', desc: 'danwei9' },
])

const value4 = ref<Option>()
const options4 = ref([
  { id: 1, label: '不限', desc: 'guimo1' },
  { id: 2, label: '少于50人', desc: 'guimo2' },
  { id: 3, label: '50-100人', desc: 'guimo3' },
  { id: 4, label: '100-500人', desc: 'guimo4' },
  { id: 5, label: '500-1000人', desc: 'guimo5' },
  { id: 6, label: '1000-5000人', desc: 'guimo6' },
  { id: 7, label: '5000-10000人', desc: 'guimo7' },
  { id: 8, label: '10000人以上', desc: 'guimo8' },
])

const value5 = ref<Option>()
const options5 = ref([
  { id: 1, label: '不限', desc: 'time1' },
  { id: 2, label: '3天内', desc: 'time2' },
  { id: 3, label: '7天内', desc: 'time3' },
  { id: 4, label: '15天内', desc: 'time4' },
  { id: 5, label: '30天内', desc: 'time4' },
])
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--c-text);
}
// 首页内容样式
.screening-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
// 搜索框样式
.search-box {
  width: 100%;
  height: 80px;
  background-image: url('../assets/img/home-search-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrap-box {
  width: 70%;
  height: 50px;
  margin-left: 0%;
  display: flex;
  background-color: #fff;
  border-radius: 20px;
  align-items: center;
}
.wrap-box input {
  height: 100%;
  flex: 1;
  margin: 2px 15px;
  padding-left: 20px;
  background-color: transparent;
}
.wrap-box input:focus {
  outline: none;
}
.wrap-box input[type='text'] {
  border: none;
}
.search-button {
  width: 80px;
  height: 80%;
  margin: 0 10px;
  border-radius: 15px;
  cursor: pointer;
  background-color: #ff4d4f;
  color: #fff;
  border: none;
}
// 筛选框样式
.select-box {
  width: 72%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
  padding: 25px;
  // margin: 10px;
  margin: 30px auto 0;
  border-radius: 23px;
}
.row-box {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 25px;

  ul {
    list-style: none;
    .activeColor {
      color: #ff4d4f;
      font-weight: bold;
      padding: 0 5px;
    }
    li {
      display: inline-block;
      line-height: 28px;
      cursor: pointer;
      margin-left: 19px;
    }
  }
}
.row-title {
  display: inline-block;
  font-weight: bold;
  color: #000;
  margin-left: 10px;
  white-space: nowrap;
  line-height: 28px;
}
.select-container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: auto 55px;
}
</style>

<style lang="less">
.el-select{
  margin-top: 3px;
  margin-right: 15px;
}
.el-select-placeholder {
  color: #ff4d4f;
}
.el-select__selected-item span {
  color: rgba(0, 0, 0, 0.8) !important;
}
</style>