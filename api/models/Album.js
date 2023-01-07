import mongoose, { Schema } from "mongoose";

const AlbumSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Artist: {
    type: [String],
    required: true,
  },
  Genre: {
    type: Schema.Types.ObjectId,
    ref: "Genre",
    required: true,
  },
  RelaseDate: {
    type: Date,
  },
});
export default mongoose.model("Album", AlbumSchema);
