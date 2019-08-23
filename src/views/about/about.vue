<template>
  <!-- 关于英铎 -->
  <div class="about">
    <!-- 上面背景图片 -->
    <!-- <Topbg></Topbg> -->
    <div class="top">
      <img :src="bgimg" alt />
    </div>
    <!-- 关于英铎简介 -->
    <Aboutindra></Aboutindra>
    <!-- 专业团队 -->
    <div class="major">
      <div class="titlediv">
        <p class="titlebg">专业团队</p>
        <p class="title">PROFESIONAL TEAM</p>
      </div>
      <div class="majortop">
        <div class="majortop_left">
          <img class="leftpeople" src="../../assets/imgs/about/people4.png" alt />
          <div class="majortop_content_left">
            <p class="namep">
              <span class="name">韩 英</span>
              <span class="ying"></span>
            </p>
            <p class="job">董事长</p>
            <div class="content">
              <p class="top_yin">“</p>
              <p class="word">韩英女士毕业于中国医科大学，长江EMBA，独自创立沈阳亿光年集团，旗下拥有房地产、广告传媒、小额贷款等业务，现任公司董事长。</p>
              <p class="bottom_yin">”</p>
            </div>
          </div>
        </div>
        <div class="majortop_right">
          <div class="majortop_content_right">
            <p class="namep">
              <span class="name">徐海鸥</span>
              <span class="ying"></span>
            </p>
            <p class="job">首席营销官 CEO</p>
            <div class="content">
              <p class="top_yin">“</p>
              <p
                class="word"
              >浙江大学工学硕士、复旦大学EMBA，PMP项目管理师。曾就职于微软、阿尔卡特及上海贝尔，在主板上市公司思美传媒股份有限公司期间，先后担任董事长助理、数字互动部总经理、思美影业视动力总经理职务， 先后成功运营或投资的项目包括《我的前半生》、《爱情进化论》、G20全球宣传片等几十部各类影视综艺作品及品牌定制内容。</p>
              <p class="bottom_yin">”</p>
            </div>
          </div>
          <img class="rightpeople" src="../../assets/imgs/about/people2.png" alt />
        </div>
      </div>
      <div class="majorbottom">
        <div class="majorbottom_content">
          <div class="left">
            <p class="left_title">新联在线</p>
            <div class="left_title_con">
              <div class="item item1">
                <div class="item1_bg">
                  <div class="item_bg">
                    <p
                      class="img_p"
                    >资深媒体人April过去12年期间参与及见证国际时尚媒体的发展与转型，为ＥＬＬＥ创新业务模式，协助赫斯特中国在市场份额巨幅增长。从心出发，凭借英铎创智集团的支持，她坚守资深媒体人的信念＂优质內容创造影响力＂，整合资源以立体化结构帶动商机，有利品牌与媒体的永续发展。</p>
                  </div>
                </div>
                <p class="item_p1">
                  <span class="item_p_sp1">傅雅萱</span>
                  <span class="item_p_sp2"></span>
                </p>
                <p class="item_p2">
                  <span class="item_p_sp3">首席营销官 CMO</span>
                </p>
              </div>
              <div class="item item2">
                <div class="item2_bg">
                  <div class="item_bg">
                    <p class="img_p">
                      超过10年的媒体经验，曾任职于Conde Nast CHINA康泰纳仕集团旗下顶尖杂志《VOGUE》, 和HEARST Media美国赫斯特集团旗下《ELLE》,专注于时装、腕表与珠宝、美容及生活方式、旅游等领域。
                      拥有出色的整合营销管理经验和能力，结合平面、网络及市场推广活动，提供从编辑内容到市场活动的综合创意营销方案。
                    </p>
                  </div>
                </div>
                <p class="item_p">
                  <span class="item_p_sp1">令狐佳俊</span>
                  <span class="item_p_sp2"></span>
                </p>
                <p class="item_p2">
                  <span class="item_p_sp3">商务总监</span>
                </p>
              </div>
            </div>
          </div>
          <div class="right">
            <p class="left_title">新联在线</p>
            <div class="left_title_con">
              <div class="item item3">
                <div class="item3_bg">
                  <div class="item_bg">
                    <p class="img_p">
                      超过16年的品牌营销推广工作经验，整合营销推广实战经验丰富。在社会化媒体营销&短视频营销方面有自己独到的见解。
                      管理多个国际知名品牌的整合营销推广业务。
                    </p>
                  </div>
                </div>
                <p class="item_p1">
                  <span class="item_p_sp1">徐韬</span>
                  <!-- <span class="item_p_sp2">Aivon Hui</span> -->
                </p>
                <p class="item_p2">
                  <span class="item_p_sp3">资深策略总监</span>
                </p>
              </div>
              <div class="item item4">
                <div class="item4_bg">
                  <div class="item_bg">
                    <p class="img_p">
                      7年以上新媒体从业经验，擅长内容创作和社会热点的把握。
                      拥有丰富的影视编导及拍摄经验。
                      颠覆传统视频理念，战略性审视品牌传播
                      曾参与制作电影《铜雀台》、动漫《RWBY》
                    </p>
                  </div>
                </div>
                <p class="item_p">
                  <span class="item_p_sp1">付文豪</span>
                  <!-- <span class="item_p_sp2">AJ Kong</span> -->
                </p>
                <p class="item_p2">
                  <span class="item_p_sp3">资深内容经理</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 公司发展 -->
    <div class="major">
      <div class="titlediv">
        <p class="titlebg">公司发展</p>
        <p class="title">THE DEVELOPMENT</p>
      </div>
      <div class="bigimg">
        <div>
          <img :src="imgs" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Aboutindra from "@/components/aboutindra/aboutindra.vue";
