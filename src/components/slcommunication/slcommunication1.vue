<template>
	<div class="slcommunication1">
		平级通信组件1：
		<button @click="trigger1">我是组件1：我要调用组件2</button>
	</div>
</template>

<script>
	export default{
		name:"slcommunication1",
		data(){
			return{
				msg:"组件1",
			}
		},
		mounted(){
			//监听this.$root.eventChannel 自定义事件
			this.$eventChannel.$on("slcommunication2",function(data){
				alert(data.msg +",被slcommunication1调用！")
			})
		},
		methods:{
			trigger1(){
				//为this.$eventChannel 自定义事件
				this.$eventChannel.$emit("slcommunication1",{msg:'我是slcommunication1'})
			},

		}
	}
</script>

<style>
	
</style>