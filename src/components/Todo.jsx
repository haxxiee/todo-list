import React from "react";
import { FiX } from "react-icons/fi";

const Todo = ({ todo, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((obj) =>
        obj.id === todo.id
          ? { id: obj.id, text: obj.text, complete: !obj.complete }
          : obj
      )
    );
  };

  return (
    <div className="flex justify-between items-center my-3 py-4 border-2 border-teal-500 w-96 rounded-lg drop-shadow-2xl">
      <div className="form-check flex">
        <input
          className="form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-teal-500 focus:outline-none transition duration-200 my-1 mx-3 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
          type="checkbox"
          value=""
          onClick={completeHandler}
        />
        <p className={`${todo.complete ? "line-through text-slate-600" : ""}`}>
          {todo.text}
        </p>
      </div>

      <button onClick={deleteHandler}>
        <FiX className="mr-4 text-xl" />
      </button>
    </div>
  );
};

export default Todo;
