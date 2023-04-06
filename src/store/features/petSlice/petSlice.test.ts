import { PetsStructure } from "../../../hooks/types";
import pets from "../../../mocks/pets";
import { loadPetsActionCreator, petsReducer } from "./petSlice";

describe("Given a loadPets reducer", () => {
  describe("When it receives a list of three pets and a loadPets action", () => {
    test("Then it should return the same list of those three pets", () => {
      const currentPets: PetsStructure = [];
      const expectedPets: PetsStructure = pets;

      const newPets = petsReducer(
        currentPets,
        loadPetsActionCreator(expectedPets)
      );

      expect(newPets).toStrictEqual(expectedPets);
    });
  });
});
