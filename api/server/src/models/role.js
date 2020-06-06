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
    Role.belongsToMany(models.Users, {
      through: models.UserRole,
      as: 'users',
      foreignKey: 'role_id'
    });
  };
  return Role;
};