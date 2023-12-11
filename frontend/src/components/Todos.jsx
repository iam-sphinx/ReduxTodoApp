import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice.js";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.text}
            <button className="ml-4" onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        );
      })}
    </>
  );
};

export default Todos;
