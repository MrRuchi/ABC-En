import { register } from "./UserFunction";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

import React, { useState } from "react";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      Username: username,
      Email: email,
      Password: password,
      Date: date,
    };

    register(obj).then((res) => {
      if (res) {
        this.props.history.push(`/login`);
      }
    });
    setUsername("");
    setEmail("");
    setPassword("");
    setDate("");
  };
  return (
    <div>
      <Grid style={{ marginBlockStart: 100 }}>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Register Form
            </Typography>

            <form onSubmit={onSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    label="Username"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    placeholder="Passwoard"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="text"
                    placeholder="Date"
                    label="Date"
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
                    Login
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

export default Register;
