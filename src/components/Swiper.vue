<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
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
            el: '.swiper-pagination'
        }
      },
    }
  },
  components: {
    swiper,
    swiperSlide
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
