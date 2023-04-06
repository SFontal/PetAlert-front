import LoginFormStyled from "./LoginFormStyled";
import Button from "../Button/Button";
import { useState } from "react";
import { UserCredentials } from "../../hooks/types";
import useUser from "../../hooks/useUser/useUser";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Password } from "../../assets/icons/hide.svg";
import { ReactComponent as Birdy } from "../../assets/images/birdy.svg";

const ininitalFormData: UserCredentials = { email: "", password: "" };

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const [email, setEmail] = useState(ininitalFormData.email);
  const [password, setPassword] = useState(ininitalFormData.password);

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

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await loginUser({ email, password });

    setEmail(ininitalFormData.email);
    setPassword(ininitalFormData.password);
  };

  return (
    <LoginFormStyled className="login-form" onSubmit={onSubmitHandler}>
      <fieldset className="login-form__email email">
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
      <fieldset className="login-form__password password">
        <label htmlFor="password">Password</label>
        <div className="password-box">
          <input
            className="password-box__input"
            type="password"
            id="password"
            name="password"
            placeholder="Introduce your password"
            autoComplete="off"
            onChange={handlePassword}
            value={password}
            required
          />
          <div className="password-box__icon">
            <Password />
          </div>
        </div>
      </fieldset>
      <Button className="login-form__submit" text="Login!" />
      <Birdy className="login-form__image" />
    </LoginFormStyled>
  );
};

export default LoginForm;
