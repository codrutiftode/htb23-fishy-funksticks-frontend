import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

function Popup({ shown, setShown, children }) {
  const nodeRef = useRef(null);

  const backgroundClickHandler = () => {
    setShown(false);
  };

  const contentClickHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={shown}
      timeout={200}
      classNames="popup"
      mountOnEnter
      unmountOnExit
    >
      <Style.PopupBackground ref={nodeRef} onClick={backgroundClickHandler}>
        <Style.PopupContent onClick={contentClickHandler}>
          {children}
        </Style.PopupContent>
      </Style.PopupBackground>
    </CSSTransition>
  );
}

export default Popup;

const Style = {
  PopupBackground: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    &.popup-enter {
      opacity: 0;
    }

    &.popup-enter-active {
      opacity: 1;
      transition: opacity 200ms;
    }

    &.popup-exit {
      opacity: 1;
    }

    &.popup-exit-active {
      opacity: 0;
      transition: opacity 200ms;
    }
  `,

  PopupContent: styled.div`
    width: 80%;
    height: 60%;
    background-color: white;

    ${breakpoint("tablet")`
      width: 50%; 
    `}

    ${breakpoint("desktop")`
      width: 35%;
      height: 40%;
    `}

    .popup-enter & {
      transform: scale(0.8);
    }

    .popup-enter-active & {
      transform: scale(1);
      transition: transform 200ms;
    }

    .popup-exit & {
      transform: scale(1);
    }

    .popup-exit-active & {
      transform: scale(0.8);
      transition: transform 200ms;
    }
  `,
};
