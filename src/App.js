import React from "react";
import Parent from "./components/Parent";
import Seller from "./components/Seller";
import Data from "./components/Data";
import HandleEvent from "./components/HandleEvent";
import { Routes, Route } from "react-router-dom";
import ToDoList from "./Task/ToDoList";
import Home from "./Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/parent" element={<Parent />} />
      <Route path="/seller" element={<Seller />} />
      <Route path="/data" element={<Data />} />
      <Route path="/handleevent" element={<HandleEvent />} />
      <Route path="/todolist" element={<ToDoList />} />
    </Routes>
  );
};

export default App;
