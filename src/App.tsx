import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { Todo } from "./types/todoTypes";
import { updatedTodos } from "./utils/updatedTodos";
import { addTodo } from "./utils/addTodo";
import TasksCompleted from "./components/TasksCompleted";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onCreateTodo = (data: Todo) => {
    setTodos((previousTodos) => addTodo({ previousTodos, data }));
  };

  const updateTodo = (id: string, data: Todo) => {
    setTodos(updatedTodos({ id, data, todos }));
  };

  const deleteTodo = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full py-5">
      <h1 className="text-3xl font-bold text-center">Todos</h1>

      <TodoForm onCreate={onCreateTodo} />

      <TasksCompleted todos={todos} />

      <Todos todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
