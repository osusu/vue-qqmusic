
<template>
  <div id="HomeTopListDetail">
   排行榜详情页面
    {{this.$store.state.count}}
    {{this.$store.state.showHeader}}
    {{showHeader}}
  </div>
</template>

<script>

  import  {mapState,mapMutations,mapActions} from 'vuex';
  export default {
    name: 'HomeTopListDetail',
    data(){
      return{
        showHeader:false,
      }
    },
    methods:{
      ...mapMutations(['changeHeaderStutas']),
      // ...mapActions(['addAction','reduceAction'])

    },
    computed:{
    ...mapState(["headerStatus"])
    },
    created() {
      console.log("准备进入路由模板");
      console.log(this.$store.state);
      this.changeHeaderStutas(this.showHeader);
    },
    beforeRouteLeave(to, from, next){
      console.log('准备离开');
      this.changeHeaderStutas(!(this.showHeader));
      console.log(this.$store.state);
      next();
    }
  }
</script>

<style scoped>

</style>
