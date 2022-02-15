import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Todo = ({ todo }) => {
  return (
    <div className="flex justify-between items-center my-3 py-4 border-2 border-teal-500 w-96 rounded-lg drop-shadow-lg">
      <div className="form-check flex">
        <input
          className="form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-teal-500 checked:bg-teal-500 focus:outline-none transition duration-200 my-1 mx-3 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
          type="checkbox"
          value=""
          id="flexCheckDefault3"
        />
        <p>{todo.text}</p>
      </div>

      <FaTrashAlt className="mr-4" />
    </div>
  );
};

export default Todo;
