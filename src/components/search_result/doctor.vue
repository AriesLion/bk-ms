<template>
   <div>
       <ul class="search-result-doctor"></ul>
   </div>
</template>

<script>
export default {
   name: 'search-result-doctor',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped lang="stylus">
    .search-result-doctor
        margin-top .5rem
        li
            background: #fff;
            border-radius: 0.2rem;
            padding: 0.75rem;
            overflow: hidden;
            zoom: 1;
            margin-bottom: 0.25rem;
            display flex
            .doctor-icon-box
                width: 2.45rem;
                height: 2.45rem
            .doctor-info-box
                width 10rem
                height 2.45rem

</style>
