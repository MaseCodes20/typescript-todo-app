import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { Todo } from "./types/todoTypes";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onCreateTodo = (data: Todo) => {
    setTodos((prev) => [...prev, data]);
  };

  console.log(todos);

  return (
    <div className="App">
      <TodoForm onCreate={onCreateTodo} />
    </div>
  );
}

export default App;
