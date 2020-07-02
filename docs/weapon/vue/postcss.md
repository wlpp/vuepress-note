# postcss-pxtorem 移动适配

1. 第一步安装

```js
// yarn
yarn postcss-pxtorem -S
```

2. 在根目录新建 postcss.config.js

```js
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 100, // 设计稿宽度
      unitPrecision: 5, // 小数位
      minPixelValue: 2, // 转换的最小单位
      propList: ["*"] // 需要做转化处理的属性：* 所有
    }
  }
};
```

3. 在 main.js 引入 rem.js 文件 和 base.css 文件

```js
//rem.js
(function() {
  const docEl = document.documentElement;
  const resizeEvt = "orientationchange" in window ? "orientationchange" : "resize";
  const recalc = function() {
    const clientWidth = docEl.clientWidth;
    if (!clientWidth) {
      return;
    }
    const htmlFontSize = 100 * (clientWidth / 750);
    docEl.style.fontSize = htmlFontSize + "px";
  };
  if (!document.addEventListener) {
    return;
  }
  window.addEventListener(resizeEvt, recalc, false);
  document.addEventListener("DOMContentLoaded", recalc, false);
})();
```

[base.css 文件](/weapon/css/base.html)

4. 在 APP.vue 设置默认 font-size 值

```css
#app {
  font-size: 32px;
}
```
