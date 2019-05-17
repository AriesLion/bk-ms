<template>
    <div id='account'>
        <bkheader :titleMsg="titleName" ref="bkheader"></bkheader>
        <ul class="info-container">
            <li>
                <span class="title">头像</span>
                <span><img class="icon" src="https://pic.baikemy.com/ms/images/default_photo.png" alt=""> </span>
            </li>
            <li>
                <span class="title">昵称</span>
                <span class="info">BK5640</span>
            </li>
            <li>
                <span class="title">性别</span>
                <span class="info">男</span>
            </li>
            <li>
                <span class="title">生日</span>
                <span class="info">2019-5-16</span>
            </li>
            <li>
                <span class="title">联系电话</span>
                <span class="info">18888866666</span>
            </li>
        </ul>
    </div>
</template>

<script>
import bk_header from './../../components/bk_header'
export default {
    name: 'account',
    data(){
        return {
            titleName: '账号信息'
        }
    },
    mounted(){
        // alert('userId=' + this.$route.params.userId);
    },
    methods: {
      contentClick(){
          this.$refs.bkheader.hideMenu()
      }  
    },
    components: {
        bkheader:bk_header
    }

}
</script>

<style lang='stylus' scoped>
@import "../../style/mixin.styl"
.info-container
    border-bottom  1px solid #ebebeb
    background #ffffff
    list-style none
    li
        margin  0 .7rem 
        height 2.7rem
        .title 
            font-size .8rem
            line-height 2.7rem
            height 2.7rem
            display inline-block
        .icon
            wh(1.625rem,1.625rem)
            border-radius 50%
            padding-top .5rem
            float right 
        .info 
            float right 
            font-size .7rem
            line-height 2.7rem
            height 2.7rem
            display inline-block
    li:not(:last-child)
        border-bottom  1px solid #ebebeb

</style>
