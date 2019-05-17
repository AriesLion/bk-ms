<template>
    <div>
        <bksearch ref="bksearch"></bksearch>
        <div class="bkheader">
            <div class="left" @click.stop='historyBack'><img :src='getImgUrl("back.png")' alt=""></div>
            <p class="center">{{titleMsg}}</p>
            <div class="right">
                <img class="search" @click.stop='menuSearch' :src='getImgUrl("search.png")' alt="">
                <img class="menu" @click.stop='menuClick' :src='getImgUrl("menu.png")' alt="">
            </div>
        </div>
       <div class="header-share" v-show="isShowMenu">
            <ul class="container">
                <li @click="goHome">
                    <span><img class="share-img" :src='getImgUrl("home.png")' alt=""></span><span>首页</span>
                </li>
                <li @click="goAccount">
                    <span><img class="share-img" :src='getImgUrl("icon.png")' alt=""></span> <span>我的</span>
                </li>
                <li @click="goShare" id="share_btn">
                    <span><img class="share-img" :src='getImgUrl("share.png")' alt=""></span> <span>分享</span>
                </li>
            </ul>
	    </div>
       
    </div>
    
</template>

<script>
import bk_search from './bk-search'
export default {
  data() {
    return {
        isShowMenu: false,
    }
  },
  props: ['titleMsg'],

  methods: {
    getImgUrl(imgStr){
      return require('../assets/images/' + imgStr);
    },
    historyBack(){
        this.$router.go(-1)
    },
    menuClick(){
        this.isShowMenu = !this.isShowMenu;
    },
    menuSearch(){
        this.$refs.bksearch.openSearch();
    },
    hideMenu(){
        this.isShowMenu = false;
    },
    goHome(){
        this.isShowMenu = false;
        this.$router.push('/');
    },

    goAccount(){
        this.isShowMenu = false;
        this.$router.push({
            name: 'account',
            params: {
                userId: 111
            }
        })
    },

    goShare(){

    }

  },
  components: {
    bksearch: bk_search
  }
}
</script>

<style lang="stylus" scoped>
@import "../style/mixin.styl"
.bkheader
    wh(100%,2.2rem)
    background: #f2f2f2;
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .left
        width 25%
        padding-left .75rem
        img 
            wh(.45rem,.85rem)
    .center
        width 50%
        color #333333
        font-size .8rem
        text-align center
    .right
        float right 
        width 25%
        padding-right .75rem
        .search
            wh(.9rem,.9rem)
            position relative
            top .1rem
            padding-left 1.5rem
        .menu 
            wh(.9rem,.75rem)
            margin-left .6rem
.header-share:before
    position: absolute;
    content: "";
    height: 0;
    width: 0;
    border: 0.25rem solid transparent;
    border-bottom-color: #fff;
    top: -0.5rem;
    right: 0.9rem;
.header-share
    background: #ffffff;
    box-shadow: 0 0.1rem 0.25rem 0 rgba(0, 60, 109, 0.30);
    width: 4.7rem;
    height: 6.45rem;
    position: absolute;
    right: .25rem;
    z-index 4
    .container
        list-style none
        padding 0 .75rem
        li
            wh(3.2rem,2.125rem)
            span 
                display: inline-block
                height: 2.2rem
                text-align: center
                font-size: .8rem
                color: #333333
                line-height: 2.2rem
                padding-right .3rem
        img 
            wh(.925rem,.95rem)
            position relative
            top .1rem
        li:not(:last-child)
            border-bottom 1px solid #ebebeb
        


        


</style>

