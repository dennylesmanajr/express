'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};