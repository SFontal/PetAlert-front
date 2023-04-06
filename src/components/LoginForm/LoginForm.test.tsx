import { act, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockedUserCredentials, mockedUserState } from "../../mocks/user";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import LoginForm from "./LoginForm";

const mockedLoginUser = jest.fn();
jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockedLoginUser,
}));

const { email, password } = mockedUserCredentials;
const emailLabel = "Email";
const passwordLabel = "Password";
const buttonText = "Login!";

describe("Given LoginForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show an input labeled 'Email'", () => {
      renderWithProviders(<LoginForm />, mockedUserState);

      const expectedEmailInput = screen.getByRole("textbox", {
        name: emailLabel,
      });

      expect(expectedEmailInput).toBeInTheDocument();
    });

    test("Then it should show an input labeled 'Password'", () => {
      renderWithProviders(<LoginForm />);

      const expectedPasswordInput = screen.getByLabelText(passwordLabel);

      expect(expectedPasswordInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Login!' on it", () => {
      renderWithProviders(<LoginForm />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When the user writes in the email input", () => {
    test("Then the value of this input changes", async () => {
      renderWithProviders(<LoginForm />);

      const emailInput = screen.getByRole("textbox", { name: emailLabel });

      await act(async () => await userEvent.type(emailInput, email));

      expect(emailInput).toHaveValue(email);
    });
  });

  describe("When the user writes in the password input", () => {
    test("Then the value of this input changes", async () => {
      renderWithProviders(<LoginForm />);

      const passwordInput = screen.getByLabelText(passwordLabel);

      await act(async () => await userEvent.type(passwordInput, password));

      expect(passwordInput).toHaveValue(password);
    });
  });

  describe("When the user submits the form", () => {
    test("The loginUser function should be called", async () => {
      renderWithProviders(<LoginForm />);

      const emailInput = screen.getByLabelText(emailLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);
      const submitButton = screen.getByRole("button", { name: buttonText });

      await waitFor(async () => {
        await userEvent.type(emailInput, email);
        await userEvent.type(passwordInput, password);
        await userEvent.click(submitButton);
      });

      expect(mockedLoginUser).toHaveBeenCalledWith({ email, password });
    });
  });
});
