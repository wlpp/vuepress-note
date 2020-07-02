# React 组件通信

## 父传子

> 子组件

```js
<div className="goodList">
  <h1>{this.props.title}</h1>
  {this.props.data &&
    this.props.data.map((item, index) => {
      return (
        <div key={index}>
          <div>{item.title}</div>
          <div>{item.price}</div>
        </div>
      );
    })}
</div>
```

> 父组件

```js
<div>
  <Child data={this.state.data} title="组件传值" />
</div>
```

::: warning Props 的只读性
组件无论是使用函数声明还是通过 `class` 声明，都决不能修改自身的 `props`,只能通过获取 `props` 的传值
:::

## 子传父

> 子组件

```js
// 通过点击父组件传过来的函数方法，向父组件传值
<button onClick={this.props.IntroduceFn.bind(this, "hello")}>点击</button>
```

> 父组件

```js

introduce(value) {
    console.log(`从子组件传过来的值是${value}`);
}

<Child  IntroduceFn={this.introduce} />
```
