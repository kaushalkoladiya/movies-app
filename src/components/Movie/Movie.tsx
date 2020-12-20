import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../Image";
import { Movie as MovieType } from "../../types";
import Rating from "../Rating";
import Genres from "../Genres";

const useStyles = makeStyles((theme) => ({
  img: {
    height: "auto",
    width: "200px",
    borderRadius: "20px",
    position: "relative",
  },
  movie: {
    textAlign: "center",
    margin: "50px 0",
  },
}));

interface MovieProps {
  movie: MovieType;
}

const Movie = ({ movie }: MovieProps) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xl={1}
      lg={3}
      sm={6}
      xs={12}
      className={classes.movie}
      component={Link}
      to={`/movie/${movie.key}`}
    >
      <Image path={movie.poster} />
      <Typography variant="h6">{movie.title}</Typography>

      <Genres genres={movie.genres} />
      <Rating rating={movie.rating} />

      <Typography variant="caption">
        {dayjs(movie.releaseDate).format("MMM DD, YYYY")}
      </Typography>
    </Grid>
  );
};
export default Movie;
