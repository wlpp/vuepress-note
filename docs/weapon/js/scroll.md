# 页面滚动

## 返回顶部

```js
handleScrollTop(){
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 500) {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
}
```

## 鼠标滑动到底部

```js
handleScrollBottom() {
    let scrollTop =document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    // let windowHeight = window.innerHeight
    let scrollHeight =document.documentElement.scrollHeight || document.body.scrollHeight;

    // 滚动条的总高度等于scrollHeight-windowHeight
    if (scrollTop + windowHeight == scrollHeight) {
    //请求数据接口
    // this.seeMoreSchoolList();
    return false;
    }
}
```

## 监听上下左右滑动

```js
handleScrollDirection(){
  let startX, startY;
  window.addEventListener("touchstart", function(e) {
    e.preventDefault();
    [startX, startY] = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
  });
  window.addEventListener("touchmove", function(e) {
    e.preventDefault();
    let [moveEndX, moveEndY] = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
    let X = moveEndX - startX;
    let Y = moveEndY - startY;
    if (Math.abs(X) > Math.abs(Y) && X > 0) {
      console.log("left 2 right");
    } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
      console.log("right 2 left");
    } else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
      console.log("top 2 bottom");
    } else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
      console.log("bottom 2 top");
    } else {
      console.log("just touch");
    }
  });
}
```

::: warning 滑动时控制台报错
添加样式 body{touch-action: pan-y;}
:::

## 滚动到指定位置

> 整个页面滚动

```js
scrollAppoint(ele){
    element = document.querySelector(`#${ele}`)
    // 需减去多于高度
    document.documentElement.scrollTop = element.offsetTop
    document.body.scrollTop = element.offsetTop
}
```

::: tip 其他方式

- document.querySelector(`element`).scrollIntoView({ behavior: "smooth" }); // smooth 滚动动画，auto 默认不滚动
- this.$nextTick(()=>{this.$refs.DOM.scrollTo(0,380)});
  :::

> 局部滚动

```js
scrollAppoint(ele){
    element = document.querySelector(`#${ele}`)
    // 需减去多于高度
    document.documentElement.scrollTop = element.offsetTop + 元素.scrollTop
    document.body.scrollTop = element.offsetTop + 元素.scrollTop
}
```

## 判别滚动区域

```html
<style>
  .box {
    width: 100%;
    height: 500px;
    background: skyblue;
    margin-bottom: 20px;
    font-size: 35px;
    color: #ffffff;
    text-align: center;
    line-height: 500px;
  }
</style>
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
<div class="box">4</div>
<div class="box">5</div>
<script>
  window.addEventListener("scroll", function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var boxs = document.querySelectorAll(".box");
    boxs.forEach((item, index) => {
      if (scrollTop >= boxs[index].offsetTop && scrollTop < boxs[index + 1].offsetTop) {
        boxs.forEach((item2) => (item2.style.backgroundColor = "skyblue"));
        item.style.backgroundColor = "#ff0000";
      }
    });
  });
</script>
```

## 多次滚动卡顿处理

```js
let timer = null;
clearTimeout(timer);
timer = setTimeout(function() {
  // 执行事件方法
});
```
