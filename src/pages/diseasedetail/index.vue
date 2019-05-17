<template>
    <div @click="contentClick" class="diseasedetail">
        <bkheader :titleMsg ='titleName' ref="bkheader"></bkheader>
        疾病详情页
    </div>
</template>

<script>
import bk_header from './../../components/bk_header'
export default {
    name: 'diseasedetail',
    data() {
        return {
            titleName: '疾病详情'
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

<style lang='stylus' scoped>

</style>
