import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Input from "./Input";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given an Input component", () => {
  const mockedHandler = jest.fn();
  const inputLabel = "Email";
  const name = "email";
  const value = name;
  const type = name;

  describe("When it receives a name, type and value 'email'", () => {
    const typeAttribute = "type";
    const placeholderAttribute = "placeholder";
    const placeholder = `Introduce your ${name}`;
    const ariaPlaceholderAttribute = "aria-placeholder";
    const ariaPlaceholder = placeholder;
    const autoCompleteAttribute = "autoComplete";
    const autoCompleteOn = "on";
    const autoCompleteOff = "off";
    const disabledAttribute = "disabled";
    const disabled = true;
    const requiredAttribute = "required";
    const required = true;
    const iconLabel = inputLabel;

    test("Then it should show an input labeled 'Email'", () => {
      renderWithProviders(
        <Input name={name} type={type} value={value} onChange={mockedHandler} />
      );

      const expectedInput = screen.getByRole("textbox", {
        name: inputLabel,
      });

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it should show an input with the attribute type as 'email'", () => {
      renderWithProviders(
        <Input name={name} type={type} value={value} onChange={mockedHandler} />
      );

      const expectedInput = screen.getByRole("textbox", {
        name: inputLabel,
      });

      expect(expectedInput).toHaveAttribute(typeAttribute, type);
    });

    test("Then it should show an input with the attribute value as 'email'", () => {
      renderWithProviders(
        <Input name={name} type={type} value={value} onChange={mockedHandler} />
      );

      const expectedInput = screen.getByRole("textbox", {
        name: inputLabel,
      });

      expect(expectedInput).toHaveDisplayValue(value);
    });

    test("Then it should show an input with the attribute placeholder as 'Introduce your email'", () => {
      renderWithProviders(
        <Input name={name} type={type} value={value} onChange={mockedHandler} />
      );

      const expectedInput = screen.getByRole("textbox", {
        name: inputLabel,
      });

      expect(expectedInput).toHaveAttribute(placeholderAttribute, placeholder);
    });

    test("Then it should show an input with the attribute aria-placeholder as 'Introduce your email'", () => {
      renderWithProviders(
        <Input name={name} type={type} value={value} onChange={mockedHandler} />
      );

      const expectedInput = screen.getByRole("textbox", {
        name: inputLabel,
      });

      expect(expectedInput).toHaveAttribute(
        ariaPlaceholderAttribute,
        ariaPlaceholder
      );
    });

    test("Then it should show an input with the attribute autocomplete setted as 'on'", () => {
      renderWithProviders(
        <Input name={name} type={type} value={value} onChange={mockedHandler} />
      );

      const expectedInput = screen.getByRole("textbox", {
        name: inputLabel,
      });

      expect(expectedInput).toHaveAttribute(
        autoCompleteAttribute,
        autoCompleteOn
      );
    });

    test("Then it should show an input with the attribute autocomplete setted as 'off' if receives that value", () => {
      renderWithProviders(
        <Input
          name={name}
          type={type}
          value={value}
          onChange={mockedHandler}
          autoComplete={autoCompleteOff}
        />
      );

      const expectedInput = screen.getByRole("textbox", {
        name: inputLabel,
      });

      expect(expectedInput).toHaveAttribute(
        autoCompleteAttribute,
        autoCompleteOff
      );
    });

    test("Then it should show an input without the attribute disabled", () => {
      renderWithProviders(
        <Input name={name} type={type} value={value} onChange={mockedHandler} />
      );

      const expectedInput = screen.getByRole("textbox", {
        name: inputLabel,
      });

      expect(expectedInput).not.toHaveAttribute(disabledAttribute);
    });

    test("Then it should show an input with the attribute disabled if setted as true", () => {
      renderWithProviders(
        <Input
          name={name}
          type={type}
          value={value}
          onChange={mockedHandler}
          disabled={disabled}
        />
      );

      const expectedInput = screen.getByRole("textbox", {
        name: inputLabel,
      });

      expect(expectedInput).toHaveAttribute(disabledAttribute);
    });

    test("Then it should show an input without the attribute required", () => {
      renderWithProviders(
        <Input name={name} type={type} value={value} onChange={mockedHandler} />
      );

      const expectedInput = screen.getByRole("textbox", {
        name: inputLabel,
      });

      expect(expectedInput).not.toHaveAttribute(requiredAttribute);
    });

    test("Then it should show an input with the attribute required if setted as true", () => {
      renderWithProviders(
        <Input
          name={name}
          type={type}
          value={value}
          onChange={mockedHandler}
          required={required}
        />
      );

      const expectedInput = screen.getByRole("textbox", {
        name: inputLabel,
      });

      expect(expectedInput).toHaveAttribute(requiredAttribute);
    });

    test("Then it should show an icon labeled 'Email'", () => {
      renderWithProviders(
        <Input name={name} type={type} value={value} onChange={mockedHandler} />
      );

      const expectedIcon = screen.getByRole("img", {
        name: iconLabel,
      });

      expect(expectedIcon).toBeInTheDocument();
    });
  });

  describe("When the user writes in the input", () => {
    test("Then should call the handler", async () => {
      renderWithProviders(
        <Input name={name} type={type} value={value} onChange={mockedHandler} />
      );

      const emailInput = screen.getByRole("textbox", { name: inputLabel });

      await userEvent.type(emailInput, value);

      expect(mockedHandler).toHaveBeenCalled();
    });
  });
});
