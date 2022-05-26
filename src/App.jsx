import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  async function getAllTodos() {
    const res = await axios.get("http://localhost:5001/todos");
    setTodos(res.data);
  }

  useEffect(() => {
    getAllTodos();
  }, [todos]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="flex justify-center content-center mt-10 text-3xl font-bold text-slate-800">
        My Todo List
      </h1>
      <TodoForm
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
