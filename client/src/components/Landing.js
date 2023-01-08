import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
const Landing = () => {
  return (
    <>
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
        style={{ fontFamily: "cursive", color: "Gray" }}
      >
        Checkout your Albums
      </Typography>
      <Grid
        container
        xs={12}
        style={{ justifyContent: "center", marginBlockStart: "40px" }}
      >
        <Button variant="contained" color="Primary">
          Read More...
        </Button>
      </Grid>
    </>
  );
};

export default Landing;
