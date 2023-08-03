import styled from "styled-components";

export const StyledDashboard = styled.div`
    margin: 2rem;
  
  & > h1{
    margin-bottom: 0.5rem;
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
