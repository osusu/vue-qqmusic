<template>
  <div class="HomeWonderRec">
    <div class="container">

      <h1>歌单推荐</h1>
      <div class='banner-swiper'>
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide>
            <ul class="pic">
              <li>
                <img src="/static/data/img/Home_WonderRec1_1.png" alt="">
              </li>
              <li>
                <img src="/static/data/img/Home_WonderRec1_2.png" alt="">
              </li>
            </ul>
          </swiper-slide>

          <swiper-slide>
            <ul class="pic">
              <li>
                <img src="/static/data/img/Home_WonderRec1_1.png" alt="">
              </li>
              <li>
                <img src="/static/data/img/Home_WonderRec1_2.png" alt="">
              </li>
            </ul>
          </swiper-slide>

          <swiper-slide>
            <ul class="pic">
              <li>
                <img src="/static/data/img/Home_WonderRec1_1.png" alt="">
              </li>
              <li>
                <img src="/static/data/img/Home_WonderRec1_2.png" alt="">
              </li>
            </ul>
          </swiper-slide>

          <!-- Optional controls -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-pagination"  slot="pagination"></div>

        </swiper>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeWonderRec',
    data(){
      return {
        swiperOption: {
          loop:true,
          pagination:{
            el: '.swiper-pagination'
          }
        }
      }
    },
    components:{

    }
  }
</script>

<style scoped>
  .HomeWonderRec{
    /*background-color: #F3F3F3;*/
    background: linear-gradient(top,#F3F3F3,#fff);
    text-align: center;
    padding-bottom: 30px;
  }
  .HomeWonderRec h1{
    font-size: 30px;
    letter-spacing: 0.6em;
    padding-bottom: 15px;
    padding-top: 50px;
  }
  .HomeWonderRec ul{
    overflow: hidden;
    margin-top: 30px;
    padding-bottom: 45px;
  }
  .HomeWonderRec li:first-child {
     float:left;
   }
  .HomeWonderRec li:last-child {
    float:right;
  }
  .HomeWonderRec li img{
    width: 590px;
    height: 236px;
  }
  .swiper-pagination >>> .swiper-pagination-bullet-active{
    background: orange;
  }
</style>
