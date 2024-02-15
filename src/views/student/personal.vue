<template>
  <Header />
  <div class="info">
    <div style="margin-right:30px;">
      <div class="info-detail">
        <div class="user-img">
          <el-avatar :size="100" fit="fill"> user </el-avatar>
        </div>
        <h2>天津科技大学欢迎您！</h2>
        <span class="message">你有6条未读消息！</span>
      </div>
      <div class="info-apply">
        <div class="item">
          <img src="@/assets/img/student/jl.svg" alt="" />
          <div>我的简历</div>
        </div>
        <div class="item"  @click="$router.push({
            name:'record'
          })">
          <img src="@/assets/img/student/sqjl.svg" alt="" />
          <div>申请记录</div>
        </div>
        <div class="item" @click="$router.push({
            name:'collection'
          })">
          <img src="@/assets/img/student/gzsc.svg" alt="" />
          <div>关注收藏</div>
        </div>
        <div class="item">
          <img src="@/assets/img/student/wdms.svg" alt="" />
          <div>兼职管理</div>
        </div>
        <div class="item">
          <img src="@/assets/img/student/xxtz.svg" alt="" @click="$router.push({
            name:'inform'
          })"/>
          <div>消息通知</div>
        </div>
        <div class="item">
          <img src="@/assets/img/student/sz.svg" alt=""  @click="$router.push({
            name:'setting'
          })"/>
          <div>账号设置</div>
        </div>
      </div>
    </div>
    <div>
      <div class="progress">
        <img src="@/assets/img/student/userall.svg" alt="" />
      </div>
      <div class="position-info">
        <div class="time">近三个月</div>
        <div class="data">
          <div class="position-data">
            <span>0</span>
            <p>申请职位</p>
          </div>
          <div class="position-data">
            <span>0</span>
            <p>投递职位</p>
          </div>
          <div class="position-data">
            <span>0</span>
            <p>收藏职位</p>
          </div>

        </div>
      </div>
      <div class="resume"></div>
    </div>
  </div>

</template>
<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>
<style lang="less" scoped>
.info{
  width:85%;
  display:flex;
  justify-content:space-between;
  margin: 30px auto 0;
  .info-detail{
    padding:30px;
    width:300px;
    background:#ffffff;
    .user-img{
      display:flex;
      justify-content:center;
      align-items:center;
      width:100%;
    }
    h2{
      font-size:18px;
      margin:15px 0 10px;
      font-weight:600;
      color:#333;
      text-align:center;
    }
    .message{
      display:block;
      width:223px;
      height:36px;
      line-height:36px;
      text-align:center;
      background:#ffffff;
      border:1px solid #e3e3e3;
      font-size:16px;
      color:#666666;
      margin-left:35px;

    }
  }
  .info-apply{
     width:300px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    margin-top:20px;
    padding:30px 30px;
    background:#ffffff;
  }
}
.progress{
  background:#ffffff;
  padding:20px;
  text-align:center;
  img{
    width:800px;
    height:64px;
    vertical-align:middle;
  }
}
.position-info{
  margin:20px 0;
  background:#fff;
  padding:10px 0 20px;
  .time{
    width:110px;
    height:32px;
    line-height:32px;
    text-align:center;
    font-size:16px;
    color:#fff;
    background:linear-gradient(90deg,#ff4643 0%,#fe6530 100%);
    border-radius:0px 16px 16px 0px;
  }
  .data{
    display:flex;
    justify-content:space-between;
    padding:0 73px 0 125px;
    .position-data{
      width:80px;
      height:auto;
      text-align:center;
      span{
        font-size:26px;
        font-weight:600;
        color:#333;
      }
      p{
        font-size:18px;
        color:#666666;
      }
    }
  }
}
.resume{
  padding:16px 20px;
  width:879px;
  background:#ffffff;
}
.item{
  width:60px;
  height:64px;
  margin:13px;
  text-align:center;
  cursor:pointer;
  div{
    font-size:14px;
    color:#333;
  }
}
</style>
