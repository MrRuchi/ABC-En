import express from "express";
import Album from "../models/Album.js";
import Genre from "../models/Genre.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  const newAlbum = new Album(req.body);
  try {
    const savedAlbum = await newAlbum.save();
    res.status(200).json(savedAlbum);
  } catch (err) {
    res.status(500).send(err);
  }
});
//UPDATE
router.put("/update/:id", async (req, res) => {
  try {
    const updatedAlbum = await Album.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedAlbum);
  } catch (err) {
    res.status(500).send(err);
  }
});
//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Album.findByIdAndDelete(req.params.id); //not going to return anything because it is deleting
    res.status(200).json("Album has been deleted");
  } catch (err) {
    res.status(500).send(err);
  }
});
//GET
router.get("/edit?title=", async (req, res) => {
  try {
    const album = await Album.find(req.body.title);
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
export default router;
