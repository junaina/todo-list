import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState([]);
  //persistence
  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }
  function handleAddTodos(newTodo) {
    // state syntax allows to repaint the dom by listening for changes
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  //if todoIndex is not equal to the index then its allowed to stay in the array todos
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []); //run on reload
  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
