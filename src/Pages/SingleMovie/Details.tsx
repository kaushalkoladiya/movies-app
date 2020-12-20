import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { getDetailsById } from "../../API";
import { Genres, Image, Rating } from "../../components";

import { MovieDetails } from "../../types";

import Skeleton from "./Skeleton";

interface DetailsProps {
  movieId: number;
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "10px",
    boxSizing: "border-box",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
}));

const Details = ({ movieId }: DetailsProps) => {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState<MovieDetails | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDetailsById(movieId);
        setMovieDetails(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <Paper>
      {!loading ? (
        <Grid
          container
          className={classes.container}
          component={Paper}
          style={{
            marginTop: 50,
            backgroundImage: `url(${movieDetails?.backdrop_path})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          spacing={2}
        >
          <Grid item lg={3} md={4} sm={4} xs={12}>
            <Image path={movieDetails?.poster_path} large />
          </Grid>
          <Grid item lg={9} md={8} sm={8} xs={12} className={classes.details}>
            <div>
              <Typography variant="h4" style={{ overflow: "overlay" }}>
                {movieDetails?.original_title}
              </Typography>
              <br />
              <div style={{ display: "flex" }}>
                <Genres genres={movieDetails?.genres} />
              </div>
              <div style={{ display: "flex" }}>
                <Rating rating={movieDetails?.vote_average} />
              </div>

              <Typography variant="body2">
                Language :&nbsp;
                {movieDetails?.spoken_languages.map(
                  (item: { name: string }) => (
                    <code>{item.name}</code>
                  )
                )}
              </Typography>
              <div style={{ boxSizing: "border-box", padding: "5px" }}>
                {/* <Typography variant="subtitle2">Overview:</Typography> */}
                <Typography variant="subtitle1">
                  {movieDetails?.overview}
                </Typography>
              </div>
              <Typography variant="body2">
                Status: {movieDetails?.status}
              </Typography>
            </div>
            <Typography variant="body2">
              {dayjs(movieDetails?.release_date).format("MMM DD, YYYY")}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <Skeleton />
      )}
    </Paper>
  );
};

export default Details;
