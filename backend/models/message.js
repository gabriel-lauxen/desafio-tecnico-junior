"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {}
  Message.init(
    {
      content: DataTypes.STRING,
      isUser: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
