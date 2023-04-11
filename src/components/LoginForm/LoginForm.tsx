import useUser from "../../hooks/useUser/useUser";
import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as HiddenPassword } from "../../assets/icons/hide.svg";
import { ReactComponent as UnhiddenPassword } from "../../assets/icons/unhide.svg";
import { ReactComponent as Birdy } from "../../assets/images/birdy.svg";
import Button from "../Button/Button";

const initialFormData = { email: "", password: "", isHidden: true };

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const [email, setEmail] = useState(initialFormData.email);
  const [password, setPassword] = useState(initialFormData.password);
  const [isHidden, setIsHidden] = useState(initialFormData.isHidden);

  const handleEmail = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(value);
  };

  const handlePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
  };

  const togglePasswordVisibility = () => {
    setIsHidden(!isHidden);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await loginUser({ email, password });

    setEmail(initialFormData.email);
    setPassword(initialFormData.password);
    setIsHidden(initialFormData.isHidden);
  };

  return (
    <LoginFormStyled className="login__form form" onSubmit={onSubmitHandler}>
      <fieldset className="form__email email">
        <label htmlFor="email">Email</label>
        <div className="email-box">
          <input
            className="email-box__input"
            type="email"
            id="email"
            name="email"
            placeholder="Introduce your e-mail"
            autoComplete="off"
            onChange={handleEmail}
            value={email}
            required
          />
          <div className="email-box__icon">
            <Mail />
          </div>
        </div>
      </fieldset>
      <fieldset className="form__password password">
        <label htmlFor="password">Password</label>
        <div className="password-box">
          <input
            className="password-box__input"
            type={isHidden ? "password" : "text"}
            id="password"
            name="password"
            placeholder="Introduce your password"
            autoComplete="off"
            onChange={handlePassword}
            value={password}
            required
          />
          <div className="password-box__icon icon">
            {isHidden ? (
              <HiddenPassword
                className="icon__hidden-password"
                role="img"
                title="Unhide password"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <UnhiddenPassword
                className="icon__unhidden-password"
                role="img"
                title="Hide password"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
        </div>
      </fieldset>
      <Button className="form__submit" text="Login!" />
      <Birdy className="form__image" />
    </LoginFormStyled>
  );
};

export default LoginForm;
