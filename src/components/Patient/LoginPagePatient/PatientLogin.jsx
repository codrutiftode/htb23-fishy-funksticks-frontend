import styled from "styled-components";
import PatientID from "./PatientID";
import PatientID_Input from "./PatientID_Input";

function PatientLogin(props){
    return(
        <div>        
        <PatientID></PatientID>
        <PatientID_Input></PatientID_Input>
        </div>

    )
}

export default PatientLogin