import styled from "styled-components";

const LoginPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 15px 10px;

  .header {
    text-align: center;
    align-self: center;
    font-weight: 600;
    font-family: "Baloo Bhai 2";

    > * {
      font-size: 1.5rem;
    }
  }

  [class*="highlighted"] {
    color: ${(props) => props.theme.colors.quaternary};
  }

  .footer {
    display: block;
    text-align: center;
  }
`;

export default LoginPageStyled;
