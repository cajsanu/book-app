const Book = require("./Book");
const User = require("./User");
const UserReadingList = require("./ReadingList");
const ActiveToken = require("./ActiveToken");

User.hasMany(Book);
Book.belongsTo(User);

User.belongsToMany(Book, { through: UserReadingList, as: "marked_books" });
Book.belongsToMany(User, { through: UserReadingList, as: "users_marked" });

module.exports = {
  Book,
  User,
  UserReadingList,
  ActiveToken,
};
