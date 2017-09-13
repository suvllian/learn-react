# React组件的性能优化

## 一、单个react组件的性能优化  

React在数据发生更新时，会更新DOM结构，但是不是抛弃原来所有的DOM直接进行替换，而是利用虚拟DOM进行计算，只更新需要更新的部分。  

虽然虚拟DOM将需要更新的DOM量变为最小，但是每次计算和比较虚拟DOM也是一个复杂的过程。如果在虚拟DOM渲染之前能够判断数据没有发生变化，直接不进行渲染，那样效率更高。

React生命周期分为三大部分：装载过程、更新过程、卸载过程。    
装载过程和卸载过程种的所有生命周期都是必须的，没有什么可以优化的环节。   
只有数据更新过程才是需要关注的优化点。

shouldComponentUpdate是React生命周期种很重要的一个函数，决定了组件应不应该重新渲染。可以在shouldComponentUpdate种返回false停止组件的更新过程。可以在每个子组件种定制shouldCompoentUpdate函数判断组件是否需要更新，父组件在state发生变化时，触发render函数，子组件都会触发更新，这个时候如果子组件的props没有发生改变，这个过程就是浪费的渲染的时间，可以在shouldComponentUpdate函数种进行判断。  


``` jsx
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.text !== this.props.text
  }
```

只有在props发生变化时才会触发组件继续执行render，否则停止继续执行生命周期的其他函数。