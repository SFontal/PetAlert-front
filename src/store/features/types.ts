import { CustomJwtPayload } from "../../hooks/types";

export interface UserStructure extends CustomJwtPayload {
  token: string;
}

export interface UserState extends UserStructure {
  isLogged: boolean;
}

export interface ModalState {
  isError: boolean;
  isOpen: boolean;
}

export interface UiState extends ModalState {
  isSubmitDisabled: boolean;
}
