import { BASE_URL, API_KEY } from "@api/Constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IDBAPIresponse, IMovieFilter } from "globalInterfaces";

interface IQueryParams {
  api_key: string;
  page: number;
}

function getQueryParams(data: IQueryParams) {
  return {
    api_key: data.api_key,
    page: data.page,
  };
}

export const MoviesAPI = createApi({
  reducerPath: "moviesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<
      IDBAPIresponse,
      { filter: IMovieFilter; page: number }
    >({
      query: ({ filter, page }) => {
        const searchTerm = filter.searchTerm?.trim();
        const category = filter.category;
        const type = filter.filter.type;

        const apiPaths: Record<string, Record<string, string>> = {
          Movie: {
            "Top Rated": "movie/top_rated",
            Upcoming: "movie/upcoming",
            "Now Playing": "movie/now_playing",
            Popular: "movie/popular",
            default: "movie/top_rated",
          },
          TV: {
            "Top Rated-TV": "tv/top_rated",
            "Popular-TV": "tv/popular",
            "On the air-TV": "tv/on_the_air",
            default: "tv/top_rated",
          },
        };

        if (searchTerm?.length > 0) {
          return {
            url: `search/${category.toLowerCase()}`,
            params: {
              query: searchTerm,
              ...getQueryParams({ api_key: API_KEY, page }),
            },
          };
        }

        const categoryFilter =
          apiPaths[category]?.[type] || apiPaths[category]?.["default"];

        return {
          url: `${categoryFilter}`,
          params: getQueryParams({ api_key: API_KEY, page }),
        };
      },
    }),
  }),
});

export const { useGetMoviesQuery } = MoviesAPI;

export default MoviesAPI;
