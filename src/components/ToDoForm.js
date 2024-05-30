import React, { useState } from "react";

export const ToDoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo({
            name: name || "Заметка",
            task: value || "Значение по умолчанию",
        });

		setValue("")
		setName("")
    };

    return (
        <form className="TodoFrom" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                value={name}
                placeholder="Имя"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                className="todo-input"
                value={value}
                placeholder="Описание задачи"
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="todo-btn">
                Добавить задачу
            </button>
        </form>
    );
};
