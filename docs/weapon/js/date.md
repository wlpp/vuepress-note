# Date 常用

## API

```js
new Date(); // 创建一个时间对象 Fri Jul 12 2019 19:59:59 GMT+0800 (中国标准时间)

// 返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数。
Date.now(); // 1562932828164

// 解析一个表示某个日期的字符串，并返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数
Date.parse("2019.7.12"); // 1562860800000

// 年月日时分秒 获取
let dateMe = new Date();

dateMe.getFullYear(); // 2019 | 根据本地时间返回指定日期的年份
dateMe.getMonth(); // 6 | 根据本地时间，返回一个指定的日期对象的月份，为基于0的值（0表示一年中的第一月）。
dateMe.getDate(); // 12 | 根据本地时间，返回一个指定的日期对象为一个月中的哪一日（从1--31）
dateMe.getHours(); // 20 |根据本地时间，返回一个指定的日期对象的小时。
dateMe.getMinutes(); // 11 | 根据本地时间，返回一个指定的日期对象的分钟数。
dateMe.getSeconds(); // 29 | 方法根据本地时间，返回一个指定的日期对象的秒数
dateMe.getMilliseconds(); // 363 | 根据本地时间，返回一个指定的日期对象的毫秒数。

dateMe.toJSON(); // 🔥 "2019-07-12T12:05:15.363Z" | 返回 Date 对象的字符串形式
dateMe.getDay(); // 5 | 根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天（0 - 6）
dateMe.getTime(); // 1562933115363 | 方法返回一个时间的格林威治时间数值。
dateMe.toString(); // "Fri Jul 12 2019 20:05:15 GMT+0800 (中国标准时间)" | 返回一个字符串，表示该Date对象
dateMe.getTimezoneOffset(); // -480（说明比正常时区慢480分钟，所以要加480分钟才对） | 返回协调世界时（UTC）相对于当前时区的时间差值，单位为分钟。
dateMe.toDateString(); // "Fri Jul 12 2019" | 以美式英语和人类易读的形式返回一个日期对象日期部分的字符串。
```

## 获取两个日期相差天数

```js
function getDaysDiffBetweenDates(dateInitial, dateFinal) {
  return (dateFinal - dateInitial) / (1000 * 3600 * 24);
}

getDaysDiffBetweenDates(new Date("2017-12-13"), new Date("2017-12-22")); // 9
```

## 时间戳 => 天-时-分-秒

```js
const formatDuration = ms => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  };
  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)
    .join(", ");
};

formatDuration(3161012); // 52 minutes, 41 seconds, 12 milliseconds
```
