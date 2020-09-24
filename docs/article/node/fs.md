# 文件模块

## 新建文件

```js
fs.writeFile("./a/1.txt", "hello ", function(err) {
  if (err) {
    console.log("写入失败", err);
  } else {
    console.log("写入成功");
  }
});
```

## 同步读取文件

```js
var http = require("http");
var fs = require("fs");
http
  .createServer(function(request, response) {
    response.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    // readFileSync('文件名','字符编码')
    var data = fs.readFileSync("./demo.html", "utf-8");
    response.write(data);
    response.end();
  })
  .listen(8888);
console.log("服务器已开启");
```

## 异步读取文件

```js
http
  .createServer(function(request, response) {
    response.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    // readFile接收两个参数，err是null为正常，data是读取的数据
    var data = fs.readFile("./demo.html", function(err, data) {
      if (err) {
        console.log(err);
      } else {
        response.write(data);
        // 异步读取时，结束要放进异步读取后，否决读不到文件
        response.end();
      }
    });
  })
  .listen(8888);
console.log("服务器已开启");
```
