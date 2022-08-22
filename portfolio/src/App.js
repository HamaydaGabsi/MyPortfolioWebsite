import "./App.css";
import styled from "styled-components";

import Navbar from "./Navbar";
import { ThemeProvider } from "styled-components";

function App() {
  const typographyTheme = {
    fontSizes: ["4.369rem", "1.777rem", "1.333rem", "1rem", "0.75rem", "10px"],
    bodyFontFamily: "Source Code Pro, Input, monospace",
    headingFontFamily:
      "Oswald, SF Display, Helvetica Neue, Circular, sans-serif",
  };
  const ThemeWrapper = styled.div`
    & h1 {
      font-family: 'Oswald';
      font-weight: 500;
      font-size: 118.7px;
      line-height: 3rem;
    }
    & a {
      font-family: 'RobotoSlab';
      font-size: 16px;
    }
    & p , button{
      font-family: 'RobotoSlab';
      font-size: 21px;
    }
  `;
  return (
    <ThemeProvider theme={{ typography: typographyTheme }}>
      <ThemeWrapper>
        <div>
          <Navbar />
        </div>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;
