import styled from "styled-components";
import {StyledModalContainer} from "../modals/Modal.styled.js";
import {BaseSecondaryContainer, BorderedHeader, StyledConfirmBtn, StyledInput} from "../../styles/Globals.styled.js";
import {device} from "../../styles/GlobalMedia.styled.js";


export const StyledErrorText = styled.div`
  color: ${(props) => props.theme.colors.warning};
`
export const StyledGreeting = styled(BorderedHeader)`
  margin-top: 2rem;
  font-size: ${(props) => props.isMobile 
          ? `${props.theme.fontSizes.slarge} !important`
          : `${props.theme.fontSizes.large} !important`};
  padding-top: 1rem;
`

export const CenterDiv = styled.div`
  display: grid;
  place-items: center;
`

export const StyledAuthContainer = styled(BaseSecondaryContainer)`
  display: grid;
  margin-top: 10rem;
  margin-inline: 5rem;
  padding: 0 5rem 3rem 5rem;
  
  
  @media only screen and ${device.laptop} {
    width: 100%;
    max-width: 75rem;
  }

  
`

// Login:

export const StyledLoginBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;

  & label {
    margin-top: 1rem;
  }
  
  & > p {
    margin: 4rem 0 0.5rem 0;
    opacity: 0.5;
  }

  & .modal-content > p {
    margin-top: 1rem;
  }
  
  
  & .modal-content > label {
    display: block;
    & > input {
      margin-top: 1rem;
    }
  }
  
`

export const StyledLoginInput = styled(StyledInput)`
    margin-bottom: 0.5rem;
`



export const StyledLoginBtn = styled(StyledConfirmBtn)`
  margin-top: 1rem;
  width: 100%;
`

// Register:
export const StyledRegBody = styled(StyledLoginBody)`
  display: grid;
    @media only screen and ${device.laptop} {
      grid-template-columns: repeat(2, 0.5fr);
      gap: 20px;
    }
`

export const StyledRegBtn = styled(StyledConfirmBtn)`
  margin-top: 3rem;
  width: 100%;
`

export const StyledRegInput = styled(StyledInput)`
  font-size: ${(props) => props.theme.fontSizes.large};
`

// Modals:
export const StyledLoginModal = styled(StyledModalContainer)`
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  background-color: ${(props) => props.theme.colors.bg_secondary};
  max-width: 35rem;
  width: 100%;
  padding: 3rem;

  //greeting
  & > h3 { 
    max-width: 34rem;
    width: 100%;
  }
  
  & .modal-content {
    max-width: inherit;
    width: 100%;
    justify-self: center;
    
    & > label {
      max-width: inherit;
      
      & > input {
        max-width: 33.5rem;
      }
    }
    
    & > button {
      margin: 1rem 0 1rem 0;
    }
  }
`
