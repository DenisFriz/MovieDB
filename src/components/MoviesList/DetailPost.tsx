import { IMG_START_URL } from "@api/Constants";
import { Container, Grid, Typography, Stack, Box, Button } from "@mui/material";
import Spinner from "@ui/Spinner";
import type { MovieDetail } from "globalInterfaces";
import { Suspense } from "react";
import { useLoaderData, Await, useAsyncValue, Link } from "react-router-dom";

interface ITodo {
  post: MovieDetail | null;
}

const DetailPost = () => {
  const { post } = useLoaderData() as ITodo;

  if (!post) {
    return <Spinner />; // Show spinner or a message indicating loading
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} marginTop="10px">
        <Suspense fallback={<Spinner />}>
          <Await resolve={post} errorElement={<div>Something went wrong</div>}>
            {(post) => <AsyncDetailPost {...post} />}
          </Await>
        </Suspense>
      </Grid>
    </Container>
  );
};

function AsyncDetailPost() {
  const post = useAsyncValue() as MovieDetail;
  return (
    <>
      <Grid item lg={4}>
        <img
          src={`${IMG_START_URL}${post.backdrop_path}`}
          style={{ maxWidth: "100%", height: "auto" }}
          alt={post.original_title}
        />
      </Grid>
      <Grid item lg={8} width="100%">
        <Typography variant="h3">{post.original_title}</Typography>
        <Stack direction="row" spacing={3} flexShrink={"0"} flexWrap={"wrap"}>
          {post.genres.map((genre) => (
            <div
              key={genre.id}
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                padding: "8px",
                borderRadius: "10px",
              }}
            >
              {genre.name}
            </div>
          ))}
        </Stack>
        <Typography variant="body1">
          Release date: {post.release_date}
        </Typography>
        <Typography variant="h5">Popularity: {post.popularity}</Typography>
        <Stack direction="row" spacing={3} flexWrap={"wrap"}>
          {post.production_companies.map((company) => (
            <Box key={company.id} display="block">
              <img
                src={`${IMG_START_URL}${company.logo_path}`}
                alt={company.name}
                height={80}
                width={80}
                style={{ objectFit: "contain" }}
              />
            </Box>
          ))}
        </Stack>
        <Typography variant="body1">Status: {post.status}</Typography>
        <Typography variant="body1">{post.overview}</Typography>
        <Link to={"/movies"}>
          <Button variant="contained" aria-label="Back" title="Back">
            Back
          </Button>
        </Link>
      </Grid>
    </>
  );
}

export default DetailPost;
