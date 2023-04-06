import Card from "./Card";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { petMute, petNoa, petRoc } from "../../mocks/pets";
import { screen } from "@testing-library/react";

describe("Given a Card component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a pet article", () => {
      renderWithProviders(<Card pet={petMute} />);

      const expectedImage = screen.getByRole("article");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show an image of a pet", () => {
      const imageAlt = `${petMute.name} posing for his new family`;

      renderWithProviders(<Card pet={petMute} />);

      const expectedImage = screen.getByRole("img", { name: imageAlt });

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a link with a button shape", () => {
      const buttonText = "View +";

      renderWithProviders(<Card pet={petMute} />);

      const expectedButton = screen.getByRole("link", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When it receives a male pet and it is rendered", () => {
    test("Then it should show a male symbol", () => {
      const symbolLabel = `gender ${petRoc.gender}`;

      renderWithProviders(<Card pet={petRoc} />);

      const expectedSymbol = screen.getByRole("img", { name: symbolLabel });

      expect(expectedSymbol).toBeInTheDocument();
    });
  });

  describe("When it receives a female pet and it is rendered", () => {
    test("Then it should show a female symbol", () => {
      const symbolLabel = `gender ${petNoa.gender}`;

      renderWithProviders(<Card pet={petNoa} />);

      const expectedSymbol = screen.getByRole("img", { name: symbolLabel });

      expect(expectedSymbol).toBeInTheDocument();
    });
  });
});
