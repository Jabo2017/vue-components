<template>
	<div class="filter">
		<input type="text" v-model.number="price">
		{{price | addPre | addSymbol}}
	</div>
</template>

<script>
	export default{
		name:'filter',
		data(){
			return{
				price:0
			}
		},
		filters:{
			addSymbol(price){
				return price + "$";
			},
			addPre(price){
				if(price < 10){
					return "0" + price;
				}

				return price;
			}
		}
	}
</script>

<style scoped>
	
</style>
