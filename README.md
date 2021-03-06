# vue-components

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 安装 脚手架

> vue init webpack vue-components


## 安装swiper插件
[文档](https://www.npmjs.com/package/vue-awesome-swiper)


npm install vue-awesome-swiper --save

>指定版本安装

npm install vue-awesome-swiper@版本号 --save


>查询当前版本号
npm list vue-awesome-swiper【模块名】

>查询所有版本信息
npm info vue-awesome-swiper【模块名】

>查询版本号
npm view vue-awesome-swiper【模块名】  versions


## 安装lazyload插件
[文档](https://github.com/hilongjw/vue-lazyload)

npm install vue-lazyload --save-dev


## 组件通信

> 父->子 ：props

> 父->子 : ref

> 子->父 ：emit Event

> 平级组件通信 [参考](https://www.cnblogs.com/place-J-P/p/7586819.html)

```javascript
main.js
  //1、平级组件通信：通信中间件[事件通道]
      let eventChannel = new Vue();
      Vue.prototype.$eventChannel = eventChannel;

  //2、自定义事件 
      this.$eventChannel.$emit("slcommunication1",{msg:'我是slcommunication1'})

  //3、响应自定义事件  
    mounted(){
      //监听this.$root.eventChannel 自定义事件
      this.$eventChannel.$on("slcommunication1",function(data){
        alert(data.msg +",被slcommunication2调用！")
      })
    },

```


## slots 卡槽
>slot-scope 子传父数据


## keep-alive  缓存不活动的组件实例

```html
	<keep-alive>
		<component :is="currentView"></component>
	</keep-alive>
```

## 动画
> 过渡动画、animation动画、第三方动画库


## 自定义指令 directive
> v-name


## axios 

> main.js 里面全局配置

```javascript
//Axios.defaults.baseURL = "https://api.douban.com";

Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

// 发送请求前处理request的数据
Axios.defaults.transformRequest = [function(data) {
  // Do whatever you want to transform the data
  var newData = '';
  for (var k in data) {
    newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
  }
  return newData;
}]
```


## proxytable 代理
## 跨域【代理处理】

```javascript
注释掉 main.js 中的 Axios.defaults.baseURL 配置

 config/index.js 中配置
	// 代理：跨域处理
    proxyTable: {
        "/api":{
            target:'https://api.douban.com',  //代理的域名
            changeOrigin:true,
            pathRewrite:{
                "^/api":''
            }
        }
    },

	
	修改请求路径【参考axios/Axios.vue】
	格式： /api/+接口后缀路径
	url:'/api/v2/movie/search', 

```

## router 路由 [参考](https://router.vuejs.org/zh/api/#router-%E6%9E%84%E5%BB%BA%E9%80%89%E9%A1%B9)

> 配置： router/index.js 

```html
//全局配置 <router-link> 的默认“激活 class 类名”
linkActiveClass:"router-link-active",  //默认值

exact "是否激活" 默认类名
<router-link exact class="paramsLi" to="/router/params/p1/1">P1 : params</router-link>

```

## 动态路由
> ./components/router/Params.vue


## 模拟路由
> ./components/router/Simulation.vue


## 路由参数
> $route.params.p     p 参数名   /p

> $route.query.p      p 参数名   ?p=



## element 组件 [参考](http://element.eleme.io/#/zh-CN/component/quickstart)
> 安装 : npm i element-ui -S

> 按需加载： npm install babel-plugin-component -D

> 修改babel  


## vuex [参考](https://vuex.vuejs.org/zh/)
> 安装：npm install vuex --save

```javascript
//Vuex

Vuex 状态管理
   view ->(dispath) Action ->( commit )Mutation ->(Mutate) State -> View
   注：Action 不是必须的，如果有异步操作才可能用到Action

Actions:
    Action 提交的是 Mutation，而不是直接变更状态
    Action 可以包含任意异步操作


store/index.js 中配置

main.js
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

mutations: 更改 Vuex 的 store 中的状态的唯一方法； 组件中 this.$store.commit("mutation中的事件")

actions: 可以异步执行 mutations

getters：类似computed 

modules ： 分模块调用  this.$store.state.模块名

// mapxxx 调用方法
import { mapState } from 'vuex'

//方法等也类型 methods:{ ...mapXXX([]) }
computed: {
    ...mapState([
      'label'
    ]),
},


```

### 概念
> vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。


# 存在的问题？

> 同时使用Swiper插件和lazy插件，当Swiper开启loop时，循环的第一张默认出不来？【待解决】。详见src/components/Swiper.vue


# 扩展 require 与 import
[参考1](https://www.cnblogs.com/sunshq/p/7922182.html)
[参考2](https://blog.csdn.net/deft_mkjing/article/details/80388770)