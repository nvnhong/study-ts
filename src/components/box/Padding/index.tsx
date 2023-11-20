import React from "react";
import styled, { css } from "styled-components";
/*
    x?: number; 과 x: number | undefined의 차이점
    - x? number; => x는 있어도 되고 없어도 됨
    - x: number | undefined => x는 number 또는 undefined의 형태로 반드시 존재해야함
*/
type Props = {
  children: React.ReactNode;
  t?: number;
  r?: number;
  b?: number;
  l?: number;
  x?: number;
  y?: number;
};

export const Padding = ({ children, ...props }: Props) => {
  return <StyledPadding {...props}>{children}</StyledPadding>;
};

const StyledPadding = styled.div<
  Pick<Props, "t" | "r" | "b" | "l" | "x" | "y">
>`
  padding-top: ${(props) => props.t}px;
  padding-right: ${(props) => props.r}px;
  padding-bottom: ${(props) => props.b}px;
  padding-left: ${(props) => props.l}px;

  ${(props) =>
    css`
      padding-left: ${props.x}px;
      padding-right: ${props.x}px;
    `}

  ${(props) => css`
    padding-top: ${props.y}px;
    padding-bottom: ${props.y}px;
  `}
`;
