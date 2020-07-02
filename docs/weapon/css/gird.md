# Gird 网格布局

### 创建网格

```css
{
    display: grid; 块级网格
    display: inline-grid; 行内块网格
}

```

### 设置列

```css
 {
  /* 设置3列，每列空间占3分之一 */
  grid-template-columns: repeat(3, 1fr);

  /* 设置自适应列，可根据缩小屏幕自动排列空间占比 */
  grid-template-columns: repeat(auto-fit, 200px);

  /* 某一块的单元占3份 */
  grid-column: 1/4 (按网格线算);
}
```

### 设置行

```css
 {
  /* 设置3行，每行的高度为200px */
  grid-template-rows: repeat(3, 200px);

  /* 设置自适应行，没有限制行数，每行的高度为150px */
  grid-auto-rows: 150px;
}
```

### 设置边距

```css
 {
  /* 设置上下边距为10px,左右为15px */
  grid-gap: 10px 15px;
}
```

