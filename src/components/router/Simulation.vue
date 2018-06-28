<!-- 模拟跳转 -->
<template>
	<div class="simulation">
		<button @click="gotoHome">模拟跳转-字符串</button>
		<button @click="gotoRouter">模拟跳转-对象</button>
		<button @click="gotoRouter2">模拟跳转-命名路由</button>
		<button @click="gotoRouter3">模拟跳转-查询参数路由</button>
		<button @click="gotoRouter4">模拟跳转-查询参数路由2</button>
	</div>
</template>

<script>
	export default{
		name:"simulation",
		data(){
			return {

			}
		},
		methods:{
			gotoHome(){
				//字符串
				this.$router.push('/');
			},
			gotoRouter(){
				//对象
				this.$router.push({path:'/router/java?url=' + this.$route.path})
			},
			gotoRouter2(){
				//命名路由
				this.$router.push({name:'p1', params:{p:11}})
			},
			gotoRouter3(){
				//带查询参数
				this.$router.push({name:'p2', query:{p:110}})
			},
			gotoRouter4(){
				//带查询参数
				this.$router.push({path:'/router/params/p2', query:{p:111}})
			}
		}
	}
</script>

<style scoped>
	
</style>