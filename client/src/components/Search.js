import {
  Container,
  Typography,
  makeStyles,
  Paper,
  IconButton,
  InputBase,
  Divider,
  Button,
  Grid,
  withStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import React, { useState } from "react";
import Table from "./Table";
import SearchIcon from "@material-ui/icons/Search";
//import { useNavigate } from "react-router-dom";
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root1: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  root2: {
    "& > *": {
      margin: theme.spacing(1),
    },
    justifyContent: "center",
    marginBlockStart: 50,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const Search = () => {
  //const navigate = useNavigate();
  //const handleclick = () => {
  //  navigate("/createcomponent");
  //};
  const classes = useStyles();
  const [query, setQuery] = useState("");

  return (
    <>
      <Container
        style={{
          backgroundColor: "#C780FA",
          paddingBlockStart: "50px",
          paddingBlockEnd: "100px",
        }}
      >
        <Typography
          align="center"
          variant="h3"
          style={{
            marginBlockStart: "100px",
            marginBlockEnd: "10px",
            color: "black",
            fontFamily: "inherit",
          }}
        >
          Music Album Search App
        </Typography>

        <Typography
          align="center"
          variant="h6"
          style={{ fontFamily: "cursive", color: "white" }}
        >
          Searching By Title , Genre and Artist
        </Typography>

        {/*Search */}
        <Grid container alignItems="center" justify="center">
          <Paper component="form" className={classes.root1}>
            <InputBase
              value={query}
              onChange={(e) => setQuery(e)}
              className={classes.input}
              placeholder="Search..."
              inputProps={{ "aria-label": "search...." }}
            />

            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>

            <Divider className={classes.divider} orientation="vertical" />
          </Paper>
        </Grid>

        <Table query={query} />
      </Container>
    </>
  );
};

export default Search;
