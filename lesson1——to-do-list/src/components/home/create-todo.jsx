import React from 'react';

class CreateToDo extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			error: null
		}
		this.handleCreate = this.handleCreate.bind(this)
	}

	handleCreate(event) {
		event.preventDefault();

		const taskValue = this.refs.createInput.value;
		const validateInput = this.validateInput(taskValue);

		if (validateInput) {
			this.setState({ error: validateInput });
			return;
		}

		this.setState({ error: null });
		this.props.createTask(taskValue);
		this.refs.createInput.value = '';
	}

	validateInput(task) {
		if (!task) {
			return 'Please enter a task';
		} else if (_.find(this.props.todo, todo => todo.task === task)) {
			return 'Task already exists';
		} else {
			return null;
		}
	}

	render() {
    const { error } = this.state

		return (
			<form onSubmit={this.handleCreate}>
				<input type="text" placeholder="What do I need to do?" ref="createInput" />
				<button>Create</button>
				{
          error && <div style={{ color: 'red' }}> {error} </div>
				}
			</form>
		);
	}
}

export default CreateToDo