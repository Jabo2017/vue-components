<template>
	<div class="slcommunication2">
		平级通信组件2：
		<button @click="trigger2">我是组件2：我要调用组件1</button>
	</div>
</template>

<script>
	export default{
		name:"slcommunication2",
		data(){
			return{
				msg:"组件2",
			}
		},
		mounted(){
			//监听this.$root.eventChannel 自定义事件
			this.$eventChannel.$on("slcommunication1",function(data){
				alert(data.msg +",被slcommunication2调用！")
			})
		},
		methods:{
			trigger2(){
				//为this.$eventChannel 自定义事件
				this.$eventChannel.$emit("slcommunication2",{msg:'我是slcommunication2'})
			},
		}
	}
</script>

<style>
	
</style>