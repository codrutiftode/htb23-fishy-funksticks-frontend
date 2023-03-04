import styled from "styled-components";

function PatientID(props){
    return(
        <Style.TextStyle>Enter patient ID number</Style.TextStyle>
    )
}

export default PatientID;

const Style = {
    TextStyle: styled.p`
    font-size:  1em;
    `
};