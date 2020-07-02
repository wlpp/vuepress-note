# Vue 过渡动画

## 过渡类型

::: tip 过渡的类名

- `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数
- `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数
- `v-enter`，`v-enter-to`，`v-leave`，`v-leave-to`[查文档](https://cn.vuejs.org/v2/guide/transitions.html#%E8%BF%87%E6%B8%A1%E7%9A%84%E7%B1%BB%E5%90%8D)
  :::
  ![图片](/img/transition.png)

## 动画实例

> 点击底部文字切换动画效果

<template>
  <div class="transition-warp">
    <div class="transition-box">
      <div class="type-box">
        <transition name="fade">
          <div class="type" v-if="show1">fade</div>
        </transition>
        <div class="txt" @click="show1 = !show1">fade</div>
      </div>
      <div class="type-box">
        <transition name="fold">
          <div class="type" v-if="show2">fold</div>
        </transition>
        <div class="txt" @click="show2 = !show2">fold</div>
      </div>
      <div class="type-box">
        <transition name="scale">
          <div class="type" v-if="show3">scale</div>
        </transition>
        <div class="txt" @click="show3 = !show3">scal</div>
      </div>
      <div class="type-box">
        <transition name="spin">
          <div class="type" v-if="show4">spin</div>
        </transition>
        <div class="txt" @click="show4 = !show4">spin</div>
      </div>
      <div class="type-box">
        <transition name="flipX">
          <div class="type" v-if="show5">flipX</div>
        </transition>
        <div class="txt" @click="show5 = !show5">flipX</div>
      </div>
      <div class="type-box">
        <transition name="pop">
          <div class="type" v-if="show6">pop</div>
        </transition>
        <div class="txt" @click="show6 = !show6">pop</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      show5: true,
      show6: true
    };
  }
};
</script>

## 弹框滑动样式

```css
/* 从上往下 */
@keyframes slideTopIn {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slideTopOut {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}
.slide-top-enter-active {
  animation: 0.3s slideTopIn;
}
.slide-top-leave-active {
  animation: 0.3s slideTopOut;
}

/* 从下往上 */
@keyframes slideBottomIn {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slideBottomOut {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}
.slide-bottom-enter-active {
  animation: 0.3s slideBottomIn;
}
.slide-bottom-leave-active {
  animation: 0.3s slideBottomOut;
}

/* 从左往右 */
@keyframes slideLeftIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideLeftOut {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}
.slide-left-enter-active {
  animation: 0.3s slideLeftIn;
}
.slide-left-leave-active {
  animation: 0.3s slideLeftOut;
}

/* 从右往左 */
@keyframes slideRightIn {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideRightOut {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

.slide-right-enter-active {
  animation: 0.3s slideRightIn;
}
.slide-right-leave-active {
  animation: 0.3s slideRightOut;
}
```

<style scoped>
.transition-box {
  display: flex;
  justify-content: space-between;;
  align-items: center;
  flex-wrap: wrap;
}
.transition-box .type-box {
  width: 155px;
  height: 165px;
  display: inline-block;
  vertical-align: middle;
  line-height: 25px;
  border: 1px solid #e2e2e2;
  font-size: 14px;
  text-align: center;
  color: #666;
  position: relative;
  margin-bottom:10px;
  
}
.transition-box .type {
  width: 120px;
  height: 120px;
  line-height: 120px;
  margin: 15px auto 0;
  text-align: center;
  background-color: #009688;
  cursor: pointer;
  color: #fff;
}
.transition-box .txt {
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  cursor: pointer;
}
</style>
<style>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes popIn {
  0% {
    transform: scale3d(0, 0, 0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  40% {
    animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    transform: scale3d(1.08, 1.08, 1.08);
  }
  60% {
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transform: scale3d(1, 1, 1);
  }
  80% {
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transform: scale3d(1.03, 1.03, 1.03);
  }
  100% {
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes popOut {
  0% {
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: scale3d(1, 1, 1);
  }
  60% {
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transform: scale3d(1.08, 1.08, 1.08);
  }
  80% {
    opacity: 1;
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  }
  100% {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
@keyframes flipInX {
  0% {
    opacity: 0;
    transform: perspective(400px) rotateX(90deg) scale3d(1.2, 1.2, 1.2);
  }
  50% {
    opacity: 1;
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transform: perspective(400px) rotateX(-20deg) scale3d(1, 1, 1);
  }
  100% {
    transform: perspective(400px) rotateX(0deg) scale3d(1, 1, 1);
  }
}
@keyframes flipOutX {
  0% {
    transform: perspective(400px) rotateX(0deg) scale3d(1, 1, 1);
  }
  60% {
    opacity: 1;
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transform: perspective(400px) rotateX(-30deg) scale3d(1, 1, 1);
  }
  100% {
    opacity: 0;
    transform: perspective(400px) rotateX(90deg) scale3d(1.2, 1.2, 1.2);
  }
}
@keyframes spinIn {
  0% {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    transform: rotateZ(0deg) scale3d(0, 0, 0);
    transform-origin: center center;
  }
  50% {
    opacity: 1;
  }
  70% {
    transform: rotateZ(380deg) scale3d(1, 1, 1);
    transform-origin: center center;
  }
  100% {
    transform: rotateZ(360deg) scale3d(1, 1, 1);
    transform-origin: center center;
  }
}
@keyframes spinOut {
  0% {
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    transform: rotateZ(0deg) scale3d(1, 1, 1);
    transform-origin: center center;
  }
  20% {
    opacity: 1;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    transform: rotateZ(-20deg) scale3d(1, 1, 1);
    transform-origin: center center;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    transform: rotateZ(360deg) scale3d(0, 0, 0);
    transform-origin: center center;
  }
}
@keyframes fold {
  0% {
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: scale3d(1, 1, 1);
  }
  30% {
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transform: scale3d(1, 0.4, 1);
  }
  60% {
    opacity: 1;
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transform: scale3d(0.4, 0.4, 1);
  }
  100% {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    transform: scale3d(0.2, 0.2, 0.2);
  }
}
@keyframes unfold {
  0% {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: scale3d(0, 0, 0);
  }
  30% {
    opacity: 1;
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transform: scale3d(0.4, 0.4, 1);
  }
  60% {
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transform: scale3d(0.4, 1, 1);
  }
  100% {
    animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes scaleIn {
  0% {
    transform: translate3d(0, 0, 0) scale(1.2);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
}
@keyframes scaleOut {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(0.8);
    opacity: 0;
  }
}
@keyframes slideTopIn {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slideTopOut {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}
@keyframes slideBottomIn {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slideBottomOut {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}
@keyframes slideLeftIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideLeftOut {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}
@keyframes slideRightIn {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideRightOut {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
.fade-enter-active {
  animation: 0.3s fadeIn;
}
.fade-leave-active {
  animation: 0.3s fadeOut;
}
.pop-enter-active {
  animation: 0.4s popIn;
}
.pop-leave-active {
  animation: 0.4s popOut;
}
.flipX-enter-active {
  animation: 0.4s flipInX;
}
.flipX-leave-active {
  animation: 0.4s flipOutX;
}
.spin-enter-active {
  animation: 0.4s spinIn;
}
.spin-leave-active {
  animation: 0.4s spinOut;
}
.fold-enter-active {
  animation: 0.4s unfold;
}
.fold-leave-active {
  animation: 0.4s fold;
}
.scale-enter-active {
  animation: 0.3s scaleIn;
}
.scale-leave-active {
  animation: 0.3s scaleOut;
}
</style>
