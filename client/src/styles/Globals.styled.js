import styled from "styled-components";

export const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.extra_gray};
  background-color: ${(props) => props.theme.colors.bg_secondary};
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: ${(props) => props.theme.fontWeight.thin};
  height: 30px;
  width: 100%;
  max-width: 500px;
`



export const DeleteModal = styled.div`
    
`

export const StyledWarningText = styled.h4`
  color: ${(props) => props.theme.colors.warning};
  font-weight: ${(props) => props.theme.fontWeight.reg};  
`

export const BaseButton = styled.button`
  padding: 1rem;
  cursor: pointer;

  border: 0.5px solid gray;
  border-radius: 2px;
  justify-content: center;
  max-height: 3rem;
  text-transform: uppercase;
  transition: 0.07s ease-in;

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


