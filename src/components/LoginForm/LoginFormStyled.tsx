import styled from "styled-components";

const LoginFormStyled = styled.form`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 10px;

  .email,
  .password {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &-box {
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

      &__icon {
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
  }

  .password {
    margin-bottom: 20px;
  }

  .form {
    &__loading {
      position: absolute;
      top: 480px;
      width: 70vw;
      outline: solid 2px ${(props) => props.theme.colors.quaternary};
      animation: borderAnimation 1.5s linear infinite;
    }

    @keyframes borderAnimation {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    &__submit {
      align-self: center;
      font-weight: 600;
      height: 40px;
      letter-spacing: 1px;
      width: 70vw;

      :hover:not(:disabled) {
        border-color: ${(props) => props.theme.colors.quaternary};
      }
    }

    &__image {
      height: 80px;
      position: absolute;
      right: 40px;
      rotate: 10deg;
      top: 225px;
      width: 82px;
    }
  }
`;

export default LoginFormStyled;
