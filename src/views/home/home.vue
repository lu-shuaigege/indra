<template>
  <!-- 首页 -->
  <div class="home">
    <!-- 轮播图 -->
    <el-carousel arrow="never" height="867px" width="100%">
      <el-carousel-item v-for="(item,index) in imgs" :key="index">
        <img :src="item.url" style="width:100%;height:100%" alt />
      </el-carousel-item>
    </el-carousel>
    <!-- 四图 -->
    <Fourimg></Fourimg>
    <!-- 简介 -->
    <Aboutindra></Aboutindra>
  </div>
</template>
<script>
import Fourimg from "@/components/fourimg/fourimg.vue";
import Aboutindra from "@/components/aboutindra/aboutindra.vue";
export default {
  data() {
    return {
      imgs: [
        { url: require("@/assets/imgs/home/banner.png") },
        { url: require("@/assets/imgs/home/banner.png") },
        { url: require("@/assets/imgs/home/banner.png") },
        { url: require("@/assets/imgs/home/banner.png") },
        { url: require("@/assets/imgs/home/banner.png") }
      ]
    };
  },
  components: {
    Fourimg,
    Aboutindra
  }
};
</script>
<style scoped>
</style>
