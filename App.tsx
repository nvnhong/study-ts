import axios from "axios";
import { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[] | undefined>(undefined);
  const [todo, setTodo] = useState<Todo | undefined>(undefined);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  useEffect(() => {
    const fetchTodos = () => {
      return axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
    };

    fetchTodos().then((res) => {
      setTodos(res.data);
    });
  }, []);

  return (
    <>
      {todos
        ? todos.map((value, index) => <div key={index}>{value.title}</div>)
        : null}
    </>
  );
}

export default App;

/*
  [ 로직 분리 ]
  useEffect는 서버로부터 데이터를 받아오는데 사용되고 있다.
  이러한 로직을 분리하여 컴포넌트에서는 UI에 집중할 수 있도록 한다.
*/
