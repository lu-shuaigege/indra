<template>
  <!-- 导航 -->
  <div class="nav">
    <div class="navimg_left">
      <img src="@/assets/imgs/home/navlogo.png" alt />
    </div>
    <div class="navcontent">
      <div class="navcontent_right">
        <ul class="navlist">
          <router-link to="/home">
            <li>首页</li>
          </router-link>
          <router-link to="/about">
            <li>关于英铎</li>
          </router-link>
          <router-link to="/business">
            <li class="yewu">
              业务介绍
              <ul class="list">
                <router-link to="/investment">
                  <li>影视节目投资</li>
                </router-link>
                <router-link to="/marketing">
                  <li>短视频内容营销</li>
                </router-link>
                <router-link to="/delivery">
                  <li>华为移动媒体投放</li>
                </router-link>
                <router-link to="/media">
                  <li>交通出行媒体</li>
                </router-link>
              </ul>
            </li>
          </router-link>
          <router-link to="/success">
            <li>成功案例</li>
          </router-link>
          <router-link to="/contactus">
            <li>联系我们</li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: true
    };
  }
};
</script>
<style scoped>
.nav {
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  /* border: 1px solid; */
}
.navimg_left {
  width: 240px;
  min-width: 240px;
  height: 49px;
  margin-left: 85px;
}
.navimg_left img {
  width: 100%;
  height: 100%;
}
.navcontent {
  width: 1200px;
  height: 19px;
  display: flex;
  justify-content: flex-end;
}
.navcontent_right {
  width: 536px;
  height: 19px;
  /* position: relative; */
}
.navcontent_right .navlist {
  display: flex;
  justify-content: space-between;
}
.navcontent_right .navlist li {
  width: 80px;
  font-family: MicrosoftYaHei;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #222222;
  text-align: center;
}
.navcontent_right .navlist li:hover {
  padding-bottom: 7px;
  border-bottom: 2px solid #b81b22;
}
.navcontent_right .navlist li:hover .list {
  display: inline-block;
}
.yewu {
  position: relative;
  height: 50px;
}
.list {
  width: 160px;
  height: 243px;
  background-color: #ffffff;
  position: absolute;
  top: 60px;
  left: -40px;
  box-sizing: border-box;
  overflow: hidden;
  display: none;
  z-index: 99;
}

.list li {
  width: 160px !important;
  height: 60.5px;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 61px !important;
  letter-spacing: 0px;
  color: #222222;
  text-align: center;
  border-bottom: 1px solid rgba(225, 225, 225, 0.5);
}
.list li:hover {
  width: 160px !important;
  height: 60.5px !important;
  display: inline-block;
  color: #b81b22;
  border-bottom: 1px solid rgba(225, 225, 225, 0.5) !important;
}
</style>
