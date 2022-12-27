import { AddTodo } from "../types/todoTypes";

export function addTodo({ previousTodos, data }: AddTodo) {
  return [...previousTodos, data];
}
