# 图片操作

## 点击图片放大

```html
  <style>
      ul,
      li {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      ul li {
        float: left;
        width: 200px;
        height: 200px;
      }
      img {
        width: 100%;
        height: 100%;
      }
      .mark {
        width: 600px;
        height: 400px;
        background: #000;
        opacity: 0.5;
      }
      /*修改pic的宽高,可调整图片大小*/
      .pic {
        width: 30%;
        height: 50%;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      span {
        position: absolute;
        width: 20px;
        height: 20px;
        left: 450px;
        top: 50px;
        background: #fff;
        text-align: center;
      }
      #mark {
        display: none;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
      }

    </style>
  </head>
  <body>
    <div id="box">
      <ul>
        <li><img src="./red-gou.png" alt="" /></li>
        <li><img src="./微信图片_20200106095206.jpg" alt="" /></li>
      </ul>
      <div id="mark"></div>
    </div>
    <script>
       var lis = document.querySelectorAll("li");
      var box = document.querySelector("#box");
      var mark = document.querySelector("#mark");
      for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener("click", function() {
          mark.style.display = "block";
          var newImg = document.createElement("img");
          newImg.className = "pic";
          newImg.src = this.getElementsByTagName("img")[0].src;
          box.appendChild(newImg);
        });
      }
      mark.addEventListener("click", function() {
        mark.style.display = "none";
        var pic = document.querySelector('.pic')
        pic.remove()
      });
    </script>
```
