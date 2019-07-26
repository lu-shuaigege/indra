<template>
  <!-- 成功案例 -->
  <div class="success">
    <!-- 上面背景图片 -->
    <Topbg></Topbg>
    <!-- 列表 -->
    <div class="case">
      <div class="casecontent">
        <div class="imgcontent">
          <div class="imgitem" v-for="(caseitem,caseindex) in imglist" :key="caseindex">
            <img :src="caseitem.url" alt />
            <p class="imgitemtitle">{{caseitem.title}}</p>
            <p class="text">{{caseitem.text}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="yema">
      <v-pagination :total="total" :current-page="current" @pagechange="pagechange"></v-pagination>
      <!-- <div id="demo7"></div> -->
    </div>
  </div>
</template>
<script>
import Topbg from "@/components/topbg/topbg.vue";
import pagination from "../../components/pagination/pagination.vue";
export default {
  data() {
    return {
      total: 200, // 记录总条数
      display: 12, // 每页显示条数
      current: 1, // 当前的页数
      category: 1, //一级分类
      page: 1, //页码
      imglist: [
        {
          url: require("../../assets/imgs/home/case1.jpg"),
          title: "上城区千年之约项目访谈",
          text: "短视频内容营销"
        },
        {
          url: require("../../assets/imgs/home/case2.jpg"),
          title: "【虎妈猫爸】影视剧项目投资",
          text: "影视节目投资"
        },
        {
          url: require("../../assets/imgs/home/case3.jpg"),
          title: "【我的前半生】影视剧项目投资",
          text: "影视节目投资"
        },
        {
          url: require("../../assets/imgs/home/case4.jpg"),
          title: "【真心话大冒险】综艺节目投资",
          text: "短视频内容营销"
        },
        {
          url: require("../../assets/imgs/home/case5.jpg"),
          title: "曼秀雷敦【旋风少女】影视广告植入",
          text: "华为移动媒体投放"
        },
        {
          url: require("../../assets/imgs/home/case6.jpg"),
          title: "毛铺酒&良品铺子&自嗨锅【少年派】影视广告植入",
          text: "交通出行媒体"
        },
        {
          url: require("../../assets/imgs/home/case1.jpg"),
          title: "上城区千年之约项目访谈",
          text: "短视频内容营销"
        },
        {
          url: require("../../assets/imgs/home/case2.jpg"),
          title: "【虎妈猫爸】影视剧项目投资",
          text: "影视节目投资"
        },
        {
          url: require("../../assets/imgs/home/case3.jpg"),
          title: "【我的前半生】影视剧项目投资",
          text: "影视节目投资"
        },
        {
          url: require("../../assets/imgs/home/case4.jpg"),
          title: "【真心话大冒险】综艺节目投资",
          text: "短视频内容营销"
        },
        {
          url: require("../../assets/imgs/home/case5.jpg"),
          title: "曼秀雷敦【旋风少女】影视广告植入",
          text: "华为移动媒体投放"
        },
        {
          url: require("../../assets/imgs/home/case6.jpg"),
          title: "毛铺酒&良品铺子&自嗨锅【少年派】影视广告植入",
          text: "交通出行媒体"
        }
      ]
    };
  },
  components: {
    Topbg,
    //引入分页组件
    "v-pagination": pagination
  },
  methods: {
    //分页组件向后台发送请求
    pagechange: function(currentPage) {
      this.page = currentPage;
      // ajax请求, 向后台发送 currentPage, 来获取对应的数据
      this.pagination();
    },
    //点击一级分类向后台获取不同的数据
    nav: function(index, id) {
      this.category = id;
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("category", this.category);
      this.pagination();
      this.active = index;
    },
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
.success {
  width: 100%;
}
.case {
  width: 100%;
  /* height: 1300px; */
  /* height: 69vw; */
  min-height: 960px;
  padding: 1px;
  box-sizing: border-box;
}
.casecontent {
  width: 100%;
  /* height: 1145px; */
  margin: 0 auto;
}
.imgcontent {
  width: 92vw;
  max-width: 1750px;
  min-width: 1200px;
  margin: 50px auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.imgitem {
  width: 29vw;
  min-width: 355px;
  height: 26vw;
  min-height: 345px;
  background-color: #ffffff;
  box-sizing: border-box;
  margin-bottom: 50px;
}
.imgitem:hover {
  box-shadow: 0vw 0vw 1vw 0vw rgba(51, 51, 51, 0.15);
  border-bottom: 2px solid #b81b22;
}
.imgitem img {
  width: 29vw;
  min-width: 355px;
  height: 22vw;
  min-height: 269px;
}
.imgitem .imgitemtitle {
  height: 21px;
  font-family: MicrosoftYaHei;
  font-size: 1vw;
  font-weight: normal;
  font-stretch: normal;
  line-height: 21px;
  letter-spacing: 0px;
  color: #222222;
  margin: 0.6vw 0 0 1vw;
}
.imgitem .text {
  height: 15px;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 15px;
  letter-spacing: 0px;
  color: #999999;
  margin: 0.3vw 0 0 1vw;
}
.yema {
  margin-bottom: 170px;
}
</style>
