<template>
	<div class="router">
		<div class="left">
			<router-link class="leftNav" to="/router/java">Java</router-link>
			<router-link class="leftNav" to="/router/web">web前端</router-link>
			<router-link class="leftNav" to="/router/params">参数做法</router-link>
			<router-link class="leftNav" to="/router/simulation">模拟跳转</router-link>
		</div>
		<div class="main">
			<router-view />
		</div>
	</div>	
</template>

<script>
	export default{
		name:'RouterComponent',
		data(){
			return{

			}
		}
	}
</script>

<style scoped>
	.router{
		position: relative;
		height: 600px;

	}
	.left{
		position: absolute;
		left: 0;
		top: 0;
		width: 200px;
		height: 100%;
		background-color: #e9e9e9;
	}

	.leftNav{
		display: block;
	}
	
	.main{
		padding-left: 220px;
	}
</style>