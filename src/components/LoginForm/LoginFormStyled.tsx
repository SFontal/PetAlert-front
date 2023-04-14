import styled from "styled-components";

const LoginFormStyled = styled.form`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 10px;

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
