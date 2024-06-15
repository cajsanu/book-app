const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "book", key: "id" },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        max: 5,
        min: 0,
      },
    },
    comment: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    tableName: "read_books_list",
    underscored: true,
    timestamps: false,
    modelName: "read_books_list",
    // uniquness index on userId and bookId
    indexes: [
      {
        unique: true,
        fields: ["userId", "bookId"],
      },
    ],
  }
);

module.exports = Review;
