# Vue 组件通信

## props

> 子组件接收父组件的传值

::: tip props 类型

- 基础类型 : `propA: Number`
- 多个类型 : `propB: [String, Number]`
- 函数类型 : `validator: function (value) {return 0}`
- 必填类型 : `propD: {type: Number,required: true}`
- 带默认值 : `propD: {type: Number,default: 100}`
  :::

:::warning 父子传值
多个相同的子组件之间接收父组件的值不冲突,`假设 A 子组件 props 接收的值是 123，B 子组件接收的值是 456，两个组件都不会相互影响`  
:::

### 子组件

```js
// html
  <div>
    <h2>{{ title }}</h2>
    <div v-for="(item, index) in data" :key="index">{{ item }}</div>
  </div>

// js
  props: {
    data: Array,
    title: {
      type: String,
      defalut: "标题"
    }
  }
```

### 父组件

```js
// html
    <child :data="data" title="我只是个标题" />
    <child :data="data" title="2222" />
// js
  data() {
    return {
      data: [1, 2, 3]
    };
  }
```

## emit

> 子组件传值给父组件

### 子组件

```js
// html
<button @click="handleClick(666)">点击传值给父组件</button>

// js
handleClick(value) {
    this.$emit("Childclick", value);
}
```

### 父组件

```js
// html
<child :data="data" title="我只是个标题" @Childclick="getValue" />

// js
getValue(value) {
    console.log(value); //666
}
```

## 获取父子属性

> 子组件可通过 `this.$parent` 获取到父组件的属性和方法

```js
this.$parent.showValue(); //调用父组件showValue()
```

> 父组件可通过 `this.$children` 获取到子组件的属性和方法,`this.$children` `返回的是个数组`

> ::: warning 注意事项
> 多个相同的子组件之间的属性和方法不冲突（假设你改变了 A 组件的 show，B 组件的 Show 不会改变，即使它们组件名相同），可通过循环遍历同时改变所有值
> :::

```js
this.$children[0].show; //获取子组件show的值
```

## .sync

> 父子组件的双向数据绑定

### 子组件

```html
<template>
  <div class="popup" v-show="show">
    <div class="mask" @click="closePopup"></div>
    <div class="content">123123123123</div>
  </div>
</template>
<script>
  export default {
    name: "Popup",
    props: {
      show: {
        type: Boolean,
        defalut: false
      }
    },
    methods: {
      closePopup() {
        // 点击组件后直接更新show值为false，免去传事件给父组件
        this.$emit("update:show", false);
      }
    }
  };
</script>
<style scoped>
  .popup {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 98;
    background: rgba(0, 0, 0, 0.7);
  }
  .content {
    width: 50%;
    height: 50%;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
  }
</style>
```

### 父组件

```html
<template>
  <div class="about">
    <!-- .sync相当于@update:show -->
    <popup :show.sync="show" />
    <button @click="show = true">点击显示弹框</button>
  </div>
</template>
<script>
  import Popup from "../components/popup/index";
  export default {
    name: "About",
    components: {
      Popup
    },
    data() {
      return {
        show: false
      };
    }
  };
</script>
```
