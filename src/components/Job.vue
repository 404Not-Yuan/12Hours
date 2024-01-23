<template>
  <div class="jobContent">
    <div class="jobTitle">
      <div class="options">
        <span :class="{ active: nowIndex === 0 }" @click="changeTab(0)"
          ><img src="../assets/img/hot.png" alt="" />热门职位</span
        >
        <span :class="{ active: nowIndex === 1 }" @click="changeTab(1)"
          >最新职位</span
        >
      </div>
      <div class="more">
        查看更多<img src="../assets/img/arrow.png" alt="" />
      </div>
    </div>
    <div v-show="nowIndex === 0" class="joblists">
      <ul>
        <li class="item">
          <div class="item-top">
            <span class="jobName ellipsis">食堂窗口兼职</span>
            <span class="jobSalary">12元/小时</span>
          </div>
          <div class="item-center">
            <span class="address">新食堂一楼</span>
            <!-- <span class="require"></span> -->
            <!-- <span class="status"></span> -->
            <span class="time">2024.3-2024.6</span>
          </div>
          <div class="item-bottom">详情</div>
        </li>
        <li class="item">
          <div class="item-top">
            <span class="jobName ellipsis">食堂窗口兼职</span>
            <span class="jobSalary">12元/小时</span>
          </div>
          <div class="item-center">
            <span class="address">新食堂一楼</span>
            <!-- <span class="require"></span> -->
            <!-- <span class="status"></span> -->
            <span class="time">2024.3-2024.6</span>
          </div>
          <div class="item-bottom">详情</div>
        </li>
        <li class="item">
          <div class="item-top">
            <span class="jobName ellipsis">食堂窗口兼职</span>
            <span class="jobSalary">12元/小时</span>
          </div>
          <div class="item-center">
            <span class="address">新食堂一楼</span>
            <!-- <span class="require"></span> -->
            <!-- <span class="status"></span> -->
            <span class="time">2024.3-2024.6</span>
          </div>
          <div class="item-bottom">详情</div>
        </li>
        <li class="item">
          <div class="item-top">
            <span class="jobName ellipsis">食堂窗口兼职</span>
            <span class="jobSalary">12元/小时</span>
          </div>
          <div class="item-center">
            <span class="address">新食堂一楼</span>
            <!-- <span class="require"></span> -->
            <!-- <span class="status"></span> -->
            <span class="time">2024.3-2024.6</span>
          </div>
          <div class="item-bottom">详情</div>
        </li>
        <li class="item">
          <div class="item-top">
            <span class="jobName ellipsis">食堂窗口兼职</span>
            <span class="jobSalary">12元/小时</span>
          </div>
          <div class="item-center">
            <span class="address">新食堂一楼</span>
            <!-- <span class="require"></span> -->
            <!-- <span class="status"></span> -->
            <span class="time">2024.3-2024.6</span>
          </div>
          <div class="item-bottom">详情</div>
        </li>
        <li class="item">
          <div class="item-top">
            <span class="jobName ellipsis">食堂窗口兼职</span>
            <span class="jobSalary">12元/小时</span>
          </div>
          <div class="item-center">
            <span class="address">新食堂一楼</span>
            <!-- <span class="require"></span> -->
            <!-- <span class="status"></span> -->
            <span class="time">2024.3-2024.6</span>
          </div>
          <div class="item-bottom">详情</div>
        </li>
        <li class="item">
          <div class="item-top">
            <span class="jobName ellipsis">食堂窗口兼职</span>
            <span class="jobSalary">12元/小时</span>
          </div>
          <div class="item-center">
            <span class="address">新食堂一楼</span>
            <!-- <span class="require"></span> -->
            <!-- <span class="status"></span> -->
            <span class="time">2024.3-2024.6</span>
          </div>
          <div class="item-bottom">详情</div>
        </li>
        <li class="item">
          <div class="item-top">
            <span class="jobName ellipsis">食堂窗口兼职</span>
            <span class="jobSalary">12元/小时</span>
          </div>
          <div class="item-center">
            <span class="address">新食堂一楼</span>
            <!-- <span class="require"></span> -->
            <!-- <span class="status"></span> -->
            <span class="time">2024.3-2024.6</span>
          </div>
          <div class="item-bottom">详情</div>
        </li>
        <li class="item">
          <div class="item-top">
            <span class="jobName ellipsis">食堂窗口兼职</span>
            <span class="jobSalary">12元/小时</span>
          </div>
          <div class="item-center">
            <span class="address">新食堂一楼</span>
            <!-- <span class="require"></span> -->
            <!-- <span class="status"></span> -->
            <span class="time">2024.3-2024.6</span>
          </div>
          <div class="item-bottom">详情</div>
        </li>
      </ul>
    </div>
    <div v-show="nowIndex === 1" class="joblists">
      <ul>
        <li>222</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    //区别热门职位还是最新职位
    //创建响应式API，使变量具备响应式
    const nowIndex = ref<number>(0)
    function changeTab(index) {
      nowIndex.value = index
    }
    //将需要在模板里面使用的变量return出去
    return {
      nowIndex,
      changeTab,
    }
  },
})
</script>

<style lang="less" scoped>
.jobContent {
  width: 75%;
}
.jobTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 12px;
}
.options {
  display: flex;
  padding-left: 17px;
  font-size: 18px;
  position: relative;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
  width: 220px;
  span {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .active {
    color: #ff4743;
  }
}
.options::before {
  margin-top: 3px;
  content: '';
  display: block;
  position: absolute;
  left: 0;
  width: 4px;
  height: 20px;
  background: #fe4841;
}
.more {
  font-size: 14px;
  font-weight: 400;
  color: #666;
  line-height: 20px;
  margin-top: 3px;
  img {
    margin-left: 5px;
    width: 12px;
    height: 12px;
    transform: rotate(180deg);
  }
}
.joblists {
  margin-top: 20px;
}
ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0;
  padding: 0;
}
.item {
  margin-right: 14px;
  width: 370px;
  background: #fff;
  margin-bottom: 20px;
}
.item:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.12);
}
.item:hover .jobName {
  color: #ff4743;
}
.item-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px 0 20px;
  .jobName {
    font-size: 15px;
    font-weight: bold;
    color: #333;
    line-height: 26px;
    width: 200px;
  }

  .jobSalary {
    font-size: 15px;
    font-weight: 400;
    color: #ff4743;
    line-height: 26px;
  }
}
.item-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px 0 20px;
  span {
    font-size: 13px;
    color: #666;
    line-height: 18px;
    padding: 2px 8px;
    background: #f7f7f7;
    border-radius: 4px;
  }
}
.item-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background: #f6f1f1;
  margin-top: 10px;
  font-size: 13px;
  color: #666;
}
</style>
