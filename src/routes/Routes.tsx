import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  defer,
} from "react-router-dom";
import Layout from "../Layout";
import { BASE_URL, API_KEY } from "@api/Constants";
import DetailPost from "@components/MoviesList/DetailPost";
import MoviesList from "@components/MoviesList/MoviesList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MoviesList />} />
      <Route path="movies" element={<MoviesList />} />
      <Route
        path="movies/:category/:id"
        element={<DetailPost />}
        loader={async ({ params }) => {
          const response = await fetch(
            `${BASE_URL}${params.category?.toLocaleLowerCase()}/${
              params.id
            }?api_key=${API_KEY}`
          );
          const post = response.json();
          return defer({ post });
        }}
      />
    </Route>
  )
);

export default router;
