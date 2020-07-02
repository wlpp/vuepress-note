# 字符串扩展

## 字符串遍历

> 可通过 for-of 遍历字符串

```js
let str = "abc";
for (i of str) { console.log(i); //a,b,c}
```

## 字符串模板

> 可单行可多行可插入变量的增强版字符串
> aaa

```js
let name = "字符串模板"`我叫${name}`; //我叫字符串模板
```

## String.raw

> 在字符串模板让转义符失效

```js
String.raw`Hi\u000A!`; //Hi\u000A!
String.raw`Hi\n${2 + 3}!`; //Hi\n5!
```

## toString

> 数值转为字符串

```js
const aa = 111;
console.log(aa.toString()); //'111'
```

## indexOf

> 返回第一次出现的指定值的索引

```js
"strt".indexOf("t"); // 1
```

## indexOf

> 返回最后一次出现的指定值的索引

```js
"strt".lastIndexOf("t"); // 3
```

## split

> 字符串转数组

```js
"str".split(""); //["s", "t", "r"]
```

## slice

> 提取字符串

```js
// 提取下标1之后的字符串
"str".slice(1); // tr
// 提取下标0到2的字符串(不包括下标2的字符串)
"str".slice(0, 2); // st
```

## replace

> 替换字符串

```js
// 常规
"str".replace("s", "ss"); // sstr
// 正则匹配
"hello".replace(/ll/g, "ss"); // hesso
// 函数
"hello".replace("h", function(word) {
  return word.toLocaleUpperCase(); //Hello
});
```
## trim

> 删除字符串前后两端空白字符

```js
" str ".trim(); //str
```
## repeat

> 把字符串重复 n 次，返回新字符串

```js
"str".repeat(2); //strstr
```

## matchAll

> 返回正则表达式在字符串的所有匹配

```js
"ababc".match(/a/gu); //['a','a']
```

## includes

> 是否存在指定字符串

```js
"str".includes("t"); //true
```

## startsWith

> 字符串头部是否存在指定字符串

```js
"str".startsWith("s"); //true
```

## endsWith

> 字符串尾部是否存在指定字符串

```js
"str".startsWith("s"); //false
```

## toLocaleUpperCase

> 转为大写字母

```js
"str".toLocaleUpperCase(); //STR
```
## toLocaleUpperCase

> 转为小写字母

```js
"STR".toLocaleLowerCase(); //str
```