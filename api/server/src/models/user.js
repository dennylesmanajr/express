"use strict";

import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      full_name: {
        type: DataTypes.STRING,
      },
    },
    {
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
      instanceMethods: {
        validPassword: function(password) {
          return bcrypt.compareSync(password, this.password);
        }
      }    
    }
  );
  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.Role, {
      through: models.UserRole,
      as: 'roles',
      foreignKey: 'role_id'
    });
  };

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  }
  return User;
};
