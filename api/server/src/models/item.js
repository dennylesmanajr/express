'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    item_id: DataTypes.STRING,
    item_name: DataTypes.STRING,
    unit_price: DataTypes.DECIMAL(10,2),
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};