# lesson1：设计一个React组件  
## 一、组件设计要素  
一个大型应用包含许多的功能，如果把所有的功能都放在一个组件中，那这个组件会及其臃肿，并且难以管理。这时候就需要将一个大型应用拆分成许多独立的组件，方便进行管理。这时候就会有一些问题，什么时候该拆分组件，组件的设计原则是什么？  

我理解的组件是指实现特定功能的独立的、可复用的代码。拆分组件最关键的就是确定组件的边界，只在有必要的时候去拆分组件，如果对于不应该拆分的组件也拆成几个小组件，那就会得不偿失了。 

### 高内聚 
> 高内聚指的是把逻辑紧密相关的内容放在一个组件中  

### 低耦合 
> 低耦合指的是不同组件之间的依赖关系要尽量弱化，每个组件尽量独立  

每个组件都应该是独立存在的，如果两个组件只是有少量的逻辑联系，而且功能差距比较大，就可以拆分成两个组件。  
如果两个组件逻辑联系太紧密，这两个组件就不应该被拆开，应该是一个独立的组件。否则两个组件就需要频繁的进行数据交互，得不偿失。

## 二、React组件的数据 
**props和state**  

React组件的数据来源分为props和state，props是组件对外的接口，是父组件传过来的数据，state是组件内部的数据。props和state改变都有可能导致组件重新渲染。  

### props
props是从外部传递给组件的数据，每个组件都是独立存在的模块，组件之外的一切都是外部世界，外部世界和组件都是通过props进行通信。  

父组件可以通过props传递任何一种Javascript支持的数据类型到子组件，函数也可以，当props的类型不是字符串时，在JSX中必须用花括号将props值包住，props是一个对象，传递的数据是props的属性，在子组件中可以通过访问props对象属性获取传递的数据。  

**父组件**  

``` jsx 
import React, { Component } from 'react' 
import ClickCounter from './../components/click-counter.jsx'

class App extends Component {
  render() {
	return (
      <div>
        <ClickCounter caption="First" initValue={10} />
        <ClickCounter caption="Second" initValue={0} />
        <ClickCounter caption="Third" initValue={5} />
      </div>
	)
  }
}
```  

**子组件**

``` jsx
constructor(props) {
	super(props);
	this.state = {
		count: props.ininValue || 0
	}
	this.onClickButton = this.onClickButton.bind(this)
}
```  

子组件接收父组件传递的数据，首先要通过构造函数调用`super(props)`方法，如果没有调用该方法，组件实例被构造之后，类的函数成员就无法公国`this.props`访问父组件传递的props。  

构造函数中还给一个成员函数绑定了当前的this执行环境，因为ES6方法创造的组件类并不会自动绑定this到当前实例类。如果没有手动绑定函数到当前this环境，函数体中如果想通过this获取当前组件实例就会失败。  

**propTypes检查**  

props是组件对外的接口，可以通过propTypes声明组件的规范： 
* 组件支持哪些props   
* 每个props应该是什么样的格式

在运行时和静态代码检查时，都可以根据propTypes判断外部是否传递正确的数据类型到组件中。通过propTypes可以检查防止不正确的prop使用方法，但propTypes只是一个辅助开发的功能，并不会改变组件的行为。  

propTypes能够帮助开发者在开发过程中发现问题，但是生产环境就不需要了，所以需要在生成生产环境代码时，有一种自动的方式将propTypes去掉，最终部署到生产环境中，可以使用`babel-react-optimize`这个npm包。


ClickCounter组件中的propTypes定义如下：
``` jsx
ClickCounter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number
}
```  

以上规则要求caption必须时string类型，initValue必须时number类型，而且组件中必须指定caption，而initValue没有也没关系。