import { keyframes } from 'styled-components';

export const colorFadeIn = keyframes`
  from {
    background-color: ${(props) => props.theme.colors.nav};
  }
  to {
    opacity: 1;
    background-color: ${(props) => props.theme.colors.button};
  }
`