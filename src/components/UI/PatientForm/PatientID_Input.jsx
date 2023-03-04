import styled from "styled-components";

function PatientID_Input(props){

    return(
        <Style.PaddedInput name="ID number"></Style.PaddedInput>
    )
}


export default PatientID_Input


const Style = {
    PaddedInput: styled.input`
    padding: 4em;`
}