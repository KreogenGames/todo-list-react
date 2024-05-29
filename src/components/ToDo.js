import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const ToDo = ({task, toggleComplete, deleteToDo, editToDo }) => {
    return (
        <div className="Todo">
            <p
                className={`${task.completed ? "completed" : "incompleted"}`}
                onClick={() => toggleComplete(task.id)}
            >
                {task.name}: {task.task}
            </p>
            <div>
                <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => editToDo(task.id)}
                />
                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteToDo(task.id)}
                />
            </div>
        </div>
    );
};
