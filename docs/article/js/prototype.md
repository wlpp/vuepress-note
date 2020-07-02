# 原型扩展

## prototype 和**proto**的区别

![图片一](/img/p1.png)

```js
var a = {};
console.log(a.prototype); //undefined
console.log(a.__proto__); //Object {}

var b = function() {};
console.log(b.prototype); //b {}
console.log(b.__proto__); //function() {}
```

## **proto**属性指向谁

![图片一](/img/p2.png)

```js
/*1、字面量方式*/
var a = {};
console.log(a.constructor); //function Object() { [native code] } (即构造器Object）
console.log(a.__proto__ === a.constructor.prototype); //true

/*2、构造器方式*/
var A = function() {};
var a = new A();
console.log(a.constructor); // function(){}（即构造器function A）
console.log(a.__proto__ === a.constructor.prototype); //true

/*3、Object.create()方式*/
var a1 = { a: 1 };
var a2 = Object.create(a1);
console.log(a2.constructor); //function Object() { [native code] } (即构造器Object)
console.log(a2.__proto__ === a1); // true
console.log(a2.__proto__ === a2.constructor.prototype); //false（此处即为图1中的例外情况）
```

## 什么是原型链

![图片一](/img/p3.png)

```js
var A = function() {};
var a = new A();
console.log(a.__proto__); //Object {}（即构造器function A 的原型对象）
console.log(a.__proto__.__proto__); //Object {}（即构造器function Object 的原型对象）
console.log(a.__proto__.__proto__.__proto__); //null
```
