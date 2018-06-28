<template>
	<div class="nav-box">
      <!-- <router-link class="nav-li" to="/">Counter</router-link> -->

      <!-- 参考exact :https://router.vuejs.org/zh/api/#exact-->
      <router-link exact class="nav-li" v-for="item in navList" :key="item.id" :to="item.path">{{item.name}}</router-link>
		
	<!-- <router-link class="nav-li" v-for="item in navList" :key="item.id" :to="{path:item.path}">{{item.name}}</router-link> -->

    </div>    
</template>

<script>
	export default{
		name:'Nav',
		data(){
			return{
				navList:[
					{path:'/',name:'Counter'},
					{path:'/swiper',name:'Swiper'},
					{path:'/props',name:'props'},
					{path:'/slots',name:'slots'},
					{path:'/view',name:'view'},
					{path:'/animation',name:'animatio'},
					{path:'/directive',name:'自定义组件'},
					{path:'/filter',name:'filter'},
					{path:'/axios',name:'Axios'},
					{path:'/router',name:'router'},
					{path:'/element',name:'Element组件'},
				]
			}
		}
	}
</script>

<style scoped>
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

</style>