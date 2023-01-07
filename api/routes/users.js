import express from "express";

const router = express.Router();

import cors from "cors";

import jwt from "jsonwebtoken";

import bcrypt from "bcryptjs";

import User from "../models/User.js";

router.use(cors());

router.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    created: today,
  };

  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then((user) => {
              res.json({ status: user.email + "registered" });
            })
            .catch((err) => {
              res.send("error" + err);
            });
        });
      } else {
        red.json({ error: "user already registered" });
      }
    })
    .catch((err) => {
      res.send("error" + err);
    });
});

router.post("/login", (req, res) => {
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            username: user.username,
            email: user.email,
          }; //end of payload

          let token = jwt.sign(payload, prcess.env.SECRET_KEY, {
            expiresIn: 1440,
          }); //end of token
          res.send(token);
        } else {
          res.json({ error: "user does not exist in the system" });
          //end of bcrypt if statement
        }
      } else {
        res.json({ error: "user does not exist in the system" });
        //end of the user if statement
      }
    }) //end of then
    .catch((err) => {
      res.send("error" + err);
    }); // end of catch
}); // end of login

router.get("/profile", (req, res) => {
  let decoded = jws.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  User.findOne({
    _id: decoded._id,
  })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.json("User does not exist");
      }
    })
    .catch((err) => {
      res.send("Error" + err);
    });
}); //end of get profile
module.exports = router;
