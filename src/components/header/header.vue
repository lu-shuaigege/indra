<template>
    <!-- 导航 -->
    <div class="nav" @mouseover="mouseOut()">
        <div class="navimg_left">
            <router-link to="/">
                <img @click="clickdown(0)" src="@/assets/imgs/home/navlogo.png" alt />
            </router-link>
        </div>
        <div class="navcontent">
            <div class="navcontent_right" @mouseover="mouseOut()">
                <ul class="navlist">
                    <router-link to="/home">
                        <li
                            @click="clickdown(0)"
                            :style="{borderBottom:active==0?'2px solid #b81b22':'0'}"
                        >首页</li>
                    </router-link>
                    <router-link to="/about">
                        <li
                            @click="clickdown(1)"
                            :style="{borderBottom:active==1?'2px solid #b81b22':'0'}"
                        >关于英铎</li>
                    </router-link>
                    <router-link to="/business">
                        <li
                            class="yewu"
                            ref="yewu"
                            @mouseover="mouseOver()"
                            @click="clickdown(2)"
                            :style="{borderBottom:active==2?'2px solid #b81b22':'0'}"
                        >
                            业务介绍
                            <ul class="list" ref="downlist" @mouseout="mouseOut()" @click="none()">
                                <!-- <router-link to="/investment"> -->
                                <li
                                    v-for="(item,index) in business_list"
                                    :key="index"
                                    @click="xiang(item.id)"
                                >{{item.title}}</li>
                                <!-- </router-link> -->
                            </ul>
                        </li>
                    </router-link>
                    <router-link to="/success">
                        <li
                            @click="clickdown(3)"
                            :style="{borderBottom:active==3?'2px solid #b81b22':'0'}"
                        >成功案例</li>
                    </router-link>
                    <router-link to="/contactus">
                        <li
                            @click="clickdown(4)"
                            :style="{borderBottom:active==4?'2px solid #b81b22':'0'}"
                        >联系我们</li>
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
                    id: 1,
                    title: "影视节目投资"
                },
                {
                    id: 2,
                    title: "短视频营销"
                },
                {
                    id: 3,
                    title: "华为移动媒体播放"
                },
                {
                    id: 4,
                    title: "交通出行媒体"
                }
            ],
            active: 0
        };
    },
    created() {
        // this.toplist();
        // console.log(sessionStorage.getItem("titleactive"));
        // this.active = 0;
        if (
            sessionStorage.getItem("titleactive") == null ||
            sessionStorage.getItem("titleactive") == undefined ||
            sessionStorage.getItem("titleactive") == ""
        ) {
            this.active = 0;
            sessionStorage.setItem("titleactive", 0);
        } else {
            this.active = sessionStorage.getItem("titleactive");
            //   console.log(this.active);

            //   console.log(sessionStorage.getItem("titleactive"));
        }
    },
    watch: {
        "$store.state.title_id": function() {
            //你需要执行的代码
            this.active = this.$store.state.title_id;
            console.log(this.active);
            //   console.log(this.$store.state.title_id);
        }
    },
    methods: {
        mouseOver: function() {
            window.event
                ? (window.event.cancelBubble = true)
                : e.stopPropagation();
            this.$refs.downlist.style.display = "inline-block";
        },
        mouseOut: function() {
            this.$refs.downlist.style.display = "none";
        },
        none: function() {
            this.$refs.downlist.style.display = "none";
        },
        clickdown: function(x) {
            //点击那个标签哪个下面就变色
            sessionStorage.setItem("titleactive", x);
            this.$store.commit("item_id", x);
            this.active = x;
            this.$store.commit("title_id", x);
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
            if (e && e.preventDefault) {
                e.preventDefault();
            }
            //IE中阻止函数器默认动作的方式
            else {
                window.event.returnValue = false;
            }
            // return false;
        },
        xiang(row) {
            // 阻止浏览器的冒泡
            window.event
                ? (window.event.cancelBubble = true)
                : e.stopPropagation();
            // this.stopBubble();
            this.stopDefault();
            this.active = 2;
            this.business_id = row;
            this.$store.commit("item_id", this.business_id);
            //把页面要传的参数存到sessionStorage里面
            sessionStorage.setItem("business_id", this.business_id);
            //路由跳转携带参数
            this.$router.push({
                name: "investment",
                query: {
                    business_id: this.business_id
                }
            });
            this.$refs.downlist.style.display = "none";
        },
        //axios请求
        toplist: function() {
            this.$api.get(
                "businesses",
                {
                    page: 1,
                    pageSize: 10
                },
                response => {
                    if (response.status >= 200 && response.status < 300) {
                        // console.log(response.data); //请求成功，response为成功信息参数
                        this.business_list = response.data.data;
                    } else {
                        // console.log(response.message); //请求失败，response为失败信息
                    }
                }
            );
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
    width: 1285px;
    height: 19px;
    /* display: flex;
  justify-content: flex-end; */
}
.navcontent_right {
    float: right;
    width: 536px;
    height: 19px;
    margin-right: 85px;
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
    padding-bottom: 7px;
    box-sizing: border-box;
}
.navcontent_right .navlist li:hover {
    padding-bottom: 7px;
    border-bottom: 2px solid #b81b22 !important;
}
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
