<template>
   <div>
       <ul class="search-result-article">
            <li>
                <h3></h3>
                <p></p>
            </li>
       </ul>
   </div>
</template>

<script>
export default {
   name: 'search-result-article',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped lang="stylus">
    .search-result-article
        margin-top .5rem
        li 
            background: #fff;
            border-radius: 0.2rem;
            padding: 0.75rem;
            overflow: hidden;
            zoom: 1;
            margin-bottom: 0.25rem;
            h3
                font-size .8rem
                color #333
                -webkit-line-clamp: 2;
                display: -webkit-box;
                -webkit-box-orient: vertical
            p 
                font-size .6rem
                color #999





</style>
