<template>
  <Header/>
  <div class="application">
    <div class="content-top">
      <span :class="{ color: tab == 1 }" @click="showTab(1)">已投递</span>
      <span :class="{ color: tab == 2 }" @click="showTab(2)">邀约面试</span>
      <span :class="{ color: tab == 3 }" @click="showTab(3)">被收藏</span>
      <span :class="{ color: tab == 4 }" @click="showTab(4)">不合适</span>
      <span :class="{ color: tab == 5 }" @click="showTab(5)">已下架</span>
    </div>
    <div class="content-center" v-show="tab == 1">
      <div class="item">
        <div class="item-top">
          <p>产品专员</p>
          <span>9k-1.5w</span>
        </div>
        <div class="item-center">
          <div class="txt">
            <p>本科</p>
            <p>应届生</p>
          </div>
          <span>已投递</span>
        </div>
        <div class="item-bottom">
          <img src="../../assets/img/companylogo.png" alt="" />
          <p>北京理想汽车有限公司</p>
        </div>
      </div>
      <div class="item">
        <div class="item-top">
          <p>产品专员</p>
          <span>9k-1.5w</span>
        </div>
        <div class="item-center">
          <div class="txt">
            <p>本科</p>
            <p>应届生</p>
          </div>
          <span>已投递</span>
        </div>
        <div class="item-bottom">
          <img src="../../assets/img/companylogo.png" alt="" />
          <p>北京理想汽车有限公司</p>
        </div>
      </div>
      <div class="item">
        <div class="item-top">
          <p>产品专员</p>
          <span>9k-1.5w</span>
        </div>
        <div class="item-center">
          <div class="txt">
            <p>本科</p>
            <p>应届生</p>
          </div>
          <span>已投递</span>
        </div>
        <div class="item-bottom">
          <img src="../../assets/img/companylogo.png" alt="" />
          <p>北京理想汽车有限公司</p>
        </div>
      </div>
    </div>
    <div class="content-center" v-show="tab == 2">
      <div class="item">
        <div class="item-top">
          <p>产品专员</p>
          <span>9k-1.5w</span>
        </div>
        <div class="item-center">
          <div class="txt">
            <p>本科</p>
            <p>应届生</p>
          </div>
          <span>约面试</span>
        </div>
        <div class="item-bottom">
          <img src="../../assets/img/companylogo.png" alt="" />
          <p>北京理想汽车有限公司</p>
        </div>
      </div>
      <div class="item">
        <div class="item-top">
          <p>产品专员</p>
          <span>9k-1.5w</span>
        </div>
        <div class="item-center">
          <div class="txt">
            <p>本科</p>
            <p>应届生</p>
          </div>
          <span>约面试</span>
        </div>
        <div class="item-bottom">
          <img src="../../assets/img/companylogo.png" alt="" />
          <p>北京理想汽车有限公司</p>
        </div>
      </div>

    </div>
    <div class="content-center" v-show="tab == 3">
      <div class="item">
        <div class="item-top">
          <p>产品专员</p>
          <span>9k-1.5w</span>
        </div>
        <div class="item-center">
          <div class="txt">
            <p>本科</p>
            <p>应届生</p>
          </div>
          <span>被收藏</span>
        </div>
        <div class="item-bottom">
          <img src="../../assets/img/companylogo.png" alt="" />
          <p>北京理想汽车有限公司</p>
        </div>
      </div>
    </div>
    <div class="content-center" v-show="tab == 4">
      <div class="item">
        <div class="item-top">
          <p>产品专员</p>
          <span>9k-1.5w</span>
        </div>
        <div class="item-center">
          <div class="txt">
            <p>本科</p>
            <p>应届生</p>
          </div>
          <span>不合适</span>
        </div>
        <div class="item-bottom">
          <img src="../../assets/img/companylogo.png" alt="" />
          <p>北京理想汽车有限公司</p>
        </div>
      </div>
      <div class="item">
        <div class="item-top">
          <p>产品专员</p>
          <span>9k-1.5w</span>
        </div>
        <div class="item-center">
          <div class="txt">
            <p>本科</p>
            <p>应届生</p>
          </div>
          <span>不合适</span>
        </div>
        <div class="item-bottom">
          <img src="../../assets/img/companylogo.png" alt="" />
          <p>北京理想汽车有限公司</p>
        </div>
      </div>
    </div>
    <div class="content-center" v-show="tab == 5">
      <div class="item">
        <div class="item-top">
          <p>产品专员</p>
          <span>9k-1.5w</span>
        </div>
        <div class="item-center">
          <div class="txt">
            <p>本科</p>
            <p>应届生</p>
          </div>
          <span>已下架</span>
        </div>
        <div class="item-bottom">
          <img src="../../assets/img/companylogo.png" alt="" />
          <p>北京理想汽车有限公司</p>
        </div>
      </div>
      <div class="item">
        <div class="item-top">
          <p>产品专员</p>
          <span>9k-1.5w</span>
        </div>
        <div class="item-center">
          <div class="txt">
            <p>本科</p>
            <p>应届生</p>
          </div>
          <span>已下架</span>
        </div>
        <div class="item-bottom">
          <img src="../../assets/img/companylogo.png" alt="" />
          <p>北京理想汽车有限公司</p>
        </div>
      </div>
      <div class="item">
        <div class="item-top">
          <p>产品专员</p>
          <span>9k-1.5w</span>
        </div>
        <div class="item-center">
          <div class="txt">
            <p>本科</p>
            <p>应届生</p>
          </div>
          <span>已下架</span>
        </div>
        <div class="item-bottom">
          <img src="../../assets/img/companylogo.png" alt="" />
          <p>北京理想汽车有限公司</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Header from '@/components/Header.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    //tab切换
    const tab = ref<number>(1)
    function showTab(index: number) {
      tab.value = index
    }
    return {
      tab,
      showTab,
    }
  },
})
</script>
<style lang="less" scoped>
.application{
  width:70%;
  margin:50px auto;
  background:#fff;
  .content-top{
    display:flex;
    width:100%;
    height:60px;
    line-height:60px;
    padding:0 20px;
    background:#fafafa;
    justify-content:space-around;
    p{
      padding:0 5px;
      font-size:16px;
      font-weight:600;
    }
    .color{
      color:#ff4743;
      border-bottom:3px solid #ff4743;

    }
  }
  .content-center{

    padding:0 30px;
    .item{
      position:relative;
      padding:20px 0;
      border-bottom:1px solid #ebebee;
      .item-top{
        display:flex;
        justify-content:space-between;
        p{
          font-size:16px;
          font-weight:600;
          color:#333;
        }
        span{
          font-size:16px;
          margin-right:30px;
          font-weight:600;
          color:#ff4743;
        }
      }
      .item-center{
        margin:10px 0 8px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .txt{
          width:50%;
          p{
            padding:0 10px 0 5px;
            height:14px;
            line-height:14px;
            border-right:1px solid #e9e9e9;
            display:inline-block;
            font-size:14px;
            color:#666;
          }
        }
        span{
          font-size:14px;
          color:#999;
          text-align:left;
          width:30%;
        }
      }
      .item-bottom{
        height:30px;
        line-height:30px;
        display:flex;
        img{
          width:30px;
          height:30px;
        }
        p{
          font-size:14px;
          margin:0 20px 0 10px;
          font-weight:400;
          color:#333;
        }
      }
    }
  }
}
</style>
