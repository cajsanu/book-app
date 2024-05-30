const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.addColumn("users", "age", {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true,
        min: 0
      }
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn("users", "age");
  },
};