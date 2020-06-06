'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('UserRole', {
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {});
  UserRole.associate = function(models) {
    // associations can be defined here
  };
  return UserRole;
};