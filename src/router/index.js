import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/components/Counter'  //@查看 build/webpack.base.conf.js
import Swiper from '@/components/Swiper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    }
  ],
  mode:"history",  //消除#号
})
