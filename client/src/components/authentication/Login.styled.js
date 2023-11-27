import styled from "styled-components";
import {StyledModalContainer} from "../modals/Modal.styled.js";
import {BaseSecondaryContainer, BorderedHeader, StyledConfirmBtn, StyledInput} from "../../styles/Globals.styled.js";


export const StyledErrorText = styled.span`
  color: ${(props) => props.theme.colors.warning};
`
export const StyledGreeting = styled(BorderedHeader)`
  font-size: ${(props) => props.theme.fontSizes.slarge} !important;
  padding-top: 1rem;
`

export const StyledAuthContainer = styled(BaseSecondaryContainer)`
  margin: 5rem;
  padding: 0 5rem 3rem 5rem;
`

// Login:

export const StyledLoginBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;

  * {
    margin-top: 2rem;
  }
  
  & > p {
    margin: 4rem 0 0.5rem 0;
    opacity: 0.5;
  }
`

export const StyledLoginInput = styled(StyledInput)`
    margin-bottom: 0.5rem;
`



export const StyledLoginBtn = styled(StyledConfirmBtn)`
  margin-top: 1rem;
`

// Register:
export const StyledRegBody = styled(StyledLoginBody)`
    
`

export const StyledRegBtn = styled(StyledConfirmBtn)`
  margin-top: 3rem;
`

export const StyledRegInput = styled(StyledInput)`
  font-size: ${(props) => props.theme.fontSizes.large};
`

// Modals:
export const StyledLoginModal = styled(StyledModalContainer)`
`