import SimpleButton from "../UI/SimpleButton";
import MultiTextInput from "../UI/MultiTextInput";
import styled from "styled-components";

function RequestPopup({ closePopup }) {
  const ClickHandler = () => {
    //close it!!;
    closePopup();
  };

  return (
    <Style.container>
      <Style.question>What time do you want to be away?</Style.question>
      <Style.TimeInputs>
        <Style.InputContainer>
          <span>Leave: </span>
          <input type="time" />
        </Style.InputContainer>
        <Style.InputContainer>
          <span>Return: </span>
          <input type="time" />
        </Style.InputContainer>
      </Style.TimeInputs>
      <Style.btn>
        <SimpleButton
          name={"Take a break"}
          width={"10em"}
          height={"4em"}
          fontSize={"1em"}
          borderRadius={"1em"}
          ClickHandler={ClickHandler}
          background={(props) => props.theme.colors.primary}
        ></SimpleButton>
      </Style.btn>
    </Style.container>
  );
}

export default RequestPopup;

const Style = {
  container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;
    height: 100%;
  `,

  question: styled.div`
    display: inline-block;
    text-align: center;
    padding: 5%;
  `,

  InputContainer: styled.div`
    display: block;
    padding: 0.4rem;

    & input {
      border: 1px solid gray;
      padding: 0.2rem;
      font-family: Arial;
    }
  `,

  btn: styled.div`
    display: inline-block;
  `,

  TimeInputs: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.4rem;
    align-items: center;
    margin-bottom: 0.4rem;
  `,
};
