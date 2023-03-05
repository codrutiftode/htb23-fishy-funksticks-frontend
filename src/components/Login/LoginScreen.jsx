import IconButton from "./IconButton";
import styled from "styled-components";
import NurseForm from "./NurseForm";
import PatientForm from "./PatientForm";
import Header from "../Header/Header";


function LoginScreen(userIsNurse)
{
    return <div><Style.IconButtonContainer>
                <IconButton buttonText={"NURSE"} imgsrc={"nurse_emoji.png"}/>
                <IconButton buttonText={"PATIENT"} imgsrc={"sick_emoji.png"}/>
         </Style.IconButtonContainer>

         <Style.FormContainer>{userIsNurse?<NurseForm/>:<PatientForm/>}</Style.FormContainer>
         </div>
}

export default LoginScreen

const Style = {
    IconButton: styled.div`
        display: inline-block;
        padding: 10%;
    `,
    IconButtonContainer: styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 10%;
    `,
    FormContainer: styled.div`
    display: flex;
    justify-content: center;
    `
}

