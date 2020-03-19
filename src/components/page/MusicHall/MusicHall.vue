
<template>
  <div id="MusicHall">
    这是音乐馆
    <MHNav></MHNav>

<!--    <router-view></router-view>-->
<!--    <router-view name="MusicHall"></router-view>-->
    <router-view/>
  </div>
</template>

<script>
  import MHNav from '@/components/page/MusicHall/MH-Nav.vue'

  export default {
    name: 'MusicHall',
    components:{
      MHNav
    }
  }
</script>

<style>

</style>
