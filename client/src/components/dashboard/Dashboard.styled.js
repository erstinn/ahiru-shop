import styled from "styled-components";

export const StyledDashboard = styled.div`
    margin: 5rem;
  
  & h1 {
    text-align: center;
  }
  
  & > h2 {
    font-weight: ${(props) => props.theme.fontWeight.thin};
    margin: 8rem 0 4rem 6rem;
  }

  & h3 {
    font-weight: ${(props) => props.theme.fontWeight.thin};
    font-size: ${(props) => props.theme.fontSizes.large};
    margin: 1rem;
    
  }
  & p {
    font-size: ${(props) => props.theme.fontSizes.small};
    padding: 0;
    margin: 1rem;
  }
`
