import axios from "axios";
import { useEffect, useState } from "react";

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[] | undefined>(undefined);

  useEffect(() => {
    const fetchTodos = () => {
      return axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
    };

    fetchTodos().then((response) => {
      setTodos(response.data);
    });
  }, []);

  console.log(todos);

  return (
    <div>
      {todos
        ? todos.map((value, index) => <div key={index}>{value.title}</div>)
        : null}
    </div>
  );
}

export default App;

/*
  리액트 쿼리에서, 서버에서 가져오기 전까지 데이터가 undefined 상태였다가 데이터를 가져온 후 배열 형태로 리턴
  
  위의 코드는 useEffect를 사용하여 컴포넌트가 렌더링 될 때마다 axios를 통해 데이터를 가져오는 코드이며,
  리액트 쿼리를 사용하는 것과 비슷한 환경.
  서버에서 데이터를 받기 전 todos는 undefined 상태이며, 데이터를 받은 후에는 배열 형태로 바뀜.

  서버에서 받은 데이터를 map을 통해 화면에 렌더링할 때, 처음 todos가 undefined 상태이기 때문에 에러가 발생함.
  return (
    <div>
      {todos.map((value, index) => (
        <div key={index}>{value.title}</div>
      ))}
    </div>
  );

  이 때, 이를 방지해주는 것이 type guard이다.
  위에서 todos는 Todo[] | undefined 타입이므로, undefined일 때는 map을 실행하지 않도록 해주면 된다.
  
  첫 번째 방법. return문 이전에 아래와 같은 코드를 추가한다.
  그러면 todos가 undefined일 때는 하단 return문을 실행하지 않고 함수를 종료하게 된다.
  이후 하단 todos에 마우스를 갖다대면 원래 Todo[] | undefined 타입이었지만 Todo[] 타입으로 바뀐 것을 확인할 수 있다.
    if (!todos) {
      return;
    }

    return (
      <div>
        {todos.map((value, index) => (
          <div key={index}>{value.title}</div>
        ))}
      </div>
    );

  두 번째 방법. return문을 아래와 같이 수정한다. 
  여기서 '&&' 연산자는 JavaScript에서 논리 AND를 나타내는 연산자이다.
  이 연산자는 왼쪽 피연산자가 true로 평가될 때, 오른쪽 피연산자를 반환하고, 왼쪽 피연산자가 false로 평가될 때, 왼쪽 피연산자를 반환한다.
  즉, todos가 undefined일 때는 false로 평가되므로 뒤의 todos.map이 실행되지 않는다.

    return (
      <div>
        {todos &&
          todos.map((value, index) => <div key={index}>{value.title}</div>)}
      </div>
    );

  세 번째 방법. 삼항연산자를 이용한다.
  삼항연산자는 조건문 ? 참일 때 실행할 문장 : 거짓일 때 실행할 문장; 의 형태로 사용한다.
  여기서는 todos가 undefined일 때는 null을 반환하고, 아닐 때는 map을 실행한다.
    return (
      <div>
        {todos
          ? todos.map((value, index) => <div key={index}>{value.title}</div>)
          : null}
      </div>
    );

  이렇듯 type의 범위를 좁히는 연습을 해야 한다.
  아래의 함수 f를 보면 n의 타입이 string | number이므로, n이 string일 때는 Number(n)을 리턴하고, 아닐 때는 n을 리턴한다.
  const f = (n: string | number) => {
    if (typeof n === "string") {
      return NumbeR(n);
    } 
    
    return n;
  }
  
*/
