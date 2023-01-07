import React from "react";
import { Typography } from "@material-ui/core";
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
        style={{ fontFamily: "cursive", color: "white" }}
      >
        Checkout your Albums
      </Typography>
    </>
  );
};

export default Landing;
