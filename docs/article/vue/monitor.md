# Vue 数据监听

## watch侦听属性

> 侦听某一个值的变化，返回两个参数，`新值`和`旧值`

```html
<div class="home">
  <div>
    <h4>模拟节流请求</h4>
    输入值监听变化：<input type="text" v-model="value" />
    <div>keword值的变化：{{ keyword }}</div>
  </div>
</div>
```

```js
export default {
  data() {
    return {
      value: "",
      keyword: "",
      timer: null
    };
  },
  watch: {
    value(newVal) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.keyword = newVal;
      }, 500);
    }
  },
};
```

<template>
  <div class="home">
    <div>
      <h4>模拟节流请求</h4>
      输入值监听变化：<input type="text" v-model="value" />
      <div>keword值的变化：{{ keyword }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      keyword: "",
      timer: null
    };
  },
  watch: {
    value(newVal) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.keyword = newVal;
      }, 500);
    }
  }
};
</script>

## computed 计算属性

> 用来实时动态监听某一个值的变化，会根据与它关联的数据变化而改变自身

```js
computed: {
    number() {
      return Date.now();
    }
  }
```
