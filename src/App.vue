<template>
  <div id="app">
    <div class="nav-box">
      <router-link class="nav-li" to="/">Counter</router-link>
      <router-link class="nav-li" to="/swiper">Swiper</router-link>
      <router-link class="nav-li" to="/props">props</router-link>
      <router-link class="nav-li" to="/slots">slots</router-link>
      <router-link class="nav-li" to="/view">view</router-link>
    </div>    

    <div class="app-content">
       <router-view :max="max" :min="min" name="counter"></router-view>
       <router-view />
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      max:10,
      min:1
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}

.nav-box{
  line-height: 48px;
  background-color: #f00;
}

.nav-li{
  display: inline-block;
  padding: 6px 14px;
}

.nav-li:hover{
  background-color: #f99;
}

.app-content{
  padding: 10px 0;
}


</style>
