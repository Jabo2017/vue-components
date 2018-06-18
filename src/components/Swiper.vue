<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in imgs":key="index">
      <img v-lazy="item.img">
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  
  </swiper>
</template>

<script>
import Vue from 'Vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

Vue.set(VueAwesomeSwiper);

export default {
  name: 'Counter',
  data () {
    return {
      swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
        lazy:true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        autoplay:true,
        //loop:true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper  
        observeParents:true,//修改swiper的父元素时，自动初始化swiper  
      },

      imgs:[
        {img:require('../assets/images/1.jpg')},
        {img:require('../assets/images/2.jpg')},
        {img:require('../assets/images/3.jpg')},
      ],

    }
  },
  components: {
    swiper,
    swiperSlide
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

@import "../assets/css/swiper-4.3.3.min.css";

.swiper-slide img{
  max-width: 100%;
}
</style>
