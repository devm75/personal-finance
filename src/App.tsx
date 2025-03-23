import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/globalStyles';
const App = () => {

  return <ThemeProvider theme={theme}>
    <>
    <GlobalStyle/>
     <div>Hello, world!</div>x
     </>
     </ThemeProvider>

};
export default App