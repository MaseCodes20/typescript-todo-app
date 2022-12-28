import { Todo } from "../types/todoTypes";

type TasksCompletedProps = {
  todos: Todo[];
};

function TasksCompleted({ todos }: TasksCompletedProps) {
  const completedTasks = todos.filter((todo) => todo.isComplete === true);

  return (
    <div className="mx-auto max-w-[350px] mb-3 text-center p-2 bg-gray-200 rounded-md">
      <h2 className="font-semibold">Tasks Completed</h2>
      <p>
        {completedTasks.length}/{todos.length}
      </p>
    </div>
  );
}

export default TasksCompleted;
