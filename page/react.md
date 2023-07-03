## class hook 优缺点

class 组件之间复用状态逻辑很难，react 没有提供可复用性行为“附加”到组件的途径*例如，把组件连接到store*。 

有provider，consumers，高阶组件，runder props等其他抽象层组成会形成“嵌套地狱”。

class 不能很好的压缩，并且会使热重载出现不稳定的情况

**Hook 使你在无需修改组件结构的情况下复用状态逻辑** 

#### 什么是 Hook?

Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。

###  副作用

你之前可能已经在 React 组件中执行过数据获取、订阅或者手动修改过 DOM。我们统一把这些操作称为“副作用”，或者简称为“作用”。

### useEffect

`useEffect` 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 具有相同的用途，只不过被合并成了一个 API