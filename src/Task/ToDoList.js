import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import InputContainer from "./InputContainer";
import DisplayContainer from "./DisplayContainer";

const ToDoList = () => {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const writeTool = (e) => {
    setInputVal(e.target.value);
  };
  const addTodos = (e) => {
    e.preventDefault();
    if (inputVal.trim() !== "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  };

  const handleDelete = (todoIndex) => {
    setTodos((prevTodos) =>
      prevTodos.filter((_, Index) => {
        return Index !== todoIndex;
      })
    );
  };

  console.log(todos);
  return (
    <Wrapper>
      <h1>to-do List</h1>
      <InputContainer
        inputVal={inputVal}
        writeTool={writeTool}
        addTodos={addTodos}
      />
      <DisplayContainer todos={todos} handleDelete={handleDelete} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: peachpuff;
  min-width: 100vw;
  width: 100%;
  height: 100vh;
  gap: 2rem;
  h1 {
    color: red;
    text-transform: uppercase;
    text-align: center;
    margin: 0 auto;
  }
  form {
    background-color: #fff;
    padding: 1rem 2rem;
    width: max-content;
    height: auto;
    display: flex;
    gap: 2rem;
    border-radius: 10px;
    input {
      font-size: 1rem;
    }
    button {
      padding: 0 1rem;
      font-size: 2rem;
      background-color: grey;
      color: black;
      border: none;
      outline: none;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:active {
        background-color: green;
        color: white;
      }
    }
  }
  .display {
    width: max-content;
    height: auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    #list {
    }
    .actions {
      display: flex;
      gap: 1rem;
      #delete {
        padding: 0 1rem;
        font-size: 1.2rem;
        background-color: grey;
        color: black;
        border: none;
        outline: none;
        border-radius: 10px;
        cursor: pointer;
        &:active {
          background-color: red;
          color: white;
        }
      }
    }
  }
  .container {
    width: max-content;
    height: auto;
    padding: 1rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
  }
`;
export default ToDoList;
