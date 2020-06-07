'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   
   return queryInterface.bulkInsert('Items', [
    { item_id: 'ITEM001', item_name: 'Linggis', unit_price: 50000,  createdAt: new Date(), updatedAt: new Date() },
    { item_id: 'ITEM002', item_name: 'Sendal',  unit_price: 100000, createdAt: new Date(), updatedAt: new Date() },
    { item_id: 'ITEM003', item_name: 'Sepatu',  unit_price: 350000, createdAt: new Date(), updatedAt: new Date() },
    { item_id: 'ITEM004', item_name: 'Kaos Kaki', unit_price: 5000,  createdAt: new Date(), updatedAt: new Date() },
    { item_id: 'ITEM005', item_name: 'Laptop', unit_price: 6000000,  createdAt: new Date(), updatedAt: new Date() },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Items', null, {});
  }
};
