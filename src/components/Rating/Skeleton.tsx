import React from "react";
// Icons
import StarIcon from "@material-ui/icons/Star";

export default () => (
  <div style={{ display: "flex" }}>
    {Array(5)
      .fill(0)
      .map(() => (
        <StarIcon htmlColor="#565656" />
      ))}
  </div>
);
