# Class 扩展

## 基本定义

```js
class Person {
  constructor() {}
  say() {
    return "我叫一寸灰";
  }
}
var p = new Person();
p.say(); // 我叫一寸灰
```

## constructor 传参

> 类的参数传递中我们用 constructor( )进行传参。传递参数后可以直接使用 this.xxx 进行调用

```js
class Person {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add() {
    return this.a + this.b;
  }
}
let p = new Person(18, 30);
console.log(p.add()); // 48 (18+30)
```

## static 静态方法

::: tip

- 不需要实例化,可以通过类名直接调用的方法
- 不能在实例化的对象中调用
- 可以从子类中的 super 对象上调用，子类调用也不能在实例化对象中调用
  :::

```js
class Person {
  constructor() {}

  static walk() {
    console.log("我会走路");
  }
}
Person.walk(); // 我会走路
var person = new Person();
person.walk(); // TypeError
```

```js
class Person {
  constructor() {}

  static walk() {
    return "我会走路";
  }
}

class People extends Person {
  static walk() {
    return super.walk() + ", 我还会跑步";
  }
}

People.walk(); //"我会走路, 我还会跑步"
```

## extends 继承

> 通过 extends 关键字，继承了 Parent 类的所有属性和方法

::: warning super 注意事项

- 子类的方法名或变量名跟父类一样会重写父类的方法名或变量
- `super.xx()`用来调用父类的方法,`this.xx` 如果变量名不用，调用的是对应的值，如果相同调用的是子类重写父类的那个值
  :::

```js
class Parent {
  constructor(x, y) {
    this.name = "张三";
    this.age = 18;
  }
  static walk() {
    return "我会走路";
  }
  sayHello() {
    return "hello";
  }
}

class Child extends Parent {
  constructor() {
    //super(参数是指父类参数)
    super();
    this.name = "李四"; // 相同变量直接复写父类属性
  }
  say() {
    return this.name + "今年" + this.age + "岁";
  }
  sayParentName() {
    return this.name;
  }
  sayParentAge() {
    return this.age;
  }
  // 调用父类的方法，方法名相同也会重写父类的方法
  sayHello() {
    return super.sayHello();
  }
}
var child = new Child();
child.say(); //李四今年18岁
child.sayParentName(); //李四
child.sayParentAge(); //18
child.sayHello(); //hello
```
