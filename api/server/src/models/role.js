'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    role_code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};