import { useState } from "react";
import { Todo } from "../types/todoTypes";
import CompleteButton from "./CompleteButton";
import DeleteButton from "./DeleteButton";
import UpdateTaskForm from "./UpdateTaskForm";

type TaskProps = {
  todo: Todo;
  onUpdate: (id: string, data: Todo) => void;
  onDelete: (id: string) => void;
};

function Task({ todo, onUpdate, onDelete }: TaskProps) {
  const [isEditText, setIsEditText] = useState(false);

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

  const { name, description, isComplete } = todo;

  return (
    <div className="flex items-center max-w-[350px] p-2 bg-gray-200 m-3 rounded-md">
      <div className="flex-1">
        {isEditText ? (
          <UpdateTaskForm
            todo={todo}
            onUpdate={onUpdate}
            setIsEditText={setIsEditText}
          />
        ) : (
          <button
            onClick={() => setIsEditText(true)}
            disabled={isComplete}
            className="text-left"
          >
            <h1 className={`${isComplete && "line-through text-gray-400"}`}>
              {name}
            </h1>
            <p className="text-xs truncate">{description}</p>
          </button>
        )}
      </div>

      <div className="flex justify-between items-center">
        <CompleteButton toggle={toggleComplete} isComplete={isComplete} />

        <DeleteButton deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default Task;
