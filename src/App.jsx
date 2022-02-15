import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="flex justify-center content-center mt-10 text-3xl font-bold">
        My Todo List
      </h1>
      <TodoForm
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />

      {/* <Todo /> */}
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
