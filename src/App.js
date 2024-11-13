import React from "react";
import Parent from "./components/Parent";
import Seller from "./components/Seller";
import Data from "./components/Data";
import HandleEvent from "./components/HandleEvent";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MovieHome from "./Movie/MovieHome";
import ToDoList from "./ToDoList/ToDoList";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/data" element={<Data />} />
        <Route path="/handleevent" element={<HandleEvent />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/movie/*" element={<MovieHome />} />
      </Routes>
    </>
  );
};

export default App;
