import React from 'react';

export default class ToDoItem extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = { isEdit: false };
	}

	renderTaskSection() {
		const { task, isDown } = this.props;

		const taskStyle = {
			color: isDown ? 'black' : 'red',
			cursor: 'pointer'
		};

		if (this.state.isEdit) {
			return (
				<td>
					<form onSubmit={this.onSaveClick.bind(this)}>
						<input type="text" defaultValue={task} ref="editInput" />
					</form>
				</td>
			);
		}

		return (
			<td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>
				{task}
			</td>
		);
	}

	renderActionSection() {
		if (this.state.isEdit) {
			return (
				<td>
					<button onClick={this.onCancleClick.bind(this)}>Cancel</button>
					<button onClick={this.onSaveClick.bind(this)}>Save</button>
				</td>
			);
		}

		return (
			<td>
				<button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
				<button onClick={this.onEditClick.bind(this)}>Edit</button>
			</td>
		)
	}

	render() {
		return (
			<tr>
				{this.renderTaskSection()}
				{this.renderActionSection()}
			</tr>
		)
	}

	onEditClick(){
		this.setState({ isEdit: true });
	}

	onCancleClick() {
		this.setState({ isEdit: false });
	}

	onSaveClick(event) {
		event.preventDefault();

		const oldTask = this.props.task;
		const newTask = this.refs.editInput.value;
		this.props.saveTask(oldTask, newTask);
		this.setState({ isEdit: false });
	}
}