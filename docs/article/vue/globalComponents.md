# Vue 全局组件

> 把组件挂载到 Vue 的原型上，实现`this.$xxx()`,整个项目都可以随时调用，不用引入组件

## Message模板

1. 新建message目录，放入Message.vue和index.js

2. Message.vue

```js
<template>
  <transition name="fade">
    <div class="message" :class="type" v-if="visible">
      <i class="icon-type iconfont" :class="'icon-' + type"></i>

      <div class="content">
        {{ content }}
        <i
          v-if="hasClose"
          class="btn-close iconfont icon-close"
          @click="visible = false"
        ></i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MyMessage",
  data() {
    return {
      content: "",
      time: 3000,
      visible: false,
      type: "info", //'success','warning','error'
      hasClose: false
    };
  },
  mounted() {
    this.close();
  },
  methods: {
    close() {
      window.setTimeout(() => {
        this.visible = false;
      }, this.time);
    }
  }
};
</script>

```

3. index.js

```js
import Vue from "vue";
import Message from "./Message.vue";

const messageBox = Vue.extend(Message);

Message.install = function(options) {
  // options接收组件传值,不填为undefined
  if (options === undefined || options === null) {
    options = {
      content: ""
    };
  } else if (typeof options === "string" || typeof options === "number") {
    options = {
      content: options
    };
  }
  console.log(options); // {content: "123", time: 2000}

  // 将Message挂载到页面上
  let instance = new messageBox({
    data: options
  }).$mount();

  document.body.appendChild(instance.$el);

  Vue.nextTick(() => {
    instance.visible = true;
  });
};

export default Message;

```

4. 在main.js引入
```js
import Message from "@/components/message";
Vue.prototype.$my_message = Message.install;
```
