import useUser from "../../hooks/useUser/useUser";
import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as HiddenPassword } from "../../assets/icons/hide.svg";
import { ReactComponent as UnhiddenPassword } from "../../assets/icons/unhide.svg";
import { ReactComponent as Birdy } from "../../assets/images/birdy.svg";
import Button from "../Button/Button";
import LoadingButton from "../LoadingButton/LoadingButton";
import { useAppDispatch } from "../../store/hooks";
import {
  ableSubmitActionCreator,
  disableSubmitActionCreator,
} from "../../store/features/uiSlice/uiSlice";

const initialFormData = {
  email: "",
  password: "",
  isHidden: true,
  isInputDisabled: true,
  isLoading: false,
};

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState(initialFormData.email);
  const [password, setPassword] = useState(initialFormData.password);
  const [isHidden, setIsHidden] = useState(initialFormData.isHidden);
  const [isInputDisabled, setIsInputDisabled] = useState(
    initialFormData.isInputDisabled
  );
  const [isLoading, setIsLoading] = useState(initialFormData.isLoading);

  const emailInputHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(value);

    const emailInput = document.getElementById("email") as HTMLInputElement;
    setIsInputDisabled(!emailInput.checkValidity());
  };

  const passwordInputHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);

    if (value.length === 8) {
      dispatch(ableSubmitActionCreator());
    }

    if (value.length === 7) {
      dispatch(disableSubmitActionCreator());
    }
  };

  const togglePasswordVisibilityHandler = () => {
    setIsHidden(!isHidden);
  };

  const onClickSubmitHandler = () => {
    setIsLoading(true);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await loginUser({ email, password });

    setEmail(initialFormData.email);
    setPassword(initialFormData.password);
    setIsHidden(initialFormData.isHidden);
    setIsInputDisabled(initialFormData.isInputDisabled);
    setIsLoading(initialFormData.isLoading);
    dispatch(disableSubmitActionCreator());
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
            aria-placeholder="Introduce your e-mail"
            autoComplete="off"
            onChange={emailInputHandler}
            value={email}
            required
          />
          <div className="email-box__icon icon">
            <Mail className="icon__email" />
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
            aria-placeholder="Introduce your password"
            autoComplete="off"
            onChange={passwordInputHandler}
            value={password}
            required
            disabled={isInputDisabled}
          />
          <div className="password-box__icon icon">
            {isHidden ? (
              <HiddenPassword
                className="icon__hidden-password"
                role="img"
                title="Unhide password"
                onClick={togglePasswordVisibilityHandler}
              />
            ) : (
              <UnhiddenPassword
                className="icon__unhidden-password"
                role="img"
                title="Hide password"
                onClick={togglePasswordVisibilityHandler}
              />
            )}
          </div>
        </div>
      </fieldset>
      <Button
        className="form__submit"
        text="Login!"
        ariaLabel="click to login"
        onClick={onClickSubmitHandler}
      />
      {isLoading ? (
        <LoadingButton className="form__loading" ariaLabel="Loading" />
      ) : null}
      <Birdy className="form__image" role="img" />
    </LoginFormStyled>
  );
};

export default LoginForm;
