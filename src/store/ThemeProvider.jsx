import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = {
    colors: {
        primary: "rebeccapurple",
    },
  breakpoints: {
    tablet: 768,
    desktop: 1024,
  },
};

export default function ThemeProvider(props) {
  return (
    <StyledThemeProvider theme={theme}>{props.children}</StyledThemeProvider>
  );
}
