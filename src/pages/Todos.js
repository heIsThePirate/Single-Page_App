import React, { Component } from 'react';
import Todo from '../components/Todo';
import  TodosStore from '../stores/TodosStore';
import * as TodosActions from '../actions/TodosActions';

class Todos extends Component {
	constructor(){
		super();
		this.state = {
			todos: TodosStore.getAll()
		};
		this.getTodos = this.getTodos.bind(this);
	}

	componentWillMount() {
		TodosStore.on('change', this.getTodos);
	}

	componentWillUnmount() {
		TodosStore.removeListener('change', this.getTodos);
	}

	getTodos() {
		this.setState({
				todos: TodosStore.getAll()
			});
	}

	reloadTodos() {
		TodosActions.reloadTodos();
	}

	render() {
		const { todos } = this.state;
		const TodoComponents = todos.map(todo => {
			return <Todo key={todo.id} {...todo} />;
		})
		return (
			<div className="container">
				<button onClick={this.reloadTodos.bind(this)}>Reload!</button>
				<h1>Todos</h1>
				<ul>{TodoComponents}</ul>
			</div>
			);
	}
}

export default Todos;