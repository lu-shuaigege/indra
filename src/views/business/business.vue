<template>
  <!-- 首页 -->
  <div class="business">
    <Topbg></Topbg>
    <!-- 四图 -->
    <Fourimg class="fourimg"></Fourimg>
    <!-- 我们的业务 -->
    <div class="content">
      <p class="titlebg">OUR SERVICE</p>
      <p class="title">我们的业务</p>
      <div class="img1">
        <img src="../../assets/imgs/business/business1.png" alt />
      </div>
      <div class="img2">
        <div class="img2_top">
          <img src="../../assets/imgs/business/business2.png" alt />
        </div>
        <div class="img2_bottom">
          <img src="../../assets/imgs/business/business3.png" alt />
        </div>
      </div>
    </div>
    <!-- 合作方 -->
    <Cooperation></Cooperation>
  </div>
</template>
<script>
import Topbg from "@/components/topbg/topbg.vue";
import Fourimg from "@/components/fourimg/fourimg.vue";
import Cooperation from "@/components/cooperation/cooperation.vue";
export default {
  data() {
    return {};
  },
  components: {
    Fourimg,
    Topbg,
    Cooperation
  }
};
</script>
<style scoped>
.business {
  width: 100%；;
}
.fourimg {
  height: 100%;
}
.content {
  width: 100%;
  padding: 1px;
  box-sizing: border-box;
}
.titlebg {
  width: 243px;
  height: 40px;
  font-family: Impact;
  font-size: 48px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 40px;
  letter-spacing: 0px;
  color: #b81b22;
  opacity: 0.2;
  margin: 80px auto 0 auto;
}
.title {
  width: 120px;
  height: 24px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #000000;
  margin: -12px auto 50px auto;
}
.img1 {
  width: 91.15vw;
  min-width: 1200px;
  margin: 0 auto;
}
.img1 img {
  width: 100%;
  height: 100%;
}
.img2 {
  width: 100%;
}
.img2_top {
  width: 91.15vw;
  min-width: 1200px;
  text-align: center;
  background-color: #f8f8f8;
  margin: 24px auto;
}
.img2_top img {
  width: 1175px;
}
.img2_bottom {
  width: 91.15vw;
  min-width: 1200px;
  text-align: center;
  background-color: #f8f8f8;
  margin: 24px auto;
}
.img2_bottom img {
  width: 1200px;
  height: 390px;
}
</style>
