<template>
  <!-- 导航 -->
  <div class="footer">
    <div class="content">
      <ul>
        <h4>业务介绍</h4>
        <router-link to="/">
          <li>户外广告</li>
        </router-link>
        <router-link to="/">
          <li>影视广告</li>
        </router-link>
        <router-link to="/">
          <li>短视频广告</li>
        </router-link>
        <router-link to="/">
          <li>华为手机广告</li>
        </router-link>
      </ul>
      <ul>
        <h4>成功案例</h4>
        <router-link to="/">
          <li>户外广告案例</li>
        </router-link>
        <router-link to="/">
          <li>影视广告案例</li>
        </router-link>
        <router-link to="/">
          <li>短视频广告案例</li>
        </router-link>
        <router-link to="/">
          <li>华为手机广告案例</li>
        </router-link>
      </ul>
      <ul>
        <h4>企业高管</h4>
        <router-link to="/">
          <li>领导团队</li>
        </router-link>
      </ul>
      <ul>
        <h4>企业简介</h4>
        <router-link to="/">
          <li>公司简介</li>
        </router-link>
        <router-link to="/">
          <li>公司理念</li>
        </router-link>
        <router-link to="/">
          <li>企业文化</li>
        </router-link>
      </ul>
      <ul>
        <h4>联系我们</h4>
        <li>
          <img class="footerimg" src="@/assets/imgs/home/tel.png" alt /> 400-123-2345
        </li>
        <li>
          <img class="footerimg" src="@/assets/imgs/home/email.png" alt /> 123456789@163.com
        </li>
      </ul>
      <ul>
        <h4>关注我们</h4>
        <div class="footererwei">
          <img class="footererwei" src="@/assets/imgs/home/erweima.png" alt />
        </div>
        <div class="wei">
          <img class="weiimg" src="@/assets/imgs/home/microblog.png" alt />
          <img class="weiimg" src="@/assets/imgs/home/WeChat.png" alt />
        </div>
      </ul>
    </div>
    <div class="heng"></div>
    <div class="gongsi">copyright@英铎创智传媒集团</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.footer {
  width: 100%;
  height: 365px;
  background-color: #2c2a2a;
}
.content {
  width: 1200px;
  height: 305px;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.content ul {
  width: 166px;
  text-align: center;
}
.content ul h4 {
  font-family: MicrosoftYaHei;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
  margin-bottom: 25px;
}
.content ul li {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.6;
}
.footerimg {
  margin-right: 2px;
}
.weiimg {
  margin: 13px;
}
.heng {
  width: 1920px;
  height: 1px;
  background-color: #ffffff;
  box-shadow: 0px 1px 0px 0px #000000;
  opacity: 0.2;
}
.gongsi {
  width: 1200px;
  height: 59px;
  font-family: MicrosoftYaHei;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 59px;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center;
  margin: 0 auto;
}
</style>
