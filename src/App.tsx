import React from "react";
import { Navbar } from "./components";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Movies, SingleMovie } from "./Pages";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    type: "dark",
  },
  typography: {
    allVariants: {
      color: "#fff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <Container className={classes.content}>
          <div className={classes.toolbar} />

          <Switch>
            <Route path="/nowplaying" exact component={Movies} />
            {/* <Route path="/popular" exact component={Popular} />
          <Route path="/toprated" exact component={Toprated} />
          <Route path="/upcoming" exact component={Upcoming} /> */}
            <Route path="/movie/:movieId" exact component={SingleMovie} />
            <Redirect to="/nowplaying" />
          </Switch>
        </Container>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;
