<template>
	<div class="directive">
		<!-- 调用全局自定义指令 -->
		<input v-focus type="text" name="">

		<!-- 自定义局部指令 -->
		<p v-mystyle="color">局部自定义指令</p>
	</div>
</template>

<script>
	export default{
		name:'Directive',
		data(){
			return{
				color:'#f00'
			}
		},
		directives:{
			mystyle:{
				//指令定义
				//参考：https://cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0
				inserted:function(el,binding,vnode){
					console.log(binding,vnode)
					el.style.color = binding.value;
				}
			}
		}
	}
</script>

<style>
	
</style>
