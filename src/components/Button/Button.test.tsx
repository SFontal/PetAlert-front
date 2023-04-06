import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Button from "./Button";
import { screen } from "@testing-library/react";

describe("Given a Button componet", () => {
  describe("When it receives 'View +' text and it is rendered", () => {
    test("The it should show a button with 'View +' on it", () => {
      const text = "View +";
      const className = "view-more";

      renderWithProviders(<Button className={className} text={text} />);

      const expectedButton = screen.getByRole("button", { name: text });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When it receives 'Login!' text, a true isLink prop, and it is rendered", () => {
    test("The it should show a link with 'Login!' on it", () => {
      const text = "Login!";
      const className = "login";
      const path = "/login";

      renderWithProviders(
        <Button className={className} text={text} path={path} isLink={true} />
      );

      const expectedButton = screen.getByRole("link");

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
