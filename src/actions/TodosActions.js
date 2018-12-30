import dispatcher from '../dispatcher';

export function createTodo(text) {
	dispatcher.dispatch({
		type: "CREATE_TODO",
		text,
	});
}

export function deleteTodo(id) {
	dispatcher.dispatch({
		type: "DELETE_TODO",
		id,
	});
}

export function reloadTodos() {
	dispatcher.dispatch({type: "FETCH_TODOS"});
	setTimeout(() => {
		dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
				{
					id: 156464613,
					text: "Go Shopping Again",
					complete: false
				},
				{
					id: 235894679,
					text: "Play FIFA",
					complete: false
				},
			]});
	}, 1000);
}