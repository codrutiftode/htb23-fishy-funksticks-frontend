import styled from "styled-components";

function PopupButton(props) {
  return (
    <Style.PopupButton onClick={props.onClick}>
      <span class="material-symbols-outlined">{props.materialIcon}</span>
      <p>{props.name}</p>
    </Style.PopupButton>
  );
}

export default PopupButton;

const Style = {
  PopupButton: styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & p {
      margin-top: 0.4rem;
    }

    & span {
      font-size: 2rem;
    }
  `,
};
