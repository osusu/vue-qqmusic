<template>
  <div id="app">
    <Header v-if="!(name==='HomeTopListDetail')"></Header>
    <router-view/>
  </div>
</template>

<script>
  import Root from '@/components/common/Root'
  import Header from '@/components/common/Header.vue'

  export default {
  name: 'App',
    data(){
    return{
      showHeader:true,
      name:''
    }
  },
components:{
  Root,
  Header,
},
    // 判断路由
    mounted() {
      // this.name = this.$route.name;
      // console.log(this.$route.name)
    },
    watch:{
      $route(to,from){
        this.name = to.name;
        console.log( to.name)
      }
    }


}
</script>

<style>
.container{
  width: 1200px;
  margin: 0 auto;
}
</style>
