<template>
   <div>
       <ul class="search-result-baike">
           <li>
               <a>
                   <h3></h3>
                   <p></p>
               </a>
           </li>
       </ul>
   </div>
</template>

<script>
export default {
   name: 'search-result-baike',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped lang="stylus">
.search-result-baike
    margin-top .5rem
    li
        background: #fff;
        border-radius: 0.2rem;
        padding: 0.75rem;
        overflow: hidden;
        zoom: 1;
        margin-bottom: 0.25rem
        h3
          font-size .8rem
          color #333
          line-height 1.125rem
          margin-bottom .25rem
          p 
            font-size .65rem
            color #999
            line-height .9rem
            max-height 1.65rem
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
          
</style>
