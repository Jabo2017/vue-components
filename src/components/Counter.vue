<template>
  <div class="counter">
     <div class="counterBox">
       <div class="counterBtn" @click="subNum">-</div>
       <input type="text" v-model="number" @keyup="checkInput">
       <div class="counterBtn" @click="addNum">+</div>
     </div>   
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data () {
    return {
      number:1,
    }
  },
  props:{
    max:{
      type:Number,
      default:5
    },
    min:{
      type:Number,
      default:1
    }
  },
  methods:{
    checkInput(){
      if(typeof this.number === 'string' ){
        // \D :非数字
        this.number = this.number.replace(/\D/g,'');
        if( this.number > this.max || this.number < this.min ){
          this.number = this.min;
        }
      }
    },
    addNum(){
      if(this.number >= this.max){
        this.number = this.max;
        return;
      }
      this.number++;
    },
    subNum(){
      if(this.number <= this.min){
        this.number = this.min;
        return;
      }
      this.number--;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .counterBox{
    position: relative;
    display: inline-block;
    overflow: hidden;
  }

  .counterBtn{
    float: left;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border:1px solid #ddd;
    text-align: center;
    cursor: pointer;
    transition: all .3s;
  }

  .counterBtn:hover{
    background-color: #6cdff7;
  }

  input{
    float: left;
    width: 80px;
    height: 28px;
    text-indent: 12px;
    outline: none;
    border:none;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
</style>
