/* import { screen, render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import MovieItem from "../MovieItem";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("MovieItem component", () => {
  const mockMovie = {
    backdrop_path: "/path/to/image.jpg",
    overview: "A great movie.",
    title: "Movie Title",
    release_date: "2024-01-01",
    vote_average: 8.5,
    vote_count: 100,
    id: 1,
    name: "",
  };

  const initialState = {
    searchTerm: "",
    category: "Movie",
    filter: {
      type: "Popular",
    },
    movies: {
      category: "Movie",
    },
  };

  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it("Should render movie details correctly", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <MovieItem {...mockMovie} />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Movie Title/i)).toBeInTheDocument();
    expect(screen.getByText(/2024-01-01/i)).toBeInTheDocument();
    expect(screen.getByText(/8.5/)).toBeInTheDocument();
    expect(screen.getByText(/100/)).toBeInTheDocument();
  });

  it("Should redirects to the movie detail page when the button is clicked", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MovieItem {...mockMovie} />
        </Provider>
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: /view/i });
    await userEvent.click(button);

    expect(window.location.pathname).toBe("/movies/Movie/1");
  });
});
 */
