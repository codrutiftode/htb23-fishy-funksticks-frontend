import SimpleButton from "../UI/SimpleButton";
import TextInput from "../UI/TextInput";
import { useNavigate } from "react-router";
import styled from "styled-components";


function NurseForm(){
    const navigate = useNavigate();
    const ClickHandler = () => {
        // sends the information
        navigate("/nurse"); // needs to only execute if authenticated
    }

    return(
        <Style.Form>        
        <p>Enter username:</p>
        <Style.Input><TextInput DEFAULT={"Blah"} fontSize={"1em"} SIZE={"1em"}></TextInput></Style.Input>
        <p>Enter password:</p>
        <Style.Input><TextInput DEFAULT={"Blah Blah"} fontSize={"1em"} SIZE={"1em"}></TextInput></Style.Input>
        <SimpleButton name={"Submit"} ClickHandler={ClickHandler} width={"5em"} height={"2em"} background={(props) => props.theme.colors.primary} fontSize={"1em"} borderRadius={"1em"}></SimpleButton>
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