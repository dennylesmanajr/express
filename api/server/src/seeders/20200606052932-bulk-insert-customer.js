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

   return queryInterface.bulkInsert('Customers', [
      { customer_name: 'Customer 1', customer_address: 'jalan jalan', customer_phone: '08123455667', createdAt: new Date(), updatedAt: new Date() },
      { customer_name: 'Customer 2', customer_address: 'jalan jalan', customer_phone: '08123455667', createdAt: new Date(), updatedAt: new Date() },
      { customer_name: 'Customer 3', customer_address: 'jalan jalan', customer_phone: '08123455667', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Customers', null, {});
  }
};
