# 节流防抖

## 防抖

> n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间

```html
<style>
  div {
    height: 2000px;
  }
</style>
<div></div>
<script src="http://res4.360kad.com/mscript/jquery-1.10.1.min.js" type="text/javascript"></script>
<script>
  // let count = 0;
  // $(document).scroll(function () {
  //     console.log(`触发了${++count}次！`);
  // });
  let count = 0;
  $(document).scroll(
    throttle(function() {
      console.log(`触发了${++count}次！`);
    }, 500)
  );
  function throttle(fn, wait) {
    let canRun = true;
    return function() {
      if (!canRun) {
        return;
      }
      canRun = false;
      setTimeout(() => {
        fn.apply(this, arguments); //让scroll的回调函数的this保持一致
        canRun = true;
      }, wait);
    };
  }
</script>
```
## 节流

>高频事件在规定时间内只会执行一次，执行一次后，只有大于设定的执行周期后才会执行第二次。

```
暂时没这个需求。。。
```