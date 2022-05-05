import express from "express";
import movies from "./routes/index.js";

const app = express();

app.use(express.json());

app.use("/api/v1/movies", movies);
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

export default app;
