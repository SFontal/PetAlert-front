import styled from "styled-components";

const HeaderStyled = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 15px 5px;

  .logo {
    .link {
      display: flex;
      gap: 10px;

      .text {
        &__title {
          font-family: "Baloo Bhai 2";
          font-size: 40px;
          line-height: 1;
        }

        &__subtitle {
          background-image: linear-gradient(90deg, #e21269, #ff7cb7);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: ${(props) => props.theme.fonts.secondary};
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default HeaderStyled;
