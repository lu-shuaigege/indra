<template>
  <!-- 首页 -->
  <div class="and">
    <div class="andcontent">
      <p class="titlebg">BUSINESS PARTNER</p>
      <p class="title">合作伙伴</p>
      <div class="imgcontent">
        <div class="imgitem" v-for="(item,index) in imgs" :key="index">
          <!-- <div class="item"> -->
          <img :src="item.url" alt />
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        { url: require("../../assets/imgs/home/logo1.png") },
        { url: require("../../assets/imgs/home/logo2.png") },
        { url: require("../../assets/imgs/home/logo3.png") },
        { url: require("../../assets/imgs/home/logo4.png") },
        { url: require("../../assets/imgs/home/logo5.png") },
        { url: require("../../assets/imgs/home/logo6.png") },
        { url: require("../../assets/imgs/home/logo7.png") },
        { url: require("../../assets/imgs/home/logo8.png") },
        { url: require("../../assets/imgs/home/logo9.png") },
        { url: require("../../assets/imgs/home/logo10.png") },
        { url: require("../../assets/imgs/home/logo11.png") },
        { url: require("../../assets/imgs/home/logo12.png") },
        { url: require("../../assets/imgs/home/logo13.png") },
        { url: require("../../assets/imgs/home/logo14.png") },
        { url: require("../../assets/imgs/home/logo15.png") },
        { url: require("../../assets/imgs/home/logo16.png") },
        { url: require("../../assets/imgs/home/logo17.png") },
        { url: require("../../assets/imgs/home/logo18.png") },
        { url: require("../../assets/imgs/home/logo19.png") },
        { url: require("../../assets/imgs/home/logo20.png") },
        { url: require("../../assets/imgs/home/logo21.png") }
      ]
    };
  },
  created() {
    //从sessionStorage把页面要用的参数取出来
    this.casesid = sessionStorage.getItem("casesid");
    this.partners();
  },
  methods: {
    //axios请求
    partners: function() {
      this.$api.get(
        "partners",
        {
          // id: this.casesid
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data); //请求成功，response为成功信息参数
            // this.title = response.data.data.title;
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
.home {
  width: 100%;
}
.andcontent {
  width: 1200px;
  padding: 100px 0;
  margin: 0px auto;
}
.titlebg {
  width: 364px;
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
  width: 98px;
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
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  margin-top: 50px;
}
.imgitem {
  width: 140px;
  height: 68px;
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
  margin: 14px;
}
.imgitem img {
  max-width: 100%;
  max-height: 100%;
}
</style>
