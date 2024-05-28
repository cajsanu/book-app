const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.changeColumn("users", "username", {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn("users", "username");
  },
};
