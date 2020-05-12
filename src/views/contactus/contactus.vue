<template>
    <!-- 联系我们 -->
    <div class="contactus">
        <!-- 上面背景图片 -->
        <!-- <Topbg></Topbg> -->
        <div class="top">
            <img :src="bgimg" alt />
        </div>
        <div class="content">
            <p class="title">
                英铎创智传媒扎根中国20年
                <br />正逐步完成了以沈阳为基地
                <br />以北京、上海、广州为市场运营服务中心
            </p>
            <div class="img">
                <img src="../../assets/imgs/contactus/contactus2.jpg" alt />
            </div>
            <div class="address">
                <div class="address_content">
                    <p class="address_title">全国办公地</p>
                    <div class="address_item">
                        <div class="address_item_left">
                            <div class="item" v-for="(item,index) in address" :key="index">
                                <div class="item_img">
                                    <img :src="item.url" alt />
                                </div>
                                <div class="item_word">
                                    <p>{{item.title}}</p>
                                    <p>{{item.t}}</p>
                                    <p>{{item.f}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="address_item_right">
                            <div class="item" v-for="(item,index) in address2" :key="index">
                                <div class="item_img">
                                    <img :src="item.url" alt />
                                </div>
                                <div class="item_word">
                                    <p>{{item.title}}</p>
                                    <p>{{item.t}}</p>
                                    <p>{{item.f}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            address: [
                {
                    url: require("../../assets/imgs/contactus/contactus5.png"),
                    title: "沈阳总部：",
                    t: "沈阳市沈河区十一纬路169号富中大厦六楼",
                    f: "TEL：22874455"
                },
                {
                    url: require("../../assets/imgs/contactus/contactus6.png"),
                    title: "上海分公司：",
                    t: "上海市静安区南京西路1038号梅龙镇广场1704室",
                    f: "TEL：021-52181103"
                }
            ],
            address2: [
                {
                    url: require("../../assets/imgs/contactus/contactus1.png"),
                    title: "北京分公司：",
                    t: "北京市朝阳区广渠路3号竞园商五 ",
                    f: "TEL：010-61655810"
                },
                {
                    url: require("../../assets/imgs/contactus/contactus3.png"),
                    title: "长春办事处：",
                    // t: "地址：",
                    f: "长春宽城区凯旋路466号万达华宅2号楼一单元1102 "
                },
                {
                    url: require("../../assets/imgs/contactus/contactus4.png"),
                    title: "大连办事处：",
                    // t: "地址：",
                    f: "大连市中山区香榭丽广场C座1711室"
                }
            ],
            bgimg: ""
        };
    },
    components: {},
    created() {
        // debugger
        this.topbg();
    },
    mounted() {
        this.$router.afterEach((to, from, next) => {
            window.scrollTo(0, 0);
        });
        window.addEventListener("scroll", this.up);
    },

    methods: {
        //axios请求
        topbg: function() {
            this.$api.get(
                "banners/contact-us",
                {
                    page: 1,
                    pageSize: 10
                },
                response => {
                    if (response.status >= 200 && response.status < 300) {
                        this.bgimg = response.data.data[0].image;
                    } else {
                    }
                }
            );
        },
        up: function() {
            //判断元素到达当前窗口的什么位置（简介）
            var isup = true;
            let tabBar = document.getElementsByClassName("address_content")[0]
                .offsetTop;
            let t =
                document.documentElement.scrollTop || document.body.scrollTop;
            let h = document.documentElement.clientHeight;
            //   console.log(tabBar);
            //   console.log(t);
            //   console.log(h);
            let isshow = tabBar - t - h;
            //   console.log(isshow);
            if (isshow < -100 && isup) {
                $(".address_content")
                    .css("margin-top", "0")
                    .css("opacity", "1");
                // alert("ok");
                isup = false;
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.up);
    }
};
</script>
<style scoped>
.contactus {
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
.title {
    width: 432px;
    height: 120px;
    font-family: MicrosoftYaHei;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 40px;
    letter-spacing: 0px;
    color: #222222;
    text-align: center;
    margin: 0 auto;
}
.img {
    width: 1200px;
    height: 758px;
    margin: 58px auto;
}
.img img {
    width: 100%;
    height: 100%;
}
.address {
    width: 91.15vw;
    min-width: 1200px;
    background-color: #f8f8f8;
    margin: 0 auto 100px auto;
    padding: 1px;
    box-sizing: border-box;
}
.address_content {
    width: 1200px;
    height: 443px;
    /* margin: 100px auto 0 auto; */
    margin-right: auto;
    margin-left: auto;
    margin-top: 100px;
    opacity: 0;
    transition: margin 0.8s, opacity 1s;
}
.address_title {
    width: 1200px;
    font-family: MicrosoftYaHei;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 22px;
    letter-spacing: 0px;
    color: #222222;
    padding: 50px 0 20px 0;
    box-sizing: border-box;
    border-bottom: 1px solid #e1e1e1;
}
.address_item {
    width: 1200px;
    height: 350px;
    display: flex;
    align-items: center;
    padding: 0px 28px;
    box-sizing: border-box;
}
.address_item_left {
    width: 50%;
    height: 220px;
    border-right: 1px solid #e1e1e1;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
}
.address_item_right {
    width: 50%;
    height: 220px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: right;
}
.address_item_right .item {
    padding-left: 100px;
    box-sizing: border-box;
}
.item {
    width: 600px;
    display: flex;
    align-items: center;
    /* border-right: 1px solid #999999; */
}
.item_img {
    width: 90px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 33px;
}
.item_word {
    width: 475px;
    /* height: 74px; */
    font-family: MicrosoftYaHei;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 26px;
    letter-spacing: 0px;
    color: #222222;
}
</style>
