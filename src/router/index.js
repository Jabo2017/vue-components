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
    }
  ],
  mode:"history",  //消除#号
})
