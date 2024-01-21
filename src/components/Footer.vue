<template>
  <div class="footer-inner">
    <div class="footer-details">
      <div class="footer-column">
        <div class="column">
          <span class="caption">产品服务</span>
          <a href="#">高校招聘</a>
          <a href="#">企业招聘</a>
          <a href="#">公务员/事业单位</a>
          <a href="#">科研院校</a>
          <a href="#">高端人才</a>
        </div>
        <div class="column">
          <span class="caption">使用与帮助</span>
          <a href="#">协议与规则</a>
          <a href="#">隐私政策</a>
          <a href="#">防骗指南</a>
          <a href="#">使用帮助</a>
        </div>
        <div class="column">
          <span class="caption">商务合作</span>
          <span>联系人：X老师</span>
          <span>电话：13888888888</span>
          <span>邮箱：1234567789@qq.com</span>
        </div>
        <div class="column">
          <span class="caption">院校就业办合作</span>
          <span>联系人：X老师</span>
          <span>电话：13888888888</span>
          <span>邮箱：1234567789@qq.com</span>
        </div>
        <div class="column">
          <span class="caption">关于我们</span>
          <span>咨询电话：400-600-5555</span>
          <span>工作时间：8：00—18：00</span>
          <span>举报热线：400-600-5555</span>
        </div>
      </div>
      <div class="editor-in-charge">
        <span>版权所有：天津科技大学</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.footer-inner {
  display: flex;
  justify-content: space-around;
  background: #ff4743;
  color: rgba(255, 255, 255);
  width: 100%;
  height: 250px;
  margin-top: 100px;
}
.footer-details {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;
}
.footer-column {
  display: flex;
  justify-content: space-around;
  height: 80%;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 30px;
}
span {
  margin-top: 5px;
  font-size: 14px;
}

a {
  text-decoration: none;
  color: rgba(255, 255, 255);
  margin-top: 5px;
  font-size: 14px;
}
.caption {
  font-weight: 800;
  font-size: 18px;
  margin-bottom: 5px;
}
.editor-in-charge {
  text-align: center;
}
</style>
