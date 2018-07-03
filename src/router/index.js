// 参考：https://router.vuejs.org/zh/api/#router-%E6%9E%84%E5%BB%BA%E9%80%89%E9%A1%B9

import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/components/Counter'  //@查看 build/webpack.base.conf.js
import Swiper from '@/components/Swiper'
import Parent from '@/components/fscommunication/Parent'
import Slots from '@/components/slots/Parent'
import View from '@/components/keepalive/Big'
import Animation from '@/components/animation/Animation'
import Directive from '@/components/directive/Directive'
import Filter from '@/components/filter/Filter'
import Axios from '@/components/axios/Axios'
import RouterComponent from '@/components/router/Router'
import Java from '@/components/router/Java'
import Web from '@/components/router/Web'
import Params from '@/components/router/Params'
import P1 from '@/components/router/P1'
import P2 from '@/components/router/P2'
import Simulation from '@/components/router/Simulation'
import Element from '@/components/element/Element'
import VxParent from '@/components/vuex/VxParent'
import SLCommunication from '@/components/slcommunication/slcommunication'

Vue.use(Router)

export default new Router({
  mode:"history",  //消除#号
  //全局配置 <router-link> 的默认“激活 class 类名”
  linkActiveClass:"router-link-active",  //默认值
  routes: [
    {
      path: '/',
      name: 'Counter',
      //component: Counter
      components:{
        //视图名:组件名
        counter: Counter
      }
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/props',
      name: 'props',
      component: Parent
    },
    {
      path: '/slots',
      name: 'slots',
      component: Slots
    },
    {
      path: '/view',
      name: 'view',
      component: View
    },
    {
      path: '/animation',
      name: 'animation',
      component: Animation
    },
    {
      path: '/directive',
      name: 'directive',
      component: Directive
    },
    {
      path: '/filter',
      name: 'filter',
      component: Filter
    },
    {
      path: '/axios',
      name: 'axios',
      component: Axios
    },
    {
      path: '/router',
      name: 'routerComponent',
      component: RouterComponent,
      redirect:'router/java',
      children:[
        {path:'java',name:'java',component:Java},
        {path:'web',name:'web',component:Web},
        {path:'params',name:'params',component:Params,
           redirect:'params/p1/1',
           children:[
              {path:'p1/:p',name:'p1',component:P1},
              {path:'p2',name:'p2',component:P2}
           ]
        },
        {path:'simulation',name:'simulation',component:Simulation},
      ]
    },
    {
      path:'/element',
      name:'element',
      component:Element
    },
    {
      path:'/vuex',
      name:'vuex',
      component:VxParent
    },
    {
      path: '/slcommunication',
      name: 'slcommunication',
      component: SLCommunication
    },



  ],


})
