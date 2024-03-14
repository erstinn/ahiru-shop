import styled from "styled-components";
import {Link } from "react-router-dom";


export const BorderedHeader = styled.h3`
  border: none;
  //margin: 5rem 0 1rem 0;

  &::after {
    display: flex;
    width: 100%;
    content: '';
    padding-top: 0.75rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.text};
    opacity: 25%;
  }
`
export const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.extra_gray};
  background-color: ${(props) => props.theme.colors.bg_secondary};
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: ${(props) => props.theme.fontWeight.thin};
  height: 30px;
  width: 100%;
`



export const DeleteModal = styled.div`
    
`

export const StyledWarningText = styled.h4`
  color: ${(props) => props.theme.colors.warning};
  font-weight: ${(props) => props.theme.fontWeight.reg};  
`

export const BaseSecondaryContainer = styled.div`
  display: grid;
  padding-bottom: 3rem;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.bg_secondary};
  
  & .btn {
    display: flex;
    //random css
    
  }
`

export const BaseButton = styled.button`
  padding: 1rem;
  cursor: pointer;

  border: 0.5px solid gray;
  border-radius: 5px;
  place-content: center;
  max-height: 3rem;
  text-transform: uppercase;
  transition: 0.3s ease-out;

  &:hover {
    box-shadow: 0 3px 10px rgba(151, 151, 106, 0.44); 
  }

`
export const StyledConfirmBtn = styled(BaseButton)`
  color: ${(props) => props.theme.colors.text_secondary};
  background-color: ${(props) => props.theme.colors.confirm};
`

export const StyledDeleteBtn = styled(BaseButton)`
  color: ${(props) => props.theme.colors.text_secondary};
  background-color: ${(props) => props.theme.colors.warning};

`

export const StyledCancelBtn = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.disabledButton};
  margin-right: 1rem;

`

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.extra_blue};
  //color: red;
  
  &:visited {
    color: ${(props) => props.theme.colors.extra_blue};
  }
`
export const BaseSelect = styled.select`
  background-color: ${(props) => props.theme.colors.accent};
  padding: 1rem;
  border: none;
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontSizes.med};
  font-weight: ${(props) => props.theme.fontWeight.thin};
`

export const StyledIconMedium = styled.img`
    margin-left: auto;
    cursor: pointer;
    width: 48px;
    height: 48px;
`

export const StyledIconSmall = styled.img`
    width: 24px;
    height: 24px;
    top: 2px;
    position: relative;
`

// export const BaseRadioBtn = styled.

export const StyledBorderAnimated = styled.div`
    content: '';

    
    &.active {
        border-bottom: 3px solid ${(props) => props.theme.colors.button};
    }
    
    &:after {
        display: flex;
        margin-right: auto;
        height: 3px;
        width: 0;
        background: transparent;
        transition: width .5s ease, background-color .5s ease;
    }

    &:hover:after {
        width: 100%;
        background: ${(props) => props.theme.colors.button};
    }
`
