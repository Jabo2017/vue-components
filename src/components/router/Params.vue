<template>
	<div class="params">
		<router-link exact class="paramsLi" to="/router/params/p1/1">P1 : params</router-link>
		<router-link exact class="paramsLi" to="/router/params/p2?p=2">P2 : query</router-link>

		<!-- 动态路由 -->
		<router-link exact class="paramsLi" :to="'/router/params/p1/'+pId">P1 : 动态ID</router-link>
		<router-link exact class="paramsLi" :to="{name:'p1',params:{p:100}}">P1 : 动态ID 推荐</router-link>
		<!-- <router-link class="paramsLi" :to="{path:'/router/params/p1',params:{p:101}}">P1-1 : 动态ID</router-link> -->
		<router-link exact class="paramsLi" :to="{path:'/router/params/p2',query:{p:pId2}}">P2 : 动态ID</router-link>
		<router-link exact class="paramsLi" :to="{name:'p2',query:{p:200}}">P2 : 动态ID-2</router-link>
		<router-link exact class="paramsLi" :to="{path:'/router/params/p2',query:{p:102}}">P2-1 : 动态ID</router-link>

		<router-view />
	</div>	
</template>

<script>
	export default{
		name:'Params',
		data(){
			return{
				pId:10,
				pId2:20,
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.paramsLi{
		display: inline-block;
		padding: 10px 20px;
	}
</style>