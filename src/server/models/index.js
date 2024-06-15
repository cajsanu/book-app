const Book = require("./Book");
const User = require("./User");
const UserReadingList = require("./ReadingList");
const Review = require("./Review");
const ActiveToken = require("./ActiveToken");

User.belongsToMany(Book, { through: Review, as: "read_books" });
Book.belongsToMany(User, { through: Review, as: "read_by_user" });

Review.belongsTo(Book);
Book.hasMany(Review, { as: "reviewed_books" });

Review.belongsTo(User);
User.hasMany(Review);

User.belongsToMany(Book, { through: UserReadingList, as: "marked_books" });
Book.belongsToMany(User, { through: UserReadingList, as: "users_marked" });

module.exports = {
  Book,
  User,
  UserReadingList,
  Review,
  ActiveToken,
};
