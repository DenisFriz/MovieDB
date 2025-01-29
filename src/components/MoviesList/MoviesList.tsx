import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
} from "@mui/material";
import MoviesAPI from "@redux/MoviesAPI";
import { setCategoryTerm } from "@redux/MoviesSlice";
import SkeletonList from "@ui/SkeletonList";
import type { FilterType, IMovie } from "globalInterfaces";
import { useState, ChangeEvent } from "react";
import MovieItem from "./MovieItem";

const MoviesList = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.movies);
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = MoviesAPI.useGetMoviesQuery({
    filter,
    page,
  });

  const movies: IMovie[] = data?.results ?? [];

  let content;

  if (isLoading)
    content = [...new Array(20)].map((_, index) => (
      <SkeletonList key={index} />
    ));
  else if (error) {
    let errorMessage = "An unexpected error occurred.";
    if ("status" in error) {
      errorMessage = `Error: ${error.status}`;
    } else if ("message" in error) {
      errorMessage = `Error: ${error.message}`;
    }
    content = <div>{errorMessage}</div>;
  } else
    content = movies.map((movie, index) => (
      <MovieItem key={index} {...movie} />
    ));

  const handlePage = (value: number) => {
    setPage(value);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCategoryTerm(event.target.value as FilterType));
  };

  return (
    <Container maxWidth="xl">
      <Grid
        container
        gridTemplateColumns="300px 1fr"
        display="grid"
        sx={{
          gridTemplateColumns: {
            xs: "1fr",
            md: "300px 1fr",
          },
        }}
      >
        <Grid item marginTop={"20px"} md={6}>
          <Box
            sx={(theme) => ({
              backgroundColor: theme.palette.secondary.main,
              padding: "1rem",
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              position: { xs: "static", md: "fixed" },
            })}
          >
            <Stack spacing={2}>
              <div style={{ marginBottom: "20px" }}>
                <FormControl disabled={filter.category == "TV"}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Type of film
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Top Rated"
                    name="radio-buttons-group"
                    onChange={handleChange}
                    sx={{
                      "& .Mui-checked": { color: "#70c4d5 !important" },
                      "& .Mui-disabled": { color: "#3c3c58 !important" },
                    }}
                  >
                    <FormControlLabel
                      value="Top Rated"
                      control={<Radio />}
                      label="Top Rated"
                      aria-label="Top Rated"
                      title="Top Rated"
                    />
                    <FormControlLabel
                      value="Upcoming"
                      control={<Radio />}
                      label="Upcoming"
                      aria-label="Upcoming"
                      title="Upcoming"
                    />
                    <FormControlLabel
                      value="Now Playing"
                      control={<Radio />}
                      label="Now Playing"
                      aria-label="Now Playing"
                      title="Now Playing"
                    />
                  </RadioGroup>
                </FormControl>
                <Divider />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <FormControl disabled={filter.category == "Movie"}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Type of TV
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Top Rated-TV"
                    name="radio-buttons-group"
                    onChange={handleChange}
                    sx={{
                      "& .Mui-checked": { color: "#70c4d5 !important" },
                      "& .Mui-disabled": { color: "#3c3c58 !important" },
                    }}
                  >
                    <FormControlLabel
                      value="Top Rated-TV"
                      control={<Radio />}
                      label="Top Rated"
                      aria-label="Top Rated"
                      title="Top Rated"
                    />
                    <FormControlLabel
                      value="Popular-TV"
                      control={<Radio />}
                      label="Popular"
                      aria-label="Popular"
                      title="Popular"
                    />
                    <FormControlLabel
                      value="On the air-TV"
                      control={<Radio />}
                      label="On the air"
                      aria-label="On the air"
                      title="On the air"
                    />
                  </RadioGroup>
                </FormControl>
                <Divider />
              </div>
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          container
          marginTop={"20px"}
          gap={isLoading ? "20px" : "0px"}
          spacing={2}
        >
          {content}
          {data?.total_pages && (
            <Box
              sx={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Pagination
                count={data.total_pages}
                page={data.page}
                onChange={(_, value) => handlePage(value)}
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MoviesList;
