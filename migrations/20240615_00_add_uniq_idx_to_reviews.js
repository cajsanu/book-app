const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.addIndex("read_books_list", ["user_id", "book_id"], {
      unique: true,
    });
  },
  down: async ({ context: queryInterface }) => {},
};
