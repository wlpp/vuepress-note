# Web 存储方式

## 本地存储

::: tip

- `sessionStorage` 和 `localStorage`写法一样
- `localStorage` 永久保存在浏览器，除非你主动删除
- `sessionStorage` 关闭浏览器就会自动删除
  :::

```js
sessionStorage.setItem("flag", "true");
sessionStorage.getItem("flag"); // true
sessionStorage.removeItem("flag"); //删除
```

## Cookie 服务端存储

:::tip

- cookie 只能在服务端才能在浏览器显示（火狐浏览器例外）
- cookie 可以设置到期时间，时间到了自动删除 cookie,不设置时长默认永久
  :::

### 设置 Cookie

```js
function setCookie(key, value, hours) {
  var d = new Date();
  d.setTime(d.getTime() + hours * 3600 * 1000);
  document.cookie = key + "=" + value + "; expires=" + d.toGMTString(); //时差相差8小时
  console.log("cookie已设置");
}

setCookie("wlpp", "666", 0.1);
```

### 获取 Cookie

```js
function getCookie(key) {
  let cookieArr = document.cookie.split("; ");
 cookieArr.map((item, index) => {
    let arr = cookieArr[i].split("=");
    if (arr[0].trim() === key) {
      console.log("匹配成功");
      console.log(arr[1]);
      return;
    }
  }
  return false;
}

getCookie("wlpp");
```

### 删除 Cookie

```js
function removeCookie(key) {
  var d2 = new Date(); //获取当前时间
  d2.setTime(d2.getTime() - 10000); //将date设置为过去的时间
  document.cookie = key + "=v; expires =" + d2.toGMTString(); //设置cookie
  console.log("cookie已删除");
}

deleteCookie("wlpp");
```

:::tip chrome 浏览器显示 cookie

1. 访问 chrome://flags/#site-isolation-trial-opt-out

2. 选择 Opt-out

3. 点击右下角重启浏览
   :::
