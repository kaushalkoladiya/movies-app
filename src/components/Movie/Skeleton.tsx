import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { GenresSkeleton } from "../Genres";
import { RatingSkeleton } from "../Rating";
import { ImageSkeleton } from "../Image";
import { Grid } from "@material-ui/core";

export default () => (
  <Grid
    item
    xl={1}
    lg={3}
    sm={6}
    xs={12}
    style={{
      height: 500,
      alignItems: "center",
      margin: "50px 0px",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <ImageSkeleton />
    <Skeleton variant="rect" width={200} height={20} style={{ marginTop: 5 }} />
    <GenresSkeleton />
    <RatingSkeleton />
    <Skeleton variant="rect" width={100} height={15} style={{ marginTop: 5 }} />
  </Grid>
);
