import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import axios from "axios";

const EditPost = () => {
  const [dataTitle, setDataTitle] = [
    {
      Id: "",
      Title: "",
      Artist: "",
      Genre: "",
      Date: "",
    },
  ];
  const [title, setTitle] = useState("");
  const [title1, setTitle1] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");

  const onSubmit2 = (ex) => {
    ex.preventDefault();
    const obj = {
      Title: title1,
    };

    axios
      .get(`/albums/edit/${title1}`, obj)
      .then((res) => {
        console.log(res.data);
        setDataTitle(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setTitle1("");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      Title: title,
      Artist: artist,
      Genre: genre,
      Date: date,
    };

    axios
      .post(`/albums/update/${dataTitle.id}`, obj)
      .then((res) => console.log(res.data));

    setTitle("");
    setArtist("");
    setDate("");
  };
  return (
    <div>
      <Typography gutterBottom variant="h3" align="center">
        Edit Album
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Album Editing Form
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              First you have to add the Album Title that you want to edit.
            </Typography>
            <form onSubmit={onSubmit2}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    value={title1}
                    onChange={(e) => setTitle1(e.target.value)}
                    placeholder="Enter title"
                    label="Enter title"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Edit
                </Button>
              </Grid>
            </form>
            <form onSubmit={onSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={dataTitle.Title}
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
                    placeholder={dataTitle.Artist}
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
                    placeholder={dataTitle.Genre}
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
                    placeholder={dataTitle.Date}
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
};

export default EditPost;
