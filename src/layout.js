import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.theme === "purple" ? "purple" : "white")};
  }
`;
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme="purple" />
      {children}
    </React.Fragment>
  );
}
