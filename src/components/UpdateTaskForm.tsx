import React, { FormEvent, useState } from "react";
import { Todo } from "../types/todoTypes";

type UptateTaskFormProps = {
  todo: Todo;
  onUpdate: (id: string, data: Todo) => void;
  setIsEditText: (arg: boolean) => void;
};

function UpdateTaskForm({
  todo,
  onUpdate,
  setIsEditText,
}: UptateTaskFormProps) {
  const [currentTask, setCurrentTask] = useState(todo.todo);

  const updateTask = (e: FormEvent) => {
    e.preventDefault();

    const data = { ...todo, todo: currentTask };

    onUpdate(todo.id, data);
    setIsEditText(false);
  };

  return (
    <form onSubmit={updateTask}>
      <input
        type="text"
        name="todo"
        id="tod"
        value={currentTask}
        onChange={(e) => setCurrentTask(e.target.value)}
      />

      <button type="submit" hidden>
        submit
      </button>
    </form>
  );
}

export default UpdateTaskForm;
