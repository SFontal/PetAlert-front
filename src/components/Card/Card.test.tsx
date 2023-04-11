import Card from "./Card";
import { petMute, petNoa, petRoc } from "../../mocks/pets";
import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";

describe("Given a Card component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a pet article", () => {
      renderRouterWithProviders(<Card pet={petMute} />);

      const expectedImage = screen.getByRole("article");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show an image of a pet", () => {
      const imageAlt = `${petMute.name} posing for his new family`;

      renderRouterWithProviders(<Card pet={petMute} />);

      const expectedImage = screen.getByRole("img", { name: imageAlt });

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a link with a button shape", () => {
      const buttonLabel = "link to pet detail page";

      renderRouterWithProviders(<Card pet={petMute} />);

      const expectedButton = screen.getByRole("link", { name: buttonLabel });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When it receives a male pet and it is rendered", () => {
    test("Then it should show a male symbol", () => {
      const symbolLabel = `gender ${petRoc.gender}`;

      renderRouterWithProviders(<Card pet={petRoc} />);

      const expectedSymbol = screen.getByRole("img", { name: symbolLabel });

      expect(expectedSymbol).toBeInTheDocument();
    });
  });

  describe("When it receives a female pet and it is rendered", () => {
    test("Then it should show a female symbol", () => {
      const symbolLabel = `gender ${petNoa.gender}`;

      renderRouterWithProviders(<Card pet={petNoa} />);

      const expectedSymbol = screen.getByRole("img", { name: symbolLabel });

      expect(expectedSymbol).toBeInTheDocument();
    });
  });
});
