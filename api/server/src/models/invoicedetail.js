'use strict';
module.exports = (sequelize, DataTypes) => {
  const InvoiceDetail = sequelize.define('InvoiceDetail', {
    qty: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL(10,2),
  }, {});
  InvoiceDetail.associate = function(models) {
    // associations can be defined here
    InvoiceDetail.belongsTo(models.Item, {
      foreignKey: 'item_ref_id',
      onDelete: "CASCADE",
      allowNull: false,
    });

    InvoiceDetail.belongsTo(models.InvoiceHeader, {
      foreignKey: 'invoice_id',
      onDelete: "CASCADE",
      allowNull: false,
    });
  };
  return InvoiceDetail;
};