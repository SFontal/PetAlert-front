import { screen } from "@testing-library/react";
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
const buttonAriaLabel = "click to login";

describe("Given LoginForm component", () => {
  describe("When it is rendered", () => {
    const typeAttribute = "type";
    const typePassword = "password";
    const typeText = "text";

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

    test("Then it should show an input labeled 'Password' with its attribute type setted as pasword", () => {
      renderWithProviders(<LoginForm />);

      const expectedPasswordInput = screen.getByLabelText(passwordLabel);

      expect(expectedPasswordInput).toHaveAttribute(
        typeAttribute,
        typePassword
      );
    });

    test("Then it should show an input labeled 'Password' with its attribute type setted as text if the user clicks on its icon", async () => {
      const iconTitle = "Unhide password";

      renderWithProviders(<LoginForm />);

      const passwordInputIcon = screen.getByRole("img", { name: iconTitle });
      await userEvent.click(passwordInputIcon);

      const expectedPasswordInput = screen.getByLabelText(passwordLabel);

      expect(expectedPasswordInput).toHaveAttribute(typeAttribute, typeText);
    });

    test("Then it should show a button with 'click to login' as aria label", () => {
      renderWithProviders(<LoginForm />);

      const expectedButton = screen.getByRole("button", {
        name: buttonAriaLabel,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When the user writes in the email input", () => {
    test("Then the value of this input should change", async () => {
      renderWithProviders(<LoginForm />);

      const emailInput = screen.getByRole("textbox", { name: emailLabel });

      await userEvent.type(emailInput, email);

      expect(emailInput).toHaveValue(email);
    });
  });

  describe("When the user writes in the password input", () => {
    test("Then the value of this input should change", async () => {
      renderWithProviders(<LoginForm />);

      const emailInput = screen.getByLabelText(emailLabel);
      await userEvent.type(emailInput, email);

      const passwordInput = screen.getByLabelText(passwordLabel);

      await userEvent.type(passwordInput, password);

      expect(passwordInput).toHaveValue(password);
    });
  });

  describe("When the user submits the form", () => {
    test("The loginUser function should be called", async () => {
      renderWithProviders(<LoginForm />);

      const emailInput = screen.getByLabelText(emailLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);
      const submitButton = screen.getByRole("button", {
        name: buttonAriaLabel,
      });

      await userEvent.type(emailInput, email);
      await userEvent.type(passwordInput, password);
      await userEvent.click(submitButton);

      expect(mockedLoginUser).toHaveBeenCalledWith({ email, password });
    });
  });
});
