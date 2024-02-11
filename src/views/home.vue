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
          <ul>
            <li
              v-for="(country, index) in Countrys"
              :key="index"
              :class="{ activeColor: country.active }"
              @click="changeColor(country)"
            >
              <span>{{ country.name }}</span>
            </li>
          </ul>
        </div>
        <!-- 第二栏，关于“薪资” -->
        <div class="row-box">
          <div class="row-title">薪资</div>
          <ul>
            <li
              v-for="(salary, index) in Salaries"
              :key="index"
              :class="{ activeColor: salary.active }"
              @click="changeColor(salary)"
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
              @click="changeColor(exper)"
            >
              <span>{{ exper.name }}</span>
            </li>
          </ul>
        </div>
        <!-- 以下为“更多”栏，使用elementplus，每一个选项添加了点击事件，但点击事件仅仅只是alert -->
        <div class="row-box">
          <div class="row-title">更多</div>
          <div class="select-container">
            <el-dropdown class="dropdown">
              <el-button class="select-button">
                学历要求<el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    不限
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    本科
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    硕士
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    博士
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>

            <el-dropdown>
              <el-button class="select-button">
                工作经验<el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    不限
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    1年
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    2年
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    3年
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    5年
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>

            <el-dropdown>
              <el-button class="select-button">
                单位性质<el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    不限
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    国企
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    外企
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    合资
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    民营
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>

            <el-dropdown>
              <el-button class="select-button">
                单位规模<el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    不限
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    少于10人
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    10-50人
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    50-100人
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    100人以上
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>

            <el-dropdown class="drop-form">
              <el-button class="select-button">
                更新时间<el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    不限
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    最近一周
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    最近一个月
                  </el-dropdown-item>
                  <el-dropdown-item class="menu-item" @click="handleClick">
                    最近三个月
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
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
import { ArrowDown } from '@element-plus/icons-vue'

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
  { name: '3K以下', active: false },
  { name: '3K-5K', active: false },
  { name: '5K-10K', active: false },
  { name: '10K-20K', active: false },
  { name: '20K-40K', active: false },
  { name: '40K-60K', active: false },
  { name: '60K以上', active: false },
])
const Job_type = ref([
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
function addActive(List: Array<{ name: string; active: boolean }>) {
  for (const item of List) {
    item.active = false
  }
}

function changeColor(item: { name: string; active: boolean }) {
  item.active = !item.active
}

addActive(Countrys.value)
addActive(Salaries.value)
addActive(Job_type.value)

// 关于"更多"选择框
const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('button click')
}
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
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
  padding: 25px;
  margin: 10px;
  border-radius: 23px;
}
.row-box {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  ul {
    list-style: none;
    .activeColor {
      background-color: #f6fbff;
      color: #ff4d4f;
      font-weight: bold;
    }
    li {
      display: inline-block;
      line-height: 28px;
      cursor: pointer;
      margin-left: 20px;
    }
  }
}
.row-title {
  font-weight: bold;
  color: #000;
  margin-left: 10px;
  white-space: nowrap;
}
.select-container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin: 10px 55px;
}
</style>

<style lang="less">
.select-button {
  background-color: #fff;
  margin-right: 20px;
  border: 0.5px solid #000;
  color: #000;
}
.select-button:focus {
  background-color: #fef0f0;
  color: #ff4d4f;
  border-color: #ff4d4f;
  outline-style: none;
}
.menu-item:hover {
  color: #ff4d4f !important;
  font-weight: bold;
}
</style>
