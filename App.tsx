import Text from "./components/text";

function App() {
  return (
    <div>
      <Text color="red"> 텍스트</Text>
    </div>
  );
}

export default App;

/*
  [ keyof typeof ]
  아래 예시들을 따라하다 보면 App.tsx에 에러가 생긴다
  해당 에러는 무시하고 흐름만 이해하면 된다.

  1. styled/colors/index.tsx
     1) 색상을 정의한다.
     2) Colors 타입을 정의한다.
  
  2. components/text/index.tsx
     1) Text 컴포넌트를 정의한다.
     2) Props 타입을 정의한다.

  3. App.tsx
     1) Text 컴포넌트를 사용한다.
       <Text color=""> 텍스트</Text>에서 color에 Alt + SpaceBar를 입력했을 때
        colors의 key값들을 선택할 수 있다.
  
  styled/colors/index.tsx에서 keyof와 typeof를 사용하면
  각 key들이 union 타입으로 정의된다.
  type Colors = "white" | "black" | "gray_0" | "gray_1" | "red" | "blue"; 와 동일하다.

  이제 색상을 추가하고 싶을 때 styled/colors/index.tsx에서 추가하면
  components/text/index.tsx에서 Props 타입에 자동으로 추가된다.
  따라서 App.tsx에서 Text 컴포넌트를 사용할 때 color에 새로 추가한 색상을 사용할 수 있다.


*/
