import mongoose from "mongoose";
import app from "./server.js";
import dotevn from "dotenv";

async function main() {
  dotevn.config();

  const port = 3000;
  const CONNECTION_URI = `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@cluster0.h9ukr.mongodb.net/moviedb?retryWrites=true&w=majority`;

  mongoose.connect(CONNECTION_URI);

  mongoose.connection.on("connected", () => {
    console.log("Mongo has connected successfully");
  });

  mongoose.connection.on("error", () => {
    console.log("Mongo has connected error");
  });

  app.listen(port, () => {
    console.log("Server is running on port", port);
  });
}

main().catch(console.error);
