const Book = require("./Book");
const User = require("./User");

User.hasMany(Book);
Book.belongsTo(User);

module.exports = {
  Book,
  User,
};