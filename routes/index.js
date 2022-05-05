import express from "express";
import MovieController from "../controllers/MovieController.js";

const router = express.Router();

router.get("/", MovieController.apiGetMovies);

export default router;
