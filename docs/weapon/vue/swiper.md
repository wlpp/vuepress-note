# swiper 轮播

## 安装及引用

```js
// yarn
yarn add vue-awesome-swiper -S

// 页面引入
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
```

```html
<template>
  <div class="scroll">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination " slot="pagination"></div>
      <!-- <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div> -->
      <!-- <div class="swiper-button-next swiper-button-black" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  export default {
    name: "HelloWorld",
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          // 循环
          loop: false,
          // 自动播放
          autoplay: true,
          // 阻止click冒泡。拖动Swiper时阻止click事件
          // 设置多个滑动效果
          slidesPerView: 2,
          // 设置多个滑动间距
          spaceBetween: 20,
          // 设置多个惯性滑动
          freeMode: true,
          // preventClicksPropagation: true,
          // 模拟移动端滑动
          // simulateTouch: false,
          // 滑动之后回调函数
          // 左右点击
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          // 分页器设置
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          }
        }
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .swiper-slide {
    height: 200px;
  }
</style>
```
