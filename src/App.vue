<template>
  <div>
    <header>
      <img :src='getImgUrl("default_photo.png")' class="user_icon"  alt="">
      <img class="logo" :src='getImgUrl("logo.png")' alt="">
      <img class="logo_my" :src='getImgUrl("logo_my.png")' alt="">
      <div class="baike-search">
        <img :src='getImgUrl("search.png")' alt="">
        <span>搜索疾病、症状</span>
      </div>
      <div>
        <ul class="recommend-search-list">
          <li>阿尔茨海默病</li>
          <li class="recommend-split">牙周炎</li>
          <li class="recommend-split">狂犬病</li>
        </ul>
      </div>
    </header>
    <section>
      <ul class="bk-menu-list">
        <router-link to="./diseaselist">
          <li>
            <img :src='getImgUrl("disease.png")' alt="">
            <h3>疾病</h3>
         </li>
        </router-link>
       
        <li>
          <img :src='getImgUrl("symption.png")' alt="">
          <h3>症状</h3>
        </li>
         <li>
          <img :src='getImgUrl("check.png")' alt="">
          <h3>检查</h3>
        </li>
         <li>
          <img :src='getImgUrl("cure.png")' alt="">
          <h3>治疗</h3>
        </li>
         <li>
          <img :src='getImgUrl("medicine.png")' alt="">
          <h3>药物</h3>
        </li>
         <li>
          <img :src='getImgUrl("trad_med.png")' alt="">
          <h3>中医</h3>
        </li>
         <li>
          <img :src='getImgUrl("prevention.png")' alt="">
          <h3>预防</h3>
        </li>
         <li>
          <img :src='getImgUrl("nurse.png")' alt="">
          <h3>护理</h3>
        </li>

      </ul>
      <div class="bk-banner">
        <img :src='getImgUrl("hotspot1.png")' alt="">
      </div>
      <ul class="recommend-disease-list">
        <li>
          <img :src='getImgUrl("3356.jpg")' alt="">
          <h3>痤疮</h3>
        </li>
        <li>
          <img :src='getImgUrl("3295.jpg")' alt="">
          <h3>带状疱疹</h3>
        </li>
        <li>
          <img :src='getImgUrl("4076.jpg")' alt="">
          <h3>足癣</h3>
        </li>
      </ul>
      <ul class="recommend-video-list">
        <li>
          <div class="video-list-img">
            <img class="bg" :src='getImgUrl("index_video_bg_1.png")'  alt="">
            <img class="video_btn" :src='getImgUrl("play-big.png")' alt="">
          </div>
          <h3>什么是艾滋病？</h3>
        </li>
        <li>
          <div class="video-list-img">
            <img class="bg" :src='getImgUrl("index_video_bg.png")'  alt="">
            <img class="video_btn" :src='getImgUrl("play-big.png")' alt="">
          </div>
          <h3>什么是糖尿病以及如何诊断 ？</h3>
        </li>
      </ul>

    </section>
    <section class="expert-info">
      <p class="expert-info-title">专家委员会</p>
      <ul class="expert-list">
        <li>
          <img :src='getImgUrl("gaorunlin.jpeg")'  alt="">
          <p class="expert-name">高润霖院士</p>
          <div>
            <p class="expert_hospital-info">中国医学科学院</p>  
            <p class="expert_hospital-info">阜外医院</p>  
          </div>
        </li>
         <li>
          <img :src='getImgUrl("gaorunlin.jpeg")'  alt="">
          <p class="expert-name">高润霖院士</p>
          <div>
            <p class="expert_hospital-info">中国医学科学院</p>  
            <p class="expert_hospital-info">阜外医院</p>  
          </div>
        </li>
         <li>
          <img :src='getImgUrl("gaorunlin.jpeg")'  alt="">
          <p class="expert-name">高润霖院士</p>
          <div>
            <p class="expert_hospital-info">中国医学科学院</p>  
            <p class="expert_hospital-info">阜外医院</p>  
          </div>
        </li>
         <li>
          <img :src='getImgUrl("gaorunlin.jpeg")'  alt="">
          <p class="expert-name">高润霖院士</p>
          <div>
            <p class="expert_hospital-info">中国医学科学院</p>  
            <p class="expert_hospital-info">阜外医院</p>  
          </div>
        </li>
         <li>
          <img :src='getImgUrl("gaorunlin.jpeg")'  alt="">
          <p class="expert-name">高润霖院士</p>
          <div>
            <p class="expert_hospital-info">中国医学科学院</p>  
            <p class="expert_hospital-info">阜外医院</p>  
          </div>
        </li>
      </ul>
    </section>
    <bkfooter></bkfooter>
  </div>
  
