<template>
   <div>
       <div class="search-result-synthesis">
            <div class="info-header">

            </div>
            <ul class="content"></ul>
       </div>
   </div>
</template>

<script>
export default {
   name: 'search-result-synthesis',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped lang="stylus">
    .search-result-synthesis
        margin-top .5rem
        .info-header
            background: #ffffff;
            box-shadow: 0 0.1rem 0.25rem 0 rgba(0,60,109,0.14);
            border-radius: 0.2rem;
            overflow: hidden;
        .content
            margin-top .5rem
        
</style>
