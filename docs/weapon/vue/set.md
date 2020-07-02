# Vue 数据更新，视图不更新

> 由于 js 的限制，Vue 不能检测以上数组的变动，以及对象的添加/删除,所以导致出现视图没有更新的问题。

```js
data() { // data数据
    return {
        arr: [1,2,3],
        obj:{
            a: 1,
            b: 2
        }
    };
    },
// 数据更新 数组视图不更新
this.arr[0] = 'OBKoro1';
console.log(arr);// ['OBKoro1'];
// 数据更新 对象视图不更新
this.obj.c = 'OBKoro1';
delete this.obj.a;
console.log(obj);  // {b:2,c:'OBKoro1'}
```

> 通过 this.\$set 解决

```js
this.$set(this.arr, 0, "OBKoro1"); // 改变数组
this.$set(this.obj, "c", "OBKoro1"); // 改变对象
```
