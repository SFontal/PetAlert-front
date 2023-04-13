import capitalizeWord from "./capitalizeWord";

describe("Given a capitalizeWord function", () => {
  describe("When it receives the word 'capitalize'", () => {
    test("Then it should return 'Capitalize'", () => {
      const word = "capitalize";
      const capitalizedWord = "Capitalize";

      const expectedWord = capitalizeWord(word);

      expect(capitalizedWord).toStrictEqual(expectedWord);
    });
  });
});
