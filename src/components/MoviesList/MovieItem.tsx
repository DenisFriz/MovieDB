import { IMG_START_URL } from "@api/Constants";
import { useAppSelector } from "@hooks/hooks";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CardHeader,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

interface IMovieItem {
  backdrop_path: string;
  overview: string;
  title: string;
  release_date: string | number;
  vote_average: number;
  vote_count: number;
  id: number;
  name: string;
}

const MovieItem = ({
  backdrop_path,
  overview,
  title,
  release_date,
  vote_average,
  vote_count,
  id,
  name,
}: IMovieItem) => {
  const category = useAppSelector((state) => state.movies.category);
  const theme = useTheme();

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <CardMedia
          component="img"
          height="194"
          image={IMG_START_URL + backdrop_path}
          title="title"
        />
        <CardHeader title={title || name} subheader={release_date} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: theme.palette.primary.main }}
          >
            {vote_average} / {vote_count} votes
          </Typography>
          <Typography gutterBottom>{overview}</Typography>
        </CardContent>
        <CardActions style={{ marginTop: "auto" }}>
          <Link to={`/movies/${category}/${id}`}>
            <Button
              size="small"
              color="primary"
              variant="contained"
              aria-label="View"
              title="View"
            >
              View
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MovieItem;
