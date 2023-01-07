import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

function Createcomponent() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      Title: title,
      Artist: artist,
      Genre: genre,
      Date: date,
    };

    axios.post("/albums/", obj).then((res) => console.log(res.data));

    setTitle("");
    setArtist("");
    setDate("");
  };
  return (
    <div>
      <Typography gutterBottom variant="h3" align="center">
        Create Album
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Album Creation Form
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill up the form
            </Typography>
            <form onSubmit={onSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                    label="Enter title"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    type="text"
                    placeholder="Artist"
                    label="Artist"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    type="text"
                    placeholder="Genre"
                    label="Genre"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    label="Date"
                    multiline
                    placeholder="Date"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Createcomponent;
