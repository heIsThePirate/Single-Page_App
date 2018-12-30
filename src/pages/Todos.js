import React, { Component } from 'react';
import Todo from '../components/Todo';
import TodosStore from '../stores/TodosStore';

class Todos extends Component {
	constructor(){
		super();
		this.state = {
			todos: TodosStore.getAll()
		};
	}

	componentWillMount() {
		TodosStore.on('change', () => {
			this.setState({
				todos: TodosStore.getAll()
			})
		});
	}

	render() {
		const { todos } = this.state;
		const TodoComponents = todos.map(todo => {
			return <Todo key={todo.id} {...todo} />;
		})
		return (
			<div className="container">
				<h1>Todos</h1>
				<ul>{TodoComponents}</ul>
			</div>
			);
	}
}

export default Todos;