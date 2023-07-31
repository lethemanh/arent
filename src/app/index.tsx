import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import RootLayout from './layouts/rootLayout';
import theme from '../theme/muiTheme';
import { ThemeProvider } from 'styled-components';

export function App() {
  return (
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <div id="main">
          <div id="status-bar"></div>
          <RootLayout />
        </div>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
