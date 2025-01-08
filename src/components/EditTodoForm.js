import React, { useEffect, useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Update Task"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button type="submit" className="todo-btn">
          Update Task
        </button>
      </form>
    </div>
  );
};
