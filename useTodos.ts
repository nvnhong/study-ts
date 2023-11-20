import React, { useState } from "react";
import { Todo } from "../types";

export const useTodos = () => {
  const [todo, setTodo] = useState<Todo | undefined>(undefined);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return [todo, handleInputChange] as const;
};
