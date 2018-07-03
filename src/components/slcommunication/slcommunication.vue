<template>
	<div class="slcommunication">
		<component1></component1>
		<component2></component2>
	</div>
</template>

<script>
	import SLCommunication1 from './slcommunication1'
	import SLCommunication2 from './slcommunication2'

	export default{
		name:"slcommunication",
		data(){
			return{
				msg:"平级通信组件",
			}
		},
		components:{
			component1:SLCommunication1,
			component2:SLCommunication2
		},
		mounted(){
			this.$nextTick(function(){
                console.log(this.$root)
            })
		},
		methods:{

		}
	}
</script>

<style>
	
</style>