<template>
  <!-- 关于英铎 -->
  <div class="about">
    <!-- 上面背景图片 -->
    <div class="top"></div>
    <!-- 关于英铎简介 -->
    <Aboutindra></Aboutindra>
    <!-- 专业团队 -->
    <div class="major">
      <p class="titlebg">PROFESIONAL TEAM</p>
      <p class="tiele">专业团队</p>
      <div class="majortop">
        <div class="majortop_left">
          <img class="leftpeople" src="../../assets/imgs/about/people4.png" alt />
          <div class="majortop_content"></div>
        </div>
        <div class="majortop_right">
          <img class="rightpeople" src="../../assets/imgs/about/people2.png" alt />
          <div class="majortop_content"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Aboutindra from "@/components/aboutindra/aboutindra.vue";
export default {
  data() {
    return {
      imgs: [{ url: require("../../assets/imgs/home/logo1.png") }]
    };
  },
  components: {
    Aboutindra
  }
};
</script>
<style scoped>
.about {
  width: 100%;
}
.top {
  width: 100%;
  height: 700px;
  background: url("../../assets/imgs/about/inbanner.png") no-repeat;
  background-position-x: center;
}
.major {
  width: 100%;
  padding-top: 100px;
}
.titlebg {
  width: 360px;
  height: 40px;
  font-family: Impact;
  font-size: 48px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 40px;
  letter-spacing: 0px;
  color: #b81b22;
  opacity: 0.2;
  margin: 0 auto;
}
.tiele {
  width: 98px;
  height: 24px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #222222;
  margin: -12px auto 0 auto;
}
.majortop {
  width: 1750px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
}
.majortop_left {
  width: 850px;
  height: 418px;
  /* background-color: #f8f8f8; */
}
.leftpeople {
  float: left;
}
.majortop_content {
  width: 850px;
  height: 350px;
  background-color: #f8f8f8;
  margin-top: 68px;
}
.majortop_right {
  width: 850px;
  height: 418px;
}
.rightpeople {
  float: right;
}
</style>
