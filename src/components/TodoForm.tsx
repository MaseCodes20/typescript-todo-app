import React, { FormEvent, useState } from "react";
import { Todo } from "../types/todoTypes";

type TodoFormProps = {
  onCreate: (data: Todo) => void;
};

function TodoForm({ onCreate }: TodoFormProps) {
  const [todo, setTodo] = useState("");

  const submitTodo = (e: FormEvent) => {
    e.preventDefault();

    let data = {
      id: crypto.randomUUID(),
      todo,
      isComplete: false,
    };

    onCreate(data);
  };

  return (
    <form onSubmit={submitTodo}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          onChange={(e) => setTodo(e.target.value)}
        />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}

export default TodoForm;
