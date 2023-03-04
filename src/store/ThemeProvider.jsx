import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import constants from "../constants";

export default function ThemeProvider(props) {
  return (
    <StyledThemeProvider theme={constants.theme}>
      {props.children}
    </StyledThemeProvider>
  );
}
