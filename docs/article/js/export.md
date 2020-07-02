# 模块化扩展

## export default 和 export

::: tip 区别

- `export default` 向外暴露的成员,可以使用任意的变量来接收
- 在一个模块中,`export default`只允许向外暴露 1 次
- 使用 `export` 向外暴露的成员,只能使用{}的形式来接收,这种形式,叫做[按需导出]
- `export` 可以向外暴露多个成员,同时,如果某些成员,我们在 import 的时候,不需要,则可以不在{}中定义
- 使用 `export` 导出的成员，如果就想换个名称来接收,可以使用 as 来起别名
- 在一个模块中，可以同时使用 `export default` 和 `export` 向外暴露成员
  :::

```js
// 模块
export title = '标题'
export msg = '哈哈'
const arr={
     a:'1',
     b：'2'
 }
export default arr

/* export default {
   这个暴露是错误的所以当前注释 一个js文件中只能暴露一次
    address:'北京'
 }
 */
// 导入模块
import arr, {Meg as msg} from  '/xxx.js'
import {title} from  '/xxx.js'
```
