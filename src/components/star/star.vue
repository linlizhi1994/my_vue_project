<template>
  <div class="star" :class="`star-${size}`">
    <span class="star-item" v-for="(item,index) in classArr" :class="item" :key="index"></span>
    <!--<span class="star-item on"></span>
    <span class="star-item on"></span>
    <span class="star-item half"></span>
    <span class="star-item off"></span>-->
  </div>
</template>

<script>
    export default {
        name: "star",
      props:["score","size"],//评分 比如3.7

      computed:{
        classArr(){
          var classList = []
          var score = this.score//得到评分 比如 4.7
          var integerScore = parseInt(score)//取出评分的整数
         for(var i = 0;i<integerScore;i++){
            classList.push("on")//根据整数的数量 添加on属性 4.7 = 1+1+1+1+0.7
         }
         if(score - integerScore > 0.5 ){
           classList.push("half")//如果小数部分大于0.5则加上一个half属性
         }
         while(classList.length < 5){
           classList.push("off")//当数组的长度小于5时 就往里面添加off属性
         }

          return classList
        }
      }
    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/stars/star48_on')
        &.half
          bg-image('./images/stars/star48_half')
        &.off
          bg-image('./images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star36_on')
        &.half
          bg-image('./images/stars/star36_half')
        &.off
          bg-image('./images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star24_on')
        &.half
          bg-image('./images/stars/star24_half')
        &.off
          bg-image('./images/stars/star24_off')
</style>
