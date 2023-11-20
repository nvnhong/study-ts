function App() {
  const f = (n: number) => {
    return n;
  };

  f(1); // 1
  f(2); // 2

  return <div></div>;
}

export default App;

/*
  [ generic ]
  typescript에서 generic은 타입을 마치 함수의 파라미터처럼 받아서 사용하는 것이다.

  예를 들어 f라는 함수가 있다.
  이 함수는 숫자를 받아서 숫자를 리턴하는 함수이다.
    const f = (n: number) => {
      return n;
    };
    
    f(1); // 1
    f(2); // 2
  
  
  f2라는 함수가 있다.
  함수가 실행되기 전까지 어떤 타입이 들어올지 모르는 상태이다.
  r1의 경우 값의 타입이 string이고 r2의 타입은 number이다.
    const f2 = <Type>(n: Type) => {};
    const r1 = f2("1") // string
    const r2 = f2(1) // number


  함수를 만들 때 인자의 타입이 string이 될 수도 있고 number가 될 지, 그 외의 타입이 될지 모를 때가 있다.
  아래의 함수 options에서 data는 [{ id: 1, name: 'name' }]이거나 [{ id: 1, nickName: 'name }]일 수 있다.
  이 값들을 함수에 넣으려할 때 const options = (data: {id: number, name: string}[])으로 지정했을 때,
  nickName이라는 key값이 없기 때문에 에러가 발생한다.
  
    const options = (data) => {
      return data;
    }


  이럴 때 generic을 사용하면 된다.
    const options = <T>(data: T[]) => {
      return data;
    }

  여기서 data의 id만 전달 받고 싶다면 아래와 같이 사용하면 된다.
    const options = <T>(data: T[]) => {
      return data.map((item) => item.id); 
    }
  
  id에 에러가 나타날텐데 다시 아래와 같이 수정하면 된다.
    const options = <T extends { id: number }>(data: T[]) => {
      return data.map((item) => item.id); 
    }
  
  const r1 = options([{ id: 1, name: '감자' }]) // [1]
  const r2 = options([{ id: 1, nickName: '감자' }, {id: 2, nickName: '고구마'}]) // [1, 2]


*/
