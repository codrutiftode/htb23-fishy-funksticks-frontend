import IconButton from "./IconButton";
import styled from "styled-components";
import NurseForm from "./NurseForm";
import PatientForm from "./PatientForm";
import Header from "../Header/Header";
import { useState } from "react";

function LoginScreen()
{

    const [state, setState] = useState(false)

    const clickNurse = () => {
        setState("nurse")
    }

    const clickPatient = () => {
        setState("patient")
    }

    return <div><Style.IconButtonContainer>
                <IconButton iconButtonClick={clickNurse} buttonText={"NURSE"} imgsrc={"nurse_emoji.png"} isDisabled={state=="patient"}/>
                <IconButton iconButtonClick={clickPatient} buttonText={"PATIENT"} imgsrc={"sick_emoji.png"} isDisabled={state=="nurse"}/>
         </Style.IconButtonContainer>

         <Style.FormContainer>{(state=="nurse"?<NurseForm/>:(state=="patient"?<PatientForm/>:<div/>))}</Style.FormContainer>
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

