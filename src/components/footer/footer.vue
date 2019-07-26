<template>
  <!-- 导航 -->
  <div class="footer">
    <div class="content">
      <div>
        <router-link to="/business">业务介绍</router-link>
      </div>
      <div>
        <router-link to="/success">成功案例</router-link>
      </div>
      <div>
        <router-link to="/">
          <img src="../../assets/imgs/home/footerlogo.png" alt />
        </router-link>
      </div>
      <div>
        <router-link to="/about">关于英铎</router-link>
      </div>
      <div>
        <router-link to="/contactus">联系我们</router-link>
      </div>
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
  background-color: #2c2a2a;
}
.content {
  width: 1200px;
  height: 120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.content div a {
  width: 64px;
  height: 16px;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 16px;
  letter-spacing: 0px;
  color: #969595;
}
.heng {
  width: 100%;
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
