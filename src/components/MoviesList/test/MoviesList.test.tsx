/*
import MoviesList from "../MoviesList";
import mockMovieData from "../../../__mock__/MockMovieData.json";
import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import MoviesAPI from "@redux/MoviesAPI";
import { MemoryRouter } from "react-router-dom";

describe("MoviesList component", () => {
  const initialState = {
    movies: {
      category: "Movie",
      searchTerm: "",
    },
  };

  const mockStore = configureStore();
  let store;
  let spyMoviesAPI: any;

  beforeEach(() => {
    store = mockStore(initialState);
    spyMoviesAPI = vi.spyOn(MoviesAPI, "useGetMoviesQuery");
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("Should display skeleton when data is loading", () => {
    spyMoviesAPI.mockReturnValue({
      data: undefined,
      isLoading: true,
      error: true,
    });

    render(
      <MemoryRouter>
        <Provider store={store}>
          <MoviesList />
        </Provider>
      </MemoryRouter>
    );

    // Check if the skeletons are rendered
    /*  const skeletons = screen.getAllByTestId("SkeletonList");
    expect(skeletons.length).toBe(20);  // Adjust based on how many skeletons you expect
  });

  it("Should dispaly error text when receiving error", () => {
    spyMoviesAPI.mockReturnValue({
      data: undefined,
      isLoading: false,
      error: true,
    });

    render(
      <Provider store={store}>
        <MoviesList />
      </Provider>
    );

    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it("Display list of items after successfully receiving data", async () => {
    spyMoviesAPI.mockReturnValue({
      data: mockMovieData,
      isLoading: false,
      error: false,
    });

    render(
      <MemoryRouter>
        <Provider store={store}>
          <MoviesList />
        </Provider>
      </MemoryRouter>
    );

    for (const movie of mockMovieData.results) {
      const movieElement = await screen.findByText(movie.title);
      expect(movieElement).toBeInTheDocument();
    }
  });
});
 */
