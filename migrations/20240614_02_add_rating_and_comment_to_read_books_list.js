const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.addColumn("read_books_list", "comment", {
      type: DataTypes.TEXT,
    });

    await queryInterface.addColumn("read_books_list", "rating", {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        max: 5,
        min: 0,
      },
    });

    await queryInterface.removeColumn("books", "comment");

    await queryInterface.removeColumn("books", "rating");
  },
  down: async ({ context: queryInterface }) => {},
};
