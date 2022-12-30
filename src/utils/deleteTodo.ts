import { Todo } from "../types/todoTypes";

export const removeTodo = (id: string, todos: Todo[]): Todo[] => {
  return todos.filter((todo) => todo.id !== id);
};
