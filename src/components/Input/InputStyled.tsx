import styled from "styled-components";

const InputStyled = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .box {
    align-items: center;
    display: flex;

    &__input {
      border-radius: 5px;
      height: 40px;
      padding: 10px;
      width: 100%;

      :disabled {
        outline-offset: -1px;
        outline: solid 2px white;
      }

      :focus {
        outline-color: ${(props) => props.theme.colors.quaternary};
      }

      &::placeholder {
        color: ${(props) => props.theme.colors.placeholder};
      }
    }

    .icon {
      align-items: center;
      background-color: ${(props) => props.theme.colors.terciary};
      border-radius: 0 4px 4px 0;
      display: flex;
      height: 38px;
      justify-content: center;
      padding: 0 5px;
      position: absolute;
      right: 21px;
      width: 40px;

      svg {
        height: 30px;
        width: 30px;
      }
    }
  }
`;

export default InputStyled;
