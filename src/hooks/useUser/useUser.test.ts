import { act, renderHook } from "@testing-library/react";
import server from "../../mocks/server";
import useUser from "./useUser";
import Wrapper from "../../mocks/Wrapper";
import { mockedTokenPayload } from "../../mocks/token";
import { mockedUserCredentials, mockedUserStructure } from "../../mocks/user";
import decodeToken from "jwt-decode";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/userSlice/userSlice";
import { openModalActionCreator } from "../../store/features/uiSlice/uiSlice";

beforeAll(() => {
  jest.clearAllMocks();
  server.listen();
});

afterAll(() => {
  server.close();
  jest.clearAllMocks();
});

const mockedDispatch = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockedDispatch,
}));

jest.mock("jwt-decode", () => jest.fn());

describe("Given a useUser custom Hook", () => {
  describe("When its loginUser function is called with a registered user (username 'pet@petalert.com' and password 'PetAdmin')", () => {
    test("Then it should call the dispatch with the login user action creator", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockedTokenPayload
      );

      await act(() => loginUser(mockedUserCredentials));

      expect(mockedDispatch).toHaveBeenCalledWith(
        loginUserActionCreator(mockedUserStructure)
      );
    });
  });

  describe("When its loginUser function receives an unregistered user", () => {
    test("Then it should call the dispatch with the open modal action creator", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      const modalState = { isOpen: true, isError: true };

      await act(() => loginUser(mockedUserCredentials));

      expect(mockedDispatch).toHaveBeenCalledWith(
        openModalActionCreator(modalState)
      );
    });
  });

  describe("When its logoutUser function is called", () => {
    test("Then it should call the dispatch with the logout user action creator", () => {
      const {
        result: {
          current: { logoutUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      act(() => logoutUser());

      expect(mockedDispatch).toHaveBeenCalledWith(logoutUserActionCreator());
    });
  });
});
