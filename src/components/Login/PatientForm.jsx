import styled from "styled-components";
import TextInput from "../UI/TextInput";

function PatientForm(props) {
  return (
    <div>
      <p>Enter patient ID number:</p>
      <TextInput></TextInput>
    </div>
  );
}

export default PatientForm;
