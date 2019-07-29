<template>
  <div class="details">
    <Topbg></Topbg>
    <div class="details_content">
      <div class="content">
        <div class="top">
          <div class="top_left">
            <p class="title">{{title}}</p>
            <p class="text">发布时间：{{time}}</p>
          </div>
          <a :href="url" target="_blank">
            <div class="top_right">
              <img src="../../assets/imgs/details/videobtn.png" alt />
            </div>
          </a>
        </div>
        <hr class="hr" />
        <div class="red"></div>
        <div class="word">{{content}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Topbg from "@/components/topbg/topbg.vue";
export default {
  data() {
    return {
      title: "",
      time: "",
      content: "",
      url: "",
      casesid: 0
    };
  },
  components: {
    Topbg
  },
  created() {
    //从sessionStorage把页面要用的参数取出来
    this.casesid = sessionStorage.getItem("casesid");
    this.cases();
  },
  methods: {
    //axios请求
    cases: function() {
      this.$api.get(
        "cases/" + this.casesid,
        {
          // id: this.casesid
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data); //请求成功，response为成功信息参数
            this.title = response.data.data.title;
            this.time = response.data.data.published_at;
            this.url = response.data.data.video;
            this.url = response.data.data.content;
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
.details {
  width: 100%;
}
.details_content {
  width: 91vw;
  min-width: 1200px;
  margin: 0 auto;
}
.top {
  width: 1200px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.top_left {
  width: 268px;
  height: 50px;
}
.title {
  width: 285px;
  height: 24px;
  font-family: MicrosoftYaHei;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #222222;
}
.text {
  width: 148px;
  height: 30px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 0px;
  color: #999999;
  overflow: hidden;
}
.hr {
  width: 100%;
}
.red {
  width: 60px;
  height: 3px;
  background-color: #b81b22;
  margin: -2px auto 50px auto;
}
.word {
  width: 1200px;
  margin: 0 auto 146px auto;
}
</style>
