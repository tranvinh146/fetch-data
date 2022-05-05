import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  poster_path: String,
  adult: Boolean,
  overview: String,
  release_date: String,
  genre_ids: [Number],
  id: Number,
  original_title: String,
  original_language: String,
  title: String,
  backdrop_path: String,
  popularity: Number,
  vote_count: Number,
  video: Boolean,
  vote_average: Number,
});

export default mongoose.model("Movie", movieSchema);
