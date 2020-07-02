# React 安装

## Create React App 脚手架

```js
// 全局安装
npm install -g create-react-app
// 构建一个my-app的项目
npx create-react-app my-app
cd my-app
// 启动
npm start
```

## 编辑模板

```js
import React, { Component } from "react";
import "./index.css";
// import toBack from '组件路径'

class Home extends Component {
  // 构造方法（必写）
  constructor(props) {
    super(props);
    this.state = {
      number: 123
    };
  }

  //   生命周期
  componentWillMount() {}
  componentDidMount() {}
  // ...省略

  //   方法
  getNumber() {}

  render() {
    let { number } = this.state;
    let { string } = this.props;
    return (
      <div>
        {/* 引入的组件 */}
        {/* <toBack /> */}
        <div>数字{number}</div>
        <div>字符串{string}</div>
      </div>
    );
  }
}

export default Home;
```

## 引入插件

> 以引入 Less 为例

1. 释放 config 文件夹（已有就不用执行）

```js
yarn eject

// 以下是解决yarn eject报错问题
1. git add .
2. git commit -m "init"
3. yarn eject
```

::: warning 解决 yarn eject 启动报错

- yarn add @babel/core @babel/preset-env -S
  :::

2. 引入 less 依赖包

```js
yarn add less less-loader -S
```
