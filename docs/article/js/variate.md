# 声明

>let,const 用于声明变量，用来替代老语法的 var 关键字，与 var 不同的是，let/const 会创建一个**块级作用域**

## 赋值

> let 命令声明变量后可立马赋值或使用时赋值,在相同作用域下只允许重新赋值,不允许重新定义

```js
let a;
let a = 234; //报错
a = 789; //789
{
  let a = 234; //234
}
```

> const 声明常量后必须立马赋值,定义的值不允许改变,也不可重新定义

```js
const a = 1111;
const arr = [1, 2, 3];
a = 222; //报错
const a = 1212; //报错
arr = []; //报错
```

## 暂时性死区

> let/const 在声明变量之前是无法使用这个变量的,不存在变量提升

```js
if(true){
    name = "abc" //Uncaught ReferenceError: Cannot access 'name' before initializat ion
    let name
}
```
