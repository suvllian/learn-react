import _ from 'lodash';
import React from 'react';
import ToDoItem from './todo-item.jsx';

export default class ToDoList extends React.Component {
	render() {
		return (
			<table>
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		);
	}

	renderItems() {
		const props = _.omit(this.props, 'todos');
		return _.map(this.props.todos, (todo, index) => <ToDoItem key={index} {...todo} {...props} />);
	}
}