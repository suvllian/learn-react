import _ from 'lodash'
import React from 'react'
import ToDoItem from './todo-item.jsx'

class ToDoList extends React.Component {
	renderItems() {
		const props = _.omit(this.props, 'todos')

		return _.map(this.props.todos, (todo, index) => <ToDoItem key={index} {...todo} {...props} />)
	}

	render() {
		return (
			<table>
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		)
	}
}

export default ToDoList