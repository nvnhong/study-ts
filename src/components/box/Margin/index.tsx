import React, { useState } from "react";

type Props = {
  children: (number: number) => React.ReactNode;
};

export const Margin = ({ children }: Props) => {
  const [number, setNumber] = useState(0);
  return children(number);
  // return <div>{number ? "감자" : "고구마"}</div>;
};

/*
  아래의 App.tsx의 하위 컴포넌트에 폴더 Margin의 index.tsx가 연결되어 있을 때,
  number라는 변수의 값이 0이면 '감자', 그외의 값이면 '고구마'를 출력하고 싶은 상황이다.
  하지만 App.tsx는 부모 컴포넌트이기 때문에 index.tsx의 number 변수에 접근할 수 없다.
  이럴 때, render prop 패턴을 사용한다.

  [ 기존 코드 ]

  <폴더 Margin의 index.tsx>
  type Props = {
    children: (number: number) => React.ReactNode;
  };

  export const Margin = ({ children }: Props) => {
    const [number, setNumber] = useState(0);
    return children(number);
  }

  <App.tsx>
  export const App = () => {
     return <Margin>{(number) => <div>{number ? "고구마" : "감자"}</div>}</Margin>
  }


  ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  [render prop 패턴을 사용한 코드 ]

  1. 폴더 Margin의 index.tsx의 type Props의 children을 함수로 만든다.
  type Props = {
    children: () => React.ReactNode;
  };  
  
  2. index.tsx의 return을 <div>{children()}</div>로 수정한다.
  export const Margin = ({ children }: Props) => {
    const [number, setNumber] = useState(0);
    return children();
  };

  3. App.tsx의 return을 수정한다.
     리액트 fragment를 리턴하는 함수가 된다.
  export const App = () => {
    return <Margin>{() => <div>안녕</div>}</Margin>
  }
*/
