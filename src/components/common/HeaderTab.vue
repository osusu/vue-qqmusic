<template>
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
<!--<router-view></router-view>-->
  </div>
</template>

<script>

  export default {
    name: 'Tab',
    data() {
      return {
        active: 0,
        tabs: [
          {
            title: "音乐馆",
            src: "/MusicHall"
          },
          {
            title: "我的音乐",
            src: "/MyMusic"
          },
          {
            title: "客户端",
            src: "/Client",
            imgUrc: require("@/assets/img/mark_1.png")
          },
          {
            title: "开放平台",
            name: 'OpenPlatform',
            src: "/OpenPlatform"
          },
          {
            title: "VIP",
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

</style>
