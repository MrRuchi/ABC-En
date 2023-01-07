import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import UsersRoute from "./routes/users.js";
import AlbumsRoute from "./routes/albums.js";
import GenresRoute from "./routes/genres.js";
const app = express();

dotenv.config();
app.use(bodyparser.json());
app.use(cors());
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);

let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

//connect to mongoDB
const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (err) {
    throw err;
  }
};

app.use("/api/users", UsersRoute);
app.use("/api/albums", AlbumsRoute);
app.use("/api/genres", GenresRoute);

app.listen(8800, () => {
  connect();
  console.log("Connected to backend!!!");
});
