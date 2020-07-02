# Vue 请求方式

## axios

### 安装

```js
yarn add axios -S
```

### CDN 引入

```js
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

// 使用
axios({
    url: API.Carousel
    methods: 'get',
    parmas: {}   //传参
}).then((res) => {
    console.log(res)
})
```

### NPM 引入

> 按需引入

```js
import axios from "axios";
// 使用
axios({
    url: API.Carousel
    methods: 'get',
    parmas: {}   //传参
}).then((res) => {
    console.log(res)
})
```

> 全局引入

```js
//main.js
import axios from 'axios'
Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  router,
  axios, //加入这个
  components: { App },
  template: '<App/>'
})

// 使用
this.$axios({
    url: API.Carousel
    methods: 'get',
    parmas: {}   //传参
}).then((res) => {
    console.log(res)
})
```

::: tip
[axios 使用文档](https://www.kancloud.cn/yunye/axios/234845)
:::

## 跨域请求

### 配置文件

> 配置开发环境，打开 config/index.js，修改 dev 里的 proxyTable

```js
proxyTable:{
    '/api': { //相当于target链接
            target: 'http://www.xxx.cn/api', //你要访问的服务器域名
            changeOrigin: true, //允许跨域
            pathRewrite: {
                '^/api': ''
            }
        }
}
```

> 配置生产环境，

1. 打开 config/pro.env.js

```js
module.exports = {
  NODE_ENV: '"production"',
  API_ROOT: '"http://www.xxx.cn/"'
};
```

2. 在 config 目录下新建 api.js 文件,配置后你可以直接在组件写请求的 url 不需再判断处于哪个模式下，都可以跨域请求

```js
const root = process.env.API_ROOT; //在开发模式下为会调用代理
export const getList = root + "/list";
```

## fetch-jsonp

> 直接使用 fetch-jsonp 请求跨域,不用配置

1. 安装

```js
yarn add fetch-jsonp -S
```

2. 使用

```js
import Fetchjsonp from "fetch-jsonp";

Fetchjsonp(url)
  .then(res => {
    return res.json();
  })
  .then(res => {
    console.log(res);
  });
```
