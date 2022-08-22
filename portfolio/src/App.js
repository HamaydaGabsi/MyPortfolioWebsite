import "./App.css";
import styled from "styled-components";

import Navbar from "./Navbar";
import Hero from './Hero'
import { ThemeProvider } from "styled-components";

function App() {
  const typographyTheme = {
    fontSizes: ["4.369rem", "1.777rem", "1.333rem", "1rem", "0.75rem", "10px"],
    bodyFontFamily: "Source Code Pro, Input, monospace",
    headingFontFamily:
      "Oswald, SF Display, Helvetica Neue, Circular, sans-serif",
  };
  const theme = {
    typography: typographyTheme,
    primary: "#A862EA",
    secondary: "#6383EA",
    primaryDark: "#6545A4",
    secondaryDark: "#465CA4",
    primaryLight: "#BF62EA",
  };
  const ThemeWrapper = styled.div`
    & h1 {
      font-family: "Oswald";
      font-weight: 500;
      font-size: 118.7px;
      line-height: 3rem;
    }
    & a,
    button {
      font-family: 'SF Mono Light';
    }
    & p {
      font-family: "RobotoSlab";
    }
  `;
  return (
    <ThemeProvider theme={theme}>
      <ThemeWrapper>
        <div>
          <Navbar />
          <Hero/>
        </div>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;
