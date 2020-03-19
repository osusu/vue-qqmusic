<template>
  <div class="Tab"  :style="tabStyle">

    <p>这是Tab页</p>
    <router-link
      :to="item.src" v-for="(item,index) in tabItem"
      :key="index"

      @click.native="select(index)"
      :style="itemStyle"
    >
<!--      :class="{Active:isActive===index}"-->
      {{item.title}}
    </router-link>
<!--    <router-view></router-view>-->
  </div>
</template>

<script>

  export default {
    name: 'Tab',
    props:["tabItem","tabStyle","itemStyle","activedItemStyle"],
    data() {
      return {
        // isActive: 0,
        // activestyle:{}
      }
    },
    methods: {
      select(i) {
        this.active = i;
        // console.log(i);
      },
      setActivedItemStyle(){
        this.$nextTick(
          () => {
            let linkItem = document.getElementsByClassName("Active");
            linkItem[0].style = this.activedItemStyle;
          }
        );

      }
    },
    mounted() {
      // this.setActivedItemStyle();
    },

  }
</script>

<style scoped>
  .Tab{
    text-align: center;
  }
  .itemActiveStyle{
    /*background-color: red;*/
  }

  .Tab  a{
    display: inline-block;
    /*height: 90px;*/
    /*/*width: 94px;*/
    /*line-height: 90px;*/
    /*font-size: 18px;*/
    /*padding: 0 20px;*/
    /*color: #000;*/
  }


</style>
