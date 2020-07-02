# v-for 数据处理

## fillters 过滤器

> 过滤数据，返回过滤结果

```js
// html
    <p v-for="(item, index) in data" :key="index">{{ item.number | toFixed }}</p>
// js
  data() {
    return {
      data: [
        {
          title: "标题一",
          number: 1
        },
        {
          title: "标题二",
          number: 2
        },
        {
          title: "标题三",
          number: 3
        }
      ]
    };
  },
  filters: {
    toFixed(val) {
      return val + 10;
    }
  }
```

## 函数

> 函数返回值可以直接放进循环里

```js
// html
    <p v-for="(item, index) in data" :key="index">{{ initNumber(item.number) }}</p>
// js
  data() {
    return {
      data: [
        {
          title: "标题一",
          number: 1
        },
        {
          title: "标题二",
          number: 2
        },
        {
          title: "标题三",
          number: 3
        }
      ]
    };
  },
  methods: {
    initNumber(number) {
      return number + 10;
    }
  }
```

## 循环多层嵌套

```js
// html
  <div>
    <p v-for="(item, index) in data" :key="index">
      {{ item.arr[0].name }}
    </p>
  </div>
// js
  data() {
    return {
      data: [
        {
          title: "标题一",
          number: 1,
          arr: [
            {
              name: "毕福剑"
            }
          ]
        },
        {
          title: "标题二",
          number: 2,
          arr: [
            {
              name: "卢本伟"
            }
          ]
        },
        {
          title: "标题三",
          number: 3,
          arr: [
            {
              name: "张大大"
            }
          ]
        }
      ]
    };
  }
```
