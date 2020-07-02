# Vue 安装

## vue-cli 脚手架

::: tip 步骤

1. 全局安装 yarn global add @vue/cli
2. 创建项目 vue create hello-world
3. 根据需求手动安装需要的插件[点击参考](https://www.jianshu.com/p/3f8bfe70433b)
4. 运行 yarn serve
   :::

## CDN 形式

```js
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

## 编辑模板

```js
<template>
  <div>
    <h1 @click='handleClick'>{{msg}}</h1>
    <to-back />
  </div>
</template>
<script>
import toBack from '组件路径'
export default {
  // 绑定组件
  components: ['toBack'],
  // 动态属性
  data() {
    return {
      msg: '模板展示'
    }
  },
  // 组件传值
  props: {
    title: {
      type: String,
      default: '标题'
    }
  },
  // 数据监听
  watch: {
    value(newValue, oldValue) { }
  },
  computed: {
    value() {
      return 10
    }
  },
  // 方法
  methods: {
    handleClick(even) {
      this.$emit('click', even)
    }
  },
  // 生命周期
  created() { },
  mounted() { },
  updated() { },
  destroyed() { }
}
</script>
```
