# 数组扩展

## Array.isArray

> 是否是个数组

```js
Array.isArray([1, 2, 3]); // true
Array.isArray("foobar"); // false
```

## Array.from

> 转化为数组，返回新数组

```js
// 常规
Array.from('123') // [1,2,3]
[...'123']

// 去重后转为数组
Array.from(new Set([4,5,6])) // [4,5,6]
[...new Set([4,5,6])]

// 类数组转为数组
lis = document.querySelectorAll('li')
Array.from(lis).map()
[...lis].map()
```

## join

> 数组转字符串

```js
let arr = [1, 2, "3"];
arr.join(); // 1,2,3
arr.join(""); // 123
arr.join("-"); // 1-2-3
```

## indexOf

> 返回数组中第一次出现的指定值的索引

```js
[1, 2, "3", 3, 2].indexOf(2); // 1
```

## lastIndexOf

> 返回数组中第一次出现的指定值的索引

```js
[1, 2, "3", 3, 2, 2].lastIndexOf(2); // 5
```

## slice

> 浅拷贝,返回一个新数组

```js
let arr = [1, 2, 3];
let arr2 = arr.slice(0); // [1,2,3]
let arr3 = arr.slice(1, 3); // [2,3]
```

## push

> 将一个或多个元素添加到数组的末尾

```js
let arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr); // [1,2,3,4,5]
```

## splice

> 添加/删除将一个或多个元素

```js
// 第一个参数为索引,第二个为删除个数，为0不执行删除，第三个为添加元素(可多个)

// 从索引0开始删除一个元素
let arr = [1, 2, 3];
arr.splice(0, 1); // [2,3]
console.log(arr);

// 从索引1开始添加一个元素
let arr2 = [1, 2, 3];
arr2.splice(1, 0, 4);
console.log(arr2); // [1, 4, 2, 3]
```

## includes

> 是否包含一个指定的值

```js
[1, 2, 3].includes(2); // true
```

## flat

> 将所有元素遍历到同一个数组中

```js
[1, 2, 3, [4, 5]].flat(); // [1, 2, 3, 4, 5]
```

## reverse

> 返回了一个颠倒后的数组

```js
[1, 2, 3].flat(); // [3,2,1]
```

## every

> 数组中所有元素是否符合同一条件

```js
let arr = [1, 2, 3];
arr.every(item => item > 0); // true
arr.every(item => item > 1); // false
```

## map

> 遍历数组,返回新数组

```js
[1, 2, 3].map(item => item); // 1,2,3
```

## forEach

> 遍历数组，每个元素执行一次函数，没有返回值

```js
lis = document.querySelectorAll("li");
lis.forEach(item => item); // <li></li>
```

## filter

> 过滤数组，返回符合条件的元素

```js
[1, 2, 3].filter(item => item > 1); // [2,3]
```

## find

> 返回第一个符合条件的元素

```js
[1, 2, 3].find(item => item > 1); // 2
```

## findIndex

> 返回第一个符合条件的元素的索引

```js
[1, 2, 3].findIndex(item => item > 1); // 1
```

## sort

> 返回排序后的数组

```js
let arr = [1, 2, 3, 5, 7, 6, 9, 8];
// 默认从小到大排序
arr.sort();
// 快速乱序
arr = arr.sort(() => {
  return Math.random() - 0.5; 
});
// 指定某种排序:a-b从小到大,b-a则相反
let arr2 = [
  {
    title: "111",
    num: 18
  },
  {
    title: "111",
    num: 33
  },
  {
    title: "111",
    num: 888
  }
];
arr2.sort((a, b) => b.num - a.num); // [{title: "111", num: 888},{title: "111", num: 33},{title: "111", num: 18}]
```

## reduce

> 为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：初始值（或者上一次回调函数的返回值），当前元素值，当前索引，调用 reduce 的数组。

1. previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
2. currentValue （数组中当前被处理的元素）
3. index （当前元素在数组中的索引）
4. array （调用 reduce 的数组）

```js
// 常规
var arr = [1, 2, 3, 4];
arr.reduce((x, y) => x + y); //10
arr.reduce((x, y) => x * y); //24

// 计算数组中每个元素出现的次数
let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
let nameNum = names.reduce((pre, cur) => {
  if (cur in pre) {
    pre[cur]++;
  } else {
    pre[cur] = 1;
  }
  return pre;
}, {}); // 传{}默认第一个pre为{}
console.log(nameNum); // {Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}
```
