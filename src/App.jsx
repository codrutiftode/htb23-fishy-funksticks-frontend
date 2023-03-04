import styled from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import ThemeProvider from "./store/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Style.Paragraph>Hello world</Style.Paragraph>
      </div>
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
