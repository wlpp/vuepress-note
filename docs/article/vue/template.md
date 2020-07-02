# Vue 模板语法

## 文本

```html
<span> Message: {{ msg }}</span>
```

## 属性绑定

```html
<a :class="active"></a>
```

## vue 表达式

```js
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ id = 0 ? 'YES' : 'NO' }}

{{ id===0 ? 'cl1' : id===1 ? 'cl2' : ''}}

{{ message.split('').reverse().join('') }}

{{ showValue() }}

// style设置属性
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

<div v-bind:style="{'height':setHeight +'px'}"></div>

<div v-bind:style="{'height':(flag ? setHeight : 0)}"></div>

```

## 常用指令

::: tip 

- `v-cloak` 解决{{}}插值闪烁问题
- `v-text` 会先执行 覆盖 元素中原本的内容 但是插值表达式只会覆盖自己的占位符，默认不会闪烁
- `v-html` 渲染 html 标签 覆盖元素中原有元素内容
- `v-bind:` 简写为: 用来绑定数据 可以写合法的 js 表达式
- `v-on:` 简写为 @ 用来点击事件
  :::

## 常用事件修饰符

::: tip 
- `stop`  阻止冒泡 ：外层和里层都有方法点击里层会产生冒泡，也会触发外层的事件，顺序从里到外产生事件
- `prevent` 阻止浏览器默认行为，`a` 标签有浏览器默认行为。
- `capture`捕获事件 ：点击里层先触发外层再触发里层顺序从外到里产生事件
- `self` 只触发自己本身的事件不会产生冒泡和捕获事件类似于阻止冒泡 但只针对自己那一层 最外层还是会被最里层冒泡冒到 stop 是阻止所有层次
- `once` 事件只执行一次
:::
