<template>
  <div class="fourimg">
    <div class="OURSERVICE">OUR SERVICE</div>
    <div class="fourimg_title">我们的业务</div>
    <div class="imgcontent">
      <div class="imgitem" v-for="(item,index) in fourimg" :key="index">
        <div class="item">
          <img :src="item.url" alt />
        </div>
        <p>{{item.text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fourimg: [
        {
          url: require("../../assets/imgs/home/business1.png"),
          text: "影视节目投资"
        },
        {
          url: require("../../assets/imgs/home/business2.png"),
          text: "影视节目投资"
        },
        {
          url: require("../../assets/imgs/home/business3.png"),
          text: "影视节目投资"
        },
        {
          url: require("../../assets/imgs/home/business4.png"),
          text: "影视节目投资"
        }
      ]
    };
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
  margin: 5vw auto 0 auto;
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
