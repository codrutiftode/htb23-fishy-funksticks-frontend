import SimpleButton from "../UI/SimpleButton";
import TextInput from "../UI/TextInput";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useTranslate } from "../../scripts/useTranslate";



function NurseForm(){
    const t = useTranslate();
    const navigate = useNavigate();
    const ClickHandler = () => {
        // sends the information
        navigate("/nurse"); // needs to only execute if authenticated
    }

    return(
        <Style.Form>        
        <p>{t("username")}</p>
        <Style.Input><TextInput fontSize={"1em"} SIZE={"1em"}></TextInput></Style.Input>
        <p>{t("password")}</p>
        <Style.Input><TextInput fontSize={"1em"} SIZE={"1em"}></TextInput></Style.Input>
        <SimpleButton name={t("submit")} ClickHandler={ClickHandler} width={"5em"} height={"2em"} background={(props) => props.theme.colors.primary} fontSize={"1em"} borderRadius={"1em"}></SimpleButton>
        </Style.Form>

    )
}

export default NurseForm

const Style= {

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
    `
  }