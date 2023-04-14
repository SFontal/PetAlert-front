import useUser from "../../hooks/useUser/useUser";
import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { ReactComponent as Birdy } from "../../assets/images/birdy.svg";
import Button from "../Button/Button";
import LoadingButton from "../LoadingButton/LoadingButton";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  ableSubmitActionCreator,
  disableSubmitActionCreator,
  hidePasswordActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import Input from "../Input/Input";

const initialFormData = {
  email: "",
  password: "",
  isInputDisabled: true,
  isLoading: false,
};

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();
  const dispatch = useAppDispatch();
  const { isPasswordHide } = useAppSelector((state) => state.ui);

  const [email, setEmail] = useState(initialFormData.email);
  const [password, setPassword] = useState(initialFormData.password);
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

  const onClickSubmitHandler = () => {
    setIsLoading(true);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await loginUser({ email, password });

    setEmail(initialFormData.email);
    setPassword(initialFormData.password);
    setIsInputDisabled(initialFormData.isInputDisabled);
    setIsLoading(initialFormData.isLoading);
    dispatch(disableSubmitActionCreator());
    dispatch(hidePasswordActionCreator());
  };

  return (
    <LoginFormStyled className="login__form form" onSubmit={onSubmitHandler}>
      <Input
        name="email"
        type="email"
        value={email}
        onChange={emailInputHandler}
        required={true}
      />
      <Input
        name="password"
        type={isPasswordHide ? "password" : "text"}
        value={password}
        onChange={passwordInputHandler}
        disabled={isInputDisabled}
        required={true}
      />
      <Button
        className="form__submit"
        text="Login!"
        ariaLabel="click to login"
        onClick={onClickSubmitHandler}
      />
      {isLoading && (
        <LoadingButton className="form__loading" ariaLabel="Loading" />
      )}
      <Birdy className="form__image" role="img" />
    </LoginFormStyled>
  );
};

export default LoginForm;
