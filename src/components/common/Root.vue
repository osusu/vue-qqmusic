<template>
  <div id="Root">
    <Header></Header>
<!--    <router-view></router-view>-->
<!--    <router-view/>-->
  </div>
</template>

<script>
  import Header from '@/components/common/Header.vue'

  export default {
    name: 'container',
    data(){
      return{

      }
    },
    components:{
      Header,
    },

  }
</script>

<style>
  #Root .container {
    width: 1200px;
    background-color: #fff;
    margin: 0 auto;
  }
</style>
