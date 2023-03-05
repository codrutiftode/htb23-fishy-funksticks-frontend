import SimpleButton from "../UI/SimpleButton";
import MultiTextInput from "../UI/MultiTextInput";
import styled from "styled-components";
import { useTranslate } from "../../scripts/useTranslate";


function RequestPopup({ closePopup }) {
  const t = useTranslate();
  const ClickHandler = () => {
    //close it!!;
    closePopup();
  };

  return (
    <Style.container>
      <Style.question>{t("timeblockedout")}</Style.question>
      <Style.TimeInputs>
        <Style.InputContainer>
          <span>{t("leave")} </span>
          <input type="time" />
        </Style.InputContainer>
        <Style.InputContainer>
          <span>{t("return")} </span>
          <input type="time" />
        </Style.InputContainer>
      </Style.TimeInputs>
      <Style.btn>
        <SimpleButton
          name={"Set"}
          width={"10em"}
          height={"4em"}
          fontSize={"1em"}
          border={"4px outset rgba(68, 34, 102, 0.75)"}
          borderRadius={"1em"}
          gradient={"linear-gradient(to right,rgb(117,71,163)0%, rgb(92,46,138)50%, rgb(71,36,107)100%)"}
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
