import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Link,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  root1: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("usertoken");
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/" color="inherit">
              ABC Entertainment
            </Link>
          </Typography>
          {localStorage.usertoken ? (
            <>
              <Link href="/CreateComponent">Albums</Link>
            </>
          ) : (
            <Typography className={classes.root1}>
              <Link href="/login" color="inherit">
                Login
              </Link>

              <Link href="/register" color="inherit">
                Register
              </Link>
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
