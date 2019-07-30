<template>
  <div id="app">
    <Header></Header>
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
  transition: all 4s;
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
</style>
