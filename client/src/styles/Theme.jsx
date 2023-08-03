 import {createGlobalStyle, ThemeProvider} from 'styled-components';

const theme = {
    colors : {
        bg: '#F9F9F9',
        primary: '#d8d2ab',
        secondary: '#FFE8D6',
        accent: '#F8F9FD',
        nav: '#d6d3ec',
        text: '#333333'
    },
    fontSizes: {
        small: "calc(5px + 0.5vw)",
        med: "calc(6px + 0.5vw)",
        large: "calc(7px + 1vw)",
        slarge: "calc(10px + 2vw)",
        vlarge: "calc(10px + 5vw)",
    },
    fontWeight: {
        thin: 100,
        reg: 400,
        bold: 700
    }
}

export const GlobalStyle = createGlobalStyle`
  html, body, #root, .app {
    height: 100%;
    width: 100%;
    margin: 0;
    font-size: 100%;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    background-color: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.text};
    vertical-align: baseline;
  }

  *, *::before *::after {
    box-sizing: inherit;
  }

  h2, h3 {
    font-weight: 1000;
    line-height: 1.01;
    margin-top: 0;
  }


  h2 {
    //line-height: 0.3;
    font-weight: ${(props) => props.theme.fontWeight.reg};
    font-size: ${(props) => props.theme.fontSizes.slarge};
  }
  
  h1 {
    font-size: ${(props) => props.theme.fontSizes.vlarge};
  }

  p {
    margin-top: 0;
    font-size: calc(12px + 0.8vw);
    color: ${(props) => props.theme.colors.text};
  }

  a, a:visited, a:active {
    text-decoration: none;
    color: inherit; //remove color when clicked
  }

  li {
    list-style-type: none; //remove auto bullet point
  }
`
export function Theme({ children }) {
    return <ThemeProvider theme={theme}> {children} </ThemeProvider>
}