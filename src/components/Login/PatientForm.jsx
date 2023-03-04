import styled from "styled-components";
import PatientID from "../UI/PatientForm/PatientID";
import PatientID_Input from "../UI/PatientForm/PatientID_Input";

function PatientLogin(props) {
  return (
    <div>
      <PatientID></PatientID>
      <PatientID_Input></PatientID_Input>
    </div>
  );
}

export default PatientLogin;
