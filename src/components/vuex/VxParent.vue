<template>
	<div class="vxParent">
		父组件：{{count}} {{currentLabel}}
		<button @click="increment">父组件来改变+1</button>
		<button @click="getMap">vue map...</button>
		<button @click="increment3">父组件来改变++ commit调用mutation[不建议：尽量使用action]</button>
		<button @click="showLabel">label</button>
		<button @click="getModule">获取modules中的内容</button>
		<VxChild></VxChild>
	</div>
</template>

<script>
	import VxChild from './VxChild'
	import { mapState } from 'vuex'

    export default{
    	name:'VxParent',
    	data(){
    		return{

    		}
    	},
    	components:{
    		VxChild
    	},
    	computed: {
    		...mapState([
                'label'
            ]),
		    count () {
		      //return this.$store.state.count
		      return this.$store.getters.count2;
		    },
		    currentLabel(){
		    	return this.$store.getters.stateLabel;
		    }
		},
		methods:{
			increment(){
				this.$store.state.count++;
			},
			increment3(){
				this.$store.commit("increment");
			},
			showLabel(){
				this.$store.dispatch("changeLabel");
			},
			getModule(){
				console.log(this.$store.state)
				console.log(this.$store.state.changModule);
			},
			getMap(){
				console.log(typeof this.label)
			}
		}
    }	
</script>


<style>
	
</style>