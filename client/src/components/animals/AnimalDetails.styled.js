import styled from "styled-components";
import {BaseButton} from "../../styles/Globals.styled.js";

export const StyledAnimal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 3rem;
  padding: 5rem 0 5rem 0;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.bg_secondary};
  place-items: center;

  & img {
    border: 1px solid #BBBFBF;
    border-radius: 5px;
    aspect-ratio: 4/3;
  }


`

export const StyledAnimalDetails = styled.div`
  display: inherit;
  grid-template-columns: 0.4fr 1fr;

  & p {
    font-size: ${(props) => props.theme.fontSizes.med};
    padding-bottom: 16px;
    border-bottom: 1px solid #b0b0b9;
    
  }
`


export const StyledPurchaseButton = styled(BaseButton)`
  display: flex;
  margin-left: auto;
  place-items: center;
  width: 100%;
  
  background-color: ${(props) => props.sold ? props.theme.colors.disabledButton : props.theme.colors.button};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: ${(props) => props.theme.fontWeight.thin};
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.sold ? "gray" : props.theme.colors.text};
  
  
  
  & > img {
    height: 36px;
    width: 36px;
  }
`

export const StyledCounterButton = styled(BaseButton)`
  width: 100%;
  height: 3rem;
  margin-inline: 0.5rem;
  background-color: ${(props) => props.isMaxMin ? props.theme.colors.disabledButton : props.theme.colors.button};
  color: ${(props) => props.isMaxMin ? "gray" : props.theme.colors.text};
  border: 0.1px solid #BBBFBF;
  border-radius: 2px;
  
  box-shadow: ${(props) => props.isMaxMin && "none !important"};
`
export const StyledCounter = styled.div`
  display: flex;
  place-items: center;
`