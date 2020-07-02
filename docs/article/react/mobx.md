# mobx 状态管理

## 安装

1. 安装 mobx 和 mobx-react

```js
yarn add mobx mobx-react -S
```

2. 释放 config.js 文件

```js
yarn 

// 以下是解决yarn eject报错问题
1. git add .
2. git commit -m "init"
3. yarn eject
```

3. 安装其他支持文件

```js
yarn add react-app-rewired @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators -S
```

4. 打开 package.json,加入以下

```js
"babel": {
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ]
    ],
    "presets": [
      "react-app"
    ]
  }
//   加入后不能报错删除pageage.json中devDependencies重复的字段，然后重新运行下
```

## 配置

1. 新建 store 文件夹
2. 在 store 文件夹中新建 exampleStore.js

```js

import { observable,action,computed } from 'mobx';

class exampleStore {
  // 定义数据
  @observable state = {
    count: 0,
    count2: 0,
    name: "wlpp",
    show: false
  };
  // 创建方法修改数据
  @action getDate = () => {};
  //   @observable 中的数据修改必须通过@action来改变，不然控制台会报错
  @action changeName() {
      this.state.name = 'wlpp666'
  }
  // 计算属性
  @computed
  get total() {
    return this.state.count + this.state.count2;
  }
}

export default new exampleStore();
```

3.在组件中使用

```js
import { observer } from "mobx-react";
import exampleStore from "./store/indexStore";

<div>{exampleStore.name}</div>
<div>{exampleStore.cahngeName}</div>
```

## 全局注入Store

1. 在app.js中添加Provider
```js
import { Provider } from "mobx-react";
import ExampleStore from "./store/exampleStore";
<Provider store={ExampleStore}>
  <Router>
    <div className="App">
      <Switch>
        {/* 重定向路由 */}
        <Route exact path="/" render={() => <Redirect to="/home"></Redirect>} />
        {/* exact精准匹配,解决模糊路由搜索 */}
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
      </Switch>
    </div>
  </Router>
</Provider>
```

2. 在home.js中添加inject
```js
import React, { Component } from "react";
import { observer, inject } from "mobx-react";
@inject("store")
@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }
  componentDidMount() {
    console.log(this);
  }
  render() {
    return <div>{this.props.store.state.name}</div>;
  }
}
export default Home;
```