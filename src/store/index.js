import Vue from 'vue'
// vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 自定义模块
let changModule = {
    state: {
        title: 'title'
    },
    // 唯一改变状态的地方
    mutations: {
        changeTitle(state, payload) {
            console.log('title变化了', payload);
            state.title = payload.title;
        },
    },
}

export default new Vuex.Store({
	//对象
	state:{
		count:0,
		label:'苹果'
	},
	//计算属性一样
	getters:{
		count2:state=>{
			console.log(state)
			return state.count > 0 ? state.count : 0;
		},
		stateLabel:function(state){
			return state.label != '' ? state.label : "香蕉"
		}
	},
	// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
	// Vuex 中的 mutation 非常类似于事件：
	// 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
	// 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
	mutations:{
		increment (state){
			state.count ++;
		},
		decrease(state){
			state.count --;
		},
		changeLabel(state){
			state.label ="橘子"
		}
	},
	actions:{
		//context 上下文
		aIncrement(context){
			context.commit('increment')
		},
		aDecrease(context){
			setTimeout(function(){
				context.commit('decrease')
			},2000)
		},
		changeLabel(context){
			context.commit('changeLabel');
		}
	},
	// 引入模块
    modules: {
        changModule, // 
    }

})