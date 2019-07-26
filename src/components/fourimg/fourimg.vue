<template>
  <div class="fourimg">
    <div class="OURSERVICE">OUR SERVICE</div>
    <div class="fourimg_title">我们的业务</div>
    <div class="imgcontent">
      <div class="imgitem" v-for="(item,index) in fourimg" :key="index">
        <!-- <router-link to="/business"> -->
        <div class="item" @click="xiang(item.id)">
          <img :src="item.url" alt />
        </div>
        <p>{{item.text}}</p>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      business_id: 0,
      fourimg: [
        {
          url: require("../../assets/imgs/home/business1.jpg"),
          text: "影视节目投资",
          id: 0
        },
        {
          url: require("../../assets/imgs/home/business2.jpg"),
          text: "短视频内容营销",
          id: 1
        },
        {
          url: require("../../assets/imgs/home/business3.jpg"),
          text: "华为移动媒体投放",
          id: 2
        },
        {
          url: require("../../assets/imgs/home/business4.jpg"),
          text: "交通出行媒体",
          id: 3
        }
      ]
    };
  },
  methods: {
    xiang(row) {
      this.business_id = row;
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("business_id", this.business_id);
      //   console.log(row); //此时就能拿到整行的信息
      this.$router.push({
        name: "investment",
        params: {
          business_id: this.id
        }
      });
    }
  }
};
</script>
<style scoped>
.fourimg {
  max-width: 1920px;
  min-width: 1200px;
  max-height: 45vw;
  min-height: 548px;
  height: 868px;
}
.OURSERVICE {
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
  margin: 0 auto;
}
.fourimg_title {
  width: 120px;
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
  width: 91vw;
  min-width: 1200px;
  height: 30vw;
  display: flex;
  justify-content: space-between;
  margin: 3vw auto 0 auto;
}
.imgitem {
  /* width: 21vw; */
  min-width: 276px;
  /* height: 28vw; */
  min-height: 370px;
  text-align: center;
}
.item {
  width: 21vw;
  min-width: 276px;
  height: 28vw;
  min-height: 370px;
  background-color: #b81b22;
}
.item img {
  width: 100%;
  height: 27vw;
  min-height: 358px;
}
.imgitem p {
  font-family: MicrosoftYaHei;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #222222;
  margin-top: 17px;
}
</style>
