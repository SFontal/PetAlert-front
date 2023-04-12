import styled from "styled-components";

const ModalStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  .modal__background {
    background-color: ${(props) => props.theme.colors.main};
    height: 88vh;
    opacity: 0.75;
    position: absolute;
    top: 90px;
    width: 100vw;
    z-index: 1;
  }

  .alert {
    background-color: ${(props) => props.theme.colors.main};
    border: solid 3px ${(props) => props.theme.colors.quaternary};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 200px;
    min-width: 240px;
    max-width: 300px;
    padding: 25px;
    position: absolute;
    top: 40%;
    z-index: 2;

    .images {
      align-items: flex-start;
      display: flex;
      justify-content: space-between;

      &__pet {
        transform: scaleX(-1);
      }

      &__close-button {
        padding: 0;
      }
    }

    .message {
      align-self: center;
      font-family: "Baloo Bhai 2";
      font-weight: 600;
      font-size: 1.13rem;

      &__highlighted {
        color: ${(props) => props.theme.colors.quaternary};
      }
    }
  }
`;

export default ModalStyled;
