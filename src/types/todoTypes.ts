export type Todo = {
  id: string;
  name: string;
  description: string;
  isComplete: boolean;
};

export type AddTodo = {
  previousTodos: Todo[];
  data: Todo;
};

export type UpdatedTodos = {
  id: string;
  data: Todo;
  todos: Todo[];
};
