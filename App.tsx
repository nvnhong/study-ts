// import axios from "axios";
// import { useEffect, useState } from "react";
import useFetchTodos from "./features/todos/server/hooks/useFetchTodos";
import { useTodos } from "./features/todos/hooks/useTodos";

// type Todo = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };

function App() {
  // const [todos, setTodos] = useState<Todo[] | undefined>(undefined);
  const [todos] = useFetchTodos();
  const [todo, handler] = useTodos();
  // const [todo, setTodo] = useState<Todo | undefined>(undefined);
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  // useEffect(() => {
  //   const fetchTodos = () => {
  //     return axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
  //   };

  //   fetchTodos().then((res) => {
  //     setTodos(res.data);
  //   });
  // }, []);

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

  1. src 폴더 하위에 features 폴더를 생성하고, 그 하위 폴더로 todos 폴더를 생성한다.
     그 후 todos의 하위 폴더로 아래와 같이 파일 구조를 생성한다. (폴더 생성 기준은 기능이다.)
     src 
        ㄴfeatures(폴더)
                   ㄴtodos(폴더)
                            ㄴserver(폴더)
                                      ㄴhooks(폴더)
                                              ㄴuseFetchTodos.ts(파일)
                            ㄴtypes(폴더)
                                      ㄴindex.ts(파일)
                            ㄴhooks(폴더)
                                      ㄴuseTodos.ts(파일)
  
  2. useEffect는 서버에서 데이터를 가져오는 것이므로 src/features/todos/server/hooks/useFetchTodos.ts에 분리한다.
     즉, 커스텀훅을 만든다.

  3. src/features/todos/components/todos/type/index.ts에 타입을 정의한다.

  4. const [todo, setTodo] = useState<Todo | undefined>(undefined)와
     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {};는
     src/features/todos/components/todos/hooks/useTodos.ts에 분리한다.

  <결론>
  데이터를 가져오는 서버 레벨, 상태 레벨, 뷰 레벨로 나누어서 로직을 분리하면 
  코드가 복잡하지도 않고 재사용성이 높아진다.

  function App() {
    const [todos] = useFetchTodos();    // 데이터를 가져오는 서버 레벨
    const [todo, handler] = useTodos(); // 상태 레벨

    return ( // 뷰 레벨
      <>
        {todos
          ? todos.map((value, index) => <div key={index}>{value.title}</div>)
          : null}
      </>
    );
  }
*/
