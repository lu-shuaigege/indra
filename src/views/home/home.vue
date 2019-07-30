<template>
  <!-- 首页 -->
  <div class="home">
    <!-- 轮播图 -->
    <el-carousel
      class="banner animated 1 bounce delay-1s"
      arrow="never"
      height="867px"
      width="100%"
    >
      <el-carousel-item v-for="(item,index) in imgs" :key="index">
        <img :src="item.image" style="width:100%;height:100%" alt />
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
            <div class="img">
              <img :src="caseitem.url" alt />
            </div>

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
      imgs: [],
      caseimg: [
        {
          url: require("../../assets/imgs/home/case1.jpg"),
          title: "上城区千年之约项目访谈",
          text: "短视频内容营销"
        },
        {
          url: require("../../assets/imgs/home/case2.jpg"),
          title: "【虎妈猫爸】影视剧项目投资",
          text: "影视节目投资"
        },
        {
          url: require("../../assets/imgs/home/case3.jpg"),
          title: "【我的前半生】影视剧项目投资",
          text: "影视节目投资"
        },
        {
          url: require("../../assets/imgs/home/case4.jpg"),
          title: "【真心话大冒险】综艺节目投资",
          text: "短视频内容营销"
        },
        {
          url: require("../../assets/imgs/home/case5.jpg"),
          title: "曼秀雷敦【旋风少女】影视广告植入",
          text: "华为移动媒体投放"
        },
        {
          url: require("../../assets/imgs/home/case6.jpg"),
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
  },
  created() {
    this.banner();
  },
  methods: {
    //axios请求
    banner: function() {
      //查询条件
      //   var param = {
      //     page: page,
      //     pageSize: pageSize
      //     //其它查询条件可在下面添加
      //   };
      this.$api.get(
        "banners/index",
        {
          page: 1,
          pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data); //请求成功，response为成功信息参数
            this.imgs = response.data.data;
          } else {
            console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    }
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
  border-bottom: 2px solid #d8362b;
  background: #d8362b;
  /* animation-duration: 2s;
  animation-delay: 2s;
  animation-iteration-count: infinite; */
}
.imgitem:hover p {
  color: #ffffff;
}
.imgitem:hover img {
  transition: all 0.5s;
  -webkit-transition: all 0.5s; /* Safari */
  cursor: pointer;
  transform: scale(1.1);
  -ms-transform: scale(1.1); /* IE 9 */
  -moz-transform: scale(1.1); /* Firefox */
  -webkit-transform: scale(1.1); /* Safari 和 Chrome */
  -o-transform: scale(1.1);
}
.img {
  width: 29vw;
  min-width: 355px;
  height: 22vw;
  min-height: 269px;
  overflow: hidden;
}
.img img {
  width: 100%;
  height: 100%;
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
