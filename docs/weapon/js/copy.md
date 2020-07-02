# clipboard 移动端复制

```html
<button class="btn" data-clipboard-text="复制第一个">
  Copy to clipboard
</button>
<button class="btn" data-clipboard-text="复制第二个">
  Copy to clipboard2
</button>
<script src="https://cdn.bootcss.com/clipboard.js/2.0.4/clipboard.min.js"></script>
<script>
  var clipboard = new ClipboardJS(".btn");
  clipboard.on("success", function(e) {
    // 获取动作
    console.log("Action:", e.action);
    // 获取文本
    console.log("Text:", e.text);
    // 获取HTML
    console.log("Trigger:", e.trigger);
  });
  clipboard.on("error", function(e) {
    console.error("复制出错，请检查！");
  });
</script>
```
