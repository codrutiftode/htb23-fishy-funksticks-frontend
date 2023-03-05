import styled from "styled-components";
import TextInput from "./TextInput";

function MultiChoice(props) {
  return (
    <Style.MultiChoice>
      {props.choices.map((choice, index) => {
        const clickHandler = () => {
          if (choice.isActive) {
            props.removeChoice(choice);
          } else {
            props.addChoice(choice);
          }
        };
        return (
          <Style.Choice key={index}>
            <Style.ChoiceButton
              onClick={clickHandler}
              isActive={choice.isActive}
            >
              {choice.isActive && (
                <span class="material-symbols-outlined">check</span>
              )}
            </Style.ChoiceButton>
            {choice.name === "Other" ? (
              <TextInput
                DEFAULT={"Other"}
                SIZE="0.5rem"
                onFocus={() => props.addChoice(choice)}
              />
            ) : (
              <p>{choice.name}</p>
            )}
          </Style.Choice>
        );
      })}
    </Style.MultiChoice>
  );
}

export default MultiChoice;

const Style = {
  MultiChoice: styled.div`
    display: flex;
    flex-direction: column;
  `,

  Choice: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.4rem 0;
  `,

  ChoiceButton: styled.button`
    background-color: ${props => props.isActive ? props.theme.colors.primary : "white"};
    color: white;
    border: 1px solid gray;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem;
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 0.4rem;
  `,
};
