import styled from "styled-components";

const ButtonStyled = styled.button`
  align-items: center;
  background-color: ${(props) => props.theme.colors.terciary};
  border: solid 2px ${(props) => props.theme.colors.terciary};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.main};
  display: flex;
  font-family: "Baloo Bhai 2";
  font-size: 1.25rem;
  height: 30px;
  justify-content: center;
  padding: 5px;

  :disabled {
    opacity: 0.75;
  }
`;

export default ButtonStyled;
