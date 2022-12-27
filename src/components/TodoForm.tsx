import React, { FormEvent, useState } from "react";
import { Todo } from "../types/todoTypes";

type TodoFormProps = {
  onCreate: (data: Todo) => void;
};

function TodoForm({ onCreate }: TodoFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const submitTodo = (e: FormEvent) => {
    e.preventDefault();

    let data = {
      id: crypto.randomUUID(),
      name,
      description,
      isComplete: false,
    };

    onCreate(data);
  };

  return (
    <form onSubmit={submitTodo} className="my-5 max-w-[300px]">
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          className="border-[1px] rounded-md mr-2 border-gray-500 hover:border-black focus:ring-0 focus:outline-none focus:border-b focus:border-black"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="description"> Description</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          className="border-[1px] rounded-md mr-2 border-gray-500 hover:border-black focus:ring-0 focus:outline-none focus:border-b focus:border-black"
        />
      </div>

      <div className="w-full flex justify-end p-2">
        <input
          type="submit"
          value="submit"
          className="p-2 bg-yellow-400 rounded-md"
        />
      </div>
    </form>
  );
}

export default TodoForm;