</template>

<script>
import bkfooter from './components/bk_footer'
export default {
  data() {
    return {
  
    }
  },
  methods: {
    getImgUrl(imgStr){
      return require('./assets/images/' + imgStr);
    }
  },
  components: {
    bkfooter: bkfooter
  }
}
</script>

<style lang="stylus" scoped>
  @import "./style/mixin.styl"
  header 
    background : -webkit-radial-gradient(top,#35bbff 2%,#2d94e9 50%)
    position relative
    height 11rem
    text-align center
  .user_icon 
    width 1.2rem
    float right 
    border-radius:50%
    position relative
    top .75rem
    right .7rem
  .logo 
    wh(9.4rem, 2rem)
    margin-top 2.8rem
  .logo_my
    width 9.4rem
    margin-top .2rem
  .baike-search 
    wh(15.25rem, 1.9rem)
    line-height 1.8rem
    background #fff
    border-radius .2rem
    font-size .7rem
    color #999
    margin: 1rem auto 0.3rem;
    img
      wh(0.9rem,0.9rem)
      vertical-align: middle
      margin-right: 0.25rem
      span 
        color: #999;
  .recommend-search-list
    overflow: hidden
    padding-left: 3rem;
    li 
      font-size: 0.7rem;
      color rgba(255,255,255,0.70)
      line-height 1.0rem
      padding 0 0.375rem
      position relative
      list-style none
      float left
  .recommend-split:before
      content: "";
      position: absolute;
      height: 0.6rem;
      width: 1px;
      background: rgba(255,255,255,0.70);
      left: 0;
      top: 0.2rem;
  .bk-menu-list
    padding:.5rem 0
    background #ffffff
    overflow hidden
    zoom 1
    padding-bottom 0.8rem
    li
      list-style none 
      wh(4.3rem,3.15rem)
      padding .5rem 0 .25rem
      float left
      text-align center
      img 
        wh(2.1rem, 2.1rem)
    h3 
      font-size .6rem
      color #424242
      line-height .825rem
  .bk-banner 
    height 4.5rem
    overflow hidden
    padding 0 .75rem
    background #ffffff
    img
      wh(100%,100%)
      border-radius .25rem
  .recommend-disease-list
    overflow hidden
    margin 0.7rem 0;
    li
      margin-left .75rem
      float left
      border-radius .2rem
      width 4.8rem
      position relative
      overflow hidden
      img 
        wh(100%, 100%)
      h3 
        position absolute
        font-size .6rem
        color #ffffff
        background rgba(0,0,0,0.36)
        wh(100%, 1rem)
        line-height 1rem
        text-align center
        bottom 0
        left 0
  .recommend-video-list
    overflow hidden
    margin-bottom .75rem
    li
      wh(7.6rem,6rem)
      float left;
      margin-left .75rem;
      list-style none
      h3
        font-size: 0.7rem
        color: #424242
        line-height: 1.0rem
        margin-top: .25rem
        text-align center
  .video_btn
    wh(1.45rem, 1.45rem)
  .video-list-img
    border-radius .2rem
    overflow hidden
    position relative
    wh(100%, 4.75rem)
    .bg
      wh(100%,100%)

  .expert-info
    border-top 10px solid #f5f5f5
    .expert-info-title
      height 2.7rem
      line-height 2.7rem
      text-align center
      font-size .8rem
      color #333
  .expert-list 
    paddding 0 .75rem .75rem
    overflow auto
    white-space nowrap
    li
       width 5.2rem
       text-align center
       display inline-block
       vertical-align top
       img 
        wh(2.75rem, 2.75rem)
        border-radius 50%
        margin-bottom .25rem
  .expert-name
    font-size: 0.7rem;
    color: #424242;
    line-height: 1.1rem;
  .expert_hospital-info
    font-size: 0.55rem;
    color: #999;
    line-height: 0.75rem;
    margin-top: 0.15rem;
    white-space: normal;

</style>
