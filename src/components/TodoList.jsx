import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({
	todos,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
	return (
		<ul>
			<table class="table">
				<thead>
					<tr>
						<th scope="col-8">Task</th>
						<th scope="col">Name and Lastname</th>
						<th scope="col">End date and start date</th>
						<th scope="col">Description</th>
					</tr>
				</thead>
			</table>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
			))}
		</ul>
	);
};
