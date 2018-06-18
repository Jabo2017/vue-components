import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
	preload:1.3,
	error:require("../assets/public/error.jpg"),
	loading:require("../assets/public/loading.gif"),
	observer:true,
	observerOptions:{
		rootMargin: '0px', 
		threshold: 0.1
	}
})

