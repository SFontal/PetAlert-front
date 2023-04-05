import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";
import {
  mockedUserInitialState,
  mockedUserLogged,
  mockedUserUnlogged,
} from "../../../mocks/user";
import { UserState } from "../types";

describe("Given loginUser reducer", () => {
  describe("When it receives a user state and a loginUser action", () => {
    test("Then it should return the same user with his property isLogged setted to true", () => {
      const userUnlogged: UserState = mockedUserUnlogged;

      const expectedUser: UserState = mockedUserLogged;

      const userLogged: UserState = userReducer(
        userUnlogged,
        loginUserActionCreator(userUnlogged)
      );

      expect(userLogged).toStrictEqual(expectedUser);
    });
  });
});

describe("Given logoutUser reducer", () => {
  describe("When it receives a user state and a logoutUser action", () => {
    test("Then it should return the same user with his properties username, email and token setted to empty string and its isLogged property setted to true", () => {
      const userLogged: UserState = mockedUserLogged;

      const expectedUser: UserState = mockedUserInitialState;

      const userUnlogged: UserState = userReducer(
        userLogged,
        logoutUserActionCreator()
      );

      expect(userUnlogged).toStrictEqual(expectedUser);
    });
  });
});
