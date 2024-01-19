import styled from 'styled-components';


export const StyledNavbar = styled.nav`
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
  & img {
    margin-left: auto;
    margin-right: 0.5rem;
    cursor: pointer;
    width: 48px;
    height: 48px;
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

  & .mini-img {
    width: 24px;
    height: 24px;
    top: 2px;
    position: relative;
  }

  & .dropdown-profile {
    max-width: 150rem;
    width: 100%;
    place-items: center;
    position: relative;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};

  }
  
  & .dropdown-profile-content {
    position: absolute;
    top: 6.7rem;
    right: 2rem;
    border: 1px solid;
    border-radius: 10px;
    padding: 1rem;
    z-index: 1;
  }

  & .dropdown-cart {
    max-width: 500rem;
    position: relative;
    width: 100%;
  }
  
  & .dropdown-cart-content {
    position: absolute;
    top: 5.5rem;
    right: 8rem;
    border: 1px solid;
    border-radius: 10px;
    padding: 1rem;
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

