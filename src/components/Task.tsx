import { Todo } from "../types/todoTypes";
import CompleteButton from "./CompleteButton";
import DeleteButton from "./DeleteButton";

type TaskProps = {
  todo: Todo;
  onUpdate: (id: string, data: Todo) => void;
  onDelete: (id: string) => void;
};

function Task({ todo, onUpdate, onDelete }: TaskProps) {
  const toggleComplete = () => {
    const data = { ...todo };
    if (todo.isComplete === false) {
      data.isComplete = true;
    } else if (todo.isComplete === true) {
      data.isComplete = false;
    }

    onUpdate(todo.id, data);
  };

  const deleteTodo = () => {
    onDelete(todo.id);
  };

  const { todo: task, isComplete } = todo;

  return (
    <div>
      <h1>{task}</h1>
      <CompleteButton toggle={toggleComplete} isComplete={isComplete} />

      <DeleteButton deleteTodo={deleteTodo} />
    </div>
  );
}

export default Task;
