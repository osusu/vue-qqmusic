<template>
  <div class="NavHome">
<!--    <div class="container">-->
      这是主页
      <HomeSongListRec></HomeSongListRec>
      <HomeNewStart></HomeNewStart>
      <HomeWonderRec></HomeWonderRec>
      <HomeNewDisc></HomeNewDisc>
      <HomeTopList></HomeTopList>
      <HomeMV></HomeMV>
    <HomeFooter></HomeFooter>
<!--    </div>-->

  </div>
</template>

<script>
  import HomeSongListRec from '@/components/page/MusicHall/MHNav-page/Home/Home-SongListRec.vue'
  import HomeNewStart from '@/components/page/MusicHall/MHNav-page/Home/Home-NewStart.vue'
  import HomeWonderRec from '@/components/page/MusicHall/MHNav-page/Home/Home-WonderRec.vue'
  import HomeNewDisc from '@/components/page/MusicHall/MHNav-page/Home/Home-NewDisc.vue'
  import HomeTopList from '@/components/page/MusicHall/MHNav-page/Home/Home-TopList.vue'
  import HomeMV from '@/components/page/MusicHall/MHNav-page/Home/Home-MV.vue'
  import HomeFooter from '@/components/page/MusicHall/MHNav-page/Home/Home-Footer.vue'

  export default {
    name: 'NavHome',
    data(){
      return{
      }
    },
    components:{
      HomeSongListRec,
      HomeNewStart,
      HomeWonderRec,
      HomeNewDisc,
      HomeTopList,
      HomeMV,
      HomeFooter
    }
  }
</script>

<style scoped>

</style>
