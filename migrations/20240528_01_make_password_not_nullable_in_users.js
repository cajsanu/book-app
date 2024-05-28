const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.changeColumn("users", "password", {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [10,100],
      }
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.removeColumn("users", "password");
  },
};