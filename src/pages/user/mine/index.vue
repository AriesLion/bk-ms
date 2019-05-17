<template>
    <div id="mine" @click="contentClick" >
        <bkheader :titleMsg="titleName" ref="bkheader"></bkheader>
        <div class="mine-info" >
            <router-link :to="{ name: 'account', params: { userId: 1111}}" >
                <div class="header">
                    <div class="icon">
                        <img src="https://pic.baikemy.com/ms/images/default_photo.png" alt="">
                    </div>
                    <div class="person">
                        <p class="name">BK5640</p>
                        <p class="tel">Tel:&nbsp;&nbsp;13001998371</p>
                        <img src="https://pic.baikemy.com/ms/images/skip-2.png" alt="">
                    </div>
                </div>
            </router-link>
           
            <ul class="mine-content" >
                <li>
                    <p>
                        <img class="icon" src="https://pic.baikemy.com/ms/images/attention.png" alt="">
                        <span class="des">我的关注</span>
                        <span class="num">1</span>
                        <img class="skip" src="https://pic.baikemy.com/ms/images/skip.png" alt="">
                    </p>
                </li>
                <li>
                    <p>
                        <img class="icon" src="https://pic.baikemy.com/ms/images/collect.png" alt="">
                        <span class="des">我的收藏</span>
                        <span class="num">1</span>
                        <img class="skip" src="https://pic.baikemy.com/ms/images/skip.png" alt="">
                    </p>
                </li>
                <li>
                    <p>
                        <img class="icon" src="https://pic.baikemy.com/ms/images/ask_message.png" alt="">
                        <span class="des">我的咨询</span>
                        <span class="num">1</span>
                        <img class="skip" src="https://pic.baikemy.com/ms/images/skip.png" alt="">
                    </p>
                </li>
                <li>
                    <p>
                        <img class="icon" src="https://pic.baikemy.com/ms/images/feedback.png" alt="">
                        <span class="des">反馈建议</span>
                        <span class="num">1</span>
                        <img class="skip" src="https://pic.baikemy.com/ms/images/skip.png" alt="">
                    </p>
                </li>
            </ul>
            <div class="logout">退出登陆</div>
        </div>
    </div>
</template>

<script>
import bk_header from '../../../components/bk_header'
export default {
    name: 'mine',
    data(){
        return {
            titleName: '我的'
        }
    },
    methods: {
        contentClick(){
            this.$refs.bkheader.hideMenu();
        }
    },
    components: {
        bkheader: bk_header
    }
}
</script>

<style lang="stylus" scoped>
@import "../../../style/mixin.styl"
#mine
  background #f5f5f5
  height calc(100vh)
.mine-info
    .header
        background: -ms-radial-gradient(top, #35bbff 30%, #2d94e9 70%);
        background: -webkit-radial-gradient(top, #35bbff 30%, #2d94e9 70%);
        background: -o-radial-gradient(top, #35bbff 30%, #2d94e9 70%);
        background: -moz-radial-gradient(top, #35bbff 30%, #2d94e9 70%);
        wh(100%,6.125rem)
        position: relative;
        .icon
            wh(25%,100%)
            float left
            img 
                wh(3.15rem,3.15rem)
                margin-left .7rem
                margin-top 1.5rem
                border-radius 50%
        .person
            wh(75%, 100%)
            float left
            .name
                font-size .9rem
                color #ffffff
                text-align left 
                padding 1.5rem 0 .5rem 0
                z-index 2
                position relative
            .tel
                font-size .7rem
                color #e7f7ff
                text-align left
                height 1rem
            img 
                position absolute
                wh(.3rem,.55rem)
                right .75rem
                top 2.8rem
    .mine-content
        li
            wh(18.75rem, 2.85rem)
            background: #ffffff;
            overflow hidden
            .icon
                position relative
                wh(.9rem, .9rem)
            .des
                font-size .8rem
                color #606366
                text-align center
                position relative
                top -.15rem
                padding-left .2rem
            .num 
                font-size: .65rem;
                color: #bababb;
                letter-spacing: 0;
                text-align: center;
                position: absolute;
                right: .6rem;
            .skip
                wh(.2rem, .45rem)
                float: right;
                position: relative;
                top: .35rem;
            p 
                position: relative;
                width: 15.75rem;
                line-height: 1.125rem;
                height: 1.125rem;
                margin: .875rem .75rem .875rem 1.25rem;

        li:not(:last-child)
            border-bottom 1px solid #ebebeb
    .logout
        background #ffffff
        border-radius .2rem
        wh(90%,2.45rem)
        line-height 2.45rem
        font-size .8rem
        color #333333
        text-align center
        margin-left .75rem
        margin-top 5rem


            

</style>
