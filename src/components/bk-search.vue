<template>
    <div id='search-box' :class="isShowSearch ? '': 'display_none' ">
        <div class="head">
            <div class="left">
                 <img class="search-img" src="https://pic.baikemy.com/ms/images/search.png" alt="">
                 <input class="search-input" type="text" placeholder="搜索疾病、症状">
                 <img class="input-clear" src="https://pic.baikemy.com/ms/images/search-clear.png" alt="">
            </div>
            <span @click="cancelClick" class="cancel">取消</span>
        </div>
        <div class="recommend">
            <p class="tag-title">热门推荐</p>
            <ul class="tag-list">
                <li>手足口病</li>
                <li>糖尿病</li>
                <li>艾滋病</li>
                <li>抑郁症</li>
                <li>肺结核</li>
                <li>早泄</li>
                <li>痤疮</li>
                <li>痛风</li>
            </ul>
        </div>
        <div class="record">
            <p class="history-title">
                <span>搜索记录</span>
                <img src="https://pic.baikemy.com/ms/images/delete.png" alt="">
            </p>
            <ul class="history-list">
                <li><p>糖尿病</p><img class="record-close" src="https://pic.baikemy.com/ms/images/close.png" alt=""></li>
                <li><p>糖尿病</p><img class="record-close" src="https://pic.baikemy.com/ms/images/close.png" alt=""></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShowSearch: false
        }
    },
    methods: {
        cancelClick(){
            this.isShowSearch = false;
        },
        openSearch() {
            this.isShowSearch = true;
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "../style/mixin.styl"
    #search-box
        wh(100%,100%)
        z-index 10
        overflow-y auto
        overflow-x hidden
        background #f7f7f7
        top 0
        position fixed
        pointer-events auto
    .head
        height 2rem
        line-height 2.2rem
        padding .3rem .75rem
        background #f2f2f2
        .left 
            background #ffffff
            border-radius .2rem
            border 1px solid #cdcdcd
            wh(14.3rem,1.6rem)
            float left
            display flex
            align-items center
            .search-input
                wh(11rem, 1rem)
                font-size .7rem
                color #999999
                vertical-align top
                line-height 1rem
                margin-left .5rem
                outline none 
            .search-img
                wh(.9rem,.9rem)
                margin-left .5rem
            .input-clear
                wh(.75rem,.75rem)
        .cancel
            float right 
            line-height 1.65rem
            font-size .7rem
            color #666
    .recommend
        padding .75rem
        background #ffffff
        .tag-title
            line-height 1.125rem
            font-size .8rem
            color #999999
        .tag-list
            overflow hidden
            li
                background #f7f7f7
                border-radius .2rem
                padding .2rem .5rem
                line-height 1rem
                font-size .7rem
                color #666666
                margin .5rem .5rem 0 0
                float left
    .record
        background #ffffff
        padding .75rem
        .history-title
            line-height 1.125rem
            font-size .8rem
            color #999999
            img 
                wh(.7rem,.675rem)
                float right
                position: relative;
                top: .2rem;
        .history-list
            li
                padding .5rem 0
                border-bottom 1px solid #ebebeb
            p
                font-size .8rem
                color #333333
                line-height 1.125rem
                height 1.125rem
                display inline-block
                width 16rem
            img 
                wh(.5rem,.5rem)
                float right
                position relative
                top -.5rem

            


</style>

