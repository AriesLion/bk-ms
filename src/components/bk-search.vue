<template>
    <div id='search-box' :class="isShowSearch ? '': 'display_none' ">
        <div class="head">
            <div class="left">
                 <img class="search-img" src="https://pic.baikemy.com/ms/images/search.png" alt="">
                 <input @keyup.enter="onSubmit"  v-model="searchText" class="search-input" type="text" placeholder="搜索疾病、症状">
                 <img :class="isShowClearText ? '': 'display_none'" @click="clearSearchText()" class="input-clear" src="https://pic.baikemy.com/ms/images/search-clear.png" alt="">
            </div>
            <span @click="cancelClick" class="cancel">取消</span>
        </div>
        <div class="recommend">
            <p class="tag-title">热门推荐</p>
            <ul class="tag-list">
                <li v-for='(item,index) in hotSearchList' :key="item" @click="clickHotSearch(index)">
                    {{item}}
                </li>
            </ul>
        </div>
        <div class="record">
            <p class="history-title">
                <span>搜索记录</span>
                <img @click="removeAllHistory()"  src="https://pic.baikemy.com/ms/images/delete.png" alt="">
            </p>
            <ul class="history-list">
                <li v-for="(item, index) in searchHistoryList" :key="item">
                    <p>{{item}}</p>
                    <img @click="removeHistory(index)" class="record-close" src="https://pic.baikemy.com/ms/images/close.png" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getLocalStore,setLocalStore,} from '../utils/common.js';
export default {
    data(){
        return {
            isShowSearch: false,
            searchText: '',
            isShowClearText: false,
            hotSearchList: ['手足口病','糖尿病','艾滋病','抑郁症','肺结核','早泄','痤疮','痛风'],
            searchHistoryList: []
        }
    },

    mounted(){
        let list = getLocalStore('searchhistory');
        if(list){
           this.searchHistoryList = JSON.parse(list);
        }
        if (this.searchText.length > 0){
            this.isShowClearText = true;
        }

    },

    methods: {
        onSubmit(){
            alert(this.searchText);
        },

        clearSearchText(){
            this.searchText = '';
        },

        cancelClick(){
            this.isShowSearch = false;
        },
        openSearch() {
            this.isShowSearch = true;
        },
        clickHotSearch(index){
            let searchKey = this.hotSearchList[index];
            this.storeLocalHistory(searchKey);
            this.$router.push({
                path:'/searchlist',
                query:{
                   title: searchKey
                }
            });
            // alert(this.hotSearchList[index]);
        },
        removeHistory(index){
            this.searchHistoryList.splice(index,1);
            setLocalStore('searchhistory',JSON.stringify(this.searchHistoryList));
        },
        removeAllHistory(){
            this.searchHistoryList = [];
            setLocalStore('searchhistory');
        },
        storeLocalHistory(searchKey){
            var index = this.searchHistoryList.indexOf(searchKey);
            if (index != -1){
                this.searchHistoryList.splice(index,1);
            }
            this.searchHistoryList.unshift(searchKey);
            if(this.searchHistoryList.length > 10){
               this.searchHistoryList.slice(0,10);
            }
            setLocalStore('searchhistory',this.searchHistoryList);
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "../style/mixin.styl"
    #search-box
        wh(18.75rem,100%)
        margin 0 auto
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
                display flex
                justify-content center
                align-items center
            p
                font-size .8rem
                color #333333
                line-height 1.125rem
                height 1.125rem
                display inline-block
                width 16rem
            img 
                wh(.5rem,.5rem)
 
</style>

