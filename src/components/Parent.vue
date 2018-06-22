<template>
  <div class="parent">
     <label for="">
        父输入信息：<input type="text" name="" v-model="inputMsg">
     </label>
     <label for="">
        父输入数字：<input type="text" name="" v-model.number="inputNumber">
     </label>

     父接收子内容:{{result}}

     <br />
     <!-- 父调用子： https://www.cnblogs.com/whyue/p/6374589.html -->
     <button @click="parentCall">父调用子</button>

     <!-- 父组件接收子组件 @sendMsg = "getMsg"    ref="Child" 组件名-->
     <child title="静态标题" :msg="inputMsg" :number="inputNumber"  @sendMsg="getMsg" ref="Child"></child>  

     
  </div>
</template>

<script>
import Child from './Child'

export default {
  name: 'Parent',
  data () {
    return {
      inputMsg:'',
      inputNumber:2,
      result:"",
    }
  },
  methods:{
     getMsg(data){
        this.result = data.note;
     },
     parentCall(){
        this.$refs.Child.chilFn("我是父组件调用你的!");
     }        
  },
  components:{
    'child':Child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
