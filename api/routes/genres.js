import express from "express";
import Album from "../models/Genre.js";

const router = express.Router();

//GET
router.get("/find/:id", async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    res.status(200).json(album);
  } catch (err) {
    res.status(500).send(err);
  }
});
//GETALL
router.get("/", async (req, res) => {
  try {
    const albums = await Album.find(); //an also we can get all hotels by using limitations here
    res.status(200).json(albums);
  } catch (err) {
    res.status(500).send(err);
  }
});

//DELETE
router.delete("/", async (req, res) => {
  try {
    await Album.findById(req.params.id); //not going to return anything because it is deleting
    res.status(200).json("Album has been deleted");
  } catch (err) {
    res.status(500).send(err);
  }
});
export default router;
