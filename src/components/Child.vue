<template>
  <div class="child">
	  <h5>{{title}}</h5>    
	  <p>子接收的信息：{{msg}}</p>
	  <p>子接收的数字：{{number}}</p>
	  <button @click="sendMsg">先父组件发送消息</button> 
  </div>
</template>

<script>
export default {
  name: 'Child',
  data () {
    return {

    }
  },

  //props:['title','msg','number'],
  props:{
  	msg:[String,Number],
  	number:{
  		type:Number,
  		default:6,
  		required:true,
  		validator:function(value){
			console.log(value);
			return value > 0;  			
  		}
  	},
  	title:String,
  },

  methods:{
	 sendMsg(){
	 	// 子组件向父组件发送消息  vm.$emit( eventName, […args] )
	 	this.$emit("sendMsg",{note:'Hi'})
	 },
	 chilFn(data){
	 	console.log(data)
	 }   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .child{
 	padding: 15px;
 }  
</style>
