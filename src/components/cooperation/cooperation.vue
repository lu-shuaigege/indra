<template>
  <!-- 首页 -->
  <div class="and">
    <div class="andcontent">
      <p class="titlebg">BUSINESS PARTNER</p>
      <p class="title">合作伙伴</p>
      <div class="imgcontent">
        <div class="imgitem" v-for="(item,index) in imgs" :key="index">
          <!-- <div class="item"> -->
          <img :src="item.logo" alt />
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
      imgs: []
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
