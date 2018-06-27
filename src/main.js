// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//路由导入
import router from './router'
import lazy from './lazy'

import Axios from "axios"

//挂载到原型
Vue.prototype.$axios = Axios

Vue.prototype.HOST = '/api'


//全局配置
//Axios.defaults.baseURL = "https://api.douban.com";
Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// 发送请求前处理request的数据
Axios.defaults.transformRequest = [function(data) {
  // Do whatever you want to transform the data
  var newData = '';
  for (var k in data) {
    newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
  }
  return newData;
}]

//全局自定义指令
//参考：https://cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0
//自定义一个全局的自定义指令： v-focus
Vue.directive('focus', {
  //钩子函数：当绑定的元素插入到DOM中时。。。
  inserted: function(el) {
    el.focus()
  }
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
