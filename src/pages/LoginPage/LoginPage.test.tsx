import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with text 'Sign into your account'", () => {
      const text = "Sign into your account";
      const level = 2;

      renderRouterWithProviders(<LoginPage />);

      const expectedHeading = screen.getByRole("heading", {
        name: text,
        level,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show an input labeled 'Email'", () => {
      const label = "Email";

      renderRouterWithProviders(<LoginPage />);

      const expectedEmailInput = screen.getByLabelText(label);

      expect(expectedEmailInput).toBeInTheDocument();
    });

    test("Then it should show an input labeled 'Password'", () => {
      const label = "Password";

      renderRouterWithProviders(<LoginPage />);

      const expectedPasswordInput = screen.getByLabelText(label);

      expect(expectedPasswordInput).toBeInTheDocument();
    });

    test("Then it should show a button with 'click to login' as aria label", () => {
      const buttonAriaLabel = "click to login";

      renderRouterWithProviders(<LoginPage />);

      const expectedButton = screen.getByRole("button", {
        name: buttonAriaLabel,
      });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show a link with 'Register Now' text", () => {
      const linkLabel = "link to user register form";

      renderRouterWithProviders(<LoginPage />);

      const expectedLink = screen.getByLabelText(linkLabel);

      expect(expectedLink).toBeInTheDocument();
    });
  });
});
