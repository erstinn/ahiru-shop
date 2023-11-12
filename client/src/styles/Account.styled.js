import styled from "styled-components";
import {colorFadeIn} from "./animations/animations.js";

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

  &:hover {
    
  }
  & > button {
    background-color: ${(props) => props.theme.colors.button_secondary};
  }
  & .profile-section {
    cursor: pointer;
  }
  
  & .add-button {
    width: 36px;
    height: 36px;
    position: relative;
    right: 30px;
    top: 5px;
  }
  
  & .options-nav{
    
  }
  
  & .option {
    transition: all .3s;
    background-color: transparent;
    cursor: pointer;
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
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${(props) => props.theme.colors.button};
    transition: all .3s;
    z-index: -1;
  }
  
  & .option:hover {
    color: #fff;
    & .option::before {
      width: 100%;
    }
  }
`

export const StyledLogin = styled.div`
    
`

export const StyledLogout = styled.div`
    
`