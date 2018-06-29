<template>
	<div class="vxChild">
		子组件：{{count}} 
        <button @click="decrease">子组件来改变-1</button>
        <button @click="increment3">子组件来改变++ dispatch调用actions 触发Mutation</button>
        <button @click="decrease2">子组件来改变-- 异步 dispatch调用actions 触发Mutation</button>
	</div>
</template>

<script>
    export default{
    	name:'VxChild',
    	data(){
    		return{
    			
    		}
    	},
        computed: {
            count () {
              //return this.$store.state.count
               return this.$store.getters.count2;
            }
        },
        methods:{
            decrease(){
                this.$store.state.count--;
            },
            increment3(){
                this.$store.dispatch("aIncrement");
            },
            decrease2(){
                this.$store.dispatch("aDecrease");
            }
        }

    }	
</script>


<style>
	
</style>