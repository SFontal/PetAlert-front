import { screen } from "@testing-library/react";
import pets from "../../mocks/pets";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import CardList from "./CardList";

describe("Given a CardList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of pets", () => {
      renderRouterWithProviders(<CardList />, { pets });

      const expectedPetList = screen.getByRole("list");

      expect(expectedPetList).toBeInTheDocument();
    });
  });

  describe("When there is a list of three pets and it is rendered", () => {
    test("Then it should show a list of three pets", () => {
      const listOfThreePets = pets;

      renderRouterWithProviders(<CardList />, { pets: listOfThreePets });

      const expectedPetList = screen.getAllByRole("listitem");

      expect(expectedPetList).toHaveLength(3);
    });
  });
});
