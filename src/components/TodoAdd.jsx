import React from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }) => {
	const { description, name, startDate, finishDate, descri, onInputChange, onResetForm,
	} = useForm({
		description: '',
		name: '',
		startDate: '',
		finishDate: '',
		descri: ''
	});

	const onFormSubmit = (e) => {
		e.preventDefault();

		if (description.length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			description,
			name,
			startDate,
			finishDate,
			descri,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};

	return (
		<>

			<link rel="stylesheet" href="./styles/style.css"></link>
			<form onSubmit={onFormSubmit}>

				<ul>
					<li>
						<h4>Task:</h4>
						<input
							type="text"
							className="input-add"
							name="description"
							value={description}
							onChange={onInputChange}
							placeholder="What it to do?"
						/>
					</li>
					<li>
						<h4>Name and Lastname:</h4>
						<input
							type="text"
							className="input-add"
							name="name"
							value={name}
							onChange={onInputChange}
							placeholder="Name"
						/>
					</li>
					<li>
						<h4>End date and start date:</h4>
						<input
							type="date"
							className="input-add"
							name="startDate"
							value={startDate}
							onChange={onInputChange}
							placeholder="Start date"
						/>

						<input
							type="date"
							className="input-add"
							name="finishDate"
							value={finishDate}
							onChange={onInputChange}
							placeholder="End date"
						/>

					</li>

					<li>
						<h4>Description:</h4>
						<input
							type="text"
							className="input-add"
							name="descri"
							value={descri}
							onChange={onInputChange}
							placeholder="Describe your task"
						/>
					</li>

					<li>
						<button className="btn-add" type="submit">
							Add
						</button>
					</li>
				</ul>
			</form>
		</>
	);
};
