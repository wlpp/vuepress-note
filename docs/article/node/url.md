# url 模块

## url.parse

> 输入 url 字符串， 返回一个 Url 对象

```js
var http = require("http");
var url = require("url");

http
  .createServer(function(req, res) {
    var html = "http://www.yoyo.com::8080?name=yy";
    // 返回一个Url对象
    console.log(url.parse(html));
  })
  .listen(8888);
console.log("服务器已开启");
```

::: tip Url 对象解析

- `protocol: 'www.yoyo.com:',` 请求协议 http,https
- `slashes: null,` 协议后的斜杆
- `auth: null,` url 中的验证
- `host: ':8080',` 完整的 url 主机部分，包括端口
- `port: '8080',` 主机端口号
- `hostname: '',` 域名中的小写主机名
- `hash: null,` url 中#后面部分
- `search: '?name=yy',` url 中的查询字符串
- `query: 'name=yy',` url 中的查询字符串的参数部分
- `pathname: null,` url 中的路径部分
- `path: '?name=yy',` pathname 和 search 连在一起部分
- `href: 'www.yoyo.com::8080?name=yy'` 完整的 url
  :::

## url.format

> 输入一个解析过的 url 对象，返回格式化的字符串

```js
var http = require("http");
var url = require("url");

http
  .createServer(function(req, res) {
    var html = "www.yoyo.com::8080?name=yy";
    var ret = {
      protocol: "www.yoyo.com:",
      slashes: null,
      auth: null,
      host: ":8080",
      port: "8080",
      hostname: "",
      hash: null,
      search: "?name=yy",
      query: "name=yy",
      pathname: null,
      path: "?name=yy",
      href: "www.yoyo.com::8080?name=yy"
    };
    console.log(url.format(html)); //www.yoyo.com::8080?name=yy
  })
  .listen(8888);
console.log("服务器已开启");
```

## url.resole

> 把 url 替换 新的 url

```js
var http = require("http");
var url = require("url");

http
  .createServer(function(req, res) {
    // var html = "www.yoyo.com::8080?name=yy";
    console.log(url.resolve("http://www.yoyo.com", "http://www.22.com/sss")); //http://www.22.com/sss
    console.log(url.resolve("http://www.yoyo.com", "/sss")); //http://www.yoyo.com/sss
  })
  .listen(8888);
console.log("服务器已开启");
```
