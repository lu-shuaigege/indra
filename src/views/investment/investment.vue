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
          <img
            v-for="(item,index) in data"
            :key="index"
            v-show="active==item.id-1"
            :src="item.image"
            alt
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Topbg from "@/components/topbg/topbg.vue";
import { constants } from "fs";
export default {
  data() {
    return {
      tablist: [
        { name: "影视节目投资" },
        { name: "短视频内容营销" },
        { name: "华为移动媒体投放" },
        { name: "交通出行媒体" }
      ],
      data: [],
      active: 0
    };
  },
  components: {
    Topbg
  },
  created() {
    // 接收路由跳转Params里面传过来的参数
    // this.active = this.$route.params.business_id;

    //从sessionStorage把页面要用的参数取出来
    this.active = sessionStorage.getItem("business_id");
    this.businesses();
  },
  watch: {
    "$store.state.item_id": function() {
      //你需要执行的代码
      this.active = this.$store.state.item_id;
    }
  },
  methods: {
    //点击一级分类向后台获取不同的数据
    nav: function(index) {
      //把页面要传的参数存到sessionStorage里面
      this.active = index;
      console.log(this.active);
    },
    //axios请求
    businesses: function() {
      this.$api.get(
        "businesses/" + this.active,
        {
          // id: this.active
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response.data); //请求成功，response为成功信息参数
            this.data = response.data.data.data;
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
