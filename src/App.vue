<template>
  <div id="app">
    <router-view :max="max" :min="min"></router-view>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
