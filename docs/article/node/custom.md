# 自定义模块

```js
// custom.js 自定义模块文件
module.exports = {
  sayName: function(response, name) {
    response.write(name);
  }
};

//server.js
var http = require("http");
var custom = require("custom");
http
  .createServer(function(request, response) {
    response.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });
    custom.sayName(response,'我叫张三')
    response.end();
  })
  .listen(8888); //端口号
console.log("服务器已开启");
```
