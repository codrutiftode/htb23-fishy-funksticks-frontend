import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import constants from "../constants";
import { LocalStorage } from "../scripts/localStorage";

export default function ThemeProvider(props) {

  const darkTheme = LocalStorage.get("darkTheme");
  
  var theme_to_use = constants.theme;
  if (darkTheme){
    theme_to_use = constants.darkTheme;
  }


  return (
    <StyledThemeProvider theme={theme_to_use}>
      {props.children}
    </StyledThemeProvider>
  );
}
