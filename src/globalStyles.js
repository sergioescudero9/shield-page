import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    /* background: ${props => props.theme.colors.secondary}; */
    font-family: 'helvetica neue';
    font-size: ${props => props.theme.sizes.fonts.main};
    font-weight: 200;
  }
  a {
    color: black
  }
  body {
    color: black;
    font-family: 'Noto Sans', sans-serif;
    transition-property: color, background-color;
    transition-duration: 0.6s;
    margin: 0;
    &.dark{
      background-color: black;
      color: white;
    }
    &.dark a{
      color: white;
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  h1,h2,h3,h4,h5,p {
    margin: 0;
  }
`;
export default GlobalStyles;
