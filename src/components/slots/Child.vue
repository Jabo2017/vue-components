<template>
  <div class="schild">
	 <slot><p>未指定为空时,显示</p></slot>
	 <slot name="myslot"></slot>
		
	 <slot name="childSend" text="子传数据" :mydata="mydata" :dealdata='data.name'></slot>
  </div>
</template>

<script>
export default {
  name: 'SChild',
  data () {
    return {
    	mydata:'动态数据',
    }
  },

  props:{
	"data":{
		type:Object
	}  	 
  },
  mounted(){
    this.initFunc();
  },
  methods:{
    initFunc(){
       console.log(this.$slots)
       console.log(this.$scopedSlots)
       console.log(this.$props)
    }     
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
