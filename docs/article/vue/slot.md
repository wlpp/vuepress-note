# Vue 插槽

> 用来渲染内容，内容包含任何模板代码，HTML，组件

## 普通插槽

> 直接用来装内容，不放内容不显示

```html
<!-- 子组件 -->
<div class="box">
  <h2>普通插槽</h2>
  <slot></slot>
</div>

<!-- 父组件 -->
<child>我只是个插槽</child>
```

## 默认插槽

> 设置内容`默认值`，不放内容显示默认值，放内容覆盖默认值

```html
<div class="box">
  <h2>默认插槽</h2>
  <slot>我只是个插槽</slot>
</div>

<child></child>
```

## 具名插槽

> 用来区分多个插槽

```html
<!-- 子组件 -->
<div class="box">
  <h2>具名插槽</h2>
  <header>
    <slot name="header">默认header</slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>

  <!-- 动态插槽名 -->
  <div>
    <slot name="dynamicSlot"> </slot>
  </div>
</div>

<!-- 父组件 -->
<child>
  <!-- header -->
  <template v-slot:header>我是header</template>

  <!-- mine -->
  <div>我是main</div>

  <!-- footer -->
  <!-- v-slot:footer缩写 -->
  <template #footer>我是footer</template>

  <!-- 可以动态改变插槽名，获取对应应插槽，不可以获取已存在的插槽 -->
  <template #[dynamicSlot]>我是插槽{{dynamicSlot}}</template>
  data() { return { dynamicSlotName: "dynamicSlot" }; }
</child>
```
