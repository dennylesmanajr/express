'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    role_code: DataTypes.STRING,
    role_name: DataTypes.STRING
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
    Role.hasMany(models.Page, {
      foreignKey: 'page_id',
    });
  };
  return Role;
};