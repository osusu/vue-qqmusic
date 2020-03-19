<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
  import Root from '@/components/common/Root'
  import Header from '@/components/common/Header.vue'

  export default {
  name: 'App',
components:{
  Root,
  Header,
}

}
</script>

<style>
.container{
  width: 1200px;
  margin: 0 auto;
}
</style>
