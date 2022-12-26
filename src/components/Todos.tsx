import { Todo } from "../types/todoTypes";
import Task from "./Task";

type TodosProps = {
  todos: Todo[];
  onUpdate: (id: string, data: Todo) => void;
};

function Todos({ todos, onUpdate }: TodosProps) {
  return (
    <div>
      {todos.map((todo) => (
        <Task key={todo.id} todo={todo} onUpdate={onUpdate} />
      ))}
    </div>
  );
}

export default Todos;
