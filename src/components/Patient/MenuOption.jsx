import styled, { keyframes } from "styled-components";

function MenuOption(props) {
  return (
    <Style.MenuOption key={props.type} onClick={props.onClick}>
      <img src={props.src} alt={props.alt} />
      <p>{props.name}</p>
    </Style.MenuOption>
  );
}

export default MenuOption;

const Style = {
  MenuOption: styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    flex: 1;
    margin: 0 0.2rem;

    & img {
      width: 2rem;
      height: 2rem;
      margin-right: 0.4rem;
    }
  `,
};