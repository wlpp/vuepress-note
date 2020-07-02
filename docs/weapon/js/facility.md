# 检测设备类型

## 普通

1. 第一种

```js
function deviceType() {
  var ua = navigator.userAgent;
  var agent = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  console.log(ua);
  for (var i = 0; i < agent.length; i++) {
    if (ua.indexOf(agent[i]) > 0) {
      alert(agent[i]);
      break;
    }
  }
}
deviceType();
window.addEventListener("resize", function() {
  deviceType();
});
```

2. 第二种

```js
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent) ? "Mobile" : "Desktop";

detectDeviceType(); // "Desktop"
```

## 微信

```js
function isWeixin() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}
isWeixin();
```
