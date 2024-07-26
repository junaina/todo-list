import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  return (
    <header>
      {/* onChange listens to changes to the input field aka the target */}
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter Todo..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue); //the new todo being recieved in the handleAddTodos function
        }}
      >
        Add
      </button>
    </header>
  );
}
