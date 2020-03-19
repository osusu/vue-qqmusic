<template>
  <div class="HomeTopList">
    <div class="container">
      <h1>排行榜</h1>
      <ul class="ListWrap">
        <li class="toplist__item " @click="goDetail">
          <div class="bg1">
            <div class="toplist__hd">
              <h3>巅峰榜</h3>
              <a class="toplist__tit">热歌</a>
            </div>
            <div class="iWrap">
              <div class="playWrap" >
                <i class="play iconfont icon-bofang3"></i>
              </div>
              <i class="line iconfont icon-hengxian-"></i>
            </div>
            <ul class="songItem">
              <li>
                <div class="number">1</div>
                <div class="Item">
                  <p class="name">世界那么大还是遇见你</p>
                  <p class="author">程响</p>
                </div>
              </li>
              <li>
                <div class="number">2</div>
                <div class="Item">
                  <p class="name">桥边姑娘</p>
                  <p class="author">海伦</p>
                </div>
              </li>
              <li>
                <div class="number">3</div>
                <div class="Item">
                  <p class="name">冬眠</p>
                  <p class="author">司南</p>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="toplist__item ">
          <div class="bg2">
            <div class="toplist__hd">
              <h3>巅峰榜</h3>
              <a class="toplist__tit">热歌</a>
            </div>
            <div class="iWrap">
              <div class="playWrap" >
                <i class="play iconfont icon-bofang3"></i>
              </div>
              <i class="line iconfont icon-hengxian-"></i>
            </div>
            <ul class="songItem">
              <li>
                <div class="number">1</div>
                <div class="Item">
                  <p class="name">世界那么大还是遇见你</p>
                  <p class="author">程响</p>
                </div>
              </li>
              <li>
                <div class="number">2</div>
                <div class="Item">
                  <p class="name">桥边姑娘</p>
                  <p class="author">海伦</p>
                </div>
              </li>
              <li>
                <div class="number">3</div>
                <div class="Item">
                  <p class="name">冬眠</p>
                  <p class="author">司南</p>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="toplist__item ">
          <div class="bg3">
            <div class="toplist__hd">
              <h3>巅峰榜</h3>
              <a class="toplist__tit">热歌</a>
            </div>
            <div class="iWrap">
              <div class="playWrap" >
                <i class="play iconfont icon-bofang3"></i>
              </div>
              <i class="line iconfont icon-hengxian-"></i>
            </div>
            <ul class="songItem">
              <li>
                <div class="number">1</div>
                <div class="Item">
                  <p class="name">世界那么大还是遇见你</p>
                  <p class="author">程响</p>
                </div>
              </li>
              <li>
                <div class="number">2</div>
                <div class="Item">
                  <p class="name">桥边姑娘</p>
                  <p class="author">海伦</p>
                </div>
              </li>
              <li>
                <div class="number">3</div>
                <div class="Item">
                  <p class="name">冬眠</p>
                  <p class="author">司南</p>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="toplist__item ">
          <div class="bg4">
            <div class="toplist__hd">
              <h3>巅峰榜</h3>
              <a class="toplist__tit">热歌</a>
            </div>
            <div class="iWrap">
              <div class="playWrap" >
                <i class="play iconfont icon-bofang3"></i>
              </div>
              <i class="line iconfont icon-hengxian-"></i>
            </div>
            <ul class="songItem">
              <li>
                <div class="number">1</div>
                <div class="Item">
                  <p class="name">世界那么大还是遇见你</p>
                  <p class="author">程响</p>
                </div>
              </li>
              <li>
                <div class="number">2</div>
                <div class="Item">
                  <p class="name">桥边姑娘</p>
                  <p class="author">海伦</p>
                </div>
              </li>
              <li>
                <div class="number">3</div>
                <div class="Item">
                  <p class="name">冬眠</p>
                  <p class="author">司南</p>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="toplist__item ">
          <div class="bg5">
            <div class="toplist__hd">
              <h3>巅峰榜</h3>
              <a class="toplist__tit">热歌</a>
            </div>
            <div class="iWrap">
              <div class="playWrap" >
                <i class="play iconfont icon-bofang3"></i>
              </div>
              <i class="line iconfont icon-hengxian-"></i>
            </div>
            <ul class="songItem">
              <li>
                <div class="number">1</div>
                <div class="Item">
                  <p class="name">世界那么大还是遇见你</p>
                  <p class="author">程响</p>
                </div>
              </li>
              <li>
                <div class="number">2</div>
                <div class="Item">
                  <p class="name">桥边姑娘</p>
                  <p class="author">海伦</p>
                </div>
              </li>
              <li>
                <div class="number">3</div>
                <div class="Item">
                  <p class="name">冬眠</p>
                  <p class="author">司南</p>
                </div>
              </li>
            </ul>
          </div>
        </li>



      </ul>


    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeTopList',
    data(){
      return{
      }
    },
    components:{

    },
    methods:{
      goDetail(){
        let routerdata = this.$router.push({
          name:'HomeTopListDetail',
          params:{item:{id:"osuus"}}
        });
        let newhref = routerdata.href ;
        console.log(newhref);
        window.open(newhref, "_blank");
      }
    }
  }
