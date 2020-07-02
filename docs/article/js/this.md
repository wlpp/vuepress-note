# this  扩展

## this 指向

> this 就是一个指针，指向调用函数的对象，以下是this的绑定方式(除箭头函数)：

### 默认绑定

> 独立调用函数，一般指向 window

```js
function sayHi() {
  console.log("Hello,", this.name);
}
var name = "YvetteLau";
sayHi(); // YvetteLau
```

### 隐式绑定

> 函数的调用是在某个对象上触发的，即调用位置上存在**上下文**对象。一般为 XXX.fun()

```js
// 例子一
var person = {
  name: "YvetteLau",
  sayHi: function() {
    console.log(this.name);
  }
};
person.sayHi(); //YvetteLau

//例子二
var name = "Wiliam";
var person = {
  name: "YvetteLau",
  Fun: sayName
};
//sayHi函数声明在外部，但调用say时,会使用person的上下文来引用函数
function sayName() {
  console.log("我叫", this.name); // 我叫 YvetteLau
}
person.Fun();

// 例子三

var person2 = {
  name: "Christina",
  Fun2: sayName
};
var person1 = {
  name: "YvetteLau",
  Fun1: person2 //fun1:{ name: "Christina",Fun2: sayName}
};
// 不管有多少层，在判断this的时候，我们只关注最后一层，即此处的Fun1,此时name为Christina
function sayName() {
  console.log("我叫", this.name);
}
person1.Fun1.Fun2();

// 例子四
var name = "Wiliam";
var person = {
  name: "YvetteLau",
  Fun: sayName
};
// person.Fun已经赋值个Hi了,Hi()调用跟它没半毛钱关系，此时指向window
function sayName() {
  console.log("我叫", this.name); //我叫 Wiliam
}
var Hi = person.Fun;
Hi();

// 例子五
var name = "Wiliam";
var person1 = {
  name: "YvetteLau",
  sayName: function() {
    setTimeout(function() {
      // window.setTimeout(),所以此时this指向window
      console.log("Hello,", this.name);
    });
  }
};
var person2 = {
  name: "Christina",
  Fun: sayName
};
function sayName() {
  console.log("Hello,", this.name);
}
person1.sayName(); // Hello, Wiliam
setTimeout(function() {
  person2.Fun(); // Hello, Christina
}, 200);
setTimeout(person2.sayHi, 100); // Hello, Wiliam ，因为setTimeout(fn,delay),此时person2.sayHi已经赋值给fn，此时指向window
```

### 显式绑定

> 通过 call,apply,bind 的方式，指定 this 所指向的对象

```js
const cat = {
  name: "小黑",
  eatFish(...args) {
    console.log("this指向=>", this);
    console.log("...args", args);
    console.log(this.name + "吃鱼");
  }
};
const dog = {
  name: "大毛",
  eatBone(...args) {
    console.log("this指向=>", this);
    console.log("...args", args);
    console.log(this.name + "吃骨头");
  }
};
//
// call 第一个参数填指向(填null指向window),后面参数只能一个一个的传入
cat.eatFish.call(dog, "汪汪汪", "call"); // {name: "大毛", eatBone: ƒ} ["汪汪汪", "call"] 大毛吃鱼
dog.eatBone.call(cat, "喵喵喵", "call"); // {name: "小黑", eatFish: ƒ} ["喵喵喵", "call"] 小黑吃骨头

// apply 第一个参数填指向(填null指向window),后面只支持传入一个数组
cat.eatFish.apply(dog, ["汪汪汪", "apply"]); // {name: "大毛", eatBone: ƒ} ["汪汪汪", "call"] 大毛吃鱼
dog.eatBone.apply(cat, ["喵喵喵", "apply"]); // {name: "小黑", eatFish: ƒ} ["喵喵喵", "call"] 小黑吃骨头

// bind 直接改变这个函数的this指向并且返回一个新的函数,再次调用这个函数的时候this都是指向bind绑定的第一个参数。bind传参方式跟call方法一致。
const test1 = cat.eatFish.bind(dog, "汪汪汪", "bind"); // {name: "大毛", eatBone: ƒ} ["汪汪汪", "call"] 大毛吃鱼
const test2 = dog.eatBone.bind(cat, "喵喵喵", "bind"); // {name: "小黑", eatFish: ƒ} ["喵喵喵", "call"] 小黑吃骨头
test1();
test2();
```

### new 绑定

::: warning 使用 new 来调用函数，会自动执行下面的操作：

1. 创建一个新对象
2. 将构造函数的作用域赋值给新对象，即 this 指向这个新对象
3. 执行构造函数中的代码
4. 返回新对象
   :::

```js
function sayName(name) {
  this.name = "Yevtte";
}
var Hi = new sayName();
"我叫", Hi.name; //我叫 Yevtte
```

### 绑定优先级

::: warning 绑定优先级
new 绑定 > 显式绑定 > 隐式绑定 > 默认绑定
:::

## 箭头函数

> 新的书写方式

```js
// 常规
const fun = function(number) {
  return number * 2;
};

// 多个参数写法
const fun = (number, number2) => {
  return number * 2;
};

// 只有一个参数
const fun = number => {
  return number * 2;
};

// 只有一条执行语句
const fun = number => number * 2;

// 立即执行函数
const fun = (() => 3 * 2)(); // 6
```

> 箭头函数没有 arguments

```js
function foo(...arg) {
  return arg;
}
foo(1, 2, 3, 4); // 1
```

> 箭头函数没有 prototype 属性，不能用作构造函数（不能用 new 关键字调用）

```js
let Foo = () => {};
console.log(Foo.prototype); // undefined
let foo = new Foo(); //Foo is not a constructor
```

> 箭头函数不会创建自己的 this，它只会从自己的作用域链上找父级执行上下文的 this,而不是谁调用它，它的 this 就是谁。所以箭头函数中的 this，取决于你上层执行上下文的 this 。

```js
var number = 0;
var obj = {
  number: 1,
  show1: function() {
    // 从作用域链中找到 show1 中的 this，所以它的 this 就是 obj 对象
    setTimeout(() => {
      console.log(this.number);
    }, 1000);
  },

  show2: function() {
    // 普通函数，函数自主调用，所以他的 this 就是 window 对象
    setTimeout(function() {
      console.log(this.number);
    }, 2000);
  }
};

obj.show1(); //  1
obj.show2(); //  0
```
