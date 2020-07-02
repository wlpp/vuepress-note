# 数值扩展

## Number.parseInt

> 返回转换值的整数部分

```js
Number.parseInt(11.1); // 11
```

## Number.parseFloat

> 返回转换值的浮点数部分

```js
Number.parseFloat(11.111); // 11.111
```

## Number.isNaN

> 是否为 NaN

```js
Number.isNaN("str"); // false
Number.isNaN(1 / "str"); // true
```

::: warning Number.isNaN 与 isNaN 区别

- Number.isNaN 与 isNaN 最的区别是，Number.isNaN 不存在类型转换的行为。
- isNaN 只是判断传入的参数是否能转换成数字，并不是严格的判断是否等于 NaN`console.log(isNaN('str')) //true`
- Number.isNaN 判断传入的参数是否严格的等于 NaN(也就是 ===)`console.log(Number.isNaN('测试')) //false`
- **建议用 isNaN()判断是否为数值,false 为数值**
  :::

## Number.isInteger

> 是否为整数

```js
Number.isInteger(11.1); //false
```

## Math.ceil

> 向上取整

```js
Math.ceil(11.5); //12
```
ceil
## Math.floor

> 向下取整

```js
Math.floor(11.5); //11
```

## Math.round

> 四舍五入

```js
Math.floor(11.5); //12
```

## Math.max

> 取最大值

```js
Math.max(11.5, 12); //12
```

## Math.min

> 取最小值

```js
Math.max(11.5, 12); //11.5
```
## Math.random

> 取随机数

```js
Math.random() //取0-1的随机数
Math.random() * 10 //取10以内的随机数
Math.floor(Math.random() * 10) //取10以内的向下整数数
```
