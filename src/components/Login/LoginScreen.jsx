import IconButton from "./IconButton";
import styled from "styled-components";
import NurseForm from "./NurseForm";
import PatientForm from "./PatientForm";
//import Header from "../Layout/Header";
import { useState } from "react";
import MainLayout from "../Layout/MainLayout";
import { useTranslate } from "../../scripts/useTranslate";


function LoginScreen()
{
    const t = useTranslate();
    const [state, setState] = useState(false)

    const clickNurse = () => {
        setState("nurse")
    }

    const clickPatient = () => {
        setState("patient")
    }

    return <MainLayout>
        <Style.IamA>{t("iama")}</Style.IamA>
        <Style.IconButtonContainer>
                <IconButton iconButtonClick={clickNurse} buttonText={t("nurse")} imgsrc={"assets/nurse_emoji.png"} isDisabled={state=="patient"}/>
                <IconButton iconButtonClick={clickPatient} buttonText={t("patient")} imgsrc={"assets/sick_emoji.png"} isDisabled={state=="nurse"}/>
         </Style.IconButtonContainer>

         <Style.FormContainer>{(state=="nurse"?<NurseForm/>:(state=="patient"?<PatientForm/>:<div/>))}</Style.FormContainer>
         </MainLayout>
}

export default LoginScreen

const Style = {
    IamA: styled.div`
        text-align: center;
        font-size: 5vh;
        margin-top: 3vh;
    `,

    IconButton: styled.div`
        display: inline-block;
        padding: 10%;
    `,
    IconButtonContainer: styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 10%;
        margin-top: 3vh;
    `,
    FormContainer: styled.div`
    display: flex;
    justify-content: center;
    `
}

