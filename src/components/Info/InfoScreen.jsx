import SimpleButton from "../UI/SimpleButton";
import { useNavigate } from "react-router";
import styled, { useTheme } from "styled-components";

function InfoScreen() {
  const navigate = useNavigate();
  const theme = useTheme();

  const ClickHandler= () => {
    navigate("/patient");
  }

  return( <div>
    <SimpleButton name={"test"} padding={"2em"} width={"50%"} 
    height={"30%"} fontSize={"36px"} borderRadius={"10px"} background={theme.colors.primary}
    gradient={"linear-gradient(to right,rgb(117,71,163)0%, rgb(92,46,138)50%, rgb(71,36,107)100%)"}
    textGradient={"white"} ClickHandler={ClickHandler}></SimpleButton> 

  </div>)
}

export default InfoScreen;