# React是什么？
React是Facebook的2013年推出的开源项目，是一个前端MVC框架，准确来说，React并不是一个完整的MVC框架，它更专注于VIEW（视图）层，需要配合社区中的一些库，如React-router、redux等等才算是一个完整的MVC架构。

# React的优点
在我们以前的Web开发中，需要频繁的对DOM进行操作，而DOM操作往往是页面性能的一个瓶颈。  
React因此引入了虚拟DOM机制。虚拟DOM是一个真实DOM的一个快速的、仅存在于内存的映射，它是抽象的。  

## 虚拟DOM的工作方式：  
1、先创建一个虚拟DOM树，它是真实DOM树的映射。  
2、只要数据模型发生变化，虚拟DOM就会将UI重新绘成新的虚拟DOM。  
3、然后对比两个虚拟DOM树之间的区别，找出在真实DOM树中需要修改的地方。  
4、最后在真实的DOM树中更新需要更新的部分。  

## 组件化 
React可以方便的书写UI组件，可以对可重用的组件进行封装复用，antd就是一个很好的React UI组件库。

# 开始学习React
## 基础 
从示例代码中可以看出，React完全是采用ES6语法，所以具备ES6语法的知识是必须的。

## JSX语法 
React中采用jsx语法，将Html代码直接写在Js中。  
有一些基本的语法规则：  
```
1、定义标签时，只允许被一个标签包裹。  
2、标签一定要闭合。  
3、class属性改为"className"。  
4、for属性改为"htmlFor"。  
5、表达式使用{}包起来。
```

## 组件属性 
父组件可以通过props传递数据给子组件，子组件可以通过this.props来获取父组件传递的数据，如果父组件传递的数据改变，都会导致子组件重新渲染  

## 组件状态 
每个组件都有自己内部的状态state，state是一个对象，可以进行初始化，一些事件的触发导致state发生改变，会导致组件重新渲染。state只能通过this.setState的方式进行改变。  

## 事件 
既然是UI层，就少不了事件处理。React中的事件处理是通过合成事件的实例传递，是浏览器原生事件的封装，和浏览器原生事件一样具有stopPropagation、preventDefault等接口，且具有浏览器兼容性。事件的写法统一采用驼峰命名。 
鼠标事件：onClick、onDoubleClick、onMouseLeave等。

## 生命周期  
如果以前没有接触过其他框架，或者没有写过安卓等等，对这个概念应该会比较陌生。  
我理解生命周期就是一个组件在各个状态的钩子，你可以在生命周期函数中进行各种处理。  
```
React的生命周期如下：  
1、componentWillMount()：组件即将挂载至真实DOM  
2、componentDidMount()：组件已经挂载  
3、componentWillUpdate()：组件即将更新  
4、componentDidUpdate()：组件更新完成  
5、componentWillUnmount()：组件即将卸载  
此外，还有两个特殊状态的处理函数。  
1、componentWillReceiveProps()：组件接收到新的参数  
2、shouldComponentUpdate()：组件判断是否重新渲染时调用  
```
