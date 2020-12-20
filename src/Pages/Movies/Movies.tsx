import React, { Fragment, useEffect, useState } from "react";

import { getMovies } from "../../API";
import Grid from "@material-ui/core/Grid";
import { Pagination, Movie as MovieComponent } from "../../components";
import { Movie } from "../../types";
import { MovieSkeleton } from "../../components/Movie";
// import Thumbnail from "../../components/Movie/Thumbnail";
// import Pagination from "../../components/Pagination/Pagination";
// import ErrorHandler from "../ErrorHandler/ErrorHandler";

interface MoviesProps {}

const Movies = (props: MoviesProps) => {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      setLoading(true);

      const data = await getMovies(page);

      setMovies(data.movies);
      setPage(data.page);
      setTotalPages(data.total_pages);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = async (
    event: React.ChangeEvent<unknown>,
    pageNumber: number
  ) => {
    setPage(pageNumber);
  };

  return (
    <Grid container spacing={2}>
      {loading ? (
        <Fragment>
          {Array(8)
            .fill(0)
            .map(() => (
              <MovieSkeleton />
            ))}
        </Fragment>
      ) : (
        <Fragment>
          {movies.map((movie, key) => (
            <MovieComponent movie={movie} key={key} />
          ))}
          <Grid item sm={12} xs={12} style={{ margin: "20px auto 40px auto" }}>
            <Pagination
              totalPages={totalPages}
              page={page}
              onChange={handleOnChange}
            />
          </Grid>
        </Fragment>
      )}
    </Grid>
  );
};

export default Movies;
