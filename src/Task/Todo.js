import React from "react";

const Todo = ({ todo, index, handleDelete }) => {
  return (
    <div className="display">
      <p className="list">{todo}</p>
      <div className="actions">
        <input type="checkbox" />
        <button className="delete" onClick={() => handleDelete(index)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
