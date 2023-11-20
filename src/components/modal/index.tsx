import React, { createContext, useContext } from "react";

/*
    모달 하나 만들건데 컴포넌트를 4개 만들거다.
    컴포넌트의 기능들을 하나씩 부여한다.
    예를 들어 Trigger 컴포넌트는 오직 모달이 열리는 기능만 담당한다.
*/

// < < < < < React의 ContextAPI 기능을 사용하여 모달의 열림/닫힘 관련 상태 관리 < < < < <
type ModalContextType = {
  isOpen: boolean;
  setIsOpen: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);
// > > > > > React의 ContextAPI 기능을 사용하여 모달의 열림/닫힘 관련 상태 관리 > > > > >

// < < < < < 모달 전체 포함하는 박스 < < < < <
type Props = {
  children: React.ReactNode;
};

export const Root = ({ children }: Props) => {
  // Root 컴포넌트에서 모달 열림/닫힘 기능과 관련된 useState를 선언하고
  // ContextAPI에 해당 값을 넣으면 Root의 하위 컴포넌트에서 해당 state를 사용할 수 있다.
  // 현재 <Trigger>와 <Close> 컴포넌트에서 사용 중이다.
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ModalContext.Provider
      value={{ isOpen, setIsOpen: () => setIsOpen(!isOpen) }}
    >
      {children}
    </ModalContext.Provider>
  );
};
// > > > > > 모달 전체 포함하는 박스 > > > > >

// < < < < < 모달 열림 < < < < <
type TriggerProps = {
  children: React.ReactNode;
};

// 만약 여기에 <Button> 컴포넌트를 넣는다면 TriggerProps에 shape이나 size 등 prop을 더 추가해야한다.
// Trigger 컴포넌트에서는 children만 받으면 되고, App.tsx에서 <Button> 컴포넌트를 자유롭게 받을 수 있기에 개발자의 자유도가 올라간다.
export const Trigger = ({ children }: TriggerProps) => {
  const values = useContext(ModalContext);
  return <div onClick={values?.setIsOpen}>{children}</div>;
};
// > > > > > 모달 열림 > > > > >

// < < < < < 모달 내용 < < < < <
type ContentProps = {
  children: React.ReactNode;
};

export const Content = ({ children }: ContentProps) => {
  const values = useContext(ModalContext);
  return values?.isOpen ? <div>{children}</div> : null;
};
// > > > > > 모달 내용 > > > > >

// < < < < < 모달 닫힘 < < < < <
type CloseProps = {
  children: React.ReactNode;
};

export const Close = ({ children }: CloseProps) => {
  const values = useContext(ModalContext);
  return <div onClick={values?.setIsOpen}>{children}</div>;
};
// > > > > > 모달 닫힘 > > > > >
