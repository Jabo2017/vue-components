<template>
	<div class="axios">
		<button @click="axiosGet">获取get请求</button>
		<button @click="axiosPost">获取post请求</button>
		<button @click="axiosAll">多并发请求</button>
		<button @click="axiosApi">完整配置</button>
	</div>
</template>


<script>
	export default{
		name:'axios',
		data(){
			return{

			}
		},
		methods:{
			axiosGet(){
				this.$axios.get('/api/v2/book/1220562')
				.then(function(response){
					console.log(response)
				})
				.catch(function(error){
					console.log(error);
				})

				//参数配置
				this.$axios.get('/api/v2/movie/search',{
					params:{
						q:'张艺谋'
					}
				})
				.then(function(response){
					console.log(response)
				})
				.catch(function(error){
					console.log(error)
				})
			},

			axiosPost(){
				this.$axios.post('/api/v2/book/1220562',{
					organId:1,
					pageSize:2
				})
				.then(function(response){
					console.log(response)
				})
				.catch(function(error){
					console.log(error)
				})
			},

			//执行多个并发请求
			axiosAll(){
				let _this = this;
				this.$axios.all([_this.axiosGet(), _this.axiosPost()])
				  .then(_this.$axios.spread(function (acct, perms) {
				    // 两个请求现在都执行完成
				    console.log(acct,perms)
				}));
			},
			
			//完整配置
			axiosApi(){
				this.$axios({
					method:'post',
					url:'/api/v2/movie/search',
					data:{
						q:'张艺谋'
					},
					timeout: 2000,
					// proxy: {
					//     host: '127.0.0.1',
					//     port: 8081,
					//     auth:{
					//       username: 'Jabo',
					//       password: '123' 
					//     }
  			// 		},
				})
				.then(function(response){
					console.log(response)
				})
				.catch(function(error){
					console.log(error)
				})
			}


		}
	}	
</script>

<style>
	
</style>