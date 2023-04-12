import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import decodeToken from "jwt-decode";
import Wrapper from "../../mocks/Wrapper";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { mockedToken, mockedTokenPayload } from "../../mocks/token";

jest.mock("../../store/hooks");
jest.mock("jwt-decode", () => jest.fn());

const mockedDispatch = jest.fn();
jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockedDispatch,
}));

beforeAll(() => jest.clearAllMocks());

afterAll(() => {
  jest.clearAllMocks();
  localStorage.clear();
});

describe("Given a useToken custom hook", () => {
  describe("When its getToken function is called and does not exist a token in the local storage", () => {
    test("Then it should not call the dispatch", () => {
      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), { wrapper: Wrapper });

      getToken();

      expect(mockedDispatch).not.toHaveBeenCalled();
    });
  });

  describe("When its getToken function is called and exists a token in the local storage", () => {
    test("Then it should call the dispatch with login user action creator", () => {
      localStorage.setItem("token", mockedToken);

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockedTokenPayload
      );

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), { wrapper: Wrapper });

      getToken();

      expect(mockedDispatch).toHaveBeenCalledWith(
        loginUserActionCreator({
          username: mockedTokenPayload.username,
          email: mockedTokenPayload.email,
          token: mockedToken,
        })
      );
    });
  });
});
