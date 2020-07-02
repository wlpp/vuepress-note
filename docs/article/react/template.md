# React 模板语法

## 属性/文本绑定

```js
<div>{this.state.number}</div>
<div id={"id_" + this.state.number}></div>
```

## 表达式

```js
{ number + 1 }

{ ok ? 'YES' : 'NO' }

{ id = 0 ? 'YES' : 'NO' }

{ id===0 ? 'cl1' : id===1 ? 'cl2' : ''}

{ message.split('').reverse().join('') }

{ showValue() }

// style设置样式
<div style={{ fontSize: "30px" }}>行内绑定</div>

const styles = { fontSize: "35px", color: "#ff0000" };
<div style={styles}>赋值绑定</div>

<div style={{ fontSize: this.state.number === 0 ? "30px" : "40px" }}>判断赋值</div>
```

## 事件处理

```js
add(value) {
console.log(value);
}
reduce = () => {
// 此方法传不了值
console.log(1231231);
};
change(e) {
console.log(e);
}
<button onClick={this.add.bind(this, "11111")}>点击增加</button>
<button onClick={this.reduce}>点击减少</button>
<button onClick={(e)=>{this.change(e)}}>获取事件</button>
```
## 列表循环

```js
this.state = {
    data: []
}

<div className="goodList">
  {this.state.data &&
    this.state.data.map((item, index) => {
      return (
        <div key={index}>
          <div>{item.title}</div>
          <div>{item.price}</div>
        </div>
      );
    })}
</div>
```