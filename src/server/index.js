const express = require("express");
const app = express();
const cors = require('cors')
const requestRouter = require( "./controllers/ping")
const booksRouter = require("./controllers/books")

const { PORT } = require("./utils/config");
const { connectToDatabase } = require("./utils/db");

app.use(cors())
app.use(express.json());

app.use("/api/ping", requestRouter)
app.use("/api/books", requestRouter)
app.use(express.static('dist'))

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();