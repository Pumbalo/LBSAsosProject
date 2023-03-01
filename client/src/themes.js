// GlobalStyle är som det låter, de som står inuti detta påverkar alla element på hemsidan.
import { createGlobalStyle } from "styled-components";

// Light Theme färger
export const lightTheme = {
  body: "#fff",
  secondaryBody: "#f0f0f0",
  borderColor: "rgba(0, 0, 0, 0.4)",
  fontColor: "#000",
  secondaryColor: "#6200ee",
  opositeBackground: "#03DAC5",
  thumbColor: "#292929",
};

// Dark Theme färger
export const darkTheme = {
  body: "#292929",
  secondaryBody: "#121212",
  borderColor: "rgba(255, 255, 255, 0.4)",
  fontColor: "#fff",
  secondaryColor: "#03DAC5",
  opositeBackground: "#6200ee",
  thumbColor: "#fff",
};

// Skapar en GlobalStyle som håller saker som bakgrunds färg på hela hemsidan.
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 75px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 5px;
    min-height: 75px;
    transition: all 500ms ease-in-out;
  }

`;
