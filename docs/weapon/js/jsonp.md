# jsonp 跨域

> 同源策略/SOP（Same origin policy）是一种约定，由 Netscape 公司 1995 年引入浏览器，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到 XSS、CSRF 等攻击。所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个 ip 地址，也非同源。

## 原生实现

```js
var script = document.createElement("script");
script.type = "text/javascript";

// 传参并指定回调执行函数为onBack
script.src = "url";
console.log(123);
document.head.appendChild(script);

// 回调执行函数
function onBack(res) {
  alert(JSON.stringify(res));
}
onBack();
```

## jq 实现

```js
$.ajax({
  url: "url",
  dataType: "jsonp", //数据类型为jsonp
  //jsonp: "jsonpCallback",//服务端用于接收callback调用的function名的参数
  success: function(res) {
    console.log(res);
  }
});
```
