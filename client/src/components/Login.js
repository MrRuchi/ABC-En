import { login } from "./UserFunction";
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
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      Email: email,
      Password: password,
    };

    login(obj).then((res) => {
      if (res) {
        this.props.history.push(`/CreateComponent`);
      }
    });

    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <Grid style={{ marginBlockStart: 100 }}>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Login Form
            </Typography>

            <form onSubmit={onSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

export default Login;
