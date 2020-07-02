# Vue 生命周期

::: tip 常用生命周期
- `created` ：数据和方法完成了初始化，此时只能加载数据方法，不能操作元素DOM
- `mounted` ：数据和DOM都完成挂载，此时可以操作元素DOM
- `updated` ：只要是页面数据改变了都会触发
- `destroyed` ：离开当前页面/路由执行
:::
  ![图片](/img/lifecycle.png)
