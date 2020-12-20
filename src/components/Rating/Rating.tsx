import React from "react";

// MUI
import { makeStyles } from "@material-ui/core/styles";
// Icons
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  ratingNumber: { marginRight: 4, fontSize: 14 },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
  },
}));

interface RatingProps {
  rating: number | undefined;
}

const Rating = ({ rating = 0 }: RatingProps) => {
  const classes = useStyles();
  return (
    <div className={classes.rating}>
      {Array(Math.ceil(rating / 2))
        .fill("star")
        .map((type, index) => {
          return <StarIcon htmlColor="tomato" key={index} fontSize="small" />;
        })}
    </div>
  );
};

export default Rating;
