<template>
  <!-- 首页 -->
  <div class="home">
    <!-- 轮播图 -->
    <el-carousel class="banner" arrow="never" height="867px" width="100%">
      <el-carousel-item v-for="(item,index) in imgs" :key="index">
        <img :src="item.url" style="width:100%;height:100%" alt />
      </el-carousel-item>
    </el-carousel>
    <!-- 四图 -->
    <Fourimg></Fourimg>
    <!-- 简介 -->
    <Aboutindra></Aboutindra>
    <!-- 成功案例 -->
    <div class="case">
      <div class="casecontent">
        <p class="titlebg">SUCCESSFUL CASES</p>
        <p class="title">成功案例</p>
        <div class="imgcontent">
          <div class="imgitem" v-for="(caseitem,caseindex) in caseimg" :key="caseindex">
            <img :src="caseitem.url" alt />
            <p class="imgitemtitle">{{caseitem.title}}</p>
            <p class="text">{{caseitem.text}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 合作方 -->
    <Cooperation></Cooperation>
  </div>
</template>
<script>
import Fourimg from "@/components/fourimg/fourimg.vue";
import Aboutindra from "@/components/aboutindra/aboutindra.vue";
import Cooperation from "@/components/cooperation/cooperation.vue";
export default {
  data() {
    return {
      imgs: [
        { url: require("../../assets/imgs/home/banner.png") },
        { url: require("../../assets/imgs/home/banner.png") },
        { url: require("../../assets/imgs/home/banner.png") },
        { url: require("../../assets/imgs/home/banner.png") },
        { url: require("../../assets/imgs/home/banner.png") }
      ],
      caseimg: [
        {
          url: require("../../assets/imgs/home/case1.png"),
          title: "上城区千年之约项目访谈",
          text: "短视频内容营销"
        },
        {
          url: require("../../assets/imgs/home/case2.png"),
          title: "【虎妈猫爸】影视剧项目投资",
          text: "影视节目投资"
        },
        {
          url: require("../../assets/imgs/home/case3.png"),
          title: "【我的前半生】影视剧项目投资",
          text: "影视节目投资"
        },
        {
          url: require("../../assets/imgs/home/case4.png"),
          title: "【真心话大冒险】综艺节目投资",
          text: "短视频内容营销"
        },
        {
          url: require("../../assets/imgs/home/case5.png"),
          title: "曼秀雷敦【旋风少女】影视广告植入",
          text: "华为移动媒体投放"
        },
        {
          url: require("../../assets/imgs/home/case6.png"),
          title: "毛铺酒&良品铺子&自嗨锅【少年派】影视广告植入",
          text: "交通出行媒体"
        }
      ]
    };
  },
  components: {
    Fourimg,
    Aboutindra,
    Cooperation
  }
};
</script>
<style scoped>
.case {
  width: 100%;
  /* height: 1300px; */
  /* height: 69vw; */
  min-height: 960px;
  padding: 1px;
  box-sizing: border-box;
}
.banner {
  margin-bottom: 100px;
}
.casecontent {
  width: 100%;
  /* height: 1145px; */
  margin: 100px auto 0 auto;
}
.titlebg {
  width: 368px;
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
.title {
  width: 96px;
  height: 24px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #000000;
  margin: -12px auto 0 auto;
}
.imgcontent {
  width: 92vw;
  max-width: 1750px;
  min-width: 1200px;
  margin: 50px auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.imgitem {
  width: 29vw;
  min-width: 355px;
  height: 26vw;
  min-height: 345px;
  background-color: #ffffff;
  box-sizing: border-box;
  margin-bottom: 50px;
}
.imgitem:hover {
  box-shadow: 0vw 0vw 1vw 0vw rgba(51, 51, 51, 0.15);
  border-bottom: 2px solid #b81b22;
  cursor: pointer;
}
.imgitem img {
  width: 29vw;
  min-width: 355px;
  height: 22vw;
  min-height: 269px;
}
.imgitem .imgitemtitle {
  height: 21px;
  font-family: MicrosoftYaHei;
  font-size: 1vw;
  font-weight: normal;
  font-stretch: normal;
  line-height: 21px;
  letter-spacing: 0px;
  color: #222222;
  margin: 0.6vw 0 0 1vw;
}
.imgitem .text {
  height: 15px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 15px;
  letter-spacing: 0px;
  color: #999999;
  margin: 0.3vw 0 0 1vw;
}
</style>