</script>

<style scoped>
  .HomeTopList{
    /*background-color: #F3F3F3;*/
    background: linear-gradient(top,#F3F3F3,#fff);
    text-align: center;
    padding-bottom: 30px;
  }
  .HomeTopList h1{
    font-size: 30px;
    letter-spacing: 0.6em;
    padding-bottom: 15px;
    padding-top: 50px;
  }
  .HomeTopList ul.ListWrap{
    margin-top: 30px;
    height: 567px;
    color: #fff;
    overflow: hidden;
  }
  .HomeTopList ul.ListWrap li.toplist__item {
    float: left;
    width: 224px;
    margin: 0 8px;
  }
  .HomeTopList ul.ListWrap li.toplist__item div.bg1{
    background-color: #D97C97;
    height: 500px;
  }
  .HomeTopList ul.ListWrap li.toplist__item div.bg2{
    background-color: #6D96B3;
    height: 500px;
  }
  .HomeTopList ul.ListWrap li.toplist__item div.bg3{
    background-color: #6DC0B9;
    height: 500px;
  }
  .HomeTopList ul.ListWrap li.toplist__item div.bg4{
    background-color: #508D92;
    height: 500px;
  }
  .HomeTopList ul.ListWrap li.toplist__item div.bg5{
    background-color: #EEA273;
    height: 500px;
  }
  .HomeTopList li.toplist__item div.toplist__hd{
    margin-bottom: 20px;
  }
  .HomeTopList li.toplist__item div.toplist__hd h3{
    font-size: 20px;
    margin-bottom: 9px;
    letter-spacing: 0.2em;
    padding-top: 40px;
    font-weight: lighter;
  }
  .HomeTopList li.toplist__item .toplist__hd a{
    font-size: 26px;
    color: #fff;

  }
  .HomeTopList li.toplist__item div.iWrap{
    position: relative;
    /*margin-bottom: 20px;*/
  }
  .HomeTopList li.toplist__item .playWrap{
    /*position: relative;*/
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius:20px;
    position: absolute;
    margin: 0 auto;
    left: 40%;
    /*visibility: hidden;*/
    Opacity:0;
  }
  .HomeTopList li.toplist__item .playWrap:hover{
    /*visibility: visible;*/
    Opacity:1;
  }
  .HomeTopList li.toplist__item  .play{
    /*display: inline-block;*/
    /*width: 50px;*/
    /*height: 50px;*/
    font-size: 15px;
    position: absolute;
    top: 14px;
    left:14px;
    color: #000;

  }
  .HomeTopList .toplist__item  .line{
    /*border-bottom: 2px solid #555;*/
    /*width: 50px;*/
    font-size: 40px;
  }
  .HomeTopList li.toplist__item ul.songItem{
    width: 164px;
    margin:  0 auto;
  }
  .HomeTopList li.toplist__item ul.songItem li{
    overflow: hidden;
    /*margin-bottom: 20px;*/
    margin: 20px 0;
  }

  .HomeTopList li.toplist__item ul.songItem li>div{
    float: left;
    font-size: 14px;
  }
  .HomeTopList li.toplist__item ul.songItem div.number {

  }
  .HomeTopList li.toplist__item ul.songItem div.Item{
    text-align: left;
  }
  .HomeTopList li.toplist__item ul.songItem div.Item p{
    margin: 0 5px 10px ;
  }
</style>
