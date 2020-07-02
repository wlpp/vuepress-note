# Vue 路由实例

## 路由传参

> 第一种，需要在 path 中添加/:id 来对应 `$router.push` 中 path 携带的参数

```js
this.$router.push({
  path: `/describe/${id}`
});

// 路由配置
{
    path: '/describe/:id',
    name: 'Describe',
    component: Describe
}

// 参数获取
this.$route.params.id
```

> 第二种，通过路由属性中的 name 来确定匹配的路由，通过 params 来传递参数

```js
this.$router.push({
  name: "Describe",
  params: {
    id: id
  }
})

// 路由配置
{
    path: '/describe',
    name: 'Describe',
    component: Describe
}

// 参数获取
this.$route.params.id
```

> 第三种，使用 path 来匹配路由，然后通过 query 来传递参数，`query传递的参数会显示在url后面?id=？`

```js
this.$router.push({
  path: "/describe",
  query: {
    id: id
  }
});
// 路由配置
{
    path: '/describe',
    name: 'Describe',
    component: Describe
}

// 参数获取
this.$route.query.id
```

## 路由重定向

> 设置打开某个页面时会强制跳转到指定页面

```js
{
    path: '/',
    redirect:'/describe'
}
```

## 路由嵌套

```js
// 父路由中必须加入router-view
<div>
    <h2>我是父路由</h2>
    <router-link to="/one">子组件1</router-link>
    <router-link to="/tow">子组件2</router-link>
    <router-view></router-view>
</div>
this.$router.push({
  path: "/one",
});

// 路由配置
{
  path: "/describe",
  name: "Describe",
  component: Describe,
  children:[
      {
          path:'/one'
          component: One,
      },
      {
          path:'/two'
          component: Two,

      }
  ]
}
```

## 路由判断

```js
// 实时监听路由变化
watch:{
  $route(to,from){
    console.log(to,from);
    if(to.name==='A'){
      console.log(123)
    }
  }
},

// 点击获取当前路由
handleClick(){
  console.log(this.$route.name)
}

// 返回上一页
this.$router.go(-1);
```
