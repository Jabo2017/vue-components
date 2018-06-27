<template>
	<div class="params">
		ccc
		<router-link to="/router/params/p1/1">P1 : params</router-link>
		<router-link to="/router/params/p2?p=2">P2 : query</router-link>
		<router-view />
	</div>	
</template>

<script>
	export default{
		name:'Params',
		data(){
			return{

			}
		}
	}
</script>

<style scoped>
	
</style>