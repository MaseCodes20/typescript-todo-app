import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { Todo } from "./types/todoTypes";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onCreateTodo = (data: Todo) => {
    setTodos((prev) => [...prev, data]);
  };

  const updateTodo = (id: string, data: Todo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return data;
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="">
      <TodoForm onCreate={onCreateTodo} />

      <Todos todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
