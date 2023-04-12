import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show link with the website logo and name", () => {
      const linkLable = "link to pet alert home page";

      renderWithProviders(<Header />);

      const expectedLink = screen.getByRole("link", { name: linkLable });

      expect(expectedLink).toBeInTheDocument();
    });

    test("Then it should show the website logo", () => {
      const imageAlt = "pet alert logo";

      renderWithProviders(<Header />);

      const expectedLogo = screen.getByRole("img", { name: imageAlt });

      expect(expectedLogo).toBeInTheDocument();
    });

    test("Then it should show the website name 'pet alert!'", () => {
      const text = "pet alert!";
      const level = 1;

      renderWithProviders(<Header />);

      const expectedHeading = screen.getByRole("heading", {
        name: text,
        level,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show the website subtitle 'adopt, rescue, love!'", () => {
      const subtitle = "adopt, rescue, love!";

      renderWithProviders(<Header />);

      const expectedSubtitle = screen.getByText(subtitle);

      expect(expectedSubtitle).toBeInTheDocument();
    });
  });
});
