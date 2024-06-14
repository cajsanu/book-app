const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn("books", "user_id");
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.addColumn("books", "user_id");
  },
};