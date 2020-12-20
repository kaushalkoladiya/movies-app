import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

interface GenresProps {
  genres: Array<string> | undefined;
}

const useStyles = makeStyles((theme) => ({
  genres: {
    display: "flex",
    justifyContent: "center",
  },
  genre: {
    margin: "0 4px 4px 0",
    padding: "1px 7px",
    backgroundColor: "#ccc",
    borderWidth: "1px",
    borderRadius: "14px",
  },
  genreText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#000",
  },
}));

export default function Genres({ genres }: GenresProps) {
  const classes = useStyles();
  return (
    <div className={classes.genres}>
      {genres?.map((genre: string, index: number) => {
        return (
          <div key={index} className={classes.genre}>
            <Typography className={classes.genreText}>{genre}</Typography>
          </div>
        );
      })}
    </div>
  );
}
