<template>
  <div id="app">
    <Header></Header>
    <transition name="fade">
      <!-- <keep-alive> -->
      <router-view></router-view>
      <!-- </keep-alive> -->
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/header/header.vue";
import Footer from "@/components/footer/footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  methods: {}
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  /* background: rgba(229, 229, 229, 0.1); */
  margin: 0 auto;
  min-width: 1200px;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
/* 为对应的路由跳转时设置动画效果 */
.fade-enter-active,
.fade-leave-avtive {
  transition: all 3s;
}
.fade-enter-to,
.fade-leave {
  height: 100%;
}
.fade-enter,
.fade-leave-to {
  opacity: 0.3;
  height: 0px;
}

#app
  > div.home
  > div.banner.animated.\31.bounce.delay-1s.el-carousel.el-carousel--horizontal
  > ul {
  margin-bottom: 3vw;
}
#app
  > div.home
  > div.banner.animated.\31.bounce.delay-1s.el-carousel.el-carousel--horizontal
  > ul
  > li
  > button {
  width: 4.17vw;
  height: 0.42vw;
  background-color: #ffffff;
  opacity: 0.5;
}
#app
  > div.home
  > div.banner.animated.\31.bounce.delay-1s.el-carousel.el-carousel--horizontal
  > ul
  > li.el-carousel__indicator.el-carousel__indicator--horizontal.is-active
  > button {
  background-color: #ffffff;
  opacity: 1;
}
#app > div.home > div.banner.animated.\31 .bounce.delay-1s.el-carousel.el-carousel--horizontal > div > button.el-carousel__arrow.el-carousel__arrow--left {
  width: 50px !important;
  height: 50px !important;
}
#app > div.home > div.banner.animated.\31 .bounce.delay-1s.el-carousel.el-carousel--horizontal > div > button.el-carousel__arrow.el-carousel__arrow--left  i{
-webkit-transform:scale(2);
}
#app > div.home > div.banner.animated.\31 .bounce.delay-1s.el-carousel.el-carousel--horizontal > div > button.el-carousel__arrow.el-carousel__arrow--right {
  width: 50px !important;
  height: 50px !important;
}
#app > div.home > div.banner.animated.\31 .bounce.delay-1s.el-carousel.el-carousel--horizontal > div > button.el-carousel__arrow.el-carousel__arrow--right i{
  -webkit-transform:scale(2);
}
</style>
