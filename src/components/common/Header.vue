<template>
  <div id="header">
    <div class="container">
      <div class="header_logo">
        <a href="#">
          <img src="@/assets/img/qqmusic_logo.png" alt="">
        </a>
      </div>
<!--      <HeaderTab></HeaderTab>-->
<!--      :to="item.name" v-for="(item,index) in tabs"-->
      <div id="HeaderTab">
        <router-link
          :to="item.src" v-for="(item,index) in tabs"
          :key="index"
          :class="{active:active===index,imgWrap:index===2}"
          @click.native="select(index)"
        >
          <img :src="item.imgUrc"  v-if="index===2" >
          {{item.title}}
        </router-link>
      </div>

      <div class="header_search">
        <input  type="text" placeholder="搜索音乐、MV、歌单、用户"/>
        <button>
          <i class="iconfont icon-llhomesearch"></i>
        </button>

      </div>
      <div class="header_opt">
        <a class="login">登陆</a>
        <a class="open openvip">开通绿钻豪华版</a>
        <a class="open openmusic">开通付费包</a>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import HeaderTab from '@/components/common/HeaderTab.vue'
  export default {
    name: 'header',
    components:{
      HeaderTab
    },
    data(){
      return{
        active: 0,
        tabs: [
          {
            title: "音乐馆",
            src: "/MusicHall",
            name:'MusicHall',
          },
          {
            title: "我的音乐",
            src: "/MyMusic",
            name:'MyMusic',
          },
          {
            title: "客户端",
            src: "/Client",
            name: 'Client',
            imgUrc: require("@/assets/img/mark_1.png")
          },
          {
            title: "开放平台",
            name: 'OpenPlatform',
            src: "/OpenPlatform"
          },
          {
            title: "VIP",
            name: 'VIP',
            src: "/VIP"
          }
        ]
      }
    },
    methods: {
      select(i) {
        this.active = i;
        // console.log(i);

      }
    }
  }
</script>

<style scoped>
  #header {
    height: 90px;
    /*border-bottom:1px solid #F2F2F2;*/
  }
  #header .container{
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
  }
  #header .header_logo{
    float:left;
    /*height: 90px;*/
    line-height: 90px;
    margin-right: 20px;
  }
  #header .header_logo img{
    /*height: 90px;*/
    /*line-height: 90px;*/
    vertical-align: middle;
  }
  /*选项卡*/
  #header #HeaderTab{
    float: left;
  }
  .active{
    background-color: #31c27c;
  }

  #HeaderTab  a{
    display: inline-block;
    height: 90px;
    /*width: 94px;*/
    line-height: 90px;
    font-size: 18px;
    padding: 0 20px;
    color: #000;
  }
  #HeaderTab .imgWrap{
    position: relative;
  }
  #HeaderTab .imgWrap img{
    width: 37px;
    height: 14px;
    position: absolute;
    top: 18px;
    right: 0;
  }
  #header .header_search{
    float:left;
    line-height: 90px;
    position: relative;
    height: 90px;
    margin-left: 10px;

  }
  #header .header_search input{
    width: 174px;
    height: 36px;
    padding: 0 25px 0 10px;
    font-size: 14px;
    border: 1px solid #b2b2b2;

  }
  #header .header_search button{
    position: absolute;
    height: 36px;
    top: 29px;
    right: 0px;
    box-sizing: border-box;
    background-color: rgba(0,0,0,0);
    border: none;


  }
  #header .header_search button i{
    display: inline-block;
    font-size: 18px;
    padding-bottom: 5px;
    /*line-height: 36px;*/
  }
  #header .header_opt{
    float:right;
    /*position: relative;*/
    /*margin-right: 28px;*/
  }
  #header .header_opt a{
    display: inline-block;
    box-sizing: border-box;
    /*margin: 0px 10px;*/

  }
  #header .header_opt .login{
    line-height: 90px;
    margin-right: 10px;
    color: #000;

  }
  #header .header_opt .open{
    font-size: 13px;
    height: 39px;
    line-height: 39px;
    padding: 0 10px;



  }
  #header .header_opt .openvip{
    background-color: #31c27c;
    border: 1px solid #31c27c;
    color: #fff;
    margin:  0 8px;
    /*position: absolute;*/
    /*top: 0px;*/
    /*right: 0px;*/
  }
  #header .header_opt .openmusic{
    border: 1px solid #c9c9c9 ;
    border-radius:2px;
    background-color: #fff;
    color: #000;
  }


</style>
