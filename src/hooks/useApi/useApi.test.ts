import { renderHook } from "@testing-library/react";
import pets from "../../mocks/pets";
import server from "../../mocks/server";
import Wrapper from "../../mocks/Wrapper";
import { loadPetsActionCreator } from "../../store/features/petSlice/petSlice";
import useApi from "./useApi";

const mockDispatch = jest.fn();

jest.mock("../../store/hooks", () => ({
  useAppDispatch: () => mockDispatch,
}));

beforeAll(() => server.listen());
afterAll(() => server.close());

describe("Given a useApi custom hook", () => {
  describe("When its getPets function is called", () => {
    test("Then it should call the dispatch with the loadPets action creator", async () => {
      const {
        result: {
          current: { getPets },
        },
      } = renderHook(() => useApi(), {
        wrapper: Wrapper,
      });

      await getPets();

      expect(mockDispatch).toHaveBeenCalledWith(loadPetsActionCreator(pets));
    });
  });
});
