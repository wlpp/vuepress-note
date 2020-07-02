# 图片操作

## 直接访问

```js
var http = require("http");
var fs = require("fs");
http
  .createServer(function(request, response) {
    console.log(request.url);
    // 更换响应头"Content-Type": "image/jpeg;"
    response.writeHead(200, {
      "Content-Type": "image/jpeg;"s
    });
    // binary读取二进制
    var img = fs.readFileSync("./img.jpg", "binary");
    response.write(img, "binary");
  })
  .listen(8888);
console.log("服务器已开启");
```

## 页面获取图片

```html
<!-- HTML页面 -->
<h1>我是首页</h1>
<img src="img" alt="" />
```

```js
var http = require("http");
var fs = require("fs");
http
  .createServer(function(req, res) {
    console.log(req.url);
    // 根据路径读取文件
    if (req.url === "/img") {
      res.writeHead(200, {
        "Content-Type": "image/jepg"
      });
      fs.readFile("./img.jpg", function(err, data) {
        if (err) {
          console.log(err);
        } else {
          res.write(data);
        }
      });
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
      });
      fs.readFile("./views/index.html", function(err, data) {
        if (err) {
          console.log(err);
        } else {
          res.write(data);
        }
      });
    }
  })
  .listen(8888);
console.log("服务器已开启");
```
