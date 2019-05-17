<template>
    <div class="footer">
        <p class="title">国家卫生健康委员会权威医学科普项目</p>
        <p class="station"><img class="station" :src='getImgUrl("station.png")' alt=""></p> 
        <p class="station_2"><img class="" :src='getImgUrl("station_2.png")' alt=""></p>
        <ul class="mine-info">
            <li>关于我们 | </li>
            <li>&nbsp;合作机构</li>
        </ul>
        <p class="copyright">百科名医 ©2010-2019 版权所有 京ICP证 110448号 </p>
        <p class="copyright">互联网药品信息服务资格证书(京)-经营性2016-0022</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
  
    }
  },
  methods: {
    getImgUrl(imgStr){
      return require('../assets/images/' + imgStr);
    }
  }
}
</script>

<style lang="stylus"  scoped>
@import "../style/mixin.styl"
.footer
    wh(100%,12.45rem)
    background #f5f5f5
    overflow hidden
    .title
        font-size .7rem
        color #828282
        text-align center
        height 1rem
        padding-top 1.75rem
    .station
        text-align center
        img 
            padding-top .5rem
            width 8rem
    .station_2
        text-align center
        img
            width 4.85rem
    .mine-info
        overflow: hidden;
        font-size: 0.6rem;
        color: #828282;
        padding: .5rem 6rem;
        li 
            list-style none
            line-height .9rem
            float left
    .copyright
        font-size .6rem
        color #b2b2b2
        text-align center
        line-height .9rem



</style>
