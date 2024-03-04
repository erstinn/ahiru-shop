import styled from 'styled-components';
import {StyledIconSmall} from "../../styles/Globals.styled.js";


export const NavbarStyled = styled.nav`
  background-color: ${(props) => props.theme.colors.nav};
  display: flex;  
  place-items: center;
  padding: 1rem;
  
  
  & .option.active {
    //border animation: https://stackoverflow.com/questions/26726436/css-bottom-border-transition-expand-from-middle
    border-bottom: 3px solid ${(props) => props.theme.colors.button};
  }
  
  & .option:after {
    content: '';
    display: flex;
    margin-right: auto;
    
    height: 3px;
    width: 0;
    background: transparent;
    transition: width .5s ease, background-color .5s ease;
  }
  & .option:hover:after {
    width: 100%;
    background: ${(props) => props.theme.colors.button};
  }

  & > li {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight: ${(props) => props.theme.fontWeight.thin};
    margin: 1rem 2rem 1rem 1rem;
  }

  & > .right-container {
      display: grid;
      grid-template-columns: 4rem 4rem;
      gap: 10px;
      margin-left: auto;
  }
`

export const StyledDropdownGroup = styled.div`
  display: grid;
  margin-left: auto;
  grid-template-columns: 5rem 5rem;
`
export const StyledDropdown = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  cursor: pointer;

  & li, span {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
    
  & .visible {
    display: block;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};
    animation: fade-in 150ms forwards;
  }

  & .hidden {
    animation: fade-out 300ms forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade-out {
    to {
      opacity: 0;
    }
    from {
      opacity: 1;
    }
  }
`

export const StyledProfile = styled(StyledDropdown)`
    max-width: 150rem;
    width: 100%;
    place-items: center;
    position: relative;
    // background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};

    & .profile-content {
        position: absolute;
        top: 5rem;
        right: 1rem;
        border: 1px transparent;
        border-radius: 10px;
        padding: 1rem 0.5rem 1rem 1rem;
        min-width: 8rem;
        z-index: 1;
    }
    
    & > div > li {
        padding-bottom: 0.5rem;
    }
    
    .content-label {
        place-content: center;
    }
    // & .icon > div > li {
    //     $ {StyledIconSmall};
    // }

`

export const StyledCart = styled(StyledDropdown)`
    max-width: 500rem;
    position: relative;
    width: 100%;
    
    & .cart-content {
        position: absolute;
        top: 5rem;
        right: 3rem;
        border: 1px transparent;
        border-radius: 10px;
        padding: 1rem;
    }
    

`

export const StyledProfileDropdownIcon = styled(StyledIconSmall)`
    margin-right: 1rem;
`

export const StyledCartDropdownIcon = styled(StyledIconSmall)`
`