import React from "react";

const InputContainer = ({ inputVal, writeTool, addTodos }) => {
  return (
    <div>
      <form onSubmit={addTodos}>
        <input
          type="text"
          value={inputVal}
          onChange={writeTool}
          placeholder="Enter a to-do"
          required
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default InputContainer;
