 import {createGlobalStyle, ThemeProvider} from 'styled-components';

const theme = {
    colors : {
        bg: '#F9F9F9',
        bg_secondary: '#f1efe1',
        primary: '#d8d2ab',
        secondary: '#FFE8D6',
        accent: '#fbeac0',
        nav: '#d6d3ec',
        text: '#333333',
        text_secondary: '#fff7dc',
        button: '#E6AF2E',
        warning: '#d35a69',
        confirm: '#b6d069',
        button_secondary: '',
        disabledButton: '#D1CFC3',
        extra_gray: '#c3bbaf',
    },
    fontSizes: {
        vsmall: "calc(4px + 0.4vw)",
        small: "calc(5px + 0.5vw)",
        med: "calc(6px + 0.5vw)",
        large: "calc(7px + 0.7vw)",
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
  
  * {
    font-size: 100%;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.15rem;
  }
  
  html, body, #root, .app {
    height: 100%;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.text};
    vertical-align: baseline;
    
  }

  *, *::before *::after {
    box-sizing: inherit;
    
  }

  h2, h3 {
    font-weight: ${(props) => props.theme.fontWeight.regular};
    line-height: 1.01;
    letter-spacing: 0.10rem;
    margin-top: 0;
  }

  h3  {
    font-size: ${(props) => props.theme.fontSizes.med};
  }
  h4  {
    font-weight: ${(props) => props.theme.fontWeight.thin};
    font-size: ${(props) => props.theme.fontSizes.med};
    
  }


  h2 {
    //line-height: 0.3;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    font-size: ${(props) => props.theme.fontSizes.slarge}; 
  }
  
  h1 {
    font-size: ${(props) => props.theme.fontSizes.vlarge};
  }

  p {
    margin-top: 0;
    font-size: ${(props) => props.theme.fontSizes.medium};
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