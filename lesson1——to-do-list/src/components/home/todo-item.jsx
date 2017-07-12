import React from 'react'

class ToDoItem extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = { isEdit: false }
		this.onSaveClick = this.onSaveClick.bind(this)
		this.onEditClick = this.onEditClick.bind(this)
		this.onCancleClick = this.onCancleClick.bind(this)
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

	renderTaskSection() {
		const { task, isDown } = this.props;
		const { isEdit } = this.state

		const taskStyle = {
			color: isDown ? 'black' : 'red',
			cursor: 'pointer'
		};

		if (isEdit) {
			return (
				<td>
					<form onSubmit={this.onSaveClick}>
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
    const { isEdit } = this.state
    const { deleteTask, task } = this.props

		if (isEdit) {
			return (
				<td>
					<button onClick={this.onCancleClick}>Cancel</button>
					<button onClick={this.onSaveClick}>Save</button>
				</td>
			);
		}

		return (
			<td>
				<button onClick={deleteTask.bind(this, task)}>Delete</button>
				<button onClick={this.onEditClick}>Edit</button>
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
}

export default ToDoItem