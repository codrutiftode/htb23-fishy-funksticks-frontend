import SimpleButton from "../UI/SimpleButton";
import MultiTextInput from "../UI/MultiTextInput";
import styled from "styled-components";
import { useTranslate } from "../../scripts/useTranslate";
import { useState } from "react";
import { ApiController } from "../../api/apiController";
import constants from "../../constants";
import { LocalStorage } from "../../scripts/localStorage";


function RequestPopup({closePopup, typeOfRequest}){
    const t = useTranslate();
    const [extraInfo, setExtraInfo] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const textChangeHandler = (e) => {
        setExtraInfo(e.target.value.trim());
    };

    const ClickHandler = async () => {
        try {
          const patientId = LocalStorage.get("patient_id");
          // Send info to backend
          const result = await ApiController.post(constants.backendURL + "/api/send_request", {
            patient_id: patientId,
            type_of_request: typeOfRequest, // TODO
            extra_info: extraInfo,
          });
          console.log(result);
        }
        catch(err) {
          console.error(err);
          setErrorMessage("Something went wrong! Try again later.");
          return;
        }
        closePopup();
      }

    return(
        <Style.container>
        <Style.question>{t("extrainfo")}</Style.question>
        <Style.input><MultiTextInput DEFAULT={t("adddeets")} SIZE={"4em"} onTextChange={textChangeHandler}></MultiTextInput></Style.input>
        {errorMessage && <Style.ErrorMessage>{errorMessage}</Style.ErrorMessage>}
        <Style.btn><SimpleButton name={t("sendrequest")} width={"10em"} height={"4em"} fontSize={"1em"} borderRadius={"1em"} ClickHandler={ClickHandler} background={(props) => props.theme.colors.primary}></SimpleButton></Style.btn>
        </Style.container>
    )
}

export default RequestPopup

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

    input: styled.div`
        display: inline-block;
        margin-bottom: 0.4rem;
    `,

    btn: styled.div`
        display: inline-block;
    `,

    ErrorMessage: styled.p`
      color: red;
      font-size: 1rem;
      padding: 0.6rem;
    `,

}