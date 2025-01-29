import moviesSlice, {
  initialState,
  setSearchTerm,
  setCurrentCategory,
  setCategoryTerm,
} from "../MoviesSlice";

describe("MoviesSlice tests", () => {
  it("Check initial state", () => {
    const state = moviesSlice(undefined, { type: "unkown" });
    expect(state).toEqual(initialState);
  });

  it("Check setSearchTerm reducer", () => {
    const searchItem = "Inception";
    const state = moviesSlice(initialState, setSearchTerm(searchItem));
    expect(state.searchTerm).toEqual(searchItem);
  });

  it("Check setCurrentCategory reducer", () => {
    const searchCategory = "TV";
    const state = moviesSlice(initialState, setCurrentCategory(searchCategory));
    expect(state.category).toEqual(searchCategory);
  });

  it("Check setCategoryTerm reducer", () => {
    const filterType = "Upcoming";
    const state = moviesSlice(initialState, setCategoryTerm(filterType));
    expect(state.searchTerm).toEqual("");
    expect(state.filter.type).toEqual(filterType);
  });
});
