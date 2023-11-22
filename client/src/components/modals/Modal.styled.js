import styled from "styled-components";


export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  backdrop-filter: blur(5px);
  z-index: 1;
`
export const StyledModalContainer = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.bg};
  width: 35rem;
  height: 15rem;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0 3px 10px rgba(151, 151, 106, 0.44);
  z-index: 2;
  
  & .modal-content {
    display: grid;
    margin: 1rem 0 0 2rem;
    width: 100%;
  }
  
  & .btn-container {
    display: flex;
    justify-content: flex-end;
    margin: 3rem 1rem 0 0;
  }

`
