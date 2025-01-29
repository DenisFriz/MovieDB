import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterType, IMovieFilter } from "../globalInterfaces";

export const initialState: IMovieFilter = {
  searchTerm: "",
  category: "Movie",
  filter: {
    type: FilterType.Popular,
  },
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setCurrentCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setCategoryTerm: (state, action: PayloadAction<FilterType>) => {
      state.searchTerm = "";
      state.filter.type = action.payload;
    },
  },
});

export const { setSearchTerm, setCategoryTerm, setCurrentCategory } =
  moviesSlice.actions;
export default moviesSlice.reducer;
