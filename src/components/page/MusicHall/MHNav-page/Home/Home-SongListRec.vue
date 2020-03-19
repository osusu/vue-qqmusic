<template>
  <div class="HomeSongListRec">
    <div class="container">

      <h1>歌单推荐</h1>
      <ul class="text">
        <li>为你推荐</li>
        <li>学习工作</li>
        <li>网络歌曲</li>
        <li>轻音乐</li>
        <li>官方歌单</li>
        <li>情歌</li>
      </ul>
      <div class='banner-swiper'>
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide>
            <ul class="pic">
              <li>
                <img src="/static/data/img/Home_SongListRec_1.png" alt="">
                <div class="discrib">
                  <p>逆风奔跑，邂逅美丽</p>
                  <P>播放量：<span>7.3</span>万</P>
                </div>
              </li>
              <li>
                <img src="/static/data/img/Home_SongListRec_1.png" alt="">
                <div class="discrib">
                  <p>逆风奔跑，邂逅美丽</p>
                  <P>播放量：<span>7.3</span>万</P>
                </div>
              </li>
              <li>
                <img src="/static/data/img/Home_SongListRec_1.png" alt="">
                <div class="discrib">
                  <p>逆风奔跑，邂逅美丽</p>
                  <P>播放量：<span>7.3</span>万</P>
                </div>
              </li>
              <li>
                <img src="/static/data/img/Home_SongListRec_1.png" alt="">
                <div class="discrib">
                  <p>逆风奔跑，邂逅美丽</p>
                  <P>播放量：<span>7.3</span>万</P>
                </div>
              </li>
              <li>
                <img src="/static/data/img/Home_SongListRec_1.png" alt="">
                <div class="discrib">
                  <p>逆风奔跑，邂逅美丽</p>
                  <P>播放量：<span>7.3</span>万</P>
                </div>

              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="pic">
              <li>
                <img src="/static/data/img/Home_SongListRec_2.png" alt="">
                <div class="discrib">
                  <p>逆风奔跑，邂逅美丽</p>
                  <P>播放量：<span>7.3</span>万</P>
                </div>
              </li>
              <li>
                <img src="/static/data/img/Home_SongListRec_2.png" alt="">
                <div class="discrib">
                  <p>逆风奔跑，邂逅美丽</p>
                  <P>播放量：<span>7.3</span>万</P>
                </div>
              </li>
              <li>
                <img src="/static/data/img/Home_SongListRec_2.png" alt="">
                <div class="discrib">
                  <p>逆风奔跑，邂逅美丽</p>
                  <P>播放量：<span>7.3</span>万</P>
                </div>
              </li>
              <li>
                <img src="/static/data/img/Home_SongListRec_2.png" alt="">
                <div class="discrib">
                  <p>逆风奔跑，邂逅美丽</p>
                  <P>播放量：<span>7.3</span>万</P>
                </div>
              </li>
              <li>
                <img src="/static/data/img/Home_SongListRec_2.png" alt="">
                <div class="discrib">
                  <p>逆风奔跑，邂逅美丽</p>
                  <P>播放量：<span>7.3</span>万</P>
                </div>

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
    name: 'HomeSongListRec',
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
.HomeSongListRec{
  /*background-color: #F3F3F3;*/
  background: linear-gradient(top,#F3F3F3,#fff);
  text-align: center;
  padding-bottom: 30px;
}
.HomeSongListRec h1{
  font-size: 30px;
  letter-spacing: 0.6em;
  padding-bottom: 15px;
  padding-top: 50px;
}
  .HomeSongListRec .text {
    /*overflow: hidden;*/
    /*margin: 0 auto;*/
    /*text-align: center;*/
  }
.HomeSongListRec .text li {
  /*float: left;*/
  margin: 15px;
  display: inline-block;
  color: #333;
  padding: 5px 0;
  /*padding-bottom: 20px;*/
  /*margin-bottom: 20px;*/
}
.HomeSongListRec .text li:hover{
  color: #31c27c;
}
.HomeSongListRec .pic li{
  display: inline-block;
  margin: 0 5px;
}
.HomeSongListRec .pic li img{
  width: 224px;
  height: 224px;
}
.HomeSongListRec .pic li .discrib{
  text-align: left;
  margin-top: 10px;
}
.HomeSongListRec .pic li .discrib p{
  margin: 10px 0;
  font-size: 14px;
}
.HomeSongListRec .pic li .discrib p:first-child{
  cursor: pointer;
}
.HomeSongListRec .pic li .discrib p:last-child{
  padding-bottom: 40px;
  color: #999;
}
.banner-swiper{
  width: 100%;
  /*height: 100%;*/

}
.banner-swiper img{
  /*width: 100%;*/
  /*height: 100%;*/
}
.swiper-pagination >>> .swiper-pagination-bullet-active{
  background: orange;
}
  .swiper-pagination{
   bottom:0px;
  }
.swiper-button-prev, .swiper-button-next{
  top: 33%;
}
</style>
