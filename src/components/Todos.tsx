import { Todo } from "../types/todoTypes";
import Task from "./Task";

type TodosProps = {
  todos: Todo[];
  onUpdate: (id: string, data: Todo) => void;
  onDelete: (id: string) => void;
};

function Todos({ todos, onUpdate, onDelete }: TodosProps) {
  return (
    <>
      {todos.map((todo) => (
        <Task
          key={todo.id}
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}

export default Todos;
