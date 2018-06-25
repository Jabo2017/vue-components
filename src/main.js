// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import lazy from './lazy'


//全局自定义指令
//参考：https://cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0
//自定义一个全局的自定义指令： v-focus
Vue.directive('focus',{	
	//钩子函数：当绑定的元素插入到DOM中时。。。
	inserted:function(el) {
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
