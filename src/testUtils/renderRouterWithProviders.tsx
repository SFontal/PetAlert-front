import { PreloadedState } from "redux";
import { getComponentRouter, router } from "../router/router";
import { RootState } from "../store";
import { renderWithProviders } from "./renderWithProviders";
import { RouterProvider } from "react-router";

export const renderRouterWithProviders = (
  ui?: React.ReactElement,
  preloadedState?: PreloadedState<RootState>,
  path?: string
) => {
  const testRouter = ui ? getComponentRouter(ui, path) : router;

  return renderWithProviders(
    <RouterProvider router={testRouter}></RouterProvider>,
    preloadedState
  );
};
