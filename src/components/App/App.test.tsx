import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import Layout from "../Layout/Layout";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header section`", () => {
      const arialLabelText = "header";

      renderRouterWithProviders(<Layout />);

      const expectedAriaLabel = screen.getByRole("banner", {
        name: arialLabelText,
      });

      expect(expectedAriaLabel).toBeInTheDocument();
    });

    test("Then it should show an image as website logo", () => {
      const imageAlt = "pet alert logo";

      renderRouterWithProviders(<App />);

      const expectedLogo = screen.getByRole("img", { name: imageAlt });

      expect(expectedLogo).toBeInTheDocument();
    });

    test("Then it should show a link as website logo", () => {
      const linkName = "link to pet alert home page";

      renderRouterWithProviders(<App />);

      const expectedLogo = screen.getByRole("link", { name: linkName });

      expect(expectedLogo).toBeInTheDocument();
    });

    test("Then it should show an aside section`", () => {
      renderRouterWithProviders(<Layout />);

      const expectedAriaLabel = screen.getByRole("complementary");

      expect(expectedAriaLabel).toBeInTheDocument();
    });

    test("Then it should show a main section`", () => {
      const arialLabelText = "Find your new family member";

      renderRouterWithProviders(<Layout />);

      const expectedAriaLabel = screen.getByRole("main", {
        name: arialLabelText,
      });

      expect(expectedAriaLabel).toBeInTheDocument();
    });
  });
});
