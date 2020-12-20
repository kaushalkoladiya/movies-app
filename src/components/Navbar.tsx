import React from "react";

import makeStyle from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyle((theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "#fff",
  },
  iconButton: {
    padding: 10,
  },
  navbar: {
    justifyContent: "space-between",
  },
  list: {
    width: "200px",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar className={classes.navbar}>
        <Typography variant="h4">Movies 4 You</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
