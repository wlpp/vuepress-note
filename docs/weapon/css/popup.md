# 弹框

## 基本布局

```html
<style>
  .popup {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
  }
  .popup .mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
  .popup .content {
    width: 70%;
    height: 30%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
  }
</style>
<div class="popup">
  <div class="mask"></div>
  <div class="content">这是一个弹框</div>
</div>
```

## input光标错位

```js
// 在弹框出现的时候给body添加fixed
$("body").css("position","fixed")

// 当弹框消失的时候
$("body").css("position","relative")
```