import { logoutUserActionCreator } from "../../store/features/userSlice/userSlice";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import Greeting from "./Greeting";
import { screen } from "@testing-library/react";
import { mockedUserState } from "../../mocks/user";
import userEvent from "@testing-library/user-event";

const mockedDispatch = jest.fn();
jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockedDispatch,
}));

beforeEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.clearAllMocks();
});

describe("Given a Greeting component", () => {
  describe("When it is rendered and the user it is not logged", () => {
    test("Then it should show a heading level 3 with a 'Hello human!' text", () => {
      const text = "Hello human!";
      const level = 3;

      renderRouterWithProviders(<Greeting />);

      const expectedHeading = screen.getByRole("heading", {
        name: text,
        level: level,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a link with a 'Login!' text", () => {
      const buttonLabel = "link to login page";

      renderRouterWithProviders(<Greeting />);

      const expectedButton = screen.getByRole("link", { name: buttonLabel });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show a link with a 'Register!' text", () => {
      const buttonLabel = "link to user register page";

      renderRouterWithProviders(<Greeting />);

      const expectedButton = screen.getByRole("link", { name: buttonLabel });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user it is logged", () => {
    test("Then it should show a heading level 3 with a 'Hi, Pet!' text", () => {
      const text = "Hi, Pet!";
      const level = 3;

      renderRouterWithProviders(<Greeting />, mockedUserState);

      const expectedHeading = screen.getByRole("heading", {
        name: text,
        level: level,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show an icon as a logout button", () => {
      const text = "logout";

      renderRouterWithProviders(<Greeting />, mockedUserState);

      const expectedLogoutButton = screen.getByRole("button", {
        name: text,
      });

      expect(expectedLogoutButton).toBeInTheDocument();
    });
  });

  describe("When the user click on the logout button", () => {
    test("Then it should logout the user", async () => {
      const text = "logout";

      renderRouterWithProviders(<Greeting />, mockedUserState);

      const logoutButton = screen.getByRole("button", {
        name: text,
      });

      await userEvent.click(logoutButton);

      expect(mockedDispatch).toHaveBeenCalledWith(logoutUserActionCreator());
    });
  });
});
