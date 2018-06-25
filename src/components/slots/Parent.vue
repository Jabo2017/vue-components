<template>
  <div class="sparent">
      <schild  :data="pDate">
        <!-- <p>展示未指定slot</p> -->
        <p slot="myslot">指定slot</p>

        <!--子传父数据-->
        <p slot="childSend" slot-scope="key">{{key.text}}--{{key.mydata}}--{{key.dealdata}}</p>
      </schild>     
  </div>
</template>

<script>
import SChild from './Child'

export default {
  name: 'SParent',
  data () {
    return {
      pDate:{
        "name":'Jabo'
      }
    }
  },
  mounted(){
    this.initFunc();
  },
  methods:{
    initFunc(){

    }     
  },
  components:{
    'schild':SChild
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
