const express = require("express");
const app = express();
const requestRouter = require( "./controllers/ping")

const { PORT } = require("./utils/config");
const { connectToDatabase } = require("./utils/db");

app.use(express.json());

app.use("/api/ping", requestRouter)

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();