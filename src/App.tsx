import styled from "styled-components";
// import { Button } from "./components/button";
// import { Padding } from "./components/box/Padding";
// import * as Modal from "./components/modal"; // 컴포넌트가 서로 연결되어 있다는 것을 명시할 수 있다.
// import { Root, Trigger, Content, Close} from "./components/modal";
import { Margin } from "./components/box/Margin";

function App() {
  return (
    <div>
      <Margin>{(number) => <div>{number ? "고구마" : "감자"}</div>}</Margin>
      {/* 

        // 장점 : 하나의 컴포넌트가 어떤 기능이 있는지 예상할 수 있다.
        <Modal.Root>
          <Modal.Trigger>
            <Button shape="primary" size="small">
              버튼
            </Button>
          </Modal.Trigger>
          <Modal.Content>
            <StyledContainer>
              안녕하세요 모달을 열었습니다.
              <Modal.Close>닫기</Modal.Close>
            </StyledContainer>
          </Modal.Content>
        </Modal.Root> 
      */}
      {/* 
        # Button Components (variant driven develop)

        [1] 버튼 테스트 시 사용
        <Button size="large" shape="primary">
          버튼
        </Button>

        <Button size="medium" shape="secondary">
          버튼
        </Button>

        <Button size="large" shape="primary">
          로그인
        </Button>
      */}
      {/*
        # Button Components (variant driven develop)

        [2] CSS에서 패딩만 필요한 경우에 사용
        <Padding t={20} b={20}>
          <div>안녕하세요</div>
        </Padding>
      */}
    </div>
  );
}

export default App;

const StyledContainer = styled.div`
  width: 500px;
  border: 1px solid teal;
`;
