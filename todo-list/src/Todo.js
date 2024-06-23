import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checkd={todo.completed} readOnly />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
