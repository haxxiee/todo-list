import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />;
  });
};

export default TodoList;
