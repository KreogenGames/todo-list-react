import React, { useState } from "react";

export const EditToDoForm = ({ editTodo, task}) => {
    const [value, setValue] = useState(task.task);
    const [name, setName] = useState(task.name);

    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue("");
    };

    return (
        <form className="TodoFrom" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input-edit for-edit-name"
                value={name}
                placeholder="Имя"
                disabled
            />
            <input
                type="text"
                className="todo-input-edit"
                value={value}
                placeholder="Редактировать задачу"
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="todo-btn">
                Редактировать задачу
            </button>
        </form>
    );
};
