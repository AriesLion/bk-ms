<template>
    <div>
        <bkheader :titleMsg="titleName" ref="bkheader"></bkheader>
        <router-link to="/diseasedetail"> 疾病列表页 </router-link>
    </div>
</template>

<script>
import bk_header from './../../components/bk_header'
export default {
    name:'diseaselist',
    data(){
        return {
            titleName: '疾病列表'
        }
    },
    methods: {
         contentClick(){
           this.$refs.bkheader.hideMenu();
        }
    },
    components:{
        bkheader:bk_header
    }

}
</script>

<style lang="stylus" scoped>

</style>
