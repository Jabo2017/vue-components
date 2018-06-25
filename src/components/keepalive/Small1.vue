<template>
	<div class="small1">
		{{msg}}
		<button @click="changeMsg">改变状态</button>
	</div>
</template>

<script>
	export default{
		name:"Small1",
		data(){
			return {
				msg:"默认"
			}
		},
		methods:{
			changeMsg(){
				this.msg = "Changed";
			}
		}
	}
</script>

<style>
	
</style>