import React, { Fragment } from "react";

import Details from "./Details";
// import Images from "./Images";
// import Credits from "./Credits";
// import Recommendations from "./Recommendations";

interface SingleMovieProps {
  match: {
    params: {
      movieId: number;
    };
  };
}

const SingleMovie = ({
  match: {
    params: { movieId },
  },
}: SingleMovieProps) => {
  return (
    <Fragment>
      <Details movieId={movieId} />
      {/* <Images movieId={movieId} />
      <Credits movieId={movieId} />
      <Recommendations movieId={movieId} /> */}
    </Fragment>
  );
};

export default SingleMovie;
