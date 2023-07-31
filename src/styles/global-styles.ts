import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Averta-Regular';
    font-weight: 400;
    font-style: normal;
    src: local('Averta'), local('Averta Regular'),
      url() format('opentype');
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'AvertaStdCY', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"',  'Roboto', '"Helvetica Neue"', 
      'Arial', 'sans-serif';
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'AvertaStdCY', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"',  'Roboto', '"Helvetica Neue"', 
      'Arial', 'sans-serif';
    line-height: 1.5em;
  }

  input, select, input::placeholder {
    font-family: 'AvertaStdCY', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"',  'Roboto', '"Helvetica Neue"', 
    'Arial', 'sans-serif';
    font-size: inherit;
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance:none;
}
`;
