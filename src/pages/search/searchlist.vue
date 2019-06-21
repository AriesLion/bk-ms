<template>
    <div class="searchlist">
      <div class="result-header">
            <div class="head">
                <div class="left">
                    <img class="search-img" src="https://pic.baikemy.com/ms/images/search.png" alt="">
                    <input class="search-input" type="text" placeholder="搜索疾病、症状">
                    <img class="input-clear" src="https://pic.baikemy.com/ms/images/search-clear.png" alt="">
                </div>
                <span @click="cancelClick" class="cancel">取消</span>
            </div>
          <div class="tag-search">
              <li class="active">综合</li>
              <li>百科</li>
              <li>视频</li>
              <li>文章</li>
              <li>医生</li>
              <li>医院</li>
          </div>
      </div>
      <div class="result-content">
          <bk-synthesis></bk-synthesis>
          <bk-baike></bk-baike>
          <bk-video></bk-video>
      </div>
    </div>
</template>

<script>
import bk_synthesis from './../../components/search_result/synthesis'
import bk_baike from './../../components/search_result/baike'
import bk_video from './../../components/search_result/video'
import bk_article from './../../components/search_result/article'
import bk_hospital from './../../components/search_result/hospital'
export default {
    name:'searchlist',
    data(){
        return {
        
        }
    },
    methods: {
      cancelClick(){
          this.$router.go(-1);
      }
    },
    components:{
      'bk-synthesis': bk_synthesis,
      'bk-baike': bk_baike,
      'bk-video': bk_video,
      'bk_article': bk_article,
      'bk_hospital': bk_hospital
    }

}
</script>

<style lang="stylus" scoped>
@import "../../style/mixin.styl"
.searchlist
    background #f2f2f2
    .result-header
        overflow hidden
        .head
            height 2rem
            line-height 2.2rem
            padding .3rem .75rem
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
    .tag-search

        li
            font-size .7rem
            // color #333333
            margin 0 .75rem
            float left
            line-height 1.94rem
        .active
            border-bottom: 0.1rem solid #5C9AF9;
            color: #5C9AF9;

</style>
