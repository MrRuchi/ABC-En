import React, { useEffect, useState } from "react";
import {
  Paper,
  Grid,
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Link,
} from "@material-ui/core";
import axios from "axios";

//useStyle create
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  root1: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

//Start of the table  component
const Table = ({ query }) => {
  const [album, setAlbums] = useState([
    {
      title: "Arcade",
      artist: "Duncan",
      genre: "pop",
      date: "2023/01/16",
    },
  ]);

  //delete
  const handleDelete = async (e) => {
    await axios.delete(`/albums/${e}`);
  };

  //seach filter
  let keys = [];
  const search = (data) => {
    return data.filter((item) => {
      return keys.some((key) => item[key].toLowerCase().includes(query));
    });
  };

  //useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/albums/`);
        if (!query) {
          setAlbums(...album, res.data);
        } else {
          keys = [res.data.title, res.data.artist, res.data.genre];
          setAlbums(search(res.data));
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  //useStyles
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        style={{ marginBlock: "30px", marginBlockStart: "100px" }}
        container
        justifyContent="center"
        spacing={3}
      >
        {album.map((alb) => (
          <Grid item xs={12}>
            <Paper item key={alb.id} className={classes.paper}>
              <Card className={classes.root1}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {alb.title}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {alb.artist}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {alb.genre}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {alb.date}
                    <br />
                    {'"Enjoy with this music!!!"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography>
                    <Link href={`/edit/${alb._id}`}>Edit</Link>
                  </Typography>

                  <Typography>
                    <Link onClick={(alb) => handleDelete(alb._id)} href="#">
                      Delete
                    </Link>
                  </Typography>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Table;
