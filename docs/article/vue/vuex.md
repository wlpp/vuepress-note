# vuex 状态管理

## 安装及目录

### 安装

```js
yarn add vuex -S
```

### 目录

> 先新建 Store 目录，在 main.js 文件引入 store`(必须步骤)`

```js
import Vue from "vue";
import App from "./App";
import store from "./store";
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store, //使用store
  components: { App },
  template: "<App/>",
});
```

> store 文件配置两种方式

- 非 module 直接引用，在 store 新建 index.js 文件

```js
import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex);

export default new vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
```

- Module 引入，多文件方便维护

1. 在 store 里新建 modules 目录

2. 在 modules 新建 home.js 文件

```js
export default {
  namespaced: true, //添加后该模块的getters,mutations，actions将不再全局调用
  state: {},
  getters: {},
  mutations: {},
  actions: {},
};
```

3. 在 store 目录下新建 index.js 文件,并引入 home.js

```js
import Vue from "vue";
import vuex from "vuex";
Vue.use(vuex);
import homeStore from "./modules/home.js"; //引入某个store对象
export default new vuex.Store({
  modules: {
    homeStore,
  },
});
```

## State

> ::: tip 用于存储数据状态
> **以下例子以 homeStore 模块为例，非模块见官方**
> :::

**homeStore.js**

```js
state: {
    num: 0,
},
```

**home.vue**

```js
// 普通引用
computed: {
    num() {
        return this.$store.state.homeStore.num;
    }
}

// mapState 辅助函数
import { mapState } from 'vuex';
computed:{
      ...mapState('homeStore',['num'])
  },
```

## getter

> ::: tip 相当于`computed`计算属性，用于监听、state 中的值的变化，返回计算后的结果,可接收两个参数:`state`,`payload`  
> **以下例子以 homeStore 模块为例，非模块见官方**
> :::

**homeStore.js**

```js
getters: {
    initNumber(state,payload) {
        return state.num + 1;
    }
},

```

**home.vue**

```js
// 普通引用 homeStore挂载在全局可使用
computed: {
    initNumber() {
        return this.$store.getters.initNumber;
    }
}

// mapGetters 辅助函数
computed: {
...mapGetters('homeStore',['initNumber'])
}
```

## mutations

> ::: tip 相当于`computed`计算属性，更改 state 中状态，可接收两个参数:`state`,`payload` 
 **以下例子以 homeStore 模块为例，非模块见官方**
> :::

**homeStore.js**

```js
mutations: {
    add(state) {
        state.num = state.num + 1;
    }
},
```

**home.vue**

```js
// 普通引用 homeStore挂载在全局可使用
methods: {
    // 普通引用 homeStore挂载在全局可使用
    addNumber() {
        this.$store.commit("add");
    }
}

// mapMutations 辅助函数
import { mapMutations } from 'vuex';
 ...mapMutations('homeStore',["add"]),

```

## actions

> ::: tip 可以包含任意异步操作,可以操作`mutation`中的方法和`action`中的方法，可接收{state,commit,dispatch},payload
> **以下例子以 homeStore 模块为例，非模块见官方**
> :::

**homeStore.js**

```js
 actions: {
   changeNum({ state, commit, dispatch },payload) {
      state.num = 666;
      console.log(payload); //接收的参数
      commit("getNum");  //调用mutations中的方法
      dispatch("sayHello"); //调用actions中的方法
    },
    sayHello({ state }) {
      console.log("hello", state.num);
    },
}

```

**home.vue**

```js
methods: {
    // 普通引用 homeStore挂载在全局可使用
    addDouble() {
        this.$store.dispatch("addDouble");
    }
    // actions 辅助函数
    import { mapActions } from 'vuex';
    ...mapActions('homeStore',['addDouble']),
}
```


