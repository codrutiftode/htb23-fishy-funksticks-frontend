import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import RouterProvider from "./store/RouterProvider";
import ThemeProvider from "./store/ThemeProvider";
// import PatientID from "./components/Patient/LoginPagePatient/PatientID"
// import PatientID_Input from "./components/Patient/LoginPagePatient/PatientID_Input";
// import PatientLogin from "./components/Patient/LoginPagePatient/PatientLogin";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  );
}

export default App;

const Style = {
  Paragraph: styled.p`
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;

    ${breakpoint("tablet")`
        color: blue;
    `}
  `,
};
