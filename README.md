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


## slots 卡槽
>slot-scope 子传父数据


## keep-alive  缓存不活动是、组件实例
```
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
```
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

## 跨域【代理处理】

```
注释掉 main.js 中的 Axios.defaults.baseURL 配置

> config/index.js 中配置
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

# 存在的问题？

> 同时使用Swiper插件和lazy插件，当Swiper开启loop时，循环的第一张默认出不来？【待解决】。详见src/components/Swiper.vue


# 扩展 require 与 import
[参考1](https://www.cnblogs.com/sunshq/p/7922182.html)
[参考2](https://blog.csdn.net/deft_mkjing/article/details/80388770)