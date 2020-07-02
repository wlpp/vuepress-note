# React 生命周期

## 常见周期

::: tip 常用生命周期

- `componentWillMount` ：数据和方法完成了初始化，此时只能加载数据方法，不能操作元素 DOM
- `componentDidMount` ：数据和 DOM 都完成挂载，此时可以操作元素 DOM
- `componentDidUpdate` ：只要是当前页面数据改变了都会触发
- `componentWillReceiveProps`：组件`prop`值改后触发，接受一个参数`nextProps`,一般需要重新渲染组件时用到的（通过对比 nextProps 和 this.props，将 nextProps 的 state 为当前组件的 state，从而重新渲染组件）
- `componentWillUnmount` ：完成组件的卸载和数据的销毁

  ![图片](/img/lifecycle2.jpg)

## 常见问题

1. 控制台出现`componentWillReceiveProps has been renamed, and is not recommended for use. See`

```
react新版本问题，要么换成低版本，要么在改成UNSAFE_componentWillReceiveProps
```

2. 控制台出现`Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component. This is a no-op. Please check the code for the undefined component.`

```js
// 原因：因为你在组件中的ajax请求返回setState,而你组件销毁的时候，请求还未完成，因此会报warning
// 单个解决
componentWillUnmount() {
    this.isMount === false
}
// 多个解决
componentWillUnmount(){
    //重写组件的setState方法，直接返回空
    this.setState = (state,callback)=>{
      return;
    };
}
```
