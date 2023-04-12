import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import Layout from "./Layout";
import { mockedUserState } from "../../mocks/user";
import { mockedUiState } from "../../mocks/ui";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header section`", () => {
      const arialLabelText = "header";

      renderRouterWithProviders(<Layout />);

      const expectedHeaderSection = screen.getByRole("banner", {
        name: arialLabelText,
      });

      expect(expectedHeaderSection).toBeInTheDocument();
    });

    test("Then it should show an aside section with guest info if the user is it not logged`", () => {
      const arialLabelText = "guest info";

      renderRouterWithProviders(<Layout />);

      const expectedGuestAsideSection = screen.getByRole("complementary", {
        name: arialLabelText,
      });

      expect(expectedGuestAsideSection).toBeInTheDocument();
    });

    test("Then it should not show an aside section if the path is /login`", () => {
      const arialLabelText = "user info";
      const path = "/login";

      renderRouterWithProviders(<Layout />, mockedUserState, path);

      const expectedUserAsideSection = screen.queryByRole("complementary", {
        name: arialLabelText,
      });

      expect(expectedUserAsideSection).toBeNull();
    });

    test("Then it should show an aside section with user info if the user is it logged`", () => {
      const arialLabelText = "user info";

      renderRouterWithProviders(<Layout />, mockedUserState);

      const expectedUserAsideSection = screen.getByRole("complementary", {
        name: arialLabelText,
      });

      expect(expectedUserAsideSection).toBeInTheDocument();
    });

    test("Then it should show a main section`", () => {
      const arialLabelText = "Find your new family member";

      renderRouterWithProviders(<Layout />);

      const expectedMainSection = screen.getByRole("main", {
        name: arialLabelText,
      });

      expect(expectedMainSection).toBeInTheDocument();
    });

    test("Then it should show an image of a sad dog if modal state property isOpen is true", () => {
      const imageAlt = "a sad dog";

      renderRouterWithProviders(<Layout />, {
        ui: { ...mockedUiState, isOpen: true },
      });

      const expectedImage = screen.getByRole("img", { name: imageAlt });

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should not show an image of a sad dog if modal state property isOpen is false", () => {
      const imageAlt = "A sad dog";

      renderRouterWithProviders(<Layout />, {
        ui: { ...mockedUiState, isOpen: false },
      });

      const expectedImage = screen.queryByRole("img", { name: imageAlt });

      expect(expectedImage).toBeNull();
    });
  });
});
