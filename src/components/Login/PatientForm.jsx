import styled from "styled-components";
import TextInput from "../UI/TextInput";
import SimpleButton from "../UI/SimpleButton";
import { useNavigate } from "react-router-dom";
import { useTranslate } from "../../scripts/useTranslate";
import { ApiController } from "../../api/apiController";
import constants from "../../constants";
import { useState } from "react";
import { LocalStorage } from "../../scripts/localStorage";

function PatientForm(props) {
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const t = useTranslate();

  const textChangeHandler = (e) => {
    setPatientId(e.target.value.trim());
    setErrorMessage(null);
  };

  const validateInput = () => {
    return patientId.length > 0;
  };

  const ClickHandler = async () => {
    // sends the information
    const isValid = validateInput();
    if (!isValid) {
      setErrorMessage("Please input valid values.");
      return;
    }

    // sends the information to backend
    try {
      const result = await ApiController.post(
        constants.backendURL + "/api/login",
        {
          person: "PATIENT",
          patient_id: patientId,
        }
      );
      LocalStorage.set("patient_id", patientId);
    } catch (err) {
      console.error(err);
      setErrorMessage("Invalid credentials, try again!");
      return;
    }
    navigate("/patient"); // needs to only execute if authenticated
  };
  return (
    <Style.Form>
      <p>{t("enterPatientID")}</p>
      <Style.Input>
        <TextInput
          fontSize={"1em"}
          SIZE={"1em"}
          onTextChange={textChangeHandler}
        />
      </Style.Input>
      {errorMessage && <Style.ErrorMessage>{errorMessage}</Style.ErrorMessage>}
      <SimpleButton
        name={"Submit"}
        width={"5em"}
        height={"2em"}
        fontSize={"1em"}
        borderRadius={"1em"}
        ClickHandler={ClickHandler}
        background={(props) => props.theme.colors.primary}
        border={"3px outset rgba(68, 34, 102, 0.75)"}
        gradient={"linear-gradient(to right,rgb(117,71,163)0%, rgb(92,46,138)50%, rgb(71,36,107)100%)"}
      ></SimpleButton>
    </Style.Form>
  );
}

export default PatientForm;

const Style = {
  Input: styled.div`
    margin-top: 10%;
    margin-bottom: 10%;
    color: ${(props) => props.theme.colors.defaultfont};
  `,

  Form: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: space-inbetween;
    text-align: center;
    font-size: 3vh;
    color: ${(props) => props.theme.colors.defaultfont};
  `,

  ErrorMessage: styled.p`
    color: red;
    font-size: 1rem;
    padding: 0.6rem;
  `,
};
