import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "@utils/renderWithProvider";
import { useAppDispatch } from "@hooks/hooks";
import { setSearchTerm } from "@redux/MoviesSlice";
import { vi } from "vitest";
import * as ReactRedux from "react-redux";
import configureStore from "redux-mock-store";

describe("SearchBar component", () => {
  const reactRedux = { useAppDispatch };

  const useDispatchMock = vi.spyOn(reactRedux, "useAppDispatch");

  let mockAppDispatch;
  let mockStore;
  let updateStore;

  const initialState = {
    searchTerm: "",
    category: "Movie",
    filter: {
      type: "Popular",
    },
  };

  beforeEach(() => {
    mockStore = configureStore();
    updateStore = mockStore(initialState);
    mockAppDispatch = vi.fn();
    useDispatchMock.mockReturnValue(mockAppDispatch);
    updateStore.dispatch = mockAppDispatch;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("Should update query state when input changes", async () => {
    renderWithProviders(<SearchBar />);
    const input = screen.getByPlaceholderText(/Search/i) as HTMLInputElement;
    await userEvent.type(input, "Test Movie");
    expect(input.value).toBe("Test Movie");
  });

  it("Should dispatch setCurrentCategory when radio button change", async () => {
    render(
      <ReactRedux.Provider store={updateStore}>
        <SearchBar />
      </ReactRedux.Provider>
    );

    const movie = screen.getByLabelText(/Movie/i) as HTMLInputElement;
    const tv = screen.getByLabelText(/TV/i) as HTMLInputElement;

    expect(movie.checked).toBe(true);
    expect(updateStore.dispatch).not.toHaveBeenCalled();

    await userEvent.click(tv);

    expect(updateStore.dispatch).toHaveBeenCalledTimes(1);
    expect(mockAppDispatch).toHaveBeenCalledWith({
      type: "movies/setCurrentCategory",
      payload: "TV",
    });
  });

  it("Should dispatch setSearchTerm if the form is submitted by pressing Enter", async () => {
    render(
      <ReactRedux.Provider store={updateStore}>
        <SearchBar />
      </ReactRedux.Provider>
    );

    const input = screen.getByPlaceholderText(/Search/i) as HTMLInputElement;
    const form = input.closest("form");

    expect(updateStore.dispatch).not.toHaveBeenCalled();
    await userEvent.type(input, "Test text");

    fireEvent.submit(form!);

    expect(mockAppDispatch).toHaveBeenCalledTimes(1);
    expect(updateStore.dispatch).toHaveBeenCalledWith(
      setSearchTerm("Test text")
    );
  });
});
