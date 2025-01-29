/* import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "@redux/store";
import React from "react";
import { setupListeners } from "@reduxjs/toolkit/query";

export function renderWithProviders(
  component,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  setupListeners(store.dispatch);

  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return {
    store,
    ...render(component, { wrapper: Wrapper, ...renderOptions }),
  };
}
 */
