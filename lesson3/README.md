# React组件的性能优化

## 一、单个react组件的性能优化  

React在数据发生更新时，会更新DOM结构，但是不是抛弃原来所有的DOM直接进行替换，而是利用虚拟DOM进行计算，只更新需要更新的部分。  

虽然虚拟DOM将需要更新的DOM量变为最小，但是每次计算和比较虚拟DOM也是一个复杂的过程。如果在虚拟DOM渲染之前能够判断数据没有发生变化，直接不进行渲染，那样效率更高。

React生命周期分为三大部分：**装载过程、更新过程、卸载过程**。    

装载过程和卸载过程中的所有生命周期都是必须的，没有什么可以优化的环节。   只有数据更新过程才是需要关注的优化点。

`shouldComponentUpdate`是React生命周期种很重要的一个函数，决定了组件应不应该重新渲染，React中`shouldComponentUpdate`默认返回`true`。  
如果`shouldComponentUpdate`函数返回`false`，组件不会进行更新。  
可以在每个子组件种定制`shouldComponentUpdate`函数判断组件是否需要更新，父组件在`state`发生变化时，触发`render`函数，子组件都会触发更新，这个时候如果子组件的`props`没有发生改变，这个过程就是浪费的渲染的时间，可以在`shouldComponentUpdate`函数中进行判断。  


``` jsx
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.text !== this.props.text
  }
```

只有在`props`发生变化时才会触发组件继续执行`render`，否则停止继续执行生命周期的其他函数。

### 1、React-Redux的ShouldComponentUpdate实现
相对月React的ShouldComponentUpdate实现，React-Redux中ShouldComponentUpdate的实现已经优化了很多。虽然在对比nextProps和prevProps时是进行‘浅层比较’，即使用`===`进行比较。  
如果props是简单数据类型，只要值相同，‘浅层比较’就会认为二者相同，如果props是复杂对象，则比较两个props是不是同一个对象的引用。

**Basic usage：**
``` jsx
<Foo style={{ color: 'red' }} />
```
上面的示例中，即使style没有发生变化，但是组件会认为每次渲染props都发生了变化，因为每次都会产生一个新的对象。

那么问题来了：**为什么采用‘浅层比较’，而不进行‘深层比较’呢？**

因为一个对象有多少层无法预料，如果递归进行深层比较，性能消耗可能比直接render开销还大，所以这也是一个明智的决定。

要想react-redux认为前后的对象类型prop相同，prop必须指向一个对象。上述代码改正如下：
``` jsx
const style = { color: 'red' }
<Foo style={style} />
```

同样的，在传递函数给子组件时，不要每次都传递新的函数给子组件。

**bad:**
``` jsx
<Foo onToggle={() => onToggle(id)} />
```

**good:**
``` jsx
<Foo onToggle={onToggle(id)} />
```

保证参数中的函数永远指向一个函数对象。

## 二、多个React组件的性能优化
React界面第一次渲染完成后，用户可以通过一些操作触发界面的更新。这时，React通过render方法获取一个新的树形结构Virtual DOM，React在更新阶段很巧妙地对比原有的Virtual DOM和新生成的Virtual DOM，找出两者的不同之处，根据不同来修改DOM树，这样只需做最小的必要的改动。这个过程称为Reconciliation（调和）。