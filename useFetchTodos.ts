import axios from "axios";
import { useEffect, useState } from "react";
import { Todo } from "../../types";

export const useFetchTodos = () => {
  const [todos, setTodos] = useState<Todo[] | undefined>(undefined);

  useEffect(() => {
    const fetchTodos = () => {
      return axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
    };

    fetchTodos().then((res) => {
      setTodos(res.data);
    });
  }, []);

  // todos를 리턴한다.
  // 주의할 점은 배열이 아니라 튜플이므로, return [todos]가 아니라 return [todos] as const;로 해야 한다.

  return [todos] as const;
};

export default useFetchTodos;
