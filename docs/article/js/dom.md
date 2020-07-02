# DOM 扩展

## 获取 DOM 节点

::: tip

- 通过 ID 获取：`document.getElementById()`
- 标签名：`document.getElementsByTagName()`
- 类名：`document.getElementsByClassName()`
- 通过选择器获取一个元素：`document.querySelector()`
- 通过选择器获取一组元素： `document.querySelectorAll()`
- 获取 body 的方法：`document.body`
- 通过 name 属性查找元素节点：`document.getElementsByName(name)`
- 获取 html 的方法：`document.documentElement`
  :::

## DOM 节点接口

::: tip

- 返回当前元素的父节点：`dom元素.parentNode`
- 子节点们：`dom元素.childNodes`
- 第一个子节点：`dom元素.firstChild`
- 最后一个子节点：`dom元素.lastChild`
- 前一个兄弟节点：`dom元素.previousSibling`
- 后一个兄弟节点：`dom元素.nextSibling`
- 是否有子节点：`dom元素.hasChildNodes()`
  :::

## DOM 节点的属性和方法

::: tip

- 修改替换 html：`dom元素.innerHtml='内容'`
- 修改替换文本：`dom元素.innerText='内容'`
- 获取元素所有属性集合：`dom元素.attributes`
- 获取属性值：`dom元素.getAttribute("属性名")`
- 设置属性值：`dom元素.setAttribute("属性名","属性值")`
- 删除属性值：`dom元素.removeAttribute("属性名")`
  :::

## 操作 DOM 节点

### 增

::: tip

- 创建元素节点：`document.createElement('div')`
- 创建文本节点：`document.createTextNode()`
- 创建注释节点：`dom元素.attributes`
- 创建文档碎片节点：`document.creaetComment()`
  :::

### 插

::: tip

- 在元素节点的子元素最后插入子元素：`父元素.appendChild(oLi)`
- 在元素节点中选择插入到某个子元素前面：`父元素.insertBefore(aLi,bLi)（将bLi插入到aLi前面）`
  :::

### 删

::: tip

- 删除 DOM 元素（自己）：`dom元素.remove()`
- 删除子元素：`父元素.insertBefore(aLi,bLi)（将bLi插入到aLi前面）`
  :::

### 改
::: tip

- 替换子元素：`父元素.replaceChild(aLi,bLi)（将bLi替换成aLi）`
  :::

### 复制
::: tip

- 复制元素，返回复制的节点：`dom节点.cloneNode()`
  :::

## DOM节点赋值
::: tip

- dom元素.style.width = ...
- dom元素.style.backgroundColor = ...
- dom元素.className = ...
- ......
  :::