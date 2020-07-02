# Promise 扩展

## promise

::: warning promise 三个状态

1. pending[待定]初始状态
2. fulfilled[实现]操作成功
3. rejected[被否决]操作失败

- Promise 对象的状态改变，只有两种：pending=>fulfilled，pending=>rejected
- 当 promise 状态发生改变，就会触发 then()里的响应函数处理后续步骤
- promise 状态一经改变，不会再变
  :::

### promise 实例

> 最简单示例

```js
new Promise(resolve => {
  const error = false;
  setTimeout(() => {
    !error ? resolve("没有错误，正常执行") : reject("有错误");
  }, 2000);
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
```

> 如果返回新 promise 会，在新 promise 改变后执行,

```js
new Promise(resolve => {
  setTimeout(() => {
    resolve("hello");
  }, 2000);
})
  .then(val => {
    console.log(val); //  参数val = 'hello'
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("world");
      }, 2000);
    });
  })
  .then(val => {
    console.log(val); // 参数val = 'world'
  });
```

> then 的执行顺序

```js
let pro = new Promise(resolve => {
  setTimeout(() => {
    resolve("hello world");
  }, 2000);
});
setTimeout(() => {
  pro
    .then(val => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("then");
        }, 2000);
      }).then(val => {
        console.log(val);
      });
    })
    .then(() => {
      setTimeout(() => {
        console.log("最外层then");
      }, 2000);
    });
}, 2000);
```

> 倒计时时间到了，还是会 promise 完成后 then()

```js
let pro = new Promise(resolve => {
  setTimeout(() => {
    resolve("hello world");
  }, 2000);
});
setTimeout(() => {
  pro.then(val => {
    console.log(val); // hello world
  });
}, 2000);
```

::: warning then() 注意事项

- 接收两个函数作为参数，分别代表 fulfilled（成功）和 rejected（失败）
- .then()返回一个新的 Promise 实例，所以它可以链式调用
- 如果返回新的 promise，那么下一级.then()会在新的 promise 状态改变之后执行
- 如果返回其他任何值，则会立即执行下一级.then()
- 如果.then()里面有.then()，会等里面的 then()执行完，再执行外面的
  :::

## Promise.all

> 用于将多个 promise 实例，包装成一个新的 Promise 实例,返回的实例就是普通的 promise

```js
//切菜
function cutUp() {
  console.log("开始切菜。");
  var p = new Promise(function(resolve, reject) {
    //做一些异步操作
    setTimeout(function() {
      console.log("切菜完毕！");
      resolve("切好的菜");
    }, 1000);
  });
  return p;
}

//烧水
function boil() {
  console.log("开始烧水。");
  var p = new Promise(function(resolve, reject) {
    //做一些异步操作
    setTimeout(function() {
      console.log("烧水完毕！");
      resolve("烧好的水");
    }, 1000);
  });
  return p;
}

Promise.all([cutUp(), boil()]).then(result => {
  console.log("准备工作完毕");
  console.log(result);
});
```
