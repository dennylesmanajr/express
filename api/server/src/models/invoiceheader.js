'use strict';
module.exports = (sequelize, DataTypes) => {
  const InvoiceHeader = sequelize.define('InvoiceHeader', {
    invoice_number: DataTypes.STRING,
    invoice_date: DataTypes.DATEONLY,
    total_amount: DataTypes.DECIMAL(10,2),
  }, {});
  InvoiceHeader.associate = function(models) {
    // associations can be defined here
  };
  return InvoiceHeader;
};