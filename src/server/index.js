const express = require("express");
const app = express();
const cors = require('cors')
const booksRouter = require("./controllers/books")
const usersRouter = require("./controllers/users")
const loginRouter = require("./controllers/login")

const { PORT } = require("./utils/config");
const { connectToDatabase } = require("./utils/db");

app.use(cors())
app.use(express.json());

app.use("/api/books/", booksRouter)
app.use("/api/users/", usersRouter)
app.use("/api/login/", loginRouter)
app.use(express.static('dist'))

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();