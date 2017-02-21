import _ from 'lodash';
import React from 'react';
import CreateToDo from './create-todo.jsx';
import ToDoList from './todo-list.jsx';

const todos = JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [{ task: "Learn React", isDown: false}];

const STORAGE_KEY ='REACT-TO-DO';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { todos };
	}

	render() {
		return (
			<div className="container">
				<h1> React ToDo List App </h1>
				<CreateToDo todos={ this.state.todos } createTask={this.createTask.bind(this)} />
				<ToDoList 
					todos={this.state.todos} 
					toggleTask={this.toggleTask.bind(this)} 
					saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)} 
                />
			</div>
		);
	}

	createTask(task) {
		this.state.todos.push({
			task, isDown: false
		});
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.todos));
		this.setState({ todos: this.state.todos });
	}

	toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isDown = !foundTodo.isDown;
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.todos));
        this.setState({ todos: this.state.todos });
    }


    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.todos));
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.todos));
        this.setState({ todos: this.state.todos });
    }
	
}