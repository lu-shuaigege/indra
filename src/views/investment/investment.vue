<template>
    <!-- 合作详情 -->
    <div class="business">
        <!-- 上面背景图片 -->
        <!-- <Topbg></Topbg> -->
        <div class="top">
            <img :src="bgimg" alt />
        </div>
        <div class="content">
            <ul class="tabitem">
                <li class v-for="(item,index) in tablist" :key="index" @click="nav(item.id)">
                    <p
                        :style="{background:item.id==active?' #b81b22':'#d3d3d4',color:item.id==active?'#fff':'#fff'}"
                    >{{item.title}}</p>
                    <div class="sanjiao" :style="{display:item.id==active?'inline-block':'none'}"></div>
                </li>
            </ul>
            <div class="item_content">
                <div class="item_img">
                    <img :src="image" alt />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Topbg from "@/components/topbg/topbg.vue";
import { constants } from "fs";
import { connect } from "tls";
export default {
    data() {
        return {
            tablist: [
                {
                    id: 1,
                    title: "影视节目投资",
                    image: require("../../assets/imgs/home/redbtn.png")
                },
                {
                    id: 2,
                    title: "短视频内容营销",
                    image: require("../../assets/imgs/home/redbtn.png")
                },
                {
                    id: 3,
                    title: "华为移动媒体投放",
                    image: require("../../assets/imgs/home/redbtn.png")
                },
                {
                    id: 4,
                    title: "交通出行媒体",
                    image: require("../../assets/imgs/home/redbtn.png")
                }
            ],
            image: "",
            active: 0,
            bgimg: ""
        };
    },
    components: {
        Topbg
    },
    created() {
        // 接收路由跳转query里面传过来的参数
        this.active = this.$route.query.business_id;

        //从sessionStorage把页面要用的参数取出来
        this.active = sessionStorage.getItem("business_id");
        this.businessesid();
        this.topimg(sessionStorage.getItem("business_id"));
    },
    watch: {
        "$store.state.item_id": function() {
            //你需要执行的代码
            this.active = this.$store.state.item_id;
            //   console.log(this.active);
            //   console.log(this.$store.state.item_id);
            this.businessesid();
            this.topimg(sessionStorage.getItem("business_id"));
        }
    },
    methods: {
        //点击一级分类向后台获取不同的数据
        nav: function(index) {
            //把页面要传的参数存到sessionStorage里面
            this.active = sessionStorage.setItem("business_id", index);
            this.active = sessionStorage.setItem("titleactive", 2);
            this.active = index;
            this.$store.commit("title_id", 2);
            //   console.log(this.active);
            this.businessesid();
            this.topimg(index);
        },
        //axios请求业务介绍详情
        businessesid: function() {
            this.$api.get(
                "businesses/" + this.active,
                {
                    // id: this.active
                },
                response => {
                    if (response.status >= 200 && response.status < 300) {
                        this.image = response.data.data.image;
                    } else {
                    }
                }
            );
        },
        //axios请求
        businesses: function() {
            this.$api.get(
                "businesses",
                {
                    page: 1,
                    pageSize: 10
                },
                response => {
                    if (response.status >= 200 && response.status < 300) {
                        this.tablist = response.data.data;
                    } else {
                    }
                }
            );
        },
        //axios请求业务介绍上面图片
        topimg: function(x) {
            this.$api.get(
                "banners/businesses/" + x,
                {
                    // page: 1,
                    // pageSize: 10
                },
                response => {
                    if (response.status >= 200 && response.status < 300) {
                        this.bgimg = response.data.data[0].image;
                    } else {
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
.top {
    width: 100%;
    /* height: 700px; */
}
.top img {
    width: 100%;
    margin-bottom: 100px;
    /* max-height: 600px; */
}
.tabitem {
    width: 1200px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
}
.tabitem li {
    width: 285px;
    height: 50px;
    /* font-family: MicrosoftYaHei;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 39px;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center; */
    /* background: #d3d3d4; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.tabitem li p {
    width: 285px;
    height: 40px;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 40px;
    letter-spacing: 0px;
    color: #ffffff;
    text-align: center;
    background: #b81b22;
}
.sanjiao {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #b81b22;
    margin: 0px auto;
}
.tabitem li:hover {
    cursor: pointer;
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
