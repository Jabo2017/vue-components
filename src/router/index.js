import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/components/Counter'  //@查看 build/webpack.base.conf.js
import Swiper from '@/components/Swiper'
import Parent from '@/components/Parent'
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

Vue.use(Router)

export default new Router({
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
      redirect:'/router/java',
      children:[
        {path:'java',name:'java',component:Java},
        {path:'web',name:'web',component:Web},
        {path:'params',name:'params',component:Params,
           redirect:'params/p1',
           children:[
              {path:'p1/:p',name:'p1',component:P1},
              {path:'p2/:p',name:'p2',component:P2}
           ]
        }
      ]
    }
  ],
  mode:"history",  //消除#号
})
