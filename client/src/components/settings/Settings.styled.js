import styled from "styled-components";

export const StyledSettings = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 0.75fr;
  margin: 3rem;
  padding: 5rem 0 5rem 0;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.bg_secondary};
  place-content: center;
  
  //min-height: calc(100vh-);
  //max-height: 100%;

`

export const StyledMainBody = styled.div`
  //margin-top: 5rem;
  
  & .warning {
    color: ${(props) => props.theme.colors.warning};
  }
  
  & h3 {
    border: none;
    margin: 5rem 0 1rem 0;
    &::after {
      display: flex;
      width: 90%;
      content: '';
      padding-top: 0.75rem;
      border-bottom: 1px solid ${(props) => props.theme.colors.text};
      opacity: 25%;
    }
  }
 
  & .btn-26 {
    width: 26px;
    height: 26px;
  }
    
    
    
    
`

export const StyledSidebar = styled.div` 
  margin: 1rem 1rem 1rem 2rem;

  &:hover {
    
  }
  & > button {
    background-color: ${(props) => props.theme.colors.button_secondary};
  }
  & .profile-section {
    cursor: pointer;
    margin-left: 3rem;
  }
  
  & .add-button {
    width: 36px;
    height: 36px;
    position: relative;
    right: 30px;
    top: 5px;
  }
  
  & .options-nav{
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
  }

  //option animation logic from http://alticreation.com
  .option {
    //display: inline-block;
    padding: 0.75rem 1.25rem;
    width: 50%;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  
  & .option::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: -2;
  }
  
  & .option::before {
    content: ''; //reminder css pseudo selectors need this for animations
    position: absolute; //)
    bottom: 0;  
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${(props) => props.theme.colors.button};
    transition: all 0.3s;
    z-index: -1;
  }

  & .option:hover {
    color: #fff;

  }
  & .option:hover::before {
    width: 100%;
  }
  
  & .option.active {
    color:  ${(props) => props.theme.colors.text_secondary};
    background-color: ${(props) => props.theme.colors.button};
  }
  
`
export const StyledWarningBtn = styled.button`
  color: ${(props) => props.theme.colors.text_secondary};
  background-color: ${(props) => props.theme.colors.warning};
  border: 0.1px solid #BBBFBF;
  border-radius: 2px;
  padding: 0.7rem;
  width: 25%;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.med};
  text-transform: uppercase;
`

export const StyledPaymentContainer = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  width: 100%;
  max-width: 20%;
  align-items: center;
  
  & .add-button {
    display: inherit;
    place-items: center;
    cursor: pointer;
    
  }
  & .account-title {
    margin-bottom: 0.7rem;
  }
  
  & p {
    font-weight: ${(props) => props.theme.fontWeight.thin};
  }
`

export const StyledDeleteModal = styled.div`
  width: 50%;
  height: 50%;
  
  
`