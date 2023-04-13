import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import SelectIcon from "./SelectIcon";
import { mockedUiState } from "../../mocks/ui";
import userEvent from "@testing-library/user-event";

describe("Given a SelectIcon component", () => {
  const text = "password";

  describe("When it receives an empty text", () => {
    test("The it should show nothing", () => {
      const text = "";

      const { container } = renderWithProviders(<SelectIcon icon={text} />);

      expect(container).toBeEmptyDOMElement();
    });
  });

  describe("When it receives an incorrect icon text 'bad text'", () => {
    test("The it should show nothing", () => {
      const text = "bad text";

      renderWithProviders(<SelectIcon icon={text} />);

      const expectedIcon = screen.queryByRole("img");

      expect(expectedIcon).toBeNull();
    });
  });

  describe("When it receives 'email' text", () => {
    test("The it should show a letter icon", () => {
      const text = "email";
      const iconTitle = "Email";

      renderWithProviders(<SelectIcon icon={text} />);

      const expectedIcon = screen.getByRole("img", { name: iconTitle });

      expect(expectedIcon).toBeInTheDocument();
    });
  });

  describe("When it receives 'password' text and the ui state property isPasswordHide setted as true", () => {
    const iconTitle = "Unhide password";

    test("Then it should show an icon of a cross out eye", () => {
      renderWithProviders(<SelectIcon icon={text} />, {
        ui: { ...mockedUiState, isPasswordHide: true },
      });

      const expectedIcon = screen.getByRole("img", { name: iconTitle });

      expect(expectedIcon).toBeInTheDocument();
    });

    test("Then the icon should change if the user clicks on it", async () => {
      renderWithProviders(<SelectIcon icon={text} />, {
        ui: { ...mockedUiState, isPasswordHide: true },
      });

      const expectedIcon = screen.getByRole("img", { name: iconTitle });

      await userEvent.click(expectedIcon);

      expect(expectedIcon).not.toBeInTheDocument();
    });
  });

  describe("When it receives 'password' text and the ui state property isPasswordHide setted as false", () => {
    const iconTitle = "Hide password";

    test("Then it should show an icon of an open eye", async () => {
      renderWithProviders(<SelectIcon icon={text} />, {
        ui: { ...mockedUiState, isPasswordHide: false },
      });

      const expectedIcon = screen.getByRole("img", { name: iconTitle });

      expect(expectedIcon).toBeInTheDocument();
    });

    test("Then the icon should change if the user clicks on it", async () => {
      renderWithProviders(<SelectIcon icon={text} />, {
        ui: { ...mockedUiState, isPasswordHide: false },
      });

      const expectedIcon = screen.getByRole("img", { name: iconTitle });

      await userEvent.click(expectedIcon);

      expect(expectedIcon).not.toBeInTheDocument();
    });
  });
});
