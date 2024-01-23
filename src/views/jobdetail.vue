<template>
  <Header />
  <div class="detail">
    <div class="left">
      <div class="title">
        <div class="jobName">食堂窗口兼职</div>
        <div class="updateTime">更新于：2024.01.17</div>
      </div>
      <div class="salary">120/天</div>
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          line-height: 55px;
          height: 55px;
        "
      >
        <div class="address">
          <img src="../assets/img/address.png" />
          <div class="address-text">新食堂一楼口水鸡窗口</div>
        </div>
        <div class="resume">投递简历</div>
      </div>
      <div class="catagory">
        <p>工作性质：兼职</p>
        <p>职位类别：校园招聘</p>
        <p>招聘部门：店端</p>
        <p>招聘人数：100人</p>
      </div>
      <div class="responsibility">
        <div class="res-title">岗位职责</div>
        <div class="box">
          产品专员为零售门店的销售岗位，秉承服务至上的理念，通过高质量的进店服务、专业的产品讲解以及优质的试乘试驾服务，在为用户带来极致购买体验的同时，达成门店销量目标。
        </div>
      </div>
      <div class="requirement">
        <div class="res-title">任职要求</div>
        <div class="box">
          1. 2024届本科毕业生，持C1/C2驾照，驾驶技术熟练； 2.
          优秀的沟通能力与客户服务意识，真诚热情； 3.
          做事严谨细心，责任心强，目标使命感强； 4.
          具备良好的自驱力和抗压力，能够在高速发
        </div>
      </div>
      <div class="tips">
        <img src="../assets/img/tips.svg" />
        如发现虚假宣传、不良信息或收取财物等违法情况，请联系管理员
      </div>
    </div>
    <div class="right">
      <div class="right-title">单位信息</div>
      <div class="right-box">
        <div>
          <img class="companylogo" src="../assets/img/companylogo.png" />
        </div>
        <span class="right-companyName">北京理想汽车有限公司</span>
      </div>
      <div class="right-text">
        <p>性质：合资</p>
        <p>行业：餐饮</p>
        <p>地区：中院新食堂一楼</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<style lang="less" scoped>
.detail {
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 30px auto 0;
}
.left {
  width: 65%;
  padding: 30px 24px;
  background: #fff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
}
.title {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 34px;
  line-height: 34px;
  font-family: Source Han Sans CN;
  font-weight: 500;
}
.jobName {
  font-size: 20px;

  width: 80%;
  color: #000000;
}
.updateTime {
  font-size: 14px;
  text-align: center;
  color: #666;
  line-height: 34px;
}
.salary {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffa600;
  height: 34px;
  line-height: 34px;
}
.address {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  img {
    width: 12px;
    height: 12px;
    margin-right: 5px;
  }
}
.resume {
  width: 85px;
  height: 32px;
  line-height: 32px;
  background: linear-gradient(90deg, #ff4643 0%, #fe6530 100%);
  border-radius: 4px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  text-align: center;
  color: #fff;
  margin-right: 20px;
  cursor: pointer;
}
.catagory {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  padding-top: 5px;
  border-top: 1px solid #ebebeb;
  p {
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #666666;
    word-wrap: break-word;
    width: 320px;
  }
}
.responsibility {
  margin-top: 10px;
  padding-top: 5px;
  border-top: 1px solid #ebebeb;
}
.res-title {
  margin: 15px 0 5px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 600;
  color: #333333;
  padding-left: 5px;
  border-left: 6px solid #fe4841;
}
.box {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  line-height: 35px;
  color: #666666;
  word-wrap: break-word;
  margin-top: 12px;
}
.requirement {
  margin-top: 10px;
  padding-top: 5px;
  border-top: 1px solid #ebebeb;
  word-wrap: break-word;
}
.tips {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  background: #fff5f5;
  font-size: 14px;
  font-weight: 400;
  color: #999999;
  line-height: 18px;
  margin-top: 20px;
  img {
    margin-right: 5px;
  }
}
.right {
  width: 25%;
  height: 350px;
  padding: 20px 14px;
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
}
.right-title {
  font-size: 16px;
  height: 20px;
  line-height: 20px;
  font-weight: 600;
  width: 100%;
  border-left: 6px solid #fe4841;
  padding-left: 5px;
}
.right-box {
  text-align: center;
  position: relative;
  border-top: 1px solid #eee;
  margin-top: 10px;
  padding-top: 24px;
  div {
    display: flex;
    justify-content: center;
  }
  img {
    display: block;
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
  .right-companyName {
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 16px;
    color: #333;
  }
}
.right-text {
  margin-top: 40px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  word-break: break-all;
  p {
    line-height: 20px;
  }
}
</style>
