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
const iconTitle = "Unhide password";
const buttonText = "Login!";

describe("Given LoginForm component", () => {
  describe("When it is rendered", () => {
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

    test("Then it should show an icon of a cross out eye", () => {
      renderWithProviders(<LoginForm />);

      const expectedImage = screen.getByRole("img", { name: iconTitle });

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Login!' on it", () => {
      renderWithProviders(<LoginForm />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the cross out eye icon", () => {
    test("Then the icon should change", async () => {
      renderWithProviders(<LoginForm />);

      const expectedIcon = screen.getByRole("img", { name: iconTitle });

      await act(async () => await userEvent.click(expectedIcon));

      expect(expectedIcon).not.toBeInTheDocument();
    });

    test("Then the icon should change to an open eye", async () => {
      const newIconTitle = "Hide password";

      renderWithProviders(<LoginForm />);

      const crossOutEyeIcon = screen.getByRole("img", { name: iconTitle });
      await act(async () => await userEvent.click(crossOutEyeIcon));

      const expectedNewIcon = screen.getByRole("img", { name: newIconTitle });

      expect(expectedNewIcon).toBeInTheDocument();
    });
  });

  describe("When the user writes in the email input", () => {
    test("Then the value of this input should change", async () => {
      renderWithProviders(<LoginForm />);

      const emailInput = screen.getByRole("textbox", { name: emailLabel });

      await act(async () => await userEvent.type(emailInput, email));

      expect(emailInput).toHaveValue(email);
    });
  });

  describe("When the user writes in the password input", () => {
    test("Then the value of this input should change", async () => {
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
