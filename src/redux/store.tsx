import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { MoviesAPI } from "./MoviesAPI";
import MoviesSlice from "./MoviesSlice";

const store = configureStore({
  reducer: {
    [MoviesAPI.reducerPath]: MoviesAPI.reducer,
    movies: MoviesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MoviesAPI.middleware),
});

// Setup listeners for automatic cache invalidation and refetching
setupListeners(store.dispatch);

export default store;

export const setupStore = (preloadedState = {}) => {
  const store = configureStore({
    reducer: {
      [MoviesAPI.reducerPath]: MoviesAPI.reducer,
      movies: MoviesSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(MoviesAPI.middleware),
    preloadedState,
  });

  setupListeners(store.dispatch);

  return store;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
