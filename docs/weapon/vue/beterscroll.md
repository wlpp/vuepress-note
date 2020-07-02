# beter-scroll 滚动

## 安装及引用

```js
// yarn
yarn add better-scroll -S

// 页面引入
import BScroll from 'better-scroll'

this.$nextTick(()=>{
    this.scroll = new BScroll('.wrapper', {
            scrollY: true,
            click: true
    })
})
```

## 纵向滚动

```html
<style>
  .wrapper {
    width: 100%;
    height: 300px;
    overflow: hidden;
  }

  .wrapper ul li {
    width: 100%;
    height: 50px;
    background: #ff0000;
    text-align: center;
    line-height: 30px;
    font-size: 25px;
    margin-bottom: 10px;
  }
</style>

<div class="wrapper">
  <ul class="content">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
  </ul>
</div>

<script>
  this.$nextTick(() => {
    this.scroll = new BScroll(".wrapper", {
      scrollY: true,
      click: true
    });
  });
</script>
```

## 横向滚动

```html
<style>
  .wrapper2 {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }

  .wrapper2 ul {
    font-size: 0;
  }

  .wrapper2 ul li {
    display: inline-block;
    width: 2rem;
    height: 1rem;
    background: #ff0000;
    text-align: center;
    line-height: 1rem;
    font-size: 0.5rem;
    margin-right: 0.1rem;
  }

  .wrapper2 ul li:last-of-type {
    margin-right: 0;
  }
</style>

<div class="wrapper2">
  <ul class="content">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <li>11</li>
  </ul>
</div>

<script>
  var oul = document.querySelector(".wrapper2 ul");
  var mr = parseInt(window.getComputedStyle(oul.children[0]).marginRight.slice(0, 1));
  var ulWidth = oul.children[0].clientWidth * oul.children.length + mr * (oul.children.length - 1);
  oul.style.width = ulWidth + "px";

  this.$nextTick(() => {
    this.scroll = new BScroll(".wrapper", {
      scrollX: true,
      click: true
    });
  });
</script>
```
