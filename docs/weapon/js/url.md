# 获取 URL 相应参数

## 正则截取

:::tip hash 和 search 区别

- 获取当前页面 ? 后的参数：`window.location.hash`
- 获取当前页面 # 后的参数：`window.location.search`

:::

```js
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

function showyaoshika() {
  //获取url中对应参数
  var utm_source = getQueryString("utm_source");
  var utm_medium = getQueryString("utm_medium");
  if (utm_source == null) {
    return;
  }
  if (utm_source == "yaoshika" && utm_medium.toLowerCase() == "cps") {
    $(".ysk_popup").fadeIn();
    return;
  }
}
```

## 实例化 URLSearchParams 对象

```js
let url = "?wd=蔡徐坤&skill=篮球&year=2019";
let searchParams = new URLSearchParams(url);
// 获取单个字段
searchParams.get("wd");
// 添加字段
searchParams.append("age", 26);
// 删除字段
searchParams.delete("year");
// 设置字段
searchParams.set("skill", "篮球 唱 跳 rap");
// 判断是否存在
searchParams.has("age"); // true
// 转为字符串
searchParams.toString();
```
