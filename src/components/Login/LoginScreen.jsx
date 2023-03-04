import IconButton from "./IconButton";
import styled from "styled-components";
import NurseForm from "./NurseForm";
import PatientForm from "./PatientForm";
import Header from "../Header/Header";


function LoginScreen(userIsNurse)
{
    return <div><Style.IconButtonContainer>
                <IconButton buttonText={"NURSE"} imgsrc={"doctor.jpg"}/>
                <IconButton buttonText={"PATIENT"} imgsrc={"patient.jpg"}/>
         </Style.IconButtonContainer>
         {/* {userIsNurse?<NurseForm/>:<PatientForm/>}  */}
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
        margin-bottom: 5%;
    `
}

