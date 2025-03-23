import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
  body {
    font-family: ${(props) => props.theme.typography.preset1.fontFamily};
    background: ${(props) => props.theme.colors.white};
  }
`;

export default GlobalStyle;