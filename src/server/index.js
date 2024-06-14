const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const booksRouter = require("./controllers/books");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const logoutRouter = require("./controllers/logout");
const readingListRouter = require("./controllers/readingList");
const readListRouter = require("./controllers/readList");

const { PORT } = require("./utils/config");
const { connectToDatabase } = require("./utils/db");

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "..", "client", "dist")));

app.use("/api/books/", booksRouter);
app.use("/api/users/", usersRouter);
app.use("/api/login/", loginRouter);
app.use("/api/logout", logoutRouter);
app.use("/api/readingList", readingListRouter);
app.use("/api/readList", readListRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
