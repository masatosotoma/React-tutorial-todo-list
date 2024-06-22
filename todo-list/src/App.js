import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(["Todo1", "Todo2"]);
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add tasks</button>
      <button>Delete Completed tasks</button>
      <div>Remaining tasks:0</div>
    </>
  );
}

export default App;
