'use strict';
module.exports = (sequelize, DataTypes) => {
  const InvoiceDetail = sequelize.define('InvoiceDetail', {
    qty: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL(10,2),
  }, {});
  InvoiceDetail.associate = function(models) {
    // associations can be defined here
  };
  return InvoiceDetail;
};