<template>
	<div class="animation">
		<!-- transition -->
		<!-- 参考：https://cn.vuejs.org/v2/guide/transitions.html -->
		<div>
			<button @click="show = !show">展示过度</button>
			<transition name="fade">
				<p v-if="show">hello</p>
			</transition>
		</div>

		<!--动画-->
		<div>
			<button @click="showAnimation = !showAnimation">Animation动画</button>
			<transition name="translate">
				<p v-if="showAnimation">移动</p>				
			</transition>
		</div>

		<!--参考：https://daneden.github.io/animate.css/-->
		<div>
			<button @click="showCss = !showCss">第三方Animation动画</button>
			<transition name="thirdcss" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
				<p class="animationPosition" v-if="showCss">第三方</p>
			</transition>
		</div>
	</div>
</template>

<script>
	//require('../../assets/css/animate.css');
	export default{
		name:'animation',
		data(){
			return{
				show:false,
				showAnimation:false,
				showCss:false
			}
		}
	}
</script>

<style>

	/*导入第三方css*/
	@import '../../assets/css/animate.css';

	/*过渡： 6种状态*/
	.fade-enter-active, .fade-leave-active {
	  transition: opacity 1s;
	}

	/*v-enter:进入; 离开过渡结束*/
	.fade-enter,.fade-leave-to{
		/*transition: opacity 1s;*/
		opacity: 0;
	}	

	.fade-enter-active,.fade-leave-active{
		opacity: .5;
	}	
	/*进入过渡的结束状态, 离开动画开始*/
	.fade-enter-to,.fade-leave{
		opacity: 1;
	}

	/*动画两种状态: v-enter-active v-leave-active*/
	.translate-enter-active{
		animation: translate-in 2s;		
	}	
	.translate-leave-active{
		animation: translate-in 1s reverse;
	}

	@keyframes translate-in {
		0%{
			transform: translateX(0);
		}
		50% {
			transform: translateX(100px);
		}
		100%{
			transform: translateX(0);
		}
	}

	.animationPosition{
		position: fixed;
	}


</style>