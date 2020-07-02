# React 请求方式

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
::: tip
[axios使用文档](https://www.kancloud.cn/yunye/axios/234845)
:::

## 跨域请求

### 配置文件
```js
// 在package.json文件中加入
"proxy": {
    "/api": {
      "target": "http://open.douyucdn.cn"，
      "changeOrigin":true
    }
  }
```
::: warning 解决配置报错
- react-scripts版本太高，重新安装 => `yarn add react-scripts@1.1.1 -S`
:::

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
