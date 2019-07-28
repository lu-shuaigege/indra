<template>
  <div class="details">
    <Topbg></Topbg>
    <div class="details_content">
      <div class="content">
        <div class="top">
          <div class="top_left">
            <p class="title">{{title}}</p>
            <p class="text">{{time}}</p>
          </div>
          <a :href="url" target="_blank">
            <div class="top_right">
              <img src="../../assets/imgs/details/videobtn.png" alt />
            </div>
          </a>
        </div>
        <hr class="hr" />
        <div class="red"></div>
        <div class="word">
          <img src="../../assets/imgs/details/videobtn.png" alt />
          asdfasdfasdfasdfas sfg asfg fg adfg asfd SDF ADFG ASG ADFG
          ASDFG ASG ASG ASG ASDG ASDG ASG ASG ASG AFDG ASDG ASG ASDG
          ASG FGAGSDFG Aasdfasdfasdfasdfas sfg asfg fg adfg asfd SDF
          ADFG ASG ADFG ASDFG ASG ASG ASG ASDG ASDG ASG ASG ASG AFDG
          ASDG ASG ASDG ASG FGAGSDFG Aasdfasdfasdfasdfas sfg asfg fg a
          dfg asfd SDF ADFG ASG ADFG ASDFG ASG ASG ASG ASDG ASDG ASG ASG
          ASG AFDG ASDG ASG ASDG ASG FGAGSDFG Aasdfasdfasdfasdfas sfg asf
          g fg adfg asfd SDF ADFG ASG ADFG ASDFG ASG ASG ASG ASDG ASDG ASG AS
          G ASG AFDG ASDG ASG ASDG ASG FGAGSDFG Aasdfasdfasdfasdfas sfg asfg fg
          adfg asfd SDF ADFG ASG ADFG ASDFG ASG ASG ASG ASDG ASDG A
          SG ASG ASG AFDG ASDG ASG ASDG ASG FGAGSDFG Aasdfasdfasdfasdfas
          sfg asfg fg adfg asfd SDF ADFG ASG ADFG ASDFG ASG ASG ASG ASDG ASD
          G ASG ASG ASG AFDG ASDG ASG ASDG ASG FGAGSDFG Aasdfasdfasdfasdfas sfg a
          sfg fg adfg asfd SDF ADFG ASG ADFG ASDFG ASG ASG ASG ASDG ASDG ASG ASG ASG
          AFDG ASDG ASG ASDG ASG FGAGSDFG Aasdfasdfasdfasdfas sfg asfg fg adfg asfd S
          DF ADFG ASG ADFG ASDFG ASG ASG ASG ASDG ASDG ASG ASG ASG AFDG ASDG ASG ASDG AS
          G FGAGSDFG Aasdfasdfasdfasdfas sfg asfg fg adfg asfd SDF ADFG
          ASG ADFG ASDFG ASG ASG ASG ASDG ASDG ASG ASG ASG AFDG ASDG ASG
          ASDG ASG FGAGSDFG Aasdfasdfasdfasdfas sfg asfg fg adfg asfd SDF
          ADFG ASG ADFG ASDFG ASG ASG ASG ASDG ASDG ASG ASG ASG AFDG A
          SDG ASG ASDG ASG FGAGSDFG Aasdfasdfasdfasdfas sfg asfg fg adfg as
          fd SDF ADFG ASG ADFG ASDFG ASG ASG ASG ASDG ASDG ASG ASG ASG AFDG ASD
          G ASG ASDG ASG FGAGSDFG Aasdfasdfasdfasdfas sfg asfg fg adfg asfd SDF ADF
          G ASG ADFG ASDFG ASG ASG ASG ASDG ASDG ASG ASG ASG AFDG ASDG ASG ASDG ASG
          FGAGSDFG Aasdfasdfasdfasdfas sfg asfg fg adfg asfd SDF ADFG ASG AD
          FG ASDFG ASG ASG ASG ASDG ASDG ASG ASG ASG AFDG ASDG ASG ASDG ASG FGAG
          SDFG Aasdfasdfasdfasdfas sfg asfg fg adfg asfd SDF ADFG ASG ADFG ASDFG A
          SG ASG ASG ASDG ASDG ASG ASG ASG AFDG ASDG ASG ASDG ASG FGAGSDFG Aasd
          fasdfasdfasdfas sfg asfg fg adfg asfd SDF ADFG ASG ADFG ASDFG ASG ASG A
          SG ASDG ASDG ASG ASG ASG AFDG ASDG ASG ASDG ASG FGAGSDFG Aasdfasdfasdfasdf
          as sfg asfg fg adfg asfd SDF ADFG ASG ADFG ASDFG ASG ASG ASG ASDG ASDG
          ASG ASG ASG AFDG ASDG ASG ASDG ASG FGAGSDFG Aasdfasdfasdfasdfas sf
          g asfg fg adfg asfd SDF ADFG ASG ADFG ASDFG ASG ASG ASG ASDG ASDG ASG
          ASG ASG AFDG ASDG ASG ASDG ASG FGAGSDFG Aasdfasdfasdfasdfas sfg asfg fg a
          dfg asfd SDF ADFG ASG ADFG ASDFG ASG ASG ASG ASDG ASDG ASG ASG ASG AFDG A
          SDG ASG ASDG ASG FGAGSDFG A
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Topbg from "@/components/topbg/topbg.vue";
export default {
  data() {
    return {
      title: "KFC肯德基“四宝闹新春”",
      time: "发布时间：2017-09-25",
      content: "",
      url: "https://v.qq.com/x/cover/gj5uktlld388vmf/y052669szu7.html"
    };
  },
  components: {
    Topbg
  },
  methods: {
    //axios请求
    pagination: function() {
      //查询条件
      //   var param = {
      //     page: page,
      //     pageSize: pageSize
      //     //其它查询条件可在下面添加
      //   };
      this.$api.post(
        "api_findGoodsList.do",
        {
          category: this.category,
          page: this.page,
          pageSize: 12
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data); //请求成功，response为成功信息参数
            this.content = response.data.result.list;
            this.total = response.data.result.total;
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
  height: 14px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 0px;
  color: #999999;
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
