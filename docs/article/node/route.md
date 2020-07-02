# 路由模块

```js
var http = require("http");
var fs = require("fs");
http
  .createServer(function(request, response) {
    response.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });
    // request.url获取当前路径
    switch (request.url) {
      case "/":
        response.write(fs.readFileSync("./views//index.html", "utf-8"));
        break;
      case "/index":
        response.write(fs.readFileSync("./views//index.html", "utf-8"));
        break;
      case "/login":
        response.write(fs.readFileSync("./views//login.html", "utf-8"));
        break;
      default:
        response.write(fs.readFileSync("./views//404.html", "utf-8"));
        break;
    }
  })
  .listen(8888);
console.log("服务器已开启");
```
