<template>
  <Header />
  <div class="container">
    <div class="tab-navigator">
      <div class="tab-title">
        <img src="@/assets/img/student/msg.svg" alt="" />
        职位管理
      </div>
        <li @click="showTab(1)" :class="{ tabActive: tab == 1 }">
          <span style="position:relative">
            职位信息发布
          </span>
        </li>
        <li @click="showTab(2)" :class="{ tabActive: tab == 2 }">
          <span style="position:relative">
            职位信息管理
          </span>
        </li>
        <li @click="showTab(3)" :class="{ tabActive: tab == 3 }">
          <span style="position:relative">
            职位申请审批
          </span>
        </li>
        <li @click="showTab(4)" :class="{ tabActive: tab == 4 }">
          <span style="position:relative">
            职位申请统计
          </span>
        </li>


    </div>
    <div class="tab-content">
      <AddJob  v-show="tab == 1"></AddJob>
      <JobManage  v-show="tab == 2"></JobManage>
      <Examine  v-show="tab == 3"></Examine>
      <Charts  v-show="tab == 4"></Charts>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import AddJob from '@/components/AddJob.vue'
import JobManage from '@/components/JobManage.vue'
import Examine from '@/components/Examine.vue'
import Charts from '@/components/Charts.vue'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    //tab切换
    const tab = ref<number>(1)
    function showTab(index: number) {
      tab.value = index
    }
    return {
      router,
      tab,
      showTab,
    }
  },
})
</script>
<style lang="less" scoped>
.container{
  background-color:#F7F6F7;
  width:1200px;
  // height:620px;
  display:flex;
  justify-content:center;
  flex-flow:row;
  margin:50px auto 20px;
  .tab-navigator{
    background-color:#fff;
    width:229px;
    min-height:620px;
    .tab-title{
      background:linear-gradient(90deg,#FF4643 0%,#FE6530 100%);
      font-size:16px;
      font-weight:600;
      color:#FFF;
      height:60px;
      line-height:60px;
      padding-left:20px;
      img{
        vertical-align:middle;
        display:inline-block;
      }
    }

    li{
      padding:0;
      height:40px;
      font-size:14px;
      font-weight:400;
      color:#666666;
      line-height:40px;
      text-align:center;
      cursor:pointer;
    }
    .tabActive{
      background-color:#FFF5F4;
      span{
        color:#FF4743;
      }

    }
  }
  .tab-content{
    height:100%;
    min-height:620px;
    width:955px;
    background-color:#fff;
    margin-left:16px;
    overflow:hidden;
  }
}


</style>
