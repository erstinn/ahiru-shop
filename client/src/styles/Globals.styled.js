import styled from "styled-components";

export const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.extra_gray};
  background-color: ${(props) => props.theme.colors.bg_secondary};
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: ${(props) => props.theme.fontWeight.thin};
  height: 30px;
`