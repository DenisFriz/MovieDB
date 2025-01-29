/* // renderWithProviders.tsx
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import store from "@redux/store";

const renderRouterProvider = (ui, { initialState, ...renderOptions } = {}) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>
    </Provider>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderRouterProvider;
 */
