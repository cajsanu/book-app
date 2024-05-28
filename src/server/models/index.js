const Book = require("./Book");
const User = require("./User");
const ActiveToken = require("./ActiveToken")

User.hasMany(Book);
Book.belongsTo(User);

module.exports = {
  Book,
  User,
  ActiveToken
};