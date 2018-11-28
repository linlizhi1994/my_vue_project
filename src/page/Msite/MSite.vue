<template>
  <section class="msite">
    <!--首页头部-->
      <head-top :title="address.name">
           <span class="header_search" slot="left">
              <i class="iconfont icon-sousuo"></i>
            </span>
        <span class="header_login" slot="right">
              <span class="header_login_text">登录|注册</span>
            </span>
    </head-top>
    <!--<header class="msite_header">
            <span class="header_search">
              <i class="iconfont icon-sousuo"></i>
            </span>
      <span class="header_title">
              <span class="header_title_text ellipsis">昌平区北七家宏福科技园(337省道北)</span>
            </span>
      <span class="header_login">
              <span class="header_login_text">登录|注册</span>
            </span>
    </header>-->
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in list" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(items,index) in item" :key="items.id">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com'+items.image_url">
              </div>
              <span>{{items.title}}</span>
            </a>
            <!--<a href="javascript:" class="link_to_food">
             <div class="food_container">
               <img src="./images/nav/2.jpg">
             </div>
             <span>商超便利</span>
           </a>
           <a href="javascript:" class="link_to_food">
             <div class="food_container">
               <img src="./images/nav/3.jpg">
             </div>
             <span>美食</span>
           </a>
           <a href="javascript:" class="link_to_food">
             <div class="food_container">
               <img src="./images/nav/4.jpg">
             </div>
             <span>简餐</span>
           </a>
           <a href="javascript:" class="link_to_food">
             <div class="food_container">
               <img src="./images/nav/5.jpg">
             </div>
             <span>新店特惠</span>
           </a>
           <a href="javascript:" class="link_to_food">
             <div class="food_container">
               <img src="./images/nav/6.jpg">
             </div>
             <span>准时达</span>
           </a>
           <a href="javascript:" class="link_to_food">
             <div class="food_container">
               <img src="./images/nav/7.jpg">
             </div>
             <span>预订早餐</span>
           </a>
           <a href="javascript:" class="link_to_food">
             <div class="food_container">
               <img src="./images/nav/8.jpg">
             </div>
             <span>土豪推荐</span>
           </a>-->
          </div>
          <!--<div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/9.jpg">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/10.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/11.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/12.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/13.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/14.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg">
              </div>
              <span>土豪推荐</span>
            </a>
          </div>-->
        </div>


        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
   <shop-list></shop-list>
    </div>
  </section>
</template>

<script>
  import "swiper/dist/css/swiper.min.css"
  import Swiper from "swiper"
  import headTop from "../../components/headTop/headTop"
  import shopList from "../../components/shopList/shopList"
  import {mapState} from "vuex"
  export default {
    components:{
      headTop,
      shopList
    },
    computed:{
      ...mapState(["address","foodCategory"]),
      list(){
        var newList = []
        var list1 = this.foodCategory.slice(0,8)
        var list2 = this.foodCategory.slice(8)

        newList.push(list1)
        newList.push(list2)

        return newList

      }

    },
    mounted() {
      this.$store.dispatch("getAddress"),
        this.$store.dispatch("getCategorys")//异步派发 这个步骤是异步的！！所以下面的swiper会先执行，导致滑屏按钮出不来
    /*    new Swiper(".swiper-container", {//new Swiper要在页面渲染以后才能New!!!
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })*/
    },
    watch:{

      // 注意更新页面的流程: 更新状态数据==>调用watch监视回调 ==> 异步更新界面
      foodCategory(){
        //为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 vm.$nextTick() 。这样回调函数在 DOM 更新完成后就会调用
        this.$nextTick(()=>{
          new Swiper(".swiper-container", {//new Swiper要在页面渲染以后才能New!!!
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
