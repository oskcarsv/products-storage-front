import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
  const {
    updateDescription,
    task,
    startD,
    finishD,
    des,
    onInputChange,
  } = useForm({
    updateDescription: todo.description,
    task: todo.name,
    startD: todo.startDate,
    finishD: todo.finishDate,
    des: todo.descri
  });

  const [disabled, setDisabled] = useState(true);
  const focusInputRef = useRef();

  const onSubmitUpdate = (e) => {
    e.preventDefault();

    const id = todo.id;
    const description = updateDescription;
    const name = task;
	  const startDate = startD;
    const finishDate = finishD;
    const descri = des;
    const newTodo = {
      id: id,
      description: description,
      name: name,
      startDate: startDate,
      finishDate: finishDate,
      descri: descri,
      done: todo.done,
    };

    handleUpdateTodo(newTodo);

    setDisabled(!disabled);

    focusInputRef.current.focus();
  };

  return (
    <form onSubmit={onSubmitUpdate}>
      <input
        type="text"
        className={`input-update ${
          todo.done ? 'text-decoration-dashed' : ''
        }`}
        name="updateDescription"
        value={updateDescription}
        onChange={onInputChange}
        placeholder="What it to do?"
        readOnly={disabled}
        ref={focusInputRef}
      />

      <input
        type="text"
        className={`input-update ${
          todo.done ? 'text-decoration-dashed' : ''
        }`}
        name="task"
        value={task}
        onChange={onInputChange}
        placeholder="Name of the person"
        readOnly={disabled}
        ref={focusInputRef}
      />

      <input
        type="date"
        className={`input-update ${
          todo.done ? 'text-decoration-dashed' : ''
        }`}
        name="startD"
        value={startD}
        onChange={onInputChange}
        placeholder="Start date"
        readOnly={disabled}
        ref={focusInputRef}
      />

      <input
        type="date"
        className={`input-update ${
          todo.done ? 'text-decoration-dashed' : ''
        }`}
        name="finishD"
        value={finishD}
        onChange={onInputChange}
        placeholder="End date"
        readOnly={disabled}
        ref={focusInputRef}
      />

      <input
        type="text"
        className={`input-update ${
          todo.done ? 'text-decoration-dashed' : ''
        }`}
        name="des"
        value={des}
        onChange={onInputChange}
        placeholder="Describe your task"
        readOnly={disabled}
        ref={focusInputRef}
      />

      <button className="btn-edit" type="submit">
        <FaEdit />
      </button>
    </form>
  );
};
