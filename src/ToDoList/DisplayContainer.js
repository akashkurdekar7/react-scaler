import React from "react";
import Todo from "./Todo";

const DisplayContainer = ({ todos, handleDelete }) => {
  return (
    <div className="container">
      {todos.map((todo, index) => (
        <Todo
          key={index} 
          todo={todo}
          index={index}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default DisplayContainer;
