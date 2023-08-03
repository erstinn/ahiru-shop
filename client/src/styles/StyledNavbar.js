import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  background-color: ${(props) => props.theme.colors.nav};
  display: flex;  
  place-items: center;
  padding: 1rem;
 

  & > li {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.large};
    margin: 1rem;
  }
  & img {
    margin-left: auto;
    margin-right: 0.5rem;
    cursor: pointer;
  }
`
export const StyledDropdown = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  margin-left: auto;
  cursor: pointer;
  
  & li {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
  
  & .mini-img {
    max-width: 20px;
    min-width: 15px;
    padding-right: 1px;
    top: 2px;
    position: relative;
  }
  
  & .dropdown-menu {
    width: 6.5rem;
    padding: 1rem;
    margin-top: 4rem;
    margin-left: -4.5rem;
    border: 1px solid;
    border-radius: 10px ;
    place-items: center;
    position: fixed;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};
    
  }
  
  & .visible {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};
    animation: fade-in 150ms forwards;
    
  }
  
  & .hidden{
    animation: fade-out 300ms forwards;
  }

  @keyframes fade-in{
    from { opacity: 0; }
    to { opacity: 1;}
  }
  @keyframes fade-out{
    to { opacity: 0; }
    from   { opacity: 1;}
  }
`

