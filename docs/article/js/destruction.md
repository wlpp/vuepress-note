# 解构赋值

## 字符串解构

```js
const [a, b, c, d, e] = "hello";
console.log(a); //h
```

## 数值解构

```js
const { toString: s } = 123;
```

## 布尔值解构

```js
const { toString: b } = true;
```

## 对象解构

```js
// 常规
const { x, y } = { x: 1, y: 2 }; // x=1,y=2
// 设置默认值
const { x, y = 2 } = { x: 1 }; // x=1,y=2
// 重命名
const { x, y: z } = { x: 1, y: 2 }; // z=2
```

## 数组解构

```js
// 常规
const [x, y] = [1, 2]; // x=1,y=2
const [x, y] = [1]; // x=1 ,y=undefined
// 重命名
const [x, y = 2] = [1]; //x=1,y=2
```

## 函数参数解构

```js
// 数组解构
function Func([x = 0, y = 1]) {}
// 对象解构
function Func({ x = 0, y = 1 } = {}) {}
```

## 应用场景

::: tip 应用场景
- 交换变量值：[x, y] = [y, x]
- 返回函数多个值：const [x, y, z] = Func()
- 解构对象或数组：const {x} = obj const [x] = array 
:::
