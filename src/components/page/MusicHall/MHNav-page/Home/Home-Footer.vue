<template>
  <div class="HomeFooter">
    <div class="container">
      <div class="download">
        <h3 class="tit">下载QQ音乐客户端</h3>
        <ul class="download_list liWrap">
          <li>
            <i class="iconfont icon-microsofticon"></i>
            <p>PC版</p>
          </li>
          <li>
            <i class="iconfont icon-mac"></i>
            <p>Mac版</p>
          </li>
          <li>
            <i class="iconfont icon-androidzhuanhuan"></i>
            <p>Android版</p>
          </li>
          <li>
            <i class="iconfont icon-iconziti48"></i>
            <p>iPhone版</p>
          </li>
        </ul>
      </div>
      <div class="produce">
        <h3 class="tit">特色产品</h3>
        <ul class="produce liWrap">
          <li>
            <i class="iconfont icon-quanminkge"></i>
            <p>全民K歌</p>
            <p>车载互联</p>
          </li>
          <li>
            <i class="iconfont icon-superpowers"></i>
            <p>Super Sound</p>
            <p>QQ演出</p>
          </li>
          <li>
            <i class="iconfont icon-yincangwuxian"></i>
            <p>QPlay</p>
          </li>
        </ul>
      </div>
      <div class="group">
        <h3 class="tit">合作链接</h3>
        <ul class="group liWrap">
          <li>
            <a href="#">CJ ENM</a>
          </li>
          <li>
            <a href="#">腾讯视频</a>
          </li>
          <li>
            <a href="#">手机QQ空间</a>
          </li>
          <li>
            <a href="#">最新版QQ</a>
          </li>
          <li>
            <a href="#">腾讯社交广告</a>
          </li>
          <li>
            <a href="#">电脑管家</a>
          </li>
          <li>
            <a href="#">QQ浏览器</a>
          </li>
          <li>
            <a href="#">腾讯微云</a>
          </li>
          <li>
            <a href="#">腾讯云</a>
          </li>
          <li>
            <a href="#">企鹅FM</a>
          </li>
          <li>
            <a href="#">智能电视网</a>
          </li>
          <li>
            <a href="#">当贝市场</a>
          </li>
        </ul>
      </div>
      <div class="platform">
        <div class="open">
            <h3 class="tit">开放平台</h3>
            <ul class="liWrap">
              <li><a href="#">QQ音乐开放平台</a></li>
              <li><a href="#">腾讯音乐人</a></li>
            </ul>
        </div>

          <div class="TME">
            <h3 class="tit">TME集团官网</h3>
            <ul class="liWrap">
              <li><a href="#">腾讯音乐</a></li>
            </ul>
          </div>


      </div>
      <div class="cooperate">
        <ul>
          <li>
            <a href="#">关于腾讯</a><span>|</span>
          </li>
          <li>
            <a href="#">About Tencent</a><span>|</span>
          </li>
          <li>
            <a href="#">服务条款</a><span>|</span>
          </li>
          <li>
            <a href="#">用户服务协议</a><span>|</span>
          </li>
          <li>
            <a href="#">隐私政策</a><span>|</span>
          </li>
          <li>
            <a href="#">权利声明</a><span>|</span>
          </li>
          <li>
            <a href="#">广告服务</a><span>|</span>
          </li>
          <li>
            <a href="#">腾讯招聘</a><span>|</span>
          </li>
          <li>
            <a href="#">客服中心</a><span>|</span>
          </li>
          <li>
            <a href="#">网站导航</a>
          </li>


        </ul>
        <p class="Copyright">Copyright © 1998 - 2020 Tencent. All Rights Reserved.</p>
        <p>腾讯公司 版权所有 腾讯网络文化经营许可证</p>

      </div>
    </div>
  </div>
</template>

<script>
  import HomeSongListRec from '@/components/page/MusicHall/MHNav-page/Home/Home-SongListRec.vue'
  import HomeNewStart from '@/components/page/MusicHall/MHNav-page/Home/Home-NewStart.vue'
  import HomeWonderRec from '@/components/page/MusicHall/MHNav-page/Home/Home-WonderRec.vue'
  import HomeNewDisc from '@/components/page/MusicHall/MHNav-page/Home/Home-NewDisc.vue'
  import HomeTopList from '@/components/page/MusicHall/MHNav-page/Home/Home-TopList.vue'
  import HomeMV from '@/components/page/MusicHall/MHNav-page/Home/Home-MV.vue'

  export default {
    name: 'HomeFooter',
    data(){
      return{
      }
    },
    components:{

    }
  }
</script>

<style scoped>
div.HomeFooter{
  height: 600px;
  background-color: #333333;
}
div.HomeFooter div.container{
  overflow: hidden;
}
div.HomeFooter div.container div{
  color: #999;

}
div.HomeFooter div.container a{
  color: #999;
}
div.HomeFooter div.container div.download{
  float: left;
  width:470px;
}
div.HomeFooter div.container div.produce{
  /*margin-left: 120px;*/
  float: left;
}
div.HomeFooter div.container div.group{
  float: right;
  width: 300px;
}
div.HomeFooter div.container div.platform{
  clear: both;
  text-align: left;

}
div.HomeFooter div.container div.cooperate{
  clear: both;
  padding-top:90px;
  text-align: center;
}

div.HomeFooter div.container div.platform div.open{
  width: 470px;
}
div.HomeFooter div.container div.platform div.TME{
  /*margin-left: 120px;*/
}
div.HomeFooter  h3.tit{
  padding: 60px 0 46px;
  font-size: 15px;
}
div.HomeFooter ul.liWrap {
  overflow: hidden;
}
div.HomeFooter ul.liWrap li{
  float:left;
  text-align: center;
  margin-right: 30px;
}
div.HomeFooter ul.liWrap li:hover{
  color: #2caf6f;
  cursor: pointer;
}
div.HomeFooter ul.liWrap i{
  font-size: 48px;
}
div.HomeFooter ul.liWrap p{
  font-size: 14px;
  margin-top: 10px;
}
div.HomeFooter div.container div.produce p{
  padding-bottom: 10px;
  text-align: left;
}
div.HomeFooter div.container div.group li{
  margin-bottom: 10px;
  width: 100px;
  margin-right: 0;
  /*text-align: left;*/
}
div.HomeFooter div.container div.group li a{
   font-size: 14px;
  display: inline-block;
}
div.HomeFooter div.container div.group li a:hover{
  color: #2caf6f;
  /*cursor: pointer;*/
}
div.HomeFooter div.container div.platform>div{
  float: left;
}
div.HomeFooter div.container div.platform div li a {
  font-size: 14px;
}
div.HomeFooter div.container div.platform div li a:hover{
  color: #2caf6f;
}
div.HomeFooter div.container div.cooperate ul{
  overflow: hidden;
  display: inline-block;
}
div.HomeFooter div.container div.cooperate p{
  color: #999;
  text-align: center;
  font-size: 12px;
  margin: 15px 0px;
}
div.HomeFooter div.container div.cooperate p.Copyright{
  font-weight: lighter;
}
div.HomeFooter div.container div.cooperate ul li{
  float: left;
}
div.HomeFooter div.container div.cooperate ul li a{
  font-size: 12px;
}
div.HomeFooter div.container div.cooperate ul li span{
  padding: 0 5px;
  font-size: 12px;
}
</style>
