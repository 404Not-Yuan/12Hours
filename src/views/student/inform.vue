<template>
  <Header/>
  <div class="container">
    <div class="tab-navigator">
      <div class="tab-title">
        <img src="@/assets/img/student/msg.svg" alt="" />
        消息通知
      </div>

        <li class="tabActive">
          <span style="position:relative">
            我的通知
            <span class="unread-box">
              <span class="unread"></span>
            </span>
          </span>
        </li>

    </div>
    <div class="tab-content">
      <div class="panel">
        <div class="panel-title">
          <div class="left">
            <p @click="showTab(1)" :class="{ color: tab == 1 }">面试通知
              <span>4</span>
            </p>
            <p @click="showTab(2)" :class="{ color: tab == 2 }">消息通知</p>
            <p @click="showTab(3)" :class="{ color: tab == 3 }">审核结果</p>
          </div>
        </div>
      </div>
      <div class="list" v-show="tab == 1">
        <div class="item">
          <div class="item-left">
            <img src="@/assets/img/student/position.png" alt="" />
            <div class="unread-box">
              <span class="unread"></span>
            </div>
          </div>
          <div class="item-middle">
            <span class="item-type">职位通知</span>
            <span class="item-time">2024-02-02 01：54</span>
            <div class="item-msg-wrap">
              <span class="item-msg">
                Hi，邬振远，我们为你精心推荐了一批符合你的优质职位，快去看看吧~
              </span>
            </div>
          </div>
          <div class="item-right">
            <button class="delete">
              删除
            </button>
          </div>
        </div>
        <div class="item">
          <div class="item-left">
            <img src="@/assets/img/student/position.png" alt="" />
            <div class="unread-box">
              <span class="unread"></span>
            </div>
          </div>
          <div class="item-middle">
            <span class="item-type">职位通知</span>
            <span class="item-time">2024-02-02 01：54</span>
            <div class="item-msg-wrap">
              <span class="item-msg">
                Hi，邬振远，我们为你精心推荐了一批符合你的优质职位，快去看看吧~
              </span>
            </div>
          </div>
          <div class="item-right">
            <button class="delete">
              删除
            </button>
          </div>
        </div>
        <div class="item">
          <div class="item-left">
            <img src="@/assets/img/student/position.png" alt="" />
            <div class="unread-box">
              <span class="unread"></span>
            </div>
          </div>
          <div class="item-middle">
            <span class="item-type">职位通知</span>
            <span class="item-time">2024-02-02 01：54</span>
            <div class="item-msg-wrap">
              <span class="item-msg">
                Hi，邬振远，我们为你精心推荐了一批符合你的优质职位，快去看看吧~
              </span>
            </div>
          </div>
          <div class="item-right">
            <button class="delete">
              删除
            </button>
          </div>
        </div>
        <div class="item">
          <div class="item-left">
            <img src="@/assets/img/student/position.png" alt="" />
            <div class="unread-box">
              <span class="unread"></span>
            </div>
          </div>
          <div class="item-middle">
            <span class="item-type">职位通知</span>
            <span class="item-time">2024-02-02 01：54</span>
            <div class="item-msg-wrap">
              <span class="item-msg">
                Hi，邬振远，我们为你精心推荐了一批符合你的优质职位，快去看看吧~
              </span>
            </div>
          </div>
          <div class="item-right">
            <button class="delete">
              删除
            </button>
          </div>
        </div>
      </div>
      <div class="list" v-show="tab == 2">
        <div class="item">
          <div class="item-left">
            <img src="@/assets/img/student/position.png" alt="" />
            <div class="unread-box">
              <span class="unread"></span>
            </div>
          </div>
          <div class="item-middle">
            <span class="item-type">消息通知</span>
            <span class="item-time">2024-02-02 01：54</span>
            <div class="item-msg-wrap">
              <span class="item-msg">
                Hi，邬振远，我们为你精心推荐了一批符合你的优质职位，快去看看吧~
              </span>
            </div>
          </div>
          <div class="item-right">
            <button class="delete">
              删除
            </button>
          </div>
        </div>
        <div class="item">
          <div class="item-left">
            <img src="@/assets/img/student/position.png" alt="" />
            <div class="unread-box">
              <span class="unread"></span>
            </div>
          </div>
          <div class="item-middle">
            <span class="item-type">消息通知</span>
            <span class="item-time">2024-02-02 01：54</span>
            <div class="item-msg-wrap">
              <span class="item-msg">
                Hi，邬振远，我们为你精心推荐了一批符合你的优质职位，快去看看吧~
              </span>
            </div>
          </div>
          <div class="item-right">
            <button class="delete">
              删除
            </button>
          </div>
        </div>
      </div>
      <div class="list" v-show="tab == 3">
        <div class="item">
          <div class="item-left">
            <img src="@/assets/img/student/position.png" alt="" />
            <div class="unread-box">
              <span class="unread"></span>
            </div>
          </div>
          <div class="item-middle">
            <span class="item-type">审核结果</span>
            <span class="item-time">2024-02-02 01：54</span>
            <div class="item-msg-wrap">
              <span class="item-msg">
                Hi，邬振远，我们为你精心推荐了一批符合你的优质职位，快去看看吧~
              </span>
            </div>
          </div>
          <div class="item-right">
            <button class="delete">
              删除
            </button>
          </div>
        </div>
        <div class="item">
          <div class="item-left">
            <img src="@/assets/img/student/position.png" alt="" />
            <div class="unread-box">
              <span class="unread"></span>
            </div>
          </div>
          <div class="item-middle">
            <span class="item-type">审核结果</span>
            <span class="item-time">2024-02-02 01：54</span>
            <div class="item-msg-wrap">
              <span class="item-msg">
                Hi，邬振远，我们为你精心推荐了一批符合你的优质职位，快去看看吧~
              </span>
            </div>
          </div>
          <div class="item-right">
            <button class="delete">
              删除
            </button>
          </div>
        </div>
        <div class="item">
          <div class="item-left">
            <img src="@/assets/img/student/position.png" alt="" />
            <div class="unread-box">
              <span class="unread"></span>
            </div>
          </div>
          <div class="item-middle">
            <span class="item-type">审核结果</span>
            <span class="item-time">2024-02-02 01：54</span>
            <div class="item-msg-wrap">
              <span class="item-msg">
                Hi，邬振远，我们为你精心推荐了一批符合你的优质职位，快去看看吧~
              </span>
            </div>
          </div>
          <div class="item-right">
            <button class="delete">
              删除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
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
  height:636px;
  display:flex;
  justify-content:center;
  flex-flow:row;
  margin:50px auto 0;
  .tab-navigator{
    background-color:#fff;
    width:229px;
    min-height:636px;
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
      text-align:center
    }
    .tabActive{
      background-color:#FFF5F4;
      span{
        color:#FF4743;
      }
      .unread-box{
        position:absolute;
        right:-12px;
        top:0;
        .unread{
          display:block;
          height:10px;
          width:10px;
          background:#FF4743;
          border-radius:50px;
        }
      }
    }
  }
  .tab-content{
    height:100%;
    min-height:636px;
    width:955px;
    background-color:#fff;
    margin-left:16px;
    overflow:hidden;
    .panel{
      display:flex;
      width:100%;
      height:60px;
      line-height:60px;

      background:#FAFAFA;
      .panel-title{
        display:flex;
        width:100%;
        height:60px;
        line-height:60px;
        padding:0 30px;
        background:#FAFAFA;
        .left{
          display:flex;
          p{
            padding:0 5px;
            margin:0;
            margin-right:55px;
            position:relative;
            span{
              display:block;
              position:absolute;
              top:25%;
              left:90%;
              line-height:16px;
              padding:0 5px;
              height:16px;
              background:#FF4743;
              border-radius:50px;
              font-size:10px;
              color:#fff;
            }
          }
          .color{
            color:#FF4743;
            border-bottom:3px solid #FF4743;
          }
        }
      }
    }
    .list{
      margin:0 auto;
      padding:0 20px 23px ;
      .item{
        display:flex;
        align-items:center;
        cursor:auto;
        position:relative;
        float:left;
        width:100%;

        border-bottom:1px solid #EBEBEB;

        height:113px;
        .item-left{
          width:62px;
          position:relative;
          margin-right:15px;
          img{
            vertical-align:middle;
            display:inline-block;
          }
          .unread-box{
            position:absolute;
            right:0;
            top:0;
            .unread{
              display:block;
              height:10px;
              width:10px;
              background:#FF4743;
              border-radius:50px;
            }
          }
        }
        .item-middle{
          font-size:14px;
          color:#333;
          .item-type{
            font-weight:600;
            font-size:16px;
            color:#333;
            margin-right:16px;
          }
          .item-msg-wrap{
            margin-top:12px;
            .item-msg{
              font-weight:600;
            }
          }
        }
        .item-right{
          width:108px;
          position:relative;
          margin-left:100px;
          .delete{
            width:84px;
            height:36px;
            background:#FFF;
            border-radius:18px;
            border:1px solid #EBEBEB;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
          }
        }
      }
    }
  }
}
</style>
