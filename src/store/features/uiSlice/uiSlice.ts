import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState, UiState } from "../types";

const initialUiState: UiState = {
  isError: false,
  isOpen: false,
  isSubmitDisabled: true,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    openModal: (
      currentUiState: UiState,
      action: PayloadAction<ModalState>
    ): UiState => ({
      ...currentUiState,
      isOpen: true,
    }),

    closeModal: (currentUiState: UiState): UiState => ({
      ...initialUiState,
    }),

    ableSubmit: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      isSubmitDisabled: false,
    }),

    disableSubmit: (currentUiState: UiState): UiState => ({
      ...currentUiState,
      isSubmitDisabled: true,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
  ableSubmit: ableSubmitActionCreator,
  disableSubmit: disableSubmitActionCreator,
} = uiSlice.actions;
