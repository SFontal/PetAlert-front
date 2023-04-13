import { UiState } from "../types";
import { mockedUiState } from "../../../mocks/ui";
import {
  ableSubmitActionCreator,
  closeModalActionCreator,
  disableSubmitActionCreator,
  hidePasswordActionCreator,
  openModalActionCreator,
  uiReducer,
  unhidePasswordActionCreator,
} from "./uiSlice";

describe("Given the ui reducer", () => {
  describe("When it receives a modal state closed and an open modal action", () => {
    test("Then it should return ui state with his property isOpen setted as true", () => {
      const newUiState: UiState = {
        ...mockedUiState,
        isOpen: true,
      };

      const expectedUiState: UiState = uiReducer(
        { ...mockedUiState },
        openModalActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives a close modal action", () => {
    test("Then it should return the ui state with his property isOpen setted as false", () => {
      const currentUiState: UiState = {
        ...mockedUiState,
        isOpen: true,
      };
      const newUiState: UiState = {
        ...mockedUiState,
        isOpen: false,
      };

      const expectedUiState: UiState = uiReducer(
        { ...currentUiState },
        closeModalActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an able submit action", () => {
    test("Then it should return the ui state with his property isSubmitDisabled setted as false", () => {
      const currentUiState: UiState = {
        ...mockedUiState,
        isSubmitDisabled: true,
      };
      const newUiState: UiState = {
        ...mockedUiState,
        isSubmitDisabled: false,
      };

      const expectedUiState: UiState = uiReducer(
        { ...currentUiState },
        ableSubmitActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives a disable submit action", () => {
    test("Then it should return the ui state with his property isSubmitDisabled setted as true", () => {
      const currentUiState: UiState = {
        ...mockedUiState,
        isSubmitDisabled: false,
      };
      const newUiState: UiState = {
        ...mockedUiState,
        isSubmitDisabled: true,
      };

      const expectedUiState: UiState = uiReducer(
        { ...currentUiState },
        disableSubmitActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives a hide password action", () => {
    test("Then it should return the ui state with his property isPasswordHide setted as true", () => {
      const currentUiState: UiState = {
        ...mockedUiState,
        isPasswordHide: false,
      };
      const newUiState: UiState = {
        ...mockedUiState,
        isPasswordHide: true,
      };

      const expectedUiState: UiState = uiReducer(
        { ...currentUiState },
        hidePasswordActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an unhide password action", () => {
    test("Then it should return the ui state with his property isPasswordHide setted as false", () => {
      const currentUiState: UiState = {
        ...mockedUiState,
        isPasswordHide: true,
      };
      const newUiState: UiState = {
        ...mockedUiState,
        isPasswordHide: false,
      };

      const expectedUiState: UiState = uiReducer(
        { ...currentUiState },
        unhidePasswordActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
