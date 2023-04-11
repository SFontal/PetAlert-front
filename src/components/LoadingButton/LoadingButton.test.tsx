import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import LoadingButton from "./LoadingButton";

describe("Given a LoadingButton component", () => {
  describe("When it receives a class, an aria label and it is rendered", () => {
    test("Then it should show a border", () => {
      const className = "border";
      const ariaLabel = "Loading";

      renderWithProviders(
        <LoadingButton className={className} ariaLabel={ariaLabel} />
      );

      const expectedBorder = screen.getByLabelText(ariaLabel);

      expect(expectedBorder).toBeInTheDocument();
    });
  });
});
