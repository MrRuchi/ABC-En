import mongoose from "mongoose";

const GenreSchema = new mongoose.Schema({
  Genre: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Genre", GenreSchema);
