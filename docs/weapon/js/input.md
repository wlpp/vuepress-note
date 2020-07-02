# input 输入框

## 只允许输入数字

```html
<input type="number" placeholder="最低价" v-model="price1" onkeyup="value=value.replace(/[^\d]/g,'')" />
```

## 去除空格

```js
let str = '我是个字符串'
// 去除所有空格
str.replace(/(^\s)|(\s*$)/g, "");
// 去除前后空格
str.replace(/(^\s)/g, "");
// 去除请空格
str.replace(/(^\s)/g, "");
```
