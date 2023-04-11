import { mockedUiState } from "../../mocks/ui";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Button from "./Button";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  const text = "Register!";
  const className = "register";
  const buttonLabel = "click to register";

  describe("When it receives 'Register!' text, 'register' class, 'click to register' aria-label and it is rendered", () => {
    test("Then it should show a button with 'Register!' on it", () => {
      renderWithProviders(
        <Button className={className} text={text} ariaLabel={buttonLabel} />
      );

      const expectedButton = screen.getByRole("button", { name: buttonLabel });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show the same button as before but disabled if it receives it setted as true", () => {
      const disabled = true;

      renderWithProviders(
        <Button className={className} text={text} ariaLabel={buttonLabel} />,
        { ui: { ...mockedUiState, isSubmitDisabled: disabled } }
      );

      const expectedButton = screen.getByRole("button", { name: buttonLabel });

      expect(expectedButton).toBeDisabled();
    });
  });

  describe("When it receives, in addition to the above, an onClick function and the user click on the button", () => {
    test("Then it should call the function", async () => {
      const onClickFunction = jest.fn();
      const disabled = false;

      renderWithProviders(
        <Button
          className={className}
          text={text}
          ariaLabel={buttonLabel}
          onClick={onClickFunction}
        />,
        { ui: { ...mockedUiState, isSubmitDisabled: disabled } }
      );

      const button = screen.getByRole("button", { name: buttonLabel });

      await userEvent.click(button);

      expect(onClickFunction).toHaveBeenCalled();
    });
  });

  describe("When it receives 'Login!' text, a true isLink prop, and it is rendered", () => {
    test("Then it should show a link with 'Login!' on it", () => {
      const text = "Login!";
      const className = "login";
      const path = "/login";
      const linkLabel = "link to login page";

      renderRouterWithProviders(
        <Button
          className={className}
          text={text}
          path={path}
          ariaLabel={linkLabel}
          isLink={true}
        />
      );

      const expectedLink = screen.getByRole("link", { name: linkLabel });

      expect(expectedLink).toBeInTheDocument();
    });
  });
});
