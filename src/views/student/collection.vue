<template>
  <Header/>
  <div class="collection">
    <div class="collection-title">
      <p class="color">我收藏的职位
        <span>0</span>
      </p>
    </div>
    <div class="content">
      <div class="item" @click="router.push({
            name:'jobdetail'
          })">
        <img src="../../assets/img/companylogo.png" alt="" />
        <div class="txt">
          <div class="top">
            <span>产品专员</span>
          </div>
          <div class="middle">
            <span>北京</span>
            <span>应届生</span>
            <span>本科</span>
          </div>
        </div>
        <div class="cancel">
          <img src="@/assets/img/student/xx.svg" alt="" />
          取消收藏
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Header from '@/components/Header.vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    return {
      router
    }
  },
})
</script>
<style lang="less" scoped>
.collection{
  width:80%;
  margin:50px auto;
  padding-bottom:20px;
  background:#fff;
  .collection-title{
    display:flex;
    width:100%;
    height:60px;
    line-height:60px;
    padding:0 30px;
    background:#FAFAFA;
    border-bottom:1px solid #EBEBEB;
    p{
      position:relative;
      margin:0 30px 0 20px;
      padding: 0 5px;
      font-size:16px;
      font-weight:600;
      color:#333;
      span{
        top:10%;
        right:-18%;
        padding:0 5px;
        height:18px;
        line-height:18px;
        background:#FF4743;
        border-radius:50px;
        border:2px solid #ffffff;
        position:absolute;
        font-size:12px;
        font-weight:400;
        color:#FFFFFF;
      }
    }
  }
  .content{
    padding:0 30px 0 20px;
    .item{
      cursor:pointer;
      padding:20px 0;
      border-bottom:1px solid #EBEBEB;
      img{
        float:left;
        margin:0 10px 0 0;
        width:40px;
        height:40px;
      }
      .txt{
        width:600px;
        float:left;
        .top{
          margin-bottom:15px;
          span{
            font-size:16px;
            font-weight:600;
            color:#333;
          }
        }
        .middle{
          margin-top:30px;
          span{
            display:inline-block;
            border-right:1px solid #dddddd;
            padding:0 10px;
            font-size:15px;
            font-family:Source Han Sans CN;
            font-weight:400;
            color:#989898;
          }
        }
      }
      .cancel{
        float:right;
        width:118px;
        height:36px;
        line-height:36px;
        text-align:center;
        background:#FFFFFF;
        border-radius:18px;
        border:1px solid #EBEBEB;
        font-size:14px;
        margin-top:25px;
        font-weight:400;
        color:#999999;
        cursor:pointer;
        display:flex;
        align-items: center;
        justify-content: center;
        img{
          margin:3px 5px 2px 0;
          width:15px;
          height:15px;
        }
      }
      .cancel:hover{
        color:#FFF;
        background:linear-gradient(90deg,#FF4643 0%,#FE6530 100%);
      }
    }
    .item::after, .item::before{
      content:"";
      display:block;
      height:0;
      line-height:0;
      clear:both;
    }
  }
}
</style>
