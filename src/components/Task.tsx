import { Todo } from "../types/todoTypes";
import CompleteButton from "./CompleteButton";

type TaskProps = {
  todo: Todo;
  onUpdate: (id: string, data: Todo) => void;
};

function Task({ todo, onUpdate }: TaskProps) {
  const toggleComplete = () => {
    const data = { ...todo };
    if (todo.isComplete === false) {
      data.isComplete = true;
    } else if (todo.isComplete === true) {
      data.isComplete = false;
    }

    onUpdate(todo.id, data);
  };

  const { todo: task, isComplete } = todo;

  return (
    <div>
      <h1>{task}</h1>
      <CompleteButton toggle={toggleComplete} isComplete={isComplete} />
    </div>
  );
}

export default Task;
