<template>
  <div id="app">
    
    <Nav></Nav>

    <div class="app-content">
       <router-view :max="max" :min="min" name="counter"></router-view>
       <router-view />
    </div>
  </div>
</template>

<script>
  import Nav from './components/Nav'

// import './assets/css/animate.css';
export default {
  name: 'App',
  data(){
    return {
      max:10,
      min:1
    }
  },
  components:{
    Nav
  }
}
</script>

<style>
/*@import './assets/css/animate.css';*/
*{
  margin:0;
  padding:0;
}

.app-content{
  padding: 10px 0;
}

.router-link-active{
  color: #fff;
  background-color: #f00;

}

</style>
