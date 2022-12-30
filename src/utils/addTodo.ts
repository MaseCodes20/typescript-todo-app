import { AddTodo, Todo } from "../types/todoTypes";

export function addTodo({ previousTodos, data }: AddTodo): Todo[] {
  return [...previousTodos, data];
}
