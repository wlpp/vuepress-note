# Async 扩展

## async 的用法

> async 函数返回一个 `Promise` 对象

```js
const getData = () => {
  return "syy";
};
// getData() //syy

//加上async后
const getData = async () => {
  return "syy";
};
getData(); //Promise {<resolved>: "syy"}
```

> async 函数内部 return 语句返回的值，会成为 then 方法回调函数的参数

```js
const getData = async () => {
  return "syy";
};
getData().then(data => {
  console.log(data); //syy
});
```

> `async` 函数内部抛出错误，会导致返回的 Promise 对象变为 `reject` 状态，抛出的错误对象会被 `catch`方法回调函数接收到

```js
const getData = async () => {
  throw new Error("出错了");
};
getData()
  .then(val => {
    console.log(v);
  })
  .catch(err => {
    console.log("错误提示：", err); //Error: 出错了
  });
```

## async...await 用法

> async 函数返回的 Promise 对象，必须等到内部所有 await 命令的 Promise 对象执行完才会执行 `then()`

```js
async function getTitle(url) {
  let response = await fetch(url);
  let html = await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle("https://tc39.github.io/ecma262/").then(console.log);
```

> await 命令后面是一个 Promise 对象。如果不是，会被转成一个立即 `resolve` 的 Promise 对象。

```js
async function f() {
  return await 123;
}

f().then(v => console.log(v));
// 123
```

> `await`命令后面的 Promise 对象如果变为`reject`状态，则 reject 的参数会被`catch`方法的回调函数接收到

```js
async function f() {
  await Promise.reject("出错了");
  await Promise.resolve("hello world"); //此处不会执行
}
f()
  .then(v => console.log(v))
  .catch(e => console.log(e)); // 出错了
```

> 只要一个 await 语句后面的 Promise 变为 reject，那么整个 async 函数都会中断执行

```js
async function f() {
  await Promise.reject("出错了");
  await Promise.resolve('hello world'); //此处不会执行
}
f()
  .then(v => console.log(v))
  .catch(e => console.log(e));// 出错了

//   解决方案
 try {
     await Promise.reject("出错了");
  await Promise.resolve('hello world'); //此处不会执行
 }.catch(e=>{
     console.error(err);
 })
```
