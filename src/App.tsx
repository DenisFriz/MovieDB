import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store.tsx";
import { ThemeContextProvider } from "@themeContext/index.tsx";
import router from "@routes/Routes.tsx";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </Provider>
  );
};

export default App;
