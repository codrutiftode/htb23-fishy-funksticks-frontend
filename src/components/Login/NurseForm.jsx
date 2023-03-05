import SimpleButton from "../UI/SimpleButton";
import TextInput from "../UI/TextInput";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useState } from "react";
import { ApiController } from "../../api/apiController";
import constants from "../../constants";
import { useTranslate } from "../../scripts/useTranslate";


function NurseForm() {
  const t = useTranslate();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const updateUsername = (e) => {
    setUsername(e.target.value.trim());
    setErrorMessage(null);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value.trim());
    setErrorMessage(null);
  };

  const validateInput = () => {
    return username.length > 0 && password.length > 0;
  };

  const ClickHandler = async () => {
    const isValid = validateInput();
    if (!isValid) {
      setErrorMessage(t("invalidval"));
      return;
    }

    // sends the information to backend
    try {
      const result = await ApiController.post(constants.backendURL + "/api/login", {
        person: "NURSE",
        nurse_id: username,
        nurse_password: password,
      });
      console.log("oy", result);
    }
    catch(err) {
      console.error(err);
      setErrorMessage(t("invalidcred"));
      return;
    }
    navigate("/nurse"); // needs to only execute if authenticated
  };

  return (
    <Style.Form>
      <p>{t("username")}</p>
      <Style.Input>
        <TextInput
          DEFAULT={"Blah"}
          fontSize={"1em"}
          SIZE={"1em"}
          onTextChange={updateUsername}
        ></TextInput>
      </Style.Input>
      <p>{t("password")}</p>
      <Style.Input>
        <TextInput
          DEFAULT={"Blah Blah"}
          fontSize={"1em"}
          SIZE={"1em"}
          onTextChange={updatePassword}
        ></TextInput>
      </Style.Input>
      {errorMessage && <Style.ErrorMessage>{errorMessage}</Style.ErrorMessage>}
      <SimpleButton
        name={"Submit"}
        ClickHandler={ClickHandler}
        width={"5em"}
        height={"2em"}
        background={(props) => props.theme.colors.primary}
        fontSize={"1em"}
        borderRadius={"1em"}
      ></SimpleButton>
    </Style.Form>
  );
}

export default NurseForm;

const Style = {
  Input: styled.div`
    margin-top: 10%;
    margin-bottom: 10%;
  `,

  Form: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: space-inbetween;
    text-align: center;
    font-size: 3vh;
  `,

  ErrorMessage: styled.p`
    color: red;
    font-size: 1rem;
    padding: 0.6rem;
  `,
};
