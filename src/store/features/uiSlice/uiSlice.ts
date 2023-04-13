import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "../types";

const initialUiState: UiState = {
  isError: false,
  isOpen: false,
  isPasswordHide: true,
  isSubmitDisabled: true,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    openModal: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      isOpen: true,
    }),

    closeModal: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      isOpen: false,
    }),

    ableSubmit: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      isSubmitDisabled: false,
    }),

    disableSubmit: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      isSubmitDisabled: true,
    }),

    hidePassword: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      isPasswordHide: true,
    }),

    unhidePassword: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      isPasswordHide: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
  ableSubmit: ableSubmitActionCreator,
  disableSubmit: disableSubmitActionCreator,
  hidePassword: hidePasswordActionCreator,
  unhidePassword: unhidePasswordActionCreator,
} = uiSlice.actions;
