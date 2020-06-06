'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return Promise.all ([
      queryInterface.addColumn(
        "InvoiceDetails", // name of Source model
        "invoice_id", // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: "InvoiceHeaders", // name of Target model
            key: "id", // key in Target model that we're referencing
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        }
      ),
      queryInterface.addColumn(
        "InvoiceDetails", // name of Source model
        "item_ref_id", // name of the key we're adding
        {
          type: Sequelize.INTEGER,
          references: {
            model: "Items", // name of Target model
            key: "id", // key in Target model that we're referencing
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        }
      ),
    ])
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return Promise.all ([
      queryInterface.removeColumn('InvoiceDetails', 'item_ref_id'),
      queryInterface.removeColumn('InvoiceDetails', 'invoice_id')
    ]);
  }
};
