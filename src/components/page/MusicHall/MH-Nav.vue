<template>
  <div class="MHNav">
<!--    <div class="container">-->
      这是导航页
      <Tab :tabItem="MusicHallNav" :itemStyle="tabItemStyle" ></Tab>
      <router-view></router-view>
<!--    </div>-->


  </div>
</template>

<script>
  import Tab from '@/components/common/Tab.vue'

  export default {
    name: 'MHNav',
    data(){
      return{
        // activedItemStyle:{
        //   backgroundColor: "#31c27c",
        //   fontSize: 30+"px",
        // },
        tabItemStyle:{
          display: "inline-block",
          height: 50+"px",
          lineHeight: 50+"px",
          fontSize: 15+"px",
          padding: "0 20px",

        },
        MusicHallNav:[
          {
            "title": "首页",
            "src": "/MHNav/Home",
          },
          {
            "title": "歌手",
            "src": "/MHNav/Singer"
          },
          {
            "title": "新碟",
            "src": "/MHNav/NewDisc"
          },
          {
            "title": "排行榜",
            "src": "/MHNav/RankList"
          },
          {
            "title": "分类歌单",
            "src": "/MHNav/ClassList"
          },
          {
            "title": "电台",
            "src": "/MHNav/Radio"
          },
          {
            "title": "MV",
            "src": "/MHNav/MV"
          },
          {
            "title": "数字专辑",
            "src": "/MHNav/Album"
          },
          {
            "title": "票务",
            "src": "/MHNav/Tickt"
          }
        ]


      }
    },
    components:{
      Tab
    }
  }
</script>

<style>
  .MHNav{
    border-Top: 1px solid #f2f2f2;
  }
  .Tab a{
    color: #000;
  }
  .Tab a.router-link-active{
    color: #31c27c;
    /*background-color: #31c27c;*/
  }

</style>
