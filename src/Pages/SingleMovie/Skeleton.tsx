import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Grid, Paper } from "@material-ui/core";
import { ImageSkeleton } from "../../components/Image";
import { GenresSkeleton } from "../../components/Genres";
import { RatingSkeleton } from "../../components/Rating";

export default () => (
  <Grid
    container
    component={Paper}
    style={{ padding: 10, boxSizing: "border-box" }}
    spacing={2}
  >
    <Grid item lg={3} md={4} sm={4} xs={12}>
      <ImageSkeleton />
    </Grid>
    <Grid item lg={9} md={8} sm={8} xs={12}>
      <div>
        <Skeleton variant="text" width={300} height={60} />
        <GenresSkeleton />
        <RatingSkeleton />
        <Skeleton variant="text" width={200} />
        <Skeleton variant="text" height={100} />
        <Skeleton variant="text" width={200} />
      </div>
      <Skeleton variant="text" width={150} />
    </Grid>
  </Grid>
);