import Topbg from "@/components/topbg/topbg.vue";
export default {
  data() {
    return {
      imgs: "",
      bgimg: ""
    };
  },
  components: {
    Aboutindra,
    Topbg
  },

  created() {
    this.histories();
    this.about();
  },
  //让页面滚动到顶部
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
    // this.upabout();
    window.addEventListener("scroll", this.upabout);
  },

  methods: {
    //axios请求
    histories: function() {
      this.$api.get(
        "histories",
        {
          page: 1,
          pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data); //请求成功，response为成功信息参数
            this.imgs = response.data.data.image;
          } else {
            console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },
    //axios请求
    about: function() {
      //查询条件
      //   var param = {
      //     page: page,
      //     pageSize: pageSize
      //     //其它查询条件可在下面添加
      //   };
      this.$api.get(
        "banners/about-us",
        {
          page: 1,
          pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data); //请求成功，response为成功信息参数
            this.bgimg = response.data.data[0].image;
          } else {
            console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },
    upabout: function() {
      // var four = document.getElementsByClassName("four")[0].offsetTop;
      // console.log(four);
      let istrue = true;
      let tabBar = document.getElementsByClassName("wordcontent")[0].offsetTop;
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      let h = document.documentElement.clientHeight;
      console.log(tabBar);
      console.log(t);
      console.log(h);
      let isshow = tabBar - t - h;
      console.log(isshow);
      if (isshow < -100 && istrue) {
        $(".wordcontent")
          .css("margin-top", "0")
          .css("opacity", "0.8");
        // alert("ok");
        istrue = false;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.upabout);
  }
};
</script>
<style scoped>
.about {
  width: 100%;
}
.top {
  width: 100%;
  /* height: 700px; */
}
.top img {
  width: 100%;
  margin-bottom: 100px;
  /* max-height: 600px; */
}
.major {
  width: 100%;
  padding-top: 100px;
}
.titlediv {
  margin-top: 100px;
  /* opacity: 0; */
  transition: margin 0.8s, opacity 1s;
}
.titlebg {
  height: 24px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #000000;
  margin: 0px auto;
  text-align: center;
}
.title {
  height: 11px;
  font-family: ArialMT;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 11px;
  letter-spacing: 0px;
  color: #999999;
  margin: 10px auto 0 auto;
  text-align: center;
}
.majortop {
  width: 91.15vw;
  min-width: 1200px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
}
.majortop_left {
  width: 44.27vw;
  height: 418px;
  /* background-color: #f8f8f8; */
  position: relative;
}
.leftpeople {
  float: left;
  width: 205px;
  /* height: 415px; */
  position: absolute;
  left: 0px;
  bottom: 0px;
}
.majortop_content_left {
  width: 44.27vw;
  min-width: 590px;
  height: 350px;
  background-color: #f8f8f8;
  margin-top: 68px;
  padding-left: 14.53vw;
  padding-top: 1px;
  box-sizing: border-box;
}
.namep {
  margin-top: 32px;
}
.name {
  width: 73px;
  height: 24px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #222222;
}
.ying {
  width: 62px;
  height: 12px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 12px;
  letter-spacing: 0px;
  color: #999999;
}
.job {
  /* width: 240px; */
  height: 17px;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 17px;
  letter-spacing: 0px;
  color: #666666;
}
.content {
  width: 28.39vw;
  min-width: 4px;
  height: 184px;
  margin-top: 1.56vw;
}
.top_yin {
  height: 19px;
  font-family: Impact;
  font-size: 72px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 58px;
  letter-spacing: 0px;
  color: #c1c1c1;
}
.bottom_yin {
  width: 23px;
  height: 19px;
  font-family: Impact;
  font-size: 72px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 58px;
  letter-spacing: 0px;
  color: #c1c1c1;
  float: right;
  overflow: hidden;
}
.word {
  width: 23.59vw;
  min-width: 285px;
  font-family: MicrosoftYaHei;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 25px;
  letter-spacing: 0px;
  color: #222222;
  margin: 8px auto;
}
.majortop_right {
  width: 44.27vw;
  min-width: 590px;
  height: 418px;
  position: relative;
}
.rightpeople {
  float: right;
  width: 205px;
  /* height: 415px; */
  position: absolute;
  right: 0px;
  bottom: 0px;
}
.majortop_content_right {
  width: 100%;
  height: 350px;
  background-color: #f8f8f8;
  margin-top: 68px;
  padding-right: 14.53vw;
  padding-left: 31px;
  padding-top: 1px;
  box-sizing: border-box;
}
.majorbottom {
  width: 91.15vw;
  min-width: 1200px;
  height: 540px;
  background-color: #f8f8f8;
  margin: 0 auto;
  padding: 46px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.majorbottom_content {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 540px;
  height: 100%;
}
.left_title {
  width: 140px;
  height: 18px;
  font-family: MicrosoftYaHei;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 18px;
  letter-spacing: 0px;
  color: #222222;
  margin-bottom: 30px;
}
.left_title_con {
  display: flex;
  justify-content: space-between;
}
.item {
  width: 250px;
  height: 397px;
}
.item1 .item1_bg {
  width: 250px;
  height: 334px;
  background: url("../../assets/imgs/about/people3.jpg");
  background-size: 100% 100%;
  margin-bottom: 21px;
}
.item2 .item2_bg {
  width: 250px;
  height: 334px;
  background: url("../../assets/imgs/about/people1.jpg");
  background-size: 100% 100%;
  margin-bottom: 21px;
}
.item div:hover .img_p {
  display: inline-block;
}
.item div {
  /* height: 162px; */
  display: flex;
  align-items: center;
}
.item_bg {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.img_p {
  display: none;
  width: 199px;
  /* height: 100%; */
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #ffffff;
  padding: 0px 25px;
  /* box-sizing: border-box; */
}
.item_p_sp1 {
  width: 48px;
  height: 17px;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 17px;
  letter-spacing: 0px;
  color: #222222;
}
.item_p_sp2 {
  width: 66px;
  height: 12px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 12px;
  letter-spacing: 0px;
  color: #999999;
}
.item_p_sp3 {
  width: 127px;
  height: 15px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 15px;
  letter-spacing: 0px;
  color: #666666;
}
.right {
  width: 540px;
  height: 100%;
}
.item3 .item3_bg {
  width: 250px;
  height: 334px;
  background: url("../../assets/imgs/about/Eddie.jpg");
  background-size: 100% 100%;
  margin-bottom: 21px;
}
.item4 .item4_bg {
  width: 250px;
  height: 334px;
  background: url("../../assets/imgs/about/Poh.jpg");
  background-size: 100% 100%;
  margin-bottom: 21px;
}
.bigimg {
  width: 91.15vw;
  min-width: 1200px;
  /* background: #f8f8f8; */
  margin: 50px auto;
}
.bigimg div {
  width: 1200px;
  margin: 0 auto;
}
.bigimg div img {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
}
</style>
