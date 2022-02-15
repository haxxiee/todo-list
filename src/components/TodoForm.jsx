import React from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ inputText, setInputText, todos, setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputText === "") return;

    const newTodo = { id: uuidv4(), text: inputText, complete: false };

    setTodos([newTodo, ...todos]);
    setInputText("");
  };

  return (
    <form className="flex justify-center content-center my-5">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Add Todo"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
