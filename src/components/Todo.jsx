import axios from "axios";
import React from "react";
import { FiX } from "react-icons/fi";

const Todo = ({ todo }) => {
  const deleteHandler = () => {
    axios
      .delete(`http://localhost:5001/todos/${todo.id}`)
      .then((res) => console.log(res).catch((err) => console.log(err)));
  };

  const completeHandler = async () => {
    const json = JSON.stringify({ completed: !todo.id });

    const res = await axios.patch(
      `http://localhost:5001/todos/${todo.id}`,
      json
    );

    console.log(res);
  };

  return (
    <div className="flex justify-between items-center my-3 py-4 border-2 border-teal-500 w-96 rounded-lg drop-shadow-2xl">
      <div className="form-check flex">
        <input
          className="form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-teal-500 focus:outline-none transition duration-200 my-1 mx-3 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
          type="checkbox"
          value=""
          checked={todo.completed}
          onClick={completeHandler}
          readOnly
        />
        <p className={`${todo.completed ? "line-through text-slate-600" : ""}`}>
          {todo.todo}
        </p>
      </div>

      <button onClick={deleteHandler}>
        <FiX className="mr-4 text-xl" />
      </button>
    </div>
  );
};

export default Todo;
