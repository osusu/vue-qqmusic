<template>
  <div id="app">
    <Header v-if="this.headerStatus"></Header>
    <router-view/>
  </div>
</template>

<script>
  import Root from '@/components/common/Root'
  import Header from '@/components/common/Header.vue'
  import  {mapState,mapMutations,mapActions} from 'vuex';

  export default {
    name: 'App',
    data(){
      return{
        // showHeader:true,
        name:''
      }
    },
    components:{
      Root,
      Header,
    },
    methods:{
      ...mapMutations(['changeHeaderStutas']),
      // ...mapActions(['addAction','reduceAction'])

    },
    computed:{
      ...mapState(["headerStatus"])
    },

    created() {
      // this.changeHeaderStutas(this.showHeader);
      // this.showHeader = this.headerStatus;
      // console.log(this.headerStatus);
    },
    // 判断路由
    mounted() {
      // this.name = this.$route.name;
      // console.log(this.$route.name)
      // this.showHeader = this.headerStatus;
      // console.log(this.headerStatus);
    },
    watch:{
      "this.headerStatus"(){
        // this.showHeader = this.headerStatus;

        console.log(this.headerStatus);
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
