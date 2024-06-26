import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1", completed: false },
  ]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //add tasks
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>Add tasks</button>
      <button>Delete Completed tasks</button>
      <div>Remaining tasks:0</div>
    </>
  );
}

export default App;
