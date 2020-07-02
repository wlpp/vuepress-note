# 对象扩展

## Object.is

> 对比两值是否相等

```js
Object.is(1, 2); // false
Object.is("1", "1"); // true
```

::: warning ==,===,和 Object.is 区别

- ==会对两边的操作数做隐式类型转换在比较 `'1' == 1 // true`,===和 Object.is 则不会进行类型转换
- ===和 Object.is 区别:`+0===-0 // true` `Object.is(+0,-0) // false`

:::

## Object.assign

> 合并对象(浅拷贝)，返回原对象

```js
const obj1 = { x: 1, y: 2 };
const obj2 = { a: 3, b: 4 };
Object.assign(obj1, obj2); // {x: 1, y: 2, a: 3, b: 4}
{...obj1,...obj2}//扩展运算符进行合并
```

## Object.getPrototypeOf

> 返回对象的原型对象

```js
Object.getPrototypeOf(1); //Number
```

## Object.setPrototypeOf

> 设置对象的原型对象

```js
// 暂缺
```

## _proto_

> 返回或设置对象的原型对象

```js
const a = 11;
a.__proto__; // Number
a.__proto__ = String; //String
```

## for-in

> 遍历对象

```js
for (let key in { x: 1, y: 2, z: 3 }) {
  key; // x,y,z
  obj[key]; //1,2,3
}
```

## in

> 指定值是否存在对象中

```js
let obj = { a: 1, b: function () { } }
"a" in obj // true
"c" in obj // fales
```

## delete

> 删除对象中指定值

```js
let obj = { a: 1, b: function () { } }
delete a.x // true
```

## Object.keys

> 返回对象 key 值组成的数组

```js
Object.keys({ x: 1, y: 2, z: 3 }); // ["x", "y", "z"]
```

## Object.values

> 返回对象 value 值组成的数组

```js
Object.values({ x: 1, y: 2, z: 3 }); // [1, 2, 3]
```
