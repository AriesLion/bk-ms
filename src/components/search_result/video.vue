<template>
   <div>
       <ul class="search-result-video">
           <li>
               <div class="video-img-box">
                     <img src="" alt="">
               </div>
               <div class="video-info-box">
                   <h3></h3>
                   <p>

                   </p>
               </div>
           </li>
       </ul>
   </div>
</template>

<script>
export default {
   name: 'search-result-video',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped lang="stylus">
    .search-result-video
        margin-top .5rem
        li
            display flex
            background: #fff;
            border-radius: 0.2rem;
            padding: 0.75rem;
            overflow: hidden;
            zoom: 1;
            margin-bottom: 0.25rem
            .video-img-box
                wh(6rem,3,35rem)
                position: relative;
                margin-right: 0.75rem;
                border-radius: 0.2rem;
            .video-info-box
                wh(10rem,3,35rem)




</style>
