<template>
  <!-- 导航 -->
  <div class="nav" @mouseover="mouseOut()">
    <div class="navimg_left">
      <img src="@/assets/imgs/home/navlogo.png" alt />
    </div>
    <div class="navcontent">
      <div class="navcontent_right" @mouseover="mouseOut()">
        <ul class="navlist">
          <router-link to="/home">
            <li>首页</li>
          </router-link>
          <router-link to="/about">
            <li>关于英铎</li>
          </router-link>
          <router-link to="/business">
            <li class="yewu" ref="yewu" @mouseover="mouseOver()">
              业务介绍
              <ul class="list" ref="downlist" @mouseout="mouseOut()" @click="none()">
                <!-- <router-link to="/investment"> -->
                <li
                  v-for="(item,index) in business_list"
                  :key="index"
                  @click="xiang(item.id)"
                >{{item.text}}</li>
                <!-- </router-link> -->
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
      //定义一下鼠标事件，否则会出现鼠标事件没有在原型链上定义的问题
      mouseover: "",
      mouseout: "",
      business_id: 0,
      business_list: [
        {
          text: "影视节目投资",
          id: 0
        },
        {
          text: "短视频内容营销",
          id: 1
        },
        {
          text: "华为移动媒体投放",
          id: 2
        },
        {
          text: "交通出行媒体",
          id: 3
        }
      ]
    };
  },
  methods: {
    // name: function() {
    //   this.$refs.yewu.onMouseOver(function() {
    //     this.$refs.downlist.style.display = "inline-block";
    //     console.log(11111111111);
    //   });
    //   this.$refs.downlist.onMouseOut(function() {
    //     this.$refs.downlist.style.display = "none";
    //   });
    // },
    mouseOver: function() {
      window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
      this.$refs.downlist.style.display = "inline-block";
      // console.log(11111111111);
    },
    mouseOut: function() {
      this.$refs.downlist.style.display = "none";
      // console.log(22222222);
    },
    none: function() {
      this.$refs.downlist.style.display = "none";
    },
    // stopBubble: function(e) {
    //   console.log(e);
    //   if (e && e.stopPropagation) {
    //     //非IE
    //     e.stopPropagation();
    //   } else {
    //     //IE
    //     window.event.cancelBubble = true;
    //   }
    // },
    //阻止浏览器的默认行为
    stopDefault: function(e) {
      //阻止默认浏览器动作(W3C)
      if (e && e.preventDefault) e.preventDefault();
      //IE中阻止函数器默认动作的方式
      else window.event.returnValue = false;
      // return false;
    },
    xiang(row) {
      // 组织浏览器的冒泡
      // window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
      // this.stopBubble();
      this.stopDefault();
      this.business_id = row;
      this.$store.commit("item_id", this.business_id);
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("business_id", this.business_id);
      //路由跳转携带参数
      this.$router.push({
        name: "investment",
        params: {
          business_id: this.id
        }
      });
    }
  }
};
</script>
<style  scoped>
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
  position: relative;
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
/* .navcontent_right .navlist li:hover .list {
  display: inline-block;
} */
.yewu {
  position: relative;
  /* height: 50px; */
}
.list {
  width: 160px;
  height: 268px;
  background-color: #ffffff;
  /* margin-top: 60px; */
  position: absolute;
  top: 33px;
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
.list li:nth-child(1) {
  margin-top: 26px;
}
</style>
