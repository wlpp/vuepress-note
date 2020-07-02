# http 模块

```js
//server.js
var http = require("http");
http
  .createServer(function(request, response) {
    response.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });
    response.write("helloWord");
    response.end();
  })
  .listen(8888); //端口号
console.log("服务器已开启");
```
