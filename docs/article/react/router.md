# React 路由实例

## 配置路由

1. 安装

```js
yarn add react-router-dom -S
```

2. 在根目录的 index.js 中配置

```js
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

3. 在根目录的 App.js 中配置

```js
import Home from "./views/home/index";
import User from "./views/user/index";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {/* 重定向路由 */}
            <Route exact path="/" render={() => <Redirect to="/home"></Redirect>} />
            {/* exact精准匹配,解决模糊路由搜索 */}
            <Route path="/home" component={Home} />
            <Route path="/user/:id" component={User} />
          </Switch>
        </div>
      </Router>
    );
  }
}
```

## 路由传参

### params

> 特点:地址栏传参，刷新页面保存参数

```js
//声明式传参
1. 配置路由：<Route path="/detail/:id" component={Detail} />
2. 链接传参：<Link to={`/detail/${item.id}`}><?Link>

//命令式传参
this.props.history.push({pathname:'/index',params:{id:1}})

// 接收参数
this.props.match.params.id
```

### query

> 特点:参数不出现地址栏,刷新页面不保存参数，会报错

```js
//声明式传参
1.配置路由：<Route path="/detail/:id" component={Detail} />
2.链接传参：<Link to={{ path : ' /query' , query : { name : 'sunny' }}}>

//命令式传参
this.props.history.push({pathname:"/query",query: { name : 'sunny' }})

// 接收参数
this.props.location.query.name
```
