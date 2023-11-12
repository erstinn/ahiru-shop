import styled from "styled-components";

export const StyledSettings = styled.div`
  display: grid;
  margin: 3rem;
  padding: 5rem 0 5rem 0;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.bg_secondary};
  

`

export const StyledSidebar = styled.div`

  //upload photo plan: ring with + button

  & > button {
    background-color: ${(props) => props.theme.colors.button_secondary};
  }
`

export const StyledLogin = styled.div`
    
`

export const StyledLogout = styled.div`
    
`