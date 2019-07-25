<template>
  <!-- 首页 -->
  <div class="business">
    <Topbg></Topbg>
    <div class="content">
      <ul class="tabitem">
        <li
          class
          v-for="(item,index) in tablist"
          :key="index"
          @click="nav(index)"
          :style="{background:index==active?'#b81b22':'#fff',color:index==active?'#fff':'#000000'}"
        >{{item.name}}</li>
      </ul>
      <div class="item_content">
        <div class="item_img">
          <img v-show="active==0" src="../../assets/imgs/details/investment.png" alt />
          <img v-show="active==1" src="../../assets/imgs/details/marketing.png" alt />
          <img v-show="active==2" src="../../assets/imgs/details/delivery.png" alt />
          <img v-show="active==3" src="../../assets/imgs/details/media.png" alt />
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
      istrue: true,
      tablist: [
        { name: "影视节目投资" },
        { name: "短视频内容营销" },
        { name: "华为移动媒体投放" },
        { name: "交通出行媒体" }
      ],
      active: 0
    };
  },
  components: {
    Topbg
  },
  methods: {
    //点击一级分类向后台获取不同的数据
    nav: function(index) {
      //把页面要传的参数存到sessionStorage里面
      this.active = index;
    }
  }
};
</script>
<style scoped>
.business {
  width: 100%;
}
.content {
  width: 100%;
}
.tabitem {
  width: 720px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
}
.tabitem li {
  width: 180px;
  height: 40px;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 40px;
  letter-spacing: 0px;
  color: #666666;
  text-align: center;
  border: solid 1px #999999;
}
.tabitem li:hover {
  cursor: pointer;
}
.tabitem li:nth-child(1) {
  border-right: 0;
}
.tabitem li:nth-child(2) {
  border-right: 0;
}
.tabitem li:nth-child(3) {
  border-right: 0;
}
.item_content {
  width: 100%;
}
.item_img {
  width: 91.15vw;
  min-width: 1200px;
  margin: 50px auto 83px auto;
  /* height: 60.42vw; */
}
.item_img img {
  width: 100%;
}
</style>
