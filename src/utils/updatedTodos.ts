import { Todo, UpdatedTodos } from "../types/todoTypes";

export function updatedTodos({ id, data, todos }: UpdatedTodos): Todo[] {
  return todos.map((todo) => {
    if (todo.id === id) {
      return data;
    } else {
      return todo;
    }
  });
}
