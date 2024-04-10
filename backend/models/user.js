// models/user.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); // Adjust the path
const { v4: uuidv4 } = require("uuid");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Name cannot be empty.", // Custom validation message
      },
      notNull: {
        msg: "Name cannot be null.", // Custom validation message
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      name: "emailUniqueConstraint",
      msg: "Email already registered.", // Custom validation message
    },
    validate: {
      isEmail: {
        msg: "Invalid email format. Please provide a valid email address.", // Custom validation message
      },
      notNull: {
        msg: "Email cannot be null.", // Custom validation message
      },
    },
  },
});

module.exports = User;
