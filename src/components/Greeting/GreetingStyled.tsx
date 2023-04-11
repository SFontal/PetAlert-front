import styled from "styled-components";

const GreetingStyled = styled.aside`
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  display: flex;
  gap: 5px;
  justify-content: space-between;
  margin: 0 5px;
  padding: 5px;

  .greeting {
    display: flex;
    flex-direction: column;

    .hello {
      display: flex;
      gap: 5px;

      &__text {
        font-family: "Baloo Bhai 2";
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.5;
      }

      &__logout svg {
        height: 20px;
        width: 20px;
      }
    }

    .phrase__highlighted {
      color: ${(props) => props.theme.colors.quaternary};
    }

    &__avatar {
      border-radius: 5px;
    }
  }

  .buttons {
    align-self: flex-end;
    display: flex;
    gap: 5px;

    &__login {
      background-color: ${(props) => props.theme.colors.main};
      border-color: ${(props) => props.theme.colors.quaternary};
      color: ${(props) => props.theme.colors.terciary};
      font-weight: 700;

      &:hover {
        border-color: ${(props) => props.theme.colors.terciary};
      }
    }

    &__register:hover {
      background-color: ${(props) => props.theme.colors.main};
      color: ${(props) => props.theme.colors.terciary};
      font-weight: 700;
    }
  }

  .user-info__image {
    height: 80px;
    position: absolute;
    right: 5px;
    width: 81px;
  }
`;

export default GreetingStyled;
