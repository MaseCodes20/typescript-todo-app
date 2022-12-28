import { FormEvent, useState } from "react";
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
  const [currentTask, setCurrentTask] = useState(todo.name);
  const [currentTaskDesc, setCurrentTaskDesc] = useState(todo.description);

  const updateTask = (e: FormEvent) => {
    e.preventDefault();

    const data = { ...todo, name: currentTask, description: currentTaskDesc };

    onUpdate(todo.id, data);
    setIsEditText(false);
  };

  return (
    <form onSubmit={updateTask}>
      <input
        type="name"
        name="name"
        id="name"
        value={currentTask}
        onChange={(e) => setCurrentTask(e.target.value)}
        className="mb-1"
      />

      <input
        type="description"
        name="description"
        id="description"
        value={currentTaskDesc}
        onChange={(e) => setCurrentTaskDesc(e.target.value)}
      />

      <button type="submit" hidden>
        submit
      </button>
    </form>
  );
}

export default UpdateTaskForm;
