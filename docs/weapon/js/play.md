# H5播放问题

## 解决音乐不能自动播放

```js
var _audio = document.getElementById("bgaudio");
// 解决ios微信不自动播放
if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
  _audio.play();
} else {
  //监听客户端抛出事件"WeixinJSBridgeReady"
  if (document.addEventListener) {
    document.addEventListener(
      "WeixinJSBridgeReady",
      function() {
        _audio.play();
      },
      false
    );
  } else if (document.attachEvent) {
    document.attachEvent("WeixinJSBridgeReady", function() {
      _audio.play();
    });
    document.attachEvent("onWeixinJSBridgeReady", function() {
      _audio.play();
    });
  }
}
// 解决ios浏览器不自动播放
document.addEventListener(
  "touchstart",
  function(e) {
    if (isPlay) {
      _audio.play();
      isPlay = false;
    }
  },
  false
);
```
