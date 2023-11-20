import React from "react";
import styled from "styled-components";

/* 
    Button이나 Input 같은 컴포넌트들은 
    기본적으로 내장된 옵션들이 많으며(onClick, disabled..)
    하나하나 타이핑 하는 것이 부담스럽다
    => React.ButtonHTMLAttributes<HTMLButtonElement>로 해결

    type Props = button이 기본적으로 가지고 있는 Prop + 내가 사용하고 싶은 Prop
*/
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size: "small" | "medium" | "large" | "xlarge";
  shape: "primary" | "secondary";
};

export const Button = ({ children, ...props }: Props) => {
  return (
    // <StyledButton size={props.size} shape={props.shape} onClick={ props..}>
    // 위와 같이 props를 하나하나 지정하기보다 아래처럼 {...props}로 간단하게 설정할 수 있다.
    <StyledButton {...props}>{children}</StyledButton>
  );
};

// Styled component도 컴포넌트이기 때문에 props를 넘겨줄 수 있다.
const StyledButton = styled.button<Pick<Props, "size" | "shape">>`
  /* 기본 디자인 */
  border: none;
  font-size: 16px;

  /* Prop별 달라지는 디자인 */
  ${(props) => {
    switch (props.size) {
      case "large":
        return `
            padding: 16px 24px;
            font-size: 24px;
            `;

      case "medium":
        return `
            padding: 12px 16px;
            font-size: 16px;
            `;

      case "small":
        return `
            padding: 8px 12px;
            font-size: 12px;
            `;

      case "xlarge":
        return `
            padding: 32px 48px;
            font-size: 32px; 
            `;

      default:
        break;
    }
  }}

  ${(props) => {
    switch (props.shape) {
      case "primary":
        return `
            background-color: blue;
            color: white;
            `;

      case "secondary":
        return `
            background-color: red;
            color: white;
            `;

      default:
        break;
    }
  }}
`;

/*
  컴포넌트를 디자인으로부터 잘 정리하는 능력과
  복잡하지 않은 선에서 모듈화를 방향이 필요하다.

  예를 들어 특정 디자인이 입혀진 버튼을 수십군데에서 사용했는데
  디자이너가 해당 버튼의 디자인을 변경해야한다고 말할 때
  버튼 컴포넌트 하나에 디자인이 다 있기 때문에 코드 몇 줄만 변경하면 된다.
*/

/*
  기존의 types Prop에 디자인이 하나가 추가되었다면? (shape에 'tertiary 추가)
  
  [Before]
  type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size: "small" | "medium" | "large";
    shape: "primary" | "secondary";
  };

  const StyledButton = styled.button<{
    size: "small" | "medium" | "large";
    shape: "primary" | "secondary";
  }>`

  [After]
  type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size: "small" | "medium" | "large";
    shape: "primary" | "secondary" | "tertiary"; <<여기에 디자인 1개 추가
  };

  const StyledButton = styled.button<{
    size: "small" | "medium" | "large";
    shape: "primary" | "secondary" | 'tertiary; <<여기에도 디자이 1개 추가
  }>`  

  [해결방법]
  styled component 코드를 변경하면 된다(typescript의 pick을 사용한다)
  const StyledButton = styled.button<Pick<Props, "size" | "shape">>`

  typeScript를 공부할 때 유틸리티 타입을 알아두는게 좋다
  => pick, Omit, Partial, Required, Readonly, Record, Exclude, Extract, 등
*/
