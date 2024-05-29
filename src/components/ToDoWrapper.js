import React, { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { ToDo } from "./ToDo";
import { v4 as uuidv4 } from "uuid";
import { EditToDoForm } from "./EditToDoForm";
uuidv4();

export const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                name: todo.name,
                task: todo.task,
                completed: false,
                isEditing: false,
            },
        ]);
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          completed: !todo.completed,
                      }
                    : todo
            )
        );
    };

    const deleteToDo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const editToDo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          isEditing: !todo.isEditing,
                      }
                    : todo
            )
        );
    };

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          task,
                          isEditing: !todo.isEditing,
                      }
                    : todo
            )
        );
    };

    return (
        <div className="TodoWrapper">
            <h1>Задачи на выполнение</h1>
            {console.log(todos)}
            <ToDoForm addTodo={addTodo} />
            {todos.map((todo, index) =>
                todo.isEditing ? (
                    <EditToDoForm editTodo={editTask} task={todo}/>
                ) : (
                    <ToDo
                        name={todo.name}
                        task={todo}
                        key={index}
                        toggleComplete={toggleComplete}
                        deleteToDo={deleteToDo}
                        editToDo={editToDo}
                    />
                )
            )}
        </div>
    );
};
