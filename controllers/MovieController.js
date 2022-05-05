import fetch from "node-fetch";
import Movie from "../models/movie.js";

export default class MovieController {
  static async apiGetMovies(req, res, next) {
    try {
      let page = 5;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=ceb12b82f23a3c75ad2435880e6ab4ed&language=en-US&page=${page}`
      );
      const data = await response.json();
      const movieList = data.results;
      for (let movie of movieList) {
        await Movie.create(movie);
      }
      res.json({ movieList });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
