import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/common/Root'
import Header from '@/components/common/Header'
import Tab from '@/components/common/Tab'
import Client from '@/components/page/Client/Client.vue'
//音乐馆
import MusicHall from '@/components/page/MusicHall/MusicHall'
//音乐馆导航栏
import MHNav from '@/components/page/MusicHall/MH-Nav.vue'

//音乐馆导航栏页面
import Home from '@/components/page/MusicHall/MHNav-page/Home/Home.vue'
import HomeTopListDetail from '@/components/page/MusicHall/MHNav-page/Home/Home-TopList-Detail.vue'
import Singer from '@/components/page/MusicHall/MHNav-page/Singer/Singer.vue'
import NewDisc from '@/components/page/MusicHall/MHNav-page/NewDisc/NewDisc.vue'
import RankList from '@/components/page/MusicHall/MHNav-page/RankList/RankList.vue'
import ClassList from '@/components/page/MusicHall/MHNav-page/ClassList/ClassList.vue'
import Radio from '@/components/page/MusicHall/MHNav-page/Radio/Radio.vue'
import MV from '@/components/page/MusicHall/MHNav-page/MV/MV.vue'
import Album from '@/components/page/MusicHall/MHNav-page/Album/Album.vue'
import Tickt from '@/components/page/MusicHall/MHNav-page/Tickt/Tickt.vue'
//我的音乐
import MyMusic from '@/components/page/MyMusic/MyMusic.vue'
//开放平台
import OpenPlatform from '@/components/page/OpenPlatform/OpenPlatform.vue'
//VIP
import VIP from '@/components/page/VIP/VIP.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'MusicHall',
      component:MusicHall,
    },
    {
      path: '/MusicHall',
      name:'MusicHall',
      component:MusicHall,
    },
    {
      path:'/MyMusic',
      name:'MyMusic',
      component:MyMusic
    },
    {
      path: '/Client',
      name: 'Client',
      component: Client
    },

    {
      path: '/OpenPlatform',
      name: 'OpenPlatform',
      component: OpenPlatform
    },
    {
      path: '/VIP',
      name: 'VIP',
      component: VIP
    },
    //音乐馆导航页子路由
    {
      path:'/MHNav',
      component:MHNav,
      children:[
        {path:'Home',component:Home},
        {path:'Singer',component:Singer},
        {path:'NewDisc',component:NewDisc},
        {path:'RankList',component:RankList},
        {path:'ClassList',component:ClassList},
        {path:'Radio',component:Radio},
        {path:'MV',component:MV},
        {path:'Album',component:Album},
        {path:'Tickt',component:Tickt},
      ]
    },
    {
      path: '/HomeTopListDetail/:item',
      name: 'HomeTopListDetail',
      component: HomeTopListDetail
    },


  ]
})
