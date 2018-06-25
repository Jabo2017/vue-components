<template>
	<div class="big">
	<!--  {{ currentView }}  -->		
		<!--不记住状态的方式： <component :is="currentView"></component> -->

		<!-- 记住状态的方式：缓存不活动的组件实例 -->
		<keep-alive>
			<component :is="currentView"></component>
		</keep-alive>
		<button @click="changeView">改变视图</button>
	</div>
</template>

<script>
	import Small1 from './Small1'
	import Small2 from './Small2'

	export default {
		name:'Big',
		data(){
			return {
				currentView:'Small1',
				showFlag:true,
			}
		},
		components:{
			Small1,
			Small2						
		},
		methods:{
			changeView(){
				if(this.showFlag){
					this.currentView = "Small2";
				}else{
					this.currentView = "Small1";
				}
				this.showFlag = !this.showFlag;
			}
		}
	}
</script>

<style>
	
</style>