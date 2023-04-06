import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled className="login">
      <header className="login__header header">
        <span>Hello!</span>
        <h2 className="header__title title">
          Sign into your <span className="title__highlighted">account</span>
        </h2>
      </header>
      <LoginForm />
      <footer className="login__footer footer">
        <span className="footer__register-option register-option">
          Don't have an account?{" "}
          <Link
            to="/login"
            className="register-option__highlighted"
            aria-label="link to user register form"
          >
            Register Now!
          </Link>
        </span>
      </footer>
    </LoginPageStyled>
  );
};

export default LoginPage;
