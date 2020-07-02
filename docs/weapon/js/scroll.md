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

> 局部滚动
```js
scrollAppoint(ele){
    element = document.querySelector(`#${ele}`)
    // 需减去多于高度
    document.documentElement.scrollTop = element.offsetTop + 元素.scrollTop
    document.body.scrollTop = element.offsetTop + 元素.scrollTop
}
```


