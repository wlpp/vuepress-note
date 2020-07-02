# JS 解决多行溢出失效

```html
<style>
  * {
    margin: 0;
    padding: 0;
  }
  .text {
    width: 300px;
    height: 50px;
    line-height: 25px;
    border: 1px solid skyblue;
    overflow: hidden;
  }
</style>

<div class="text">
  <p>
    解决多行溢出解决多行溢出解决多行溢出解决多行解决多行溢出解决多行溢出解决多行溢出解决多行解决多行溢出解决多行溢出解决多行溢出解决多行解决多行溢出解决多行溢出解决多行溢出解决多行解决多行溢出解决多行溢出解决多行溢出解决多行解决多行溢出解决多行溢出解决多行溢出解决多行解决多行溢出解决多行溢出解决多行溢出解决多行解决多行溢出解决多行溢出解决多行溢出解决多行解决多行溢出解决多行溢出解决多行溢出解决多行解决多行溢出解决多行溢出解决多行溢出解决多行解决多行溢出解决多行溢出解决多行溢出解决多行解决多行溢出解决多行溢出解决多行溢出解决多行解决多行溢出解决多行溢出解决多行溢出解决多行解决多行溢出解决多行溢出解决多行溢出解决多行解决多行溢出解决多行溢出解决多行溢出解决多行解决多行溢出解决多行溢出解决多行溢出解决多行
  </p>
</div>
<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
<script>
  $(function() {
    $(".text").each(function(i) {
      var divH = $(this).height();
      // while循环判断
      while ($("p").outerHeight() > divH) {
        $("p").text(
          $("p")
            .text()
            .replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "...")
        );
      }
    });
  });
</script>
```
