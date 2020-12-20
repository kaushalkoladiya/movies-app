import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const Genre = () => (
  <Skeleton
    variant="rect"
    width={80}
    height={20}
    style={{ borderRadius: 15, margin: 5 }}
  />
);

export default () => (
  <div style={{ display: "flex" }}>
    {Array(3)
      .fill(0)
      .map(() => (
        <Genre />
      ))}
  </div>
);
